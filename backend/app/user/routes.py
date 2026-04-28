from fastapi import Depends, FastAPI, Request, Header, HTTPException
from fastapi_csrf_protect import CsrfProtect
from pydantic import BaseModel

from .schemas import FeedbackCreate
from ..base_schemas import ServerBoolAnswer
from ..celery import celery_send_email
from ..config_data import SMTP_USER, logger, IS_TESTING


async def get_csrf_protect_dependency(request: Request):
    """Возвращает CSRF защиту только если не тестирование"""
    if IS_TESTING:
        return None  # Отключаем CSRF для тестов

    csrf_protect = CsrfProtect()
    await csrf_protect.validate_csrf(request)
    return csrf_protect


def register_user_routes(app: FastAPI):
    @app.post(
        "/api/user/send_feedback",
        status_code=200,
        tags=["user"],
        summary="Отправка письма на почту автора",
        response_model=ServerBoolAnswer,
    )
    async def send_feedback(
            feedback: FeedbackCreate,
            request: Request,
            csrf_protect: CsrfProtect = Depends(get_csrf_protect_dependency),
    ) -> ServerBoolAnswer:
        """Отправка письма на почту автора"""

        logger.debug("Отправка письма на почту автора")

        user_email = feedback.email
        user_content = feedback.content

        if user_email:
            author_content = f"{user_content}\n\nUser email: {user_email}"

            celery_send_email.delay(
                receiver=user_email,
                subject="Благодарность пользователю",
                content=feedback.content,
                file_name_message="gratitude_for_user.html",
            )
        else:
            author_content = f"{user_content}\n\nUser email не указан"

        celery_send_email.delay(
            receiver=SMTP_USER,
            subject="Новый отзыв от пользователя",
            content=author_content,
            file_name_message="message_for_me.html",
        )

        return ServerBoolAnswer()
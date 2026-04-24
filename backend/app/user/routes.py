from fastapi import Depends, FastAPI, Request, HTTPException
from fastapi_csrf_protect import CsrfProtect
from typing import Optional

from ..config_data import logger, IS_PROD
from .schemas import FeedbackCreate
from ..base_schemas import ServerBoolAnswer
from ..celery import celery_send_email
from ..config_data import SMTP_USER, IS_PROD


async def get_csrf_prod() -> CsrfProtect:
    """CSRF защита для продакшена"""
    return CsrfProtect()


async def get_csrf_dev() -> None:
    """Заглушка для разработки"""
    return None


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
        csrf_protect: CsrfProtect = Depends(get_csrf_prod if IS_PROD else get_csrf_dev),
    ) -> ServerBoolAnswer:
        """Отправка письма на почту автора"""

        if csrf_protect:
            await csrf_protect.validate_csrf(request)
        else:
            logger.debug("CSRF проверка пропущена (режим разработки)")

        logger.debug("Отправка письма на почту автора")

        user_email = feedback.email
        user_content = feedback.content

        print(user_email)

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

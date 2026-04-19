from fastapi import Depends, Header, FastAPI, Request
from sqlalchemy.ext.asyncio import AsyncSession

from ..config_data import logger
from ..database import get_session
from .schemas import FeedbackCreate
from ..base_schemas import ServerBoolAnswer
from ..celery import celery_send_email

from ..config_data import SMTP_USER


def register_user_routes(app: FastAPI):
    @app.post(
        '/api/user/send_feedback',
        status_code=200,
        tags=['user'],
        summary='Отправка письма на почту автора',
        response_model=ServerBoolAnswer,
    )
    async def send_feedback(feedback: FeedbackCreate) -> ServerBoolAnswer:
        """Отправка письма на почту автора"""
        logger.debug("Отправка письма на почту автора")

        user_email = feedback.email

        print(user_email)

        task = celery_send_email.delay(
            receiver=SMTP_USER,
            subject="Новый отзыв от пользователя",
            content=feedback.content + user_email,
            file_name_message="message_for_me.html"
        )

        if user_email is not None:
            celery_send_email.delay(
                receiver=user_email,
                subject="Благодарность пользователю",
                content=feedback.content,
                file_name_message="gratitude_for_user.html"
            )

        return ServerBoolAnswer()

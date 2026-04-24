from celery import Celery

from ..utils.email_sendler import send_email
from ..config_data import IS_PROD, REDIS_BROKER, REDIS_BACKEND

if not IS_PROD:
    celery = Celery(
        "celery_app",
        broker="redis://localhost:6379/0",
        backend="redis://localhost:6379/0",
    )
else:
    celery = Celery(
        "celery_app",
        broker=REDIS_BROKER,
        backend=REDIS_BACKEND,
    )


@celery.task
def celery_send_email(
    receiver: str, subject: str, content: str, file_name_message: str
) -> None:
    send_email(receiver, subject, content, file_name_message)

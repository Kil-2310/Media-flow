from celery import Celery

from ..utils.email_sendler import send_email
from ..config_data import IS_PROD


if IS_PROD == "False":
    # Режим разработки
    celery = Celery(
        'celery_app',
        broker='redis://localhost:6379/0',
        backend='redis://localhost:6379/0',
    )
else:
    # Режим продакшена
    celery = Celery(
        'celery_app',
        broker='redis://redis:6379/0',  # Очередь задач (БД №0)
        backend='redis://redis:6379/0',  # Хранилище результатов (БД №0)
    )

@celery.task
def celery_send_email(receiver: str, subject: str, content: str, file_name_message: str) -> None:
    send_email(receiver, subject, content, file_name_message)
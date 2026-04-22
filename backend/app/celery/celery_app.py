from celery import Celery

from ..utils.email_sendler import send_email
from ..config_data import IS_PROD, REDIS_BROKER, REDIS_BACKEND


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
        broker=REDIS_BROKER,  # Очередь задач (БД №0)
        backend=REDIS_BACKEND,  # Хранилище результатов (БД №0)
    )

@celery.task
def celery_send_email(receiver: str, subject: str, content: str, file_name_message: str) -> None:
    send_email(receiver, subject, content, file_name_message)
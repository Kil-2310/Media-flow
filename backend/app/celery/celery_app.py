from celery import Celery

from ..utils.email_sendler import send_email
from ..config_data import REDIS_BROKER, REDIS_BACKEND, IS_TESTING

if IS_TESTING:
    broker_url = "redis://localhost:6379/0"
    backend_url = "redis://localhost:6379/1"
else:
    broker_url = REDIS_BROKER
    backend_url = REDIS_BACKEND

celery = Celery(
    "celery_app",
    broker=broker_url,
    backend=backend_url,
)

@celery.task
def celery_send_email(
    receiver: str, subject: str, content: str, file_name_message: str
) -> None:
    send_email(receiver, subject, content, file_name_message)
from celery import Celery
import redis

from ..utils.email_sendler import send_email

redis_client = redis.Redis(host='localhost', port=6379, db=1)

celery = Celery(
    'celery_app',
    broker='redis://localhost:6379/0',
    backend='redis://localhost:6379/0',
)

@celery.task
def celery_send_email(receiver: str, subject: str, content: str, file_name_message: str) -> None:
    send_email(receiver, subject, content, file_name_message)
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from pathlib import Path

from ..config_data import SMTP_HOST, SMTP_PORT, SMTP_PASSWORD, SMTP_USER


def send_email(receiver: str, subject: str, content: str, file_name_message: str) -> None:
    """Отправляет HTML-письмо через SMTP с использованием шаблона.

    Args:
        receiver: Email адрес получателя.
        subject: Тема письма.
        content: Данные для вставки в HTML-шаблон (подставляется вместо {}).
        file_name_message: Имя HTML-файла в директории templates.
    """
    with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
        server.starttls()
        server.login(SMTP_USER, SMTP_PASSWORD)

        email = MIMEMultipart()
        email['Subject'] = subject
        email['From'] = SMTP_USER
        email['To'] = receiver

        path_for_template = Path(__file__).parent.parent / 'templates' / file_name_message

        with open(path_for_template, mode="r", encoding="utf-8") as f:
            html_message = f.read()

            if file_name_message == 'message_for_me.html':
                message = html_message.format(content)
            else:
                message = html_message

            email.attach(MIMEText(message, 'html', 'utf-8'))

        server.sendmail(SMTP_USER, receiver, email.as_string())
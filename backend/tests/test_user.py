from unittest.mock import patch

from backend.app.config_data import SMTP_USER


async def test_send_feedback_success(client):
    """Тест успешной отправки feedback с почтой от пользователя"""

    feedback_data = {
        "email": "user@example.com",
        "content": "Test feedback message"
    }

    with patch('backend.app.celery.celery_app.celery_send_email.delay') as mock_celery:
        response = client.post("/api/user/send_feedback", json=feedback_data)

        assert response.status_code == 200
        assert response.json() == {"result": 'true'}

        # Проверка, что Celery вызвана 2 раза (для автора и пользователя)
        assert mock_celery.call_count == 2

        # Первый вызов (письмо пользователю)
        second_call_args = mock_celery.call_args_list[0][1]
        assert second_call_args['receiver'] == "user@example.com"
        assert "Благодарность" in second_call_args['subject']

        # Второй вызов (письмо автору)
        first_call_args = mock_celery.call_args_list[1][1]
        assert first_call_args['receiver'] == SMTP_USER
        assert "Новый отзыв" in first_call_args['subject']

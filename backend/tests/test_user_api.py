from unittest.mock import patch, MagicMock
from types import SimpleNamespace

from .entities import test_user
from .conftest import EMAIL

def test_1(client, setup_database):
    """Тест успешной отправки feedback с почтой от пользователя"""

    data = {
        "email": "user@example.com",
        "content": "Test feedback message"
    }

    with patch('app.celery.celery_send_email.delay') as mock_celery:
        mock_celery.return_value = MagicMock()

        response = client.post("/api/user/send_feedback", json=data)

        assert response.status_code == 200
        assert response.json() == {"result": "true"}

        calls = mock_celery.call_args_list

        # Первый вызов (письмо пользователю)
        first_call_args = calls[0][1]
        assert first_call_args.get('receiver') == data['email']

def test_2(client, setup_database):
    """Тест регистрации пользователя"""

    data = {
        "email": "test_c@gmail.com",
        "full_name": "user user user"
    }

    response = client.post("/api/user/registration", json=data)

    assert response.status_code == 200


def test_3(client, setup_database, test_user):
    """Отправка письма пользователю для подтверждения и входа в аккаунт"""

    data = {
        "email": EMAIL
    }

    with patch('app.celery.celery_send_email.delay') as mock_celery:
        mock_celery.return_value = MagicMock()

        response = client.post("/api/user/login/temporary_code", json=data)

        assert response.status_code == 200
        assert response.json() == {"result": "true"}


def test_4(client, setup_database):
    """Подтверждение входа в аккаунт"""

    data = {
        "code": "1234"
    }

    with patch('app.user.routes.UserManager.code_confirmation_login') as mock_confirm:

        mock_user = SimpleNamespace(
            user_id=1,
            full_name="Test User",
            email="test@example.com",
            role="user",
            comment=SimpleNamespace(content="Test comment")
        )
        mock_confirm.return_value = mock_user

        confirm_response = client.post(
            "/api/user/login/mail_confirmation",
            json=data
        )

        assert confirm_response.status_code == 200

def test_5(client, setup_database):
    """Выход из аккаунта пользователя"""
    response = client.delete('/api/user/login/logout')

    assert response.status_code == 200


def test_6(client, setup_database):
    """Данные аккаунта пользователя"""

    from app.utils.jwt_token import jwt_token
    token = jwt_token.create(user_id=1, role="user")
    client.cookies.set("jwt_token", token)

    with patch('app.user.routes.cache.get') as mock_cache_get:
        cached_user_data = {
            "user_id": 1,
            "full_name": "Test User",
            "email": "test@example.com",
            "content": "Test comment"
        }
        mock_cache_get.return_value = cached_user_data

        response = client.get('/api/user/profile')

        assert response.status_code == 200


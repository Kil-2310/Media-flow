from unittest.mock import patch, MagicMock

from .entities import test_user, create_temporary_code
from .conftest import EMAIL

from .utils import get_jwt_token


async def test_1_user(client, setup_database, disable_rate_limiting):
    """Тест успешной отправки feedback с почтой от пользователя"""

    data = {"email": "user@example.com", "content": "Test feedback message"}

    with patch("app.celery.celery_send_email.delay") as mock_celery:
        mock_celery.return_value = MagicMock()

        response = client.post("/api/user/send_feedback", json=data)

        assert response.status_code == 200
        assert response.json() == {"result": "true"}

        calls = mock_celery.call_args_list

        # Первый вызов (письмо пользователю)
        first_call_args = calls[0][1]
        assert first_call_args.get("receiver") == data["email"]


async def test_2_user(client, setup_database, disable_rate_limiting):
    """Тест регистрации пользователя"""

    data = {"email": "test_c@gmail.com", "full_name": "user user user"}

    response = client.post("/api/user/registration", json=data)

    assert response.status_code == 200


async def test_3_user(client, setup_database, test_user, db_session, disable_rate_limiting):
    """Отправка письма пользователю для подтверждения и входа в аккаунт"""

    data = {"email": EMAIL}

    await create_temporary_code(db_session, test_user)

    response = client.post("/api/user/login/temporary_code", json=data)

    assert response.status_code == 200
    assert response.json() == {"result": "true"}


async def test_4_user(client, setup_database, test_user, db_session, disable_rate_limiting):
    """Подтверждение входа в аккаунт"""

    client.cookies.set("email", EMAIL)

    data = {"code": "1234"}

    await create_temporary_code(db_session, test_user)

    confirm_response = client.post("/api/user/login/mail_confirmation", json=data)

    assert confirm_response.status_code == 200


def test_5_user(client, setup_database, disable_rate_limiting):
    """Выход из аккаунта пользователя"""
    response = client.delete("/api/user/login/logout")

    assert response.status_code == 200


def test_6_user(client, setup_database, test_user, disable_rate_limiting):
    """Получение данных аккаунта пользователя"""

    get_jwt_token(client, test_user)

    with patch("app.user.routes.cache.get") as mock_cache_get:
        cached_user_data = {
            "user_id": 1,
            "full_name": "Test User",
            "email": "test@example.com",
            "content": "Test comment",
        }
        mock_cache_get.return_value = cached_user_data

        response = client.get("/api/user/profile")

        assert response.status_code == 200

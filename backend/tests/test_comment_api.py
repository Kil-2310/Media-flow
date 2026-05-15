from .entities import test_user, create_comment
from .utils import get_jwt_token

async def test_1_comment(client, setup_database, test_user, db_session):
    """Создание комментария"""

    get_jwt_token(client, test_user)

    data = {
        "content": "Какой-то комментарий от пользователя"
    }

    response = client.post("/api/comment/create", json=data)

    assert response.status_code == 200


async def test_2_comment(client, setup_database, test_user, db_session):
    """Удаление созданного комментария"""

    get_jwt_token(client, test_user)

    await create_comment(db_session, test_user)

    response = client.delete(f"/api/comment/delete")

    assert response.status_code == 200


async def test_3_comment(client, setup_database, test_user, db_session):
    """Получение всех комментариев"""

    get_jwt_token(client, test_user)

    await create_comment(db_session, test_user)

    response = client.get("/api/comment/get_all")

    assert response.status_code == 200


async def test_4_comment(client, setup_database, test_user, db_session):
    """Получение верифицированных комментариев"""
    get_jwt_token(client, test_user)

    await create_comment(db_session, test_user, True)

    response = client.get("/api/comment/get_verified")

    assert response.status_code == 200
    assert response.json()["data"][0]['verified'] == True


async def test_5_comment(client, setup_database, test_user, db_session):
    """Получение не верифицированных комментариев"""
    get_jwt_token(client, test_user)

    await create_comment(db_session, test_user, False)

    response = client.get("/api/comment/get_unverified")

    assert response.status_code == 200
    assert response.json()["data"][0]['verified'] == False


async def test_6_comment(client, setup_database, test_user):
    """Получение пустого списка комментариев"""

    get_jwt_token(client, test_user)

    response = client.get("/api/comment/get_all")

    assert response.status_code == 404
    assert response.json()['detail'].startswith('The comment does')

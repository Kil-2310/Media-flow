from .entities import test_user, test_comment
from .utils import get_jwt_token

async def test_1_comment(client, setup_database, test_user, db_session):
    """Публикация медиа"""

    get_jwt_token(client, test_user)





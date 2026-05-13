import pytest

from .factories import UserFactory


@pytest.fixture
async def test_user(db_session):
    """Пользователь"""

    user = UserFactory.build()
    db_session.add(user)
    await db_session.commit()
    await db_session.refresh(user)
    return user

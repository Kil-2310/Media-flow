import pytest

from .factories import UserFactory, CommentFactory, MediaFactory, TemporaryCodeFactory
from app.utils.security import hash_code


@pytest.fixture
async def test_user(db_session) -> UserFactory:
    """Пользователь"""

    user = UserFactory.build()
    db_session.add(user)
    await db_session.commit()
    await db_session.refresh(user)
    return user


async def create_comment(db_session, user, verified: bool = False) -> CommentFactory:
    """Комментарий, связанный с тестовым пользователем"""

    comment = CommentFactory.build(user_id=user.user_id, verified=verified)
    db_session.add(comment)
    await db_session.commit()
    await db_session.refresh(comment)
    return comment


async def create_temporary_code(db_session, user):
    """Создание временного кода для пользователя"""
    hashed_code = hash_code("1234")

    temporary_code = TemporaryCodeFactory.build(
        temporary_code_value=hashed_code,
        user_id=user.user_id
    )
    db_session.add(temporary_code)
    await db_session.commit()
    await db_session.refresh(temporary_code)
    return temporary_code

# async def test_media(db_session, comment) -> MediaFactory:
#     """Тестовый медиа, связанный с комментарием"""
#
#     media = CommentFactory.build(user_id=user.user_id, verified=verified)
#     db_session.add(comment)
#     await db_session.commit()
#     await db_session.refresh(comment)
#     return comment
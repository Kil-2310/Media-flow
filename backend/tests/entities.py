import pytest

from .factories import UserFactory, CommentFactory, MediaFactory


@pytest.fixture
async def test_user(db_session) -> UserFactory:
    """Пользователь"""

    user = UserFactory.build()
    db_session.add(user)
    await db_session.commit()
    await db_session.refresh(user)
    return user


async def test_comment(db_session, user, verified: bool = False) -> CommentFactory:
    """Комментарий, связанный с тестовым пользователем"""

    comment = CommentFactory.build(user_id=user.user_id, verified=verified)
    db_session.add(comment)
    await db_session.commit()
    await db_session.refresh(comment)
    return comment

# async def test_media(db_session, comment) -> MediaFactory:
#     """Тестовый медиа, связанный с комментарием"""
#
#     media = CommentFactory.build(user_id=user.user_id, verified=verified)
#     db_session.add(comment)
#     await db_session.commit()
#     await db_session.refresh(comment)
#     return comment
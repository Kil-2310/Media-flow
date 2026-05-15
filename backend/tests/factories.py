import random
from datetime import datetime, timedelta

import factory
from faker import Faker

from app import User, TemporaryCode, Comment, Media
from .conftest import EMAIL

fake = Faker()


class UserFactory(factory.alchemy.SQLAlchemyModelFactory):
    class Meta:
        model = User
        sqlalchemy_session_persistence = "commit"

    user_id = factory.Sequence(lambda n: n)
    full_name = factory.Faker("name")
    email = EMAIL
    role = factory.Iterator(["user", "admin", "moderator"])
    created_at = factory.LazyFunction(
        lambda: datetime.now() - timedelta(days=random.randint(0, 365))
    )


class TemporaryCodeFactory(factory.alchemy.SQLAlchemyModelFactory):
    class Meta:
        model = TemporaryCode
        sqlalchemy_session_persistence = "commit"

    temporary_code_id = factory.Sequence(lambda n: n)
    temporary_code_value = "1234"
    expires_at = factory.LazyFunction(
        lambda: datetime.now() + timedelta(hours=random.randint(1, 48))
    )
    is_used = factory.Iterator([True, False])
    user_id = factory.Sequence(lambda n: n)


class CommentFactory(factory.alchemy.SQLAlchemyModelFactory):
    class Meta:
        model = Comment
        sqlalchemy_session_persistence = "commit"

    comment_id = factory.Sequence(lambda n: n)
    content = factory.Faker("text", max_nb_chars=120)
    verified = factory.Iterator([False])
    created_at = factory.LazyFunction(
        lambda: datetime.now() - timedelta(days=random.randint(0, 180))
    )
    user_id = factory.LazyFunction(
        lambda: random.randint(1, 10485760)
    )


class MediaFactory(factory.alchemy.SQLAlchemyModelFactory):
    class Meta:
        model = Media
        sqlalchemy_session_persistence = "commit"

    media_id = factory.Sequence(lambda n: n)
    file_name = factory.LazyAttribute(
        lambda obj: f"media_{obj.media_id}_{random.randint(1000, 9999)}.{random.choice(['jpg', 'png', 'gif', 'mp4'])}"
    )
    file_url = factory.LazyAttribute(
        lambda obj: f"https://s3.example.com/bucket/{obj.file_name}"
    )
    s3_key = factory.LazyAttribute(
        lambda obj: f"uploads/{obj.file_name}"
    )
    file_size = factory.LazyFunction(
        lambda: random.randint(1024, 10485760)
    )
    created_at = factory.LazyFunction(
        lambda: datetime.now() - timedelta(days=random.randint(0, 60))
    )
    comment_id = factory.Sequence(lambda n: n)
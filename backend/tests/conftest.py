import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

import pytest
from fastapi import FastAPI
import pytest_asyncio
from fastapi.testclient import TestClient
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker

from app import register_routes
from app.base import Base
from app.database import get_session

app_ = FastAPI()
register_routes(app_)

EMAIL = "test_client@gmail.com"
TEST_DATABASE_URL = "sqlite+aiosqlite:///./test.db"

# Глобальные переменные для тестов
test_engine = None
TestingSessionLocal = None


@pytest_asyncio.fixture(autouse=True, scope="function")
async def setup_database():
    global test_engine, TestingSessionLocal

    db_file = Path("./test.db")
    if db_file.exists():
        db_file.unlink()

    test_engine = create_async_engine(TEST_DATABASE_URL, echo=True)
    TestingSessionLocal = sessionmaker(
        test_engine, class_=AsyncSession, expire_on_commit=False
    )

    async with test_engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    async def override_get_session():
        async with TestingSessionLocal() as session:
            yield session

    app_.dependency_overrides[get_session] = override_get_session

    yield

    async with test_engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)

    await test_engine.dispose()

    if db_file.exists():
        db_file.unlink()

    app_.dependency_overrides.clear()


@pytest.fixture(scope="function")
def app():
    return app_


@pytest.fixture(scope="function")
def client(app):
    with TestClient(app) as test_client:
        yield test_client


@pytest_asyncio.fixture(scope="function")
async def db_session():
    """Фикстура для прямой работы с БД в тестах"""
    global TestingSessionLocal

    if TestingSessionLocal is None:
        temp_engine = create_async_engine(TEST_DATABASE_URL, echo=True)
        temp_session_local = sessionmaker(
            temp_engine, class_=AsyncSession, expire_on_commit=False
        )
        async with temp_session_local() as session:
            yield session
            await session.rollback()
            await session.close()
        await temp_engine.dispose()
    else:
        async with TestingSessionLocal() as session:
            yield session
            await session.rollback()
            await session.close()

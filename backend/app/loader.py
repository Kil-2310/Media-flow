from fastapi import FastAPI

from .user.routes import register_user_routes
from .middleware import setup_profiler


def create_app() -> FastAPI:
    app = FastAPI()

    setup_profiler(app)

    register_user_routes(app)

    return app
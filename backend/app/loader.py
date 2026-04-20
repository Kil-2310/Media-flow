from fastapi import FastAPI

from .user.routes import register_user_routes


def register_routes(app: FastAPI):
    register_user_routes(app)

def create_app() -> FastAPI:
    app = FastAPI()

    register_routes(app)

    return app

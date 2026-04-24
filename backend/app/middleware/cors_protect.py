from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

from ..config_data import FRONTEND_URL


def setup_cors_protect(app: FastAPI):
    app.add_middleware(
        CORSMiddleware,
        allow_credentials=True,  # Разрешение cookies и авторизации
        allow_origins=[FRONTEND_URL], # Адрес Frontend
        allow_methods=["*"],  # Все HTTP методы
        allow_headers=["*"],  # Все заголовки
    )

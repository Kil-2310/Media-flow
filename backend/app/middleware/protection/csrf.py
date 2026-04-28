from fastapi import FastAPI, Depends
from fastapi.responses import JSONResponse
from fastapi_csrf_protect import CsrfProtect
from pydantic import BaseModel

from app.config_data import CSRF_TOKEN, IS_PROD


class CsrfSettings(BaseModel):
    """Настройки CSRF защиты"""
    secret_key: str = CSRF_TOKEN
    cookie_key: str = "fastapi-csrf-token"
    header_key: str = "X-CSRF-Token"
    cookie_path: str = "/"
    cookie_httponly: bool = False

    if not IS_PROD:
        # Локальная разработка
        cookie_samesite: str = "lax"
        cookie_secure: bool = False
        cookie_domain: str = "localhost"
    else:
        # Продакшен
        cookie_samesite: str = "lax"  # lax - безопасно для большинства случаев
        cookie_secure: bool = True  # предполагаем, что на хостинге есть HTTPS
        cookie_domain: str = "kursk-region.ru"


def setup_csrf_protect(app: FastAPI):
    @CsrfProtect.load_config
    def get_csrf_config():
        return CsrfSettings()

    @app.get("/api/csrf_token", tags=["CSRF"])
    def get_csrf_token(csrf_protect: CsrfProtect = Depends()):
        """Эндпоинт для получения CSRF токена"""
        csrf_token, signed_token = csrf_protect.generate_csrf_tokens()
        response = JSONResponse({"csrf_token": csrf_token})
        csrf_protect.set_csrf_cookie(signed_token, response)

        return response
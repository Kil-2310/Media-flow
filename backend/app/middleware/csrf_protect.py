from fastapi import FastAPI, Depends
from fastapi.responses import JSONResponse
from fastapi_csrf_protect import CsrfProtect
from pydantic import BaseModel

from ..config_data import CSRF_TOKEN, IS_PROD


class CsrfSettings(BaseModel):
    secret_key: str = CSRF_TOKEN  # Ключ для подписи
    cookie_samesite: str = "none"  # Разрешает кросс-доменные запросы
    cookie_secure: bool = True  # Только HTTPS


def setup_csrf_protect(app: FastAPI):
    if not IS_PROD:

        @app.get("/csrf-token")
        def get_csrf_token():
            return {
                "csrf_token": "dev-token",
                "message": "CSRF disabled for development",
            }

        return

    @CsrfProtect.load_config
    def get_csrf_config():
        return CsrfSettings()

    @app.get("/csrf-token", tags=["csrf"])
    def get_csrf_token(csrf_protect: CsrfProtect = Depends()):
        """
        Получение CSRF-токена для фронтенда.
        Возвращает JSON с токеном и устанавливает подписанный токен в cookie.
        """
        csrf_token, signed_token = csrf_protect.generate_csrf_tokens()
        response = JSONResponse({"csrf_token": csrf_token})
        csrf_protect.set_csrf_cookie(signed_token, response)
        return response

from fastapi import FastAPI, Depends, Request
from fastapi.responses import JSONResponse
from fastapi_csrf_protect import CsrfProtect
from pydantic import BaseModel

from app.config_data import CSRF_TOKEN, IS_TESTING


class CsrfSettings(BaseModel):
    """Настройки CSRF защиты"""
    secret_key: str = CSRF_TOKEN
    cookie_key: str = "fastapi-csrf-token"
    header_key: str = "X-CSRF-Token"
    cookie_path: str = "/"
    cookie_httponly: bool = True
    cookie_samesite: str = "lax" if IS_TESTING else "none"
    cookie_secure: bool = False if IS_TESTING else True


def setup_csrf_protect(app: FastAPI):
    @CsrfProtect.load_config
    def get_csrf_config():
        return CsrfSettings()

    @app.get("/api/csrf_token", tags=["CSRF"])
    async def get_csrf_token(
            request: Request,
            csrf_protect: CsrfProtect = Depends()
    ):
        """Эндпоинт для получения CSRF токена"""
        csrf_token, signed_token = csrf_protect.generate_csrf_tokens()

        response = JSONResponse({"csrf_token": csrf_token})

        # Определяем параметры куки в зависимости от окружения
        if IS_TESTING:
            response.set_cookie(
                key="fastapi-csrf-token",
                value=signed_token,
                httponly=True,
                secure=False,
                samesite="lax",
                path="/",
                domain=None,  # localhost
                max_age=3600,
            )
        else:
            response.set_cookie(
                key="fastapi-csrf-token",
                value=signed_token,
                httponly=True,
                secure=True,
                samesite="none",
                path="/",
                domain="test-domain-my.ru",
                max_age=3600,
            )

        return response

    @app.post("/api/protected", tags=["CSRF"])
    async def protected_endpoint(
            request: Request,
            csrf_protect: CsrfProtect = Depends()
    ):
        """Защищенный эндпоинт для проверки CSRF"""
        await csrf_protect.validate_csrf(request)
        return JSONResponse({"message": "CSRF validation successful"})

    @app.post("/api/logout", tags=["CSRF"])
    async def logout():
        """Очистка CSRF куки"""
        response = JSONResponse({"message": "Logged out"})

        if IS_TESTING:
            response.delete_cookie(
                key="fastapi-csrf-token",
                path="/"
            )
        else:
            response.delete_cookie(
                key="fastapi-csrf-token",
                path="/",
                domain="kursk-region.ru"
            )

        return response
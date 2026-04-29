import base64

from fastapi import FastAPI, Request, Response
from starlette.middleware.base import BaseHTTPMiddleware
from fastapi_profiler import Profiler

from app.config_data import PROFILER_USER, PROFILER_PASSWORD


class ProfilerAuthMiddleware(BaseHTTPMiddleware):
    """Middleware для защиты профайлера базовой аутентификацией"""

    async def dispatch(self, request: Request, call_next):
        if request.url.path.startswith("/profiler"):
            auth_header = request.headers.get("Authorization")

            if not auth_header or not auth_header.startswith("Basic "):
                return Response(
                    "Unauthorized",
                    status_code=401,
                    headers={"WWW-Authenticate": "Basic realm='Profiler'"},
                )

            try:
                # Декодируем Base64
                encoded = auth_header.split(" ")[1]
                decoded = base64.b64decode(encoded).decode("utf-8")
                username, password = decoded.split(":", 1)

                # Проверяем учетные данные
                if username != PROFILER_USER or password != PROFILER_PASSWORD:
                    return Response(
                        "Unauthorized",
                        status_code=401,
                        headers={"WWW-Authenticate": "Basic realm='Profiler'"}
                    )

            except Exception:
                return Response(
                    "Unauthorized",
                    status_code=401,
                    headers={"WWW-Authenticate": "Basic realm='Profiler'"}
                )

        # Пропускаем запрос дальше
        return await call_next(request)


def setup_profiler(app: FastAPI):
    app.add_middleware(ProfilerAuthMiddleware)

    # Инициализация профайлера
    Profiler(app)
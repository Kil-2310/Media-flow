import base64

from fastapi import FastAPI, Request, Response
from fastapi_profiler import Profiler

from ..config_data import PROFILER_USER, PROFILER_PASSWORD


def setup_profiler(app: FastAPI):
    """Профайлер без сохранения данных для могиторинга на API"""

    @app.middleware("http")
    async def protect_profiler(request: Request, call_next):
        if request.url.path.startswith("/profiler"):
            auth_header = request.headers.get("Authorization")

            if not auth_header or not auth_header.startswith("Basic "):
                return Response(
                    "Unauthorized",
                    status_code=401,
                    headers={"WWW-Authenticate": "Basic realm='Profiler'"},
                )

            try:
                encoded = auth_header.split(" ")[1]
                decoded = base64.b64decode(encoded).decode("utf-8")
                username, password = decoded.split(":", 1)

                if username != PROFILER_USER or password != PROFILER_PASSWORD:
                    return Response("Unauthorized", status_code=401)

            except Exception:
                return Response("Unauthorized", status_code=401)

        return await call_next(request)

    # Инициализация профайлера
    Profiler(app)

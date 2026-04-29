from fastapi import Request, HTTPException, Response

def setup_open_api(docs_paths=["/docs", "/openapi.json", "/redoc"]):
    async def middleware(request: Request, call_next):
        if request.url.path in docs_paths:
            # Проверяем заголовок Authorization
            auth_header = request.headers.get("Authorization")
            if not auth_header:
                return Response(
                    "Unauthorized",
                    status_code=401,
                    headers={"WWW-Authenticate": "Basic realm='API Docs'"}
                )

            try:
                auth_type, credentials = auth_header.split(" ")
                if auth_type.lower() != "basic":
                    raise HTTPException(status_code=401)

                import base64
                decoded = base64.b64decode(credentials).decode("utf-8")
                username, password = decoded.split(":", 1)

                if username != "admin" or password != "123":
                    raise HTTPException(status_code=401)

            except Exception:
                return Response(
                    "Unauthorized",
                    status_code=401,
                    headers={"WWW-Authenticate": "Basic realm='API Docs'"}
                )

        return await call_next(request)

    return middleware
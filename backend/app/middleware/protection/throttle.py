import redis
from fastapi import FastAPI, Request, HTTPException
from fastapi_advanced_rate_limiter import SlidingWindowRateLimiter
from uvicorn.middleware.proxy_headers import ProxyHeadersMiddleware
from app.config_data import REDIS_CLIENT, NGINX_TRUSTED_IP

redis_client = redis.Redis.from_url(REDIS_CLIENT, decode_responses=True)

limiter = SlidingWindowRateLimiter(
    capacity=5,  # 5 запросов всплеском
    fill_rate=10,  # 10 запросов в секунду (1 запрос каждые 0.1 сек)
    scope="ip",  # Разные счетчики для разных IP
    backend="redis",  # Распределенное хранение
    redis_client=redis_client,
)


def get_client_real_ip(request: Request) -> str:
    """
        Возвращает реальный IP клиента, обходя прокси.
        ProxyHeadersMiddleware уже обновляет request.client.host,
        но эта функция добавляет дополнительный уровень безопасности.
    """
    forwarded = request.headers.get("X-Forwarded-For")
    if forwarded:
        return forwarded.split(",")[0].strip()

    real_ip = request.headers.get("X-Real-IP")
    if real_ip:
        return real_ip.strip()

    return request.client.host or "unknown"


def setup_throttle(app: FastAPI):
    """
        Настройка rate limiting middleware с поддержкой прокси.
        ВАЖНО: ProxyHeadersMiddleware должен быть добавлен ДО этого middleware!
    """

    app.add_middleware(
        ProxyHeadersMiddleware,
        trusted_hosts=[NGINX_TRUSTED_IP]
    )

    @app.middleware("http")
    async def rate_limit_middleware(request: Request, call_next):
        # Реальный IP клиента
        client_ip = get_client_real_ip(request)

        # Проверка лимита
        if not limiter.allow_request(client_ip):
            raise HTTPException(
                status_code=429,
                detail="Rate limit exceeded. Please try again later.",
                headers={
                    "Retry-After": "60",
                    "X-RateLimit-Limit": "5",
                    "X-RateLimit-Remaining": "0",
                },
            )

        response = await call_next(request)

        response.headers["X-RateLimit-Limit"] = "5"

        return response
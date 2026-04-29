import redis
from fastapi import FastAPI, Request, HTTPException
from fastapi_advanced_rate_limiter import SlidingWindowRateLimiter

from app.config_data import REDIS_CLIENT

redis_client = redis.Redis.from_url(REDIS_CLIENT, decode_responses=True)

limiter = SlidingWindowRateLimiter(
    capacity=10,
    fill_rate=10,
    scope="ip",
    backend="redis",
    redis_client=redis_client,
)

def get_real_ip(request: Request) -> str:
    """Получение реального IP клиента за Nginx"""
    # X-Real-IP устанавливается Nginx
    real_ip = request.headers.get("X-Real-IP")
    if real_ip:
        return real_ip

    # X-Forwarded-For
    forwarded = request.headers.get("X-Forwarded-For")
    if forwarded:
        return forwarded.split(",")[0].strip()

    # Fallback
    return request.client.host or "unknown"


def setup_throttle(app: FastAPI):
    @app.middleware("http")
    async def rate_limit_middleware(request: Request, call_next):
        # Берем реальный IP клиента
        client_ip = get_real_ip(request)

        if not limiter.allow_request(client_ip):
            raise HTTPException(
                status_code=429,
                detail="Too many requests. Please try again later."
            )

        response = await call_next(request)

        response.headers["X-RateLimit-Limit"] = str(limiter.capacity)

        return response
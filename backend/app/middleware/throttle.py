import redis

from fastapi import FastAPI, Request, HTTPException
from fastapi_advanced_rate_limiter import SlidingWindowRateLimiter
from ..config_data import REDIS_CLIENT, IS_PROD

if not IS_PROD:
    redis_client = redis.Redis.from_url("redis://localhost:6379/1", decode_responses=True)
else:
    redis_client = redis.Redis.from_url(REDIS_CLIENT, decode_responses=True)

limiter = SlidingWindowRateLimiter(
    capacity=10,      # Вместимость "окна"
    fill_rate=10,      # Скорость наполнения (запросов в секунду)
    scope="ip",        # Разные счетчики для разных IP-адресов
    backend="redis",   # Счетчики хранятся в Redis (распределенно)
    redis_client=redis_client
)

def setup_throttle(app: FastAPI):
    @app.middleware("http")
    async def rate_limit_middleware(request: Request, call_next):
        client_ip = request.client.host

        # Проверка лимита
        if not limiter.allow_request(client_ip):
            wait_time = limiter.get_wait_time(client_ip)
            raise HTTPException(
                status_code=429,
                detail=f"Rate limit exceeded. Retry after {wait_time:.0f} seconds.",
                headers={"Retry-After": str(int(wait_time))}
            )
        return await call_next(request)

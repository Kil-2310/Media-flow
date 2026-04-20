from fastapi.middleware.cors import CORSMiddleware

from app.loader import create_app
from app.config_data import FRONTEND_URL


app = create_app()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,  # Разрешение cookies и авторизации
    allow_origins=[FRONTEND_URL], # Адрес Frontend
    allow_methods=["*"],  # Все HTTP методы
    allow_headers=["*"],  # Все заголовки
)

from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

from app.config_data import FRONTEND_URL


def setup_cors_protect(app: FastAPI):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[
            "http://localhost:3000",
            FRONTEND_URL,
        ],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
        expose_headers=["*"],
    )
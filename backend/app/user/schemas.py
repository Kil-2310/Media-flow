from pydantic import BaseModel

class FeedbackCreate(BaseModel):
    """Модель для создания письма автору"""
    email: str
    content: str
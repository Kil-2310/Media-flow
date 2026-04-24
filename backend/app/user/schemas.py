from typing import Optional
from pydantic import BaseModel, Field, validator
from email_validator import validate_email, EmailNotValidError


class FeedbackCreate(BaseModel):
    """Модель для создания письма автору"""

    email: Optional[str] = Field(None, description="Email пользователя")
    content: str = Field(..., min_length=1, max_length=1000)

    @validator("email")
    def validate_email(cls, v):
        """Валидация email с помощью библиотеки email-validator"""
        if v:
            try:
                validate_email(v, check_deliverability=False)
                return v
            except EmailNotValidError as e:
                raise ValueError(f"Неверный формат email: {str(e)}")

        return v

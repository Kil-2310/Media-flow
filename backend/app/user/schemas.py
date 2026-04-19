from pydantic import BaseModel
from typing import Optional

class FeedbackCreate(BaseModel):
    """Модель для создания письма автору"""

    email: Optional[str] = None
    content: str
from pydantic import BaseModel

# Общие модели


class ServerBoolAnswer(BaseModel):
    result: str = "true"

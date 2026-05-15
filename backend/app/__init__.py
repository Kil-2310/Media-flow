"""
Импорты для миграций и тестов
"""

from .loader import register_routes

from .base import Base
from .user.model import User
from .comment.model import Comment
from .media.model import Media
from .temporary_code.model import TemporaryCode

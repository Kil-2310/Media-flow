"""
Импорты для миграций и тестов
"""

from .base import Base
from .comment.model import Comment
from .loader import register_routes
from .media.model import Media
from .temporary_code.model import TemporaryCode
from .user.model import User

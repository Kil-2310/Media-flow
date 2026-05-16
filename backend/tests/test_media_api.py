from .entities import test_user, create_comment
from .utils import get_jwt_token

from unittest.mock import patch


async def test_1_comment(client, setup_database, test_user, db_session):
    """Публикация медиа"""

    get_jwt_token(client, test_user)

    await create_comment(db_session, test_user)

    data = {"file": "file"}

    with patch("app.media.manager.s3_client.upload_file") as mock_upload:
        fake_upload_result = {
            "file_name": "vacation_photo_1.jpg",
            "file_url": "https://s3.amazonaws.com/media-bucket/vacation_photo_1.jpg",
            "s3_key": "uploads/vacation_photo_1.jpg",
            "file_size": 1472864,
        }

        mock_upload.return_value = fake_upload_result

        response = client.post("/api/media/create", files=data)

        assert response.status_code == 200

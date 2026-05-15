from app.utils.jwt_token import jwt_token

def get_jwt_token(client, user) -> None:
    token = jwt_token.create(user.user_id, user.role)
    client.cookies.set("jwt_token", token)

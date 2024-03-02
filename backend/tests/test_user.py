from jose import jwt
from app import schemas
from app.config import settings

def test_create_user(client):
    test_user = {
        "username": "testuser",
        "password": "testpassword",
        "email": "test@example.com",
        "is_admin": False
    }
    
    res = client.post("/users/", json=test_user)
    new_user = schemas.UserOut(**res.json())
    assert new_user.email == "test@example.com"
    assert new_user.username=="testuser"
    assert res.status_code == 201



def test_login_user(client,test_user):
    login_data={"username":test_user['username'],"password":test_user['password']}
    res = client.post(
        "/login", json=login_data)
    login_res = schemas.Token(**res.json())
    payload = jwt.decode(login_res.accessToken,settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
    id = payload.get("id")
    assert login_res.token_type == "bearer"
    assert res.status_code == 200


def test_get_user_details(authorized_client):
    response = authorized_client.get("/users/details")

    assert response.status_code == 200
    assert "id" in response.json()

def test_user_update(authorized_client):
    new_user_det = {
        "username": "new_username",
        "email": "new_email@gmail.com",
        "password": "newpassword"
    }
  
    response = authorized_client.put("/users/", json=new_user_det)
    assert response.status_code == 200
    updated_user_details = response.json()
    assert updated_user_details["username"] == new_user_det["username"]
    assert updated_user_details["email"] == new_user_det["email"]

def test_user_delete(authorized_client):
    response = authorized_client.delete("/users/")
    assert response.status_code == 204

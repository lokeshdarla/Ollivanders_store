from fastapi.testclient import TestClient
import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.main import app
from app.config import settings
from app.database import get_db, Base
from app.oauth2 import create_access_token
SQLALCHEMY_DATABASE_URL = (
    f'postgresql://{settings.DATABASE_USERNAME}:{settings.DATABASE_PASSWORD}'
    f'@{settings.DATABASE_HOSTNAME}/{settings.DATABASE_NAME}_test'
)

engine = create_engine(SQLALCHEMY_DATABASE_URL)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


@pytest.fixture()
def session():
    print("Session is running")
    Base.metadata.create_all(bind=engine)
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()
        Base.metadata.drop_all(bind=engine)


@pytest.fixture()
def client(session):
    def override_get_db():
        try:
            yield session
        finally:
            session.close()

    app.dependency_overrides[get_db] = override_get_db
    client = TestClient(app=app)
    yield client
    app.dependency_overrides[get_db] = None

@pytest.fixture()
def test_user(client):
    user_data = {
        "username": "testuser",
        "email": "test_user@gmail.com",
        "password": "password123",
        "is_admin": False,
    }
    res = client.post("/users/", json=user_data)

    assert res.status_code == 201

    assert res.status_code == 201

    new_user = res.json()
    new_user['password'] = user_data['password']
    return new_user


@pytest.fixture()
def token(test_user):
    return create_access_token({"id": test_user["id"]})

@pytest.fixture()
def authorized_client(client, token):
    client.headers = {
        **client.headers,
        "Authorization": f"Bearer {token}"
    }

    return client


@pytest.fixture()
def test_product(client):
    product_data={
    "ProductName": "Test Product",
    "Description": "Test Product Description", 
    "Price": 4349.00, 
    "units": 12, 
    "ImageURL":"img.com"
    }
    res=client.post("/products",json=product_data)
    assert res.status_code==201
    new_product=res.json()
    return new_product


@pytest.fixture()
def test_address(authorized_client):
    address_data={
    "door_no": "24-10-15",
    "landmark": "SRM University",
    "pincode": "4235145"
    }
    res=authorized_client.post("/addresses/",json=address_data)
    assert res.status_code==201
    return res.json()

def test_root(client):
    res = client.get("/")
    assert res.status_code == 200
    assert res.json() == {"message": "Hello World"}



from fastapi import APIRouter, HTTPException, Depends,status
from fastapi.responses import RedirectResponse
from fastapi.security import OAuth2AuthorizationCodeBearer
from ..import models, schemas, oauth2,utils
from sqlalchemy.orm import Session
from ..database import get_db
import requests
from ..config import settings

router = APIRouter(tags=["Authentication"])

oauth2_scheme = OAuth2AuthorizationCodeBearer(
    tokenUrl="token",
    authorizationUrl=f"https://accounts.google.com/o/oauth2/auth?response_type=code&client_id={settings.GOOGLE_CLIENT_ID}&redirect_uri={settings.GOOGLE_REDIRECT_URI}&scope=openid%20profile%20email&access_type=offline"
)

def get_google_token(code: str):
    token_url = "https://oauth2.googleapis.com/token"
    data = {
        "code": code,
        "client_id": settings.GOOGLE_CLIENT_ID,
        "client_secret": settings.GOOGLE_CLIENT_SECRET,
        "redirect_uri": settings.GOOGLE_REDIRECT_URI,
        "grant_type": "authorization_code",
    }
    
    response = requests.post(url=token_url, data=data)
    response.raise_for_status()
    return response.json().get("access_token")

def get_user_info(access_token: str):
    user_info_url = "https://www.googleapis.com/oauth2/v2/userinfo"
    headers = {"Authorization": f"Bearer {access_token}"}
    
    user_info_response = requests.get(user_info_url, headers=headers)
    user_info_response.raise_for_status()
    return user_info_response.json()


@router.get("/auth/google/callback")
async def auth_google_callback(code: str, db: Session = Depends(get_db)):
    try:
        access_token = get_google_token(code)
        user_info = get_user_info(access_token)

        existing_user = db.query(models.User).filter(models.User.email == user_info['email']).first()
        if not existing_user:
            # Generate a secure random password for the user
            random_password = utils.generate_secure_random_password()
            hashed_password = utils.hash(random_password)

            new_user = models.User(
                username=user_info['name'],
                email=user_info['email'],
                password=hashed_password,
            )

            db.add(new_user)
            db.commit()
            db.refresh(new_user)

        db_user = db.query(models.User).filter(models.User.email == user_info['email']).first()
        user_info['id'] = str(db_user.id)  # Convert UUID to string

        access_token = oauth2.create_access_token(user_info)

        redirect_url = f"{settings.CLIENT_BASE_URL}?token={access_token}"
        return RedirectResponse(url=redirect_url)

    except requests.exceptions.HTTPError as e:
        error_message = e.response.json().get("error_description", "Unknown error")
        raise HTTPException(status_code=e.response.status_code, detail=f"Google API Error: {error_message}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {e}")


@router.post("/login",response_model=schemas.Token)
def login(user_cred: schemas.UserLogin,db:Session=Depends(get_db)):
    user=db.query(models.User).filter(models.User.username==user_cred.username).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="User not found")
    if not utils.verfiy(user_cred.password,user.password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Invalid Credentials")
    id=str(user.id)
    access_token=oauth2.create_access_token(data={"id":id,"name":user.username,"email":user.username})
    
    
    return {"accessToken":  access_token, "token_type": "bearer"}

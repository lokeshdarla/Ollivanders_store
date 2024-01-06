from fastapi import APIRouter, HTTPException, Depends,status
from fastapi.responses import RedirectResponse
from fastapi.security import OAuth2AuthorizationCodeBearer
from ..import models, schemas, oauth2,utils
from sqlalchemy.orm import Session
from ..database import get_db
import requests
from ..config import settings
from ..database import get_db
from .. import models, schemas, oauth2, utils
from sqlalchemy.orm import Session

GOOGLE_CLIENT_ID = settings.GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET = settings.GOOGLE_CLIENT_SECRET
GOOGLE_REDIRECT_URI = settings.GOOGLE_OAUTH_REDIRECT_URL

router = APIRouter(
    tags=["Authentication"]
)

oauth2_scheme = OAuth2AuthorizationCodeBearer(
    tokenUrl="token",
    authorizationUrl=f"https://accounts.google.com/o/oauth2/auth?response_type=code&client_id={GOOGLE_CLIENT_ID}&redirect_uri={GOOGLE_REDIRECT_URI}&scope=openid%20profile%20email&access_type=offline"
)

@router.get("/login/google")
async def login_google():
    return RedirectResponse(url=oauth2_scheme.authorizationUrl)


@router.get("/auth/google/callback")
async def auth_google_callback(code: str):
    try:
        token_url = "https://oauth2.googleapis.com/token"
        

        data = {
            "code": code,
            "client_id": GOOGLE_CLIENT_ID,
            "client_secret": GOOGLE_CLIENT_SECRET,
            "redirect_uri": GOOGLE_REDIRECT_URI,
            "grant_type": "authorization_code",
        }

        response = requests.post(url=token_url, data=data)
        response.raise_for_status()
        access_token = response.json().get("access_token")

        user_info_url = "https://www.googleapis.com/oauth2/v2/userinfo"
        headers = {"Authorization": f"Bearer {access_token}"}
        user_info_response = requests.get(user_info_url, headers=headers)
        user_info_response.raise_for_status()
        user=user_info_response.json()
        access_token=oauth2.create_access_token(data=user)
        redirect_url = f"{settings.CLIENT_BASE_URL}?token={access_token}"
        return user

    except requests.exceptions.HTTPError as e:
        error_message = e.response.json().get("error_description", "Unknown error")
        raise HTTPException(status_code=e.response.status_code, detail=f"Google API Error: {error_message}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {e}")



@router.post("/login",response_model=schemas.Token)
def login(user_cred: schemas.UserLogin,db:Session=Depends(get_db)):
    user=db.query(models.User).filter(models.User.username==user_cred.username).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Invalid Credentials")
    
    if not utils.verfiy(user_cred.password,user.password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Invalid Credentials")

    access_token=oauth2.create_access_token(data={"id":user.id,"username":user.username,"email":user.username})
    return({"accessToken":access_token})

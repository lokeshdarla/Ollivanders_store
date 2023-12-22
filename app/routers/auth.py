from fastapi import APIRouter,status, HTTPException,Depends
from ..import models, schemas, oauth2,utils
from sqlalchemy.orm import Session
from ..database import get_db

router=APIRouter(
    tags=["Authentication"]
)


@router.post("/login",response_model=schemas.Token)
def login(user_cred: schemas.UserLogin,db:Session=Depends(get_db)):
    user=db.query(models.User).filter(models.User.username==user_cred.username).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Invalid Credentials")
    
    if not utils.verfiy(user_cred.password,user.password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Invalid Credentials")

    access_token=oauth2.create_access_token(data={"id":user.id})
    return({"access_token":access_token,"token_type":"Bearer","id":user.id})

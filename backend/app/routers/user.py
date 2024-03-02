from fastapi import Body, APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from ..database import get_db
from .. import schemas, models, oauth2
from .. import utils

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)


@router.get("/details", response_model=schemas.UserOut)
def get_user_by_id(current_user:dict = Depends(oauth2.get_current_user), db: Session = Depends(get_db)):
    user = db.query(models.User).filter_by(id=current_user.id, is_admin=False).first()
    
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User Not Found")
    return user

@router.get("/{id}", response_model=schemas.UserOut)
def get_user_id(id: int, db: Session = Depends(get_db)):
    user = db.query(models.User).filter_by(id=id, is_admin=False).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User Not Found")
    return user

@router.post("/",status_code=status.HTTP_201_CREATED,response_model=schemas.UserOut)
def add_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    user.password = utils.hash(user.password)
    new_user = models.User(**user.model_dump())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@router.delete("/", status_code=status.HTTP_204_NO_CONTENT)
def delete_user(db: Session = Depends(get_db), current_user:dict= Depends(oauth2.get_current_user)):
    user = db.query(models.User).filter_by(id=current_user.id).first()
    if user:
        db.delete(user)
        db.commit()
        return {"detail": "Account Deleted Successfully"}
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User Not Found")

@router.put("/", response_model=schemas.UserOut)
def update_user(
    new_user: schemas.UserUpdate,
    db: Session = Depends(get_db),
    current_user: schemas.TokenData = Depends(oauth2.get_current_user)
):
    user = db.query(models.User).filter_by(id=current_user.id).first()
    if user:
        for field, value in new_user.model_dump().items():
            setattr(user, field, value)
        db.commit()
        db.refresh(user)
        return user
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No user with the given id")

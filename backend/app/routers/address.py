from fastapi import Body, APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from ..database import get_db
from .. import schemas, models, oauth2

router = APIRouter(
    prefix="/addresses",
    tags=["cart"]
)

from fastapi import HTTPException, status

@router.post("/")
async def create_new_address(address: schemas.AddressCreate, db: Session = Depends(get_db), current_user: dict = Depends(oauth2.get_current_user)):
    db_address = models.Address(
        door_no=address.door_no,
        landmark=address.landmark,
        pincode=address.pincode,
        UserID=current_user.id
    )
    db.add(db_address)
    db.commit()
    db.refresh(db_address)
    return {"message": "Address created successfully"}, status.HTTP_201_CREATED

  
  

@router.get("/", response_model=List[schemas.AddressResponse])
async def get_user_addresses(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
    current_user: dict = Depends(oauth2.get_current_user)
):
    user_id = current_user.id
    addresses = db.query(models.Address).filter(models.Address.UserID == user_id).offset(skip).limit(limit).all()

    return addresses or []


@router.get("/{address_id}",response_model=schemas.AddressResponse)
async def get_specific_address(address_id: int, db: Session = Depends(get_db),current_user: dict = Depends(oauth2.get_current_user)):
    address = db.query(models.Address).filter(
        (models.Address.AddressID == address_id) & (models.Address.UserID == current_user.id)
    ).first()
    if address:
        return address
    else:
        raise HTTPException(status_code=404, detail="Address not found")


@router.put("/{address_id}",response_model=schemas.AddressUpdateResponse)
async def update_existing_address(address_id:int,new_address: schemas.AddressUpdate, db: Session = Depends(get_db),current_user: dict = Depends(oauth2.get_current_user)):
     address = db.query(models.Address).filter(models.Address.AddressID == address_id).first()
    
     if address:
        for key, value in new_address.dict().items():
            setattr(address, key, value)

        db.commit()
        db.refresh(address)
        return {"message": "Address updated successfully", "address": address}
     else:
        raise HTTPException(status_code=404, detail="Address not found")


@router.delete("/{address_id}")
async def delete_existing_address(address_id: int, db: Session = Depends(get_db), current_user: dict = Depends(oauth2.get_current_user)):
    address = db.query(models.Address).filter(models.Address.AddressID == address_id and models.Address.UserID==current_user.id).first()

    if address:
        db.delete(address)
        db.commit()
        return address
    else:
        raise HTTPException(status_code=404, detail="Address not found")

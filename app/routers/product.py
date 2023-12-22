from fastapi import Body, APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from ..database import get_db
from .. import schemas, models, oauth2
from .. import utils

router = APIRouter(
    prefix="/products",
    tags=["Users"]
)

@router.get("/", response_model=List[schemas.ProductBase])
def get_products(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    products = db.query(models.Product).offset(skip).limit(limit).all()
    return products

@router.post("/", response_model=schemas.ProductBase,status_code=status.HTTP_201_CREATED)
def create_product(product: schemas.ProductCreate, db: Session = Depends(get_db)):
    db_product = models.Product(**product.dict())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product

@router.get("/{product_id}", response_model=schemas.ProductBase)
def read_product(product_id: int, db: Session = Depends(get_db)):
    product=db.query(models.Product).filter(models.Product.ProductID == product_id).first()
    if product is None:
      raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="Product with Given Id is not Available")
    return product

@router.put("/{product_id}", response_model=schemas.ProductBase)
def update_product(product_id: int, product: schemas.ProductUpdate, db: Session = Depends(get_db)):
    db_product = db.query(models.Product).filter(models.Product.ProductID == product_id).first()
    if db_product:
        for key, value in product.dict().items():
            setattr(db_product, key, value)
        db.commit()
        db.refresh(db_product)
        return db_product
    else:
        raise HTTPException(status_code=404, detail="Product not found")

@router.delete("/{product_id}", response_model=schemas.ProductBase)
def delete_product(product_id: int, db: Session = Depends(get_db)):
    db_product = db.query(models.Product).filter(models.Product.ProductID == product_id).first()
    if db_product:
        db.delete(db_product)
        db.commit()
        return db_product
    else:
        raise HTTPException(status_code=404, detail="Product not found")

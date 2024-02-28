from fastapi import Body, APIRouter, Depends, HTTPException, status, UploadFile, File
from sqlalchemy.orm import Session
from base64 import b64encode,b64decode
from typing import List
from ..database import get_db
from .. import schemas, models, oauth2
from .. import utils
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import desc

router = APIRouter(
    prefix="/products",
    tags=["Products"]
)

import base64

# def sqlalchemy_model_to_pydantic(product: models.Product, image: models.ProductImage) -> schemas.ProductOut:
#     return schemas.ProductOut(
#         ProductID=product.ProductID,
#         ProductName=product.ProductName,
#         Description=product.Description,
#         Price=product.Price,
#         units=product.units,
#         image=schemas.ImageOUT(ImageID=image.ImageID, Image=base64.b64encode(image.Image).decode('utf-8'))
#     )



# @router.get("/", response_model=List[schemas.ProductOut])
# def get_products(
#     skip: int = Query(0, alias="page", ge=0),
#     limit: int = Query(100, le=100),
#     search: str = Query("", description="Search query for products"),
#     sort_by: str = Query("ProductName", description="Field to sort by"),
#     sort_desc: bool = Query(False, description="Sort in descending order"),
#     db: Session = Depends(get_db),
# ):
#     query = db.query(models.Product, models.ProductImage).join(
#         models.ProductImage, models.Product.ImageID == models.ProductImage.ImageID
#     )

#     if search:
#         query = query.filter(models.Product.ProductName.ilike(f"%{search}%"))
#     sort_column = getattr(models.Product, sort_by)
#     if sort_desc:
#         query = query.order_by(SAQuery.desc(sort_column))
#     else:
#         query = query.order_by(sort_column)

#     products_and_images = query.offset(skip).limit(limit).all()

#     return [
#         sqlalchemy_model_to_pydantic(product, image)
#         for product, image in products_and_images
#     ] or []
    
    

    
    
    
@router.get("/{product_id}", response_model=schemas.ProductOut)
def get_single_product(product_id: int, db: Session = Depends(get_db)):
    product = db.query(models.Product).filter(models.Product.ProductID==product_id).first()
    if product is None:
        raise HTTPException(status_code=404, detail="Product not found")
    return product



@router.get("/", response_model=List[schemas.ProductOut])
def get_products(
    skip: int = Query(0, alias="page", ge=0),
    limit: int = Query(100, le=100),
    search: str = Query("", description="Search query for products"),
    query: str = Query(None, description="query for filtering"),
    db: Session = Depends(get_db),
):
    products = db.query(models.Product).filter(
    models.Product.ProductName.ilike(f"%{search}%")
    )

    if query:
        if query.lower() == "low":
             products = products.order_by((models.Product.Price))
        elif query.lower() =="high":
            products=products.order_by(desc(models.Product.Price))
        elif query.lower() =="new-in":  
            products = products.order_by(desc(models.Product.created_at))

    products = products.offset(skip).limit(limit).all()
    return products or []

@router.post("/",response_model=schemas.ProductCreate,status_code=status.HTTP_201_CREATED)
def create_product(product: schemas.ProductCreate, db: Session = Depends(get_db)):
    db_product = models.Product(**product.dict())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product

# @router.post("/uploadImage",status_code=status.HTTP_201_CREATED)
# async def upload_image(image: UploadFile = File(...), db: Session = Depends(get_db)):
#     try:
#         contents = await image.read()

#         print(contents)
#         db_image = models.ProductImage(Image=contents)
#         db.add(db_image)
#         db.commit()
#         db.refresh(db_image)


#         return {"image_id": db_image.ImageID}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

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

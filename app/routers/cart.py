from fastapi import Body, APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from ..database import get_db
from .. import schemas, models, oauth2
from .. import utils
from sqlalchemy import and_
import base64

router = APIRouter(
    prefix="/cart",
    tags=["cart"]
)


from fastapi import Depends

@router.post("/", response_model=schemas.CartBase)
def create_cart(
    cart: schemas.CartCreate,
    db: Session = Depends(get_db),
    current_user: dict = Depends(oauth2.get_current_user)
):
    # Check if the specified product exists
    product = db.query(models.Product).filter(models.Product.ProductID == cart.ProductID).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    # Check if the specified quantity is valid
    if cart.Quantity <= 0:
        raise HTTPException(status_code=400, detail="Invalid quantity. Quantity must be greater than 0.")

    # Check if the specified quantity is available in stock
    if product.units is not None and cart.Quantity > product.units:
        raise HTTPException(status_code=400, detail="Insufficient stock. Cannot add more items than available.")

    # Create the cart entry
    db_cart = models.Cart(**cart.dict(), UserID=current_user.id)
    db.add(db_cart)
    db.commit()
    db.refresh(db_cart)

    return db_cart


@router.get("/", response_model=List[schemas.CartOut])
def read_carts(skip: int = 0, limit: int = 100, db: Session = Depends(get_db), current_user: dict = Depends(oauth2.get_current_user)):
    user_id = current_user.id
    cart_items = (
        db.query(models.Cart, models.Product, models.ProductImage)
        .join(models.Product, models.Product.ProductID == models.Cart.ProductID)
        .join(models.ProductImage, models.Product.ImageID == models.ProductImage.ImageID)
        .filter(models.Cart.UserID == user_id)
        .offset(skip)
        .limit(limit)
        .all()
        )
    cart_list = []
    for cart_item, product, image in cart_items:
        cart_out = schemas.CartOut(
            CartID=cart_item.CartID,
            ProductID=cart_item.ProductID,
            Quantity=cart_item.Quantity,
            Product_info=schemas.CartProduct(
                ProductName=product.ProductName,
                Description=product.Description,
                Price=float(product.Price),
                image=schemas.ImageOUT(
                    ImageID=image.ImageID,
                    Image=base64.b64encode(image.Image).decode('utf-8')
                )
            )
        )
        cart_list.append(cart_out)

    return cart_list

@router.get("/{cart_id}", response_model=schemas.CartOut)
def read_cart(cart_id: int, db: Session = Depends(get_db), current_user: dict = Depends(oauth2.get_current_user)):
    user_id = current_user.id
    cart_item = db.query(models.Cart).filter(models.Cart.CartID == cart_id, models.Cart.UserID == user_id).first()

    if cart_item is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Cart Not Found")

    product_info = db.query(models.Product).filter(models.Product.ProductID == cart_item.ProductID).first()
    cart_out = schemas.CartOut(
        CartID=cart_item.CartID,
        ProductID=cart_item.ProductID,
        Quantity=cart_item.Quantity,
        Product_info=schemas.CartProduct(
            ProductName=product_info.ProductName,
            Description=product_info.Description,
            Price=float(product_info.Price),
        )
    )

    return cart_out


@router.patch("/{cart_id}")
def update_cart(cart_id: int, cart_update: schemas.CartUpdate, db: Session = Depends(get_db), current_user: dict = Depends(oauth2.get_current_user)):
    db_cart = db.query(models.Cart).filter(models.Cart.CartID == cart_id, models.Cart.UserID == current_user.id).first()

    if db_cart:
        product = db.query(models.Product).filter(models.Product.ProductID == db_cart.ProductID).first()
        if not product:
            raise HTTPException(status_code=404, detail="Product not found")

        if cart_update.Quantity == 0:
            db.delete(db_cart)
            db.commit()
            return {"detail": "Deleted Successfully"}

        if product.units is not None and cart_update.Quantity > product.units:
            raise HTTPException(status_code=400, detail="Insufficient stock. Cannot update to more items than available.")

        db_cart.Quantity = cart_update.Quantity
        db.commit()
        db.refresh(db_cart)

        return db_cart
    else:
        raise HTTPException(status_code=404, detail="Cart not found")

@router.delete("/{cart_id}")
def delete_cart(cart_id: int, db: Session = Depends(get_db), current_user: dict = Depends(oauth2.get_current_user)):
    db_cart = db.query(models.Cart).filter(
        and_(models.Cart.CartID == cart_id, models.Cart.UserID == current_user.id)
    ).first()

    if db_cart:
        db.delete(db_cart)
        db.commit()
        return {"detail":"Deleted Successfully"}  # Return None or any suitable response for a successful deletion
    else:
        raise HTTPException(status_code=404, detail=f"Cart with id {cart_id} not found")


from fastapi import Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from ..database import get_db
from .. import schemas, models, oauth2
from fastapi import APIRouter
import stripe
from ..config import settings




router = APIRouter(
    prefix="/order",
    tags=["orders"]
)

def create_checkout(db: Session = Depends(get_db), current_user: dict = Depends(oauth2.get_current_user)):
    cart_items = (
        db.query(models.Cart, models.Product)
        .join(models.Product, models.Product.ProductID == models.Cart.ProductID)
        .filter(models.Cart.UserID == current_user.id)
        .all()
    )

    print(cart_items)

    checkout_items = []
    for cart, product in cart_items:
        checkout = schemas.CheckoutItem(
            ProductID=product.ProductID,
            CartID=cart.CartID,
            Quantity=cart.Quantity,
            Price=product.Price * cart.Quantity,
            ProductName=product.ProductName
        )
        checkout_items.append(checkout)

    if not checkout_items:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Cart is empty")

    total_price = sum(item.Price * item.Quantity for item in checkout_items)
    checkout_obj = schemas.Checkout(
        Items=checkout_items,
        total_price=total_price
    )

    return checkout_obj

@router.get('/checkout', status_code=status.HTTP_201_CREATED, response_model=schemas.Checkout)
async def checkout(db: Session = Depends(get_db), current_user: dict = Depends(oauth2.get_current_user)):
    return create_checkout(db, current_user)


@router.post('/order', status_code=status.HTTP_201_CREATED,response_model=schemas.OrderResponse)
async def checkout(db: Session = Depends(get_db), current_user: dict = Depends(oauth2.get_current_user)):
    
    checkout_data=create_checkout(db,current_user)
    order = models.Order(user_id=current_user['id'], total_price=checkout_data.total_price)
    
    db.add(order)
    db.commit()
    db.refresh(order)
    
    order_items = []
    for checkout_item in checkout_data.Items:
        order_item = models.OrderItem(
            order_id=order.id,
            product_id=checkout_item.ProductID,
            quantity=checkout_item.Quantity,
            price=checkout_item.Price
        )
        
        order_items.append(order_item)
        
        db.bulk_save_objects(order_items)
        db.commit()
     
    return schemas.OrderResponse(
      OrderID=order.id,
      TotalPrice=order.total_price
    )


@router.post("/process-payment/")
async def process_payment(db: Session = Depends(get_db), current_user: dict = Depends(oauth2.get_current_user)):
    checkout_data=create_checkout(db,current_user)

    # charge = stripe.Charge.create(
    #         amount=checkout_data.total_price,
    #         currency="inr",
    #         description="Payment for FastAPI Store",
    #     )
    stripe.api_key = settings.STRIPE_SECRET_KEY
    payment_intent = stripe.PaymentIntent.create(
        amount=int(checkout_data.total_price * 100),  # Stripe amounts are in cents
        currency="inr",
        description="Payment for FastAPI Store",
    )
    print(payment_intent)
    return payment_intent

      

  
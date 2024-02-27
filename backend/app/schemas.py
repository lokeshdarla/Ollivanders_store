from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from fastapi import UploadFile
from uuid import UUID

class UserBase(BaseModel):
    username: str
    password: str

class UserCreate(UserBase):
    email: str
    is_admin: bool = False

class UserUpdate(BaseModel):
    email: str
    username: str

class UserOut(BaseModel):
    username: str
    email: str
    created_at: datetime
    id: UUID  # Assuming user_id is of type UUID in your User model

class UserLogin(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    accessToken: str

class TokenData(BaseModel):
    id: UUID  # Assuming id is of type UUID in your User model

class GoogleLogin(BaseModel):
    id: str






class ProductBase(BaseModel):
    ProductName: str
    Description: str
    Price: float
    units: int
    ImageID:int



class ProductCreate(ProductBase):
    pass

class ProductUpdate(ProductBase):
    pass


class ImageOUT(BaseModel):
    ImageID: int
    Image: bytes 

class ProductOut(BaseModel):
    ProductID: int
    ProductName: str
    Description: str
    Price: float
    units: int
    image: ImageOUT

    class Config:
        arbitrary_types_allowed = True

class CartProduct(BaseModel):
    ProductName: str
    Description: str
    Price: float


class CartBase(BaseModel):
    ProductID: int
    Quantity: int = 1

class CartCreate(CartBase):
    pass

class CartUpdate(BaseModel):
    Quantity: int

class CartDelete(BaseModel):
    CartID:int

class CartProduct(BaseModel):
    ProductName: str
    Description: str
    Price: float
    image: ImageOUT

class CartOut(BaseModel):
    CartID:int
    ProductID: int
    Quantity: int
    Product_info:CartProduct



class AddressCreate(BaseModel):
    door_no: str
    landmark: str
    pincode: str

class AddressUpdate(BaseModel):
    door_no: str = None
    landmark: str = None
    pincode: str = None
    

class AddressResponse(BaseModel):
    AddressID: int
    door_no: str
    landmark: str = None
    pincode: str



class AddressCreateResponse(BaseModel):
    message: str = "Address created successfully"
    door_no: str
    landmark: str = None
    pincode: str


class AddressUpdateResponse(BaseModel):
    message: str = "Address updated successfully"
    address: AddressResponse


class AddressDeleteResponse(BaseModel):
    message: str = "Address deleted successfully"
    address: AddressResponse

class CheckoutItem(BaseModel):
    ProductID:int
    CartID: int
    Quantity: int
    Price:int 
    ProductName:str

class Checkout(BaseModel):
    Items:list[CheckoutItem]
    total_price:float

class OrderResponse(BaseModel):
    OrderID:int
    TotalPrice:float

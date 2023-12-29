from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from fastapi import UploadFile

class UserBase(BaseModel):
    username:str
    password:str
    
class UserCreate(UserBase):
    email:str
    is_admin: bool = False

class UserUpdate(BaseModel):
    email:str
    username:str
    
class UserOut(BaseModel):
    username: str
    email:str
    created_at: datetime


class UserLogin(BaseModel):
    username:str
    password:str

class Token(BaseModel):
    accessToken: str

class TokenData(BaseModel):
     id:int





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
    Quantity: int

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

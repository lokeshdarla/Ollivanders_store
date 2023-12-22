from pydantic import BaseModel,conint
from typing import Optional
from datetime import datetime

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
    access_token: str
    token_type: str
    id:int

class TokenData(BaseModel):
     id:int





class ProductBase(BaseModel):
    ProductName: str
    Description: str
    Price: float
    units: int
    in_stock: bool

class ProductCreate(ProductBase):
    pass

class ProductUpdate(ProductBase):
    pass

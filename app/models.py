from sqlalchemy import Column, String, Boolean, Integer, TIMESTAMP, text,ForeignKey,VARCHAR,DECIMAL,LargeBinary
from .database import Base
from sqlalchemy.orm import relationship


#table for users
class User(Base):
    __tablename__="Users"

    id=Column(Integer,primary_key=True,nullable=False)
    username=Column(String,nullable=False,unique=True)
    email=Column(String,nullable=False,unique=True)
    password=Column(String,nullable=False)
    created_at=Column(TIMESTAMP,nullable=False,server_default=text('now()'))
    is_admin = Column(Boolean, default=False)


class ProductImage(Base):
    __tablename__ = 'ProductsImages'

    ImageID = Column(Integer, primary_key=True, autoincrement=True)
    Image = Column(LargeBinary)

class Product(Base):
    __tablename__ = 'Products'

    ProductID = Column(Integer, primary_key=True, autoincrement=True)
    ProductName = Column(String, nullable=False)
    Description = Column(String, nullable=False)
    Price = Column(DECIMAL(10, 2))
    units = Column(Integer, nullable=False)
    ImageID = Column(Integer, ForeignKey('ProductsImages.ImageID'))


class Cart(Base):
    __tablename__ = 'cart'

    CartID = Column(Integer, primary_key=True, autoincrement=True)
    UserID = Column(Integer, ForeignKey('Users.id'))
    ProductID = Column(Integer, ForeignKey('Products.ProductID'))
    Quantity = Column(Integer)
    # Add other fields as needed

from sqlalchemy import Column, String, Boolean, Integer, TIMESTAMP, text,Float, ForeignKey, DECIMAL, LargeBinary, UUID
from sqlalchemy.dialects.postgresql import UUID as PostgreSQLUUID
from .database import Base
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__ = "Users"
    
    id = Column(PostgreSQLUUID(as_uuid=True), primary_key=True, nullable=False,unique=True, server_default=text('gen_random_uuid()'))
    username = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    picture = Column(String, unique=True)
    password = Column(String, nullable=False)
    created_at = Column(TIMESTAMP, nullable=False, server_default=text('now()'))
    is_admin = Column(Boolean, default=False)
    carts = relationship("Cart", back_populates="user")
    addresses = relationship("Address", back_populates="user")

# class ProductImage(Base):
#     __tablename__ = 'ProductsImages'

#     ImageID = Column(Integer, primary_key=True, autoincrement=True)
#     Image = Column(LargeBinary)

class Product(Base):
    __tablename__ = 'Products'

    ProductID = Column(Integer, primary_key=True, autoincrement=True)
    ProductName = Column(String, nullable=False)
    Description = Column(String, nullable=False)
    Price = Column(DECIMAL(10, 2))
    units = Column(Integer, nullable=False)
    ImageURL=Column(String,nullable=False)
    created_at = Column(TIMESTAMP, nullable=False, server_default=text('now()'))
    # ImageID = Column(Integer, ForeignKey('ProductsImages.ImageID'))
    # image = relationship("ProductImage")

class Cart(Base):
    __tablename__ = 'cart'

    CartID = Column(Integer, primary_key=True, autoincrement=True)
    UserID = Column(PostgreSQLUUID(as_uuid=True), ForeignKey('Users.id'))
    ProductID = Column(Integer, ForeignKey('Products.ProductID'))
    Quantity = Column(Integer)
    user = relationship("User", back_populates="carts")
    product = relationship("Product")

class Address(Base):
    __tablename__ = 'address'
    
    AddressID = Column(Integer, primary_key=True, autoincrement=True, nullable=False)
    door_no = Column(String, nullable=False)
    landmark = Column(String)
    pincode = Column(String)
    UserID = Column(PostgreSQLUUID(as_uuid=True), ForeignKey('Users.id'))
    user = relationship("User", back_populates="addresses")
    

class Order(Base):
    __tablename__ = "orders"
    id = Column(Integer, primary_key=True, index=True)
    UserID = Column(PostgreSQLUUID(as_uuid=True), ForeignKey('Users.id'))
    total_price = Column(Float)
    items = relationship("OrderItem", back_populates="order")

class OrderItem(Base):
    __tablename__ = "order_items"
    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(Integer, ForeignKey("orders.id"))
    item_id = Column(Integer, ForeignKey('Products.ProductID'))
    quantity = Column(Integer)
    order = relationship("Order", back_populates="items")
    item = relationship("Product")
    
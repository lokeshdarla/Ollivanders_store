from sqlalchemy import Column, String, Boolean, Integer, TIMESTAMP, text,ForeignKey
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

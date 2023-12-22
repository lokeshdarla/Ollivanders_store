from fastapi import FastAPI
from .import models
from .database import engine
#from .routers import todo,user,auth,post,vote
from fastapi.middleware.cors import CORSMiddleware
from .routers import user,auth,product,cart

origins = [
    "*"
]
#models.Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user.router)
app.include_router(auth.router)
app.include_router(product.router)
app.include_router(cart.router)

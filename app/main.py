from fastapi import FastAPI
#from .routers import todo,user,auth,post,vote
from fastapi.middleware.cors import CORSMiddleware
from .routers import user,auth,product,cart
from .import models,database
origins = [
    "*"
]
#models.Base.metadata.create_all(bind=database.engine)

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

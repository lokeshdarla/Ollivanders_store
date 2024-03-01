from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import user,auth,product,cart,address,order



origins = [
    "*"
]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "HEAD", "POST", "DELETE","PATCH"],
    allow_headers=["*"],
)

app.include_router(user.router)
app.include_router(auth.router)
app.include_router(product.router)
app.include_router(cart.router)
app.include_router(address.router)
app.include_router(order.router)

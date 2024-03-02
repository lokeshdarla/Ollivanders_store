from pydantic_settings import BaseSettings,SettingsConfigDict
from pydantic import ConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", case_sensitive=True)
    DATABASE_HOSTNAME: str
    DATABASE_PORT: str
    DATABASE_PASSWORD: str
    DATABASE_NAME: str
    DATABASE_USERNAME: str
    SECRET_KEY: str
    ALGORITHM: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int
    GOOGLE_CLIENT_ID: str
    GOOGLE_CLIENT_SECRET:str
    GOOGLE_REDIRECT_URI:str
    CLIENT_BASE_URL:str
    STRIPE_API_KEY:str
    STRIPE_SECRET_KEY:str

settings=Settings()

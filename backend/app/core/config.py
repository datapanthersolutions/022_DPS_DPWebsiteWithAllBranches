from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """App settings, read from environment variables (or a local .env file)."""

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    app_name: str = "Data Panther API"
    environment: str = "development"  # development | staging | production
    debug: bool = False
    api_prefix: str = "/api/v1"

    # Origins allowed to call the API from a browser (the website).
    # In .env, set as a JSON list: CORS_ORIGINS=["https://datapanthersolutions.com"]
    cors_origins: list[str] = ["http://localhost:3000"]


@lru_cache
def get_settings() -> Settings:
    return Settings()

from functools import lru_cache

from pydantic import SecretStr
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

    # Postgres connection. Matches the local database from docker-compose.yml.
    database_url: str = "postgresql://datapanther:datapanther@localhost:5432/datapanther"

    # Website chat assistant (POST /api/v1/chat), powered by Claude.
    anthropic_api_key: SecretStr = SecretStr("")
    chat_model: str = "claude-opus-5-5"
    chat_effort: str = "low"  # low | medium | high. Low keeps replies quick for website chat.
    chat_max_output_tokens: int = 4096
    chat_max_messages: int = 30  # longest conversation accepted, counting both sides
    chat_max_message_chars: int = 2000  # longest single visitor message
    # Per visitor IP. Kept in memory, so each API process counts separately.
    chat_rate_per_minute: int = 8
    chat_rate_per_day: int = 120

    @property
    def chat_enabled(self) -> bool:
        return bool(self.anthropic_api_key.get_secret_value())


@lru_cache
def get_settings() -> Settings:
    return Settings()

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

    # Postgres connection. Matches the local database from docker-compose.yml.
    database_url: str = "postgresql://datapanther:datapanther@localhost:5432/datapanther"

    # HubSpot (docs/integrations/hubspot.md). Forms are submitted server-side.
    hubspot_portal_id: str = ""
    hubspot_access_token: str = ""  # private app token, scope "forms"; optional but recommended
    hubspot_contact_form_id: str = ""
    hubspot_newsletter_form_id: str = ""
    hubspot_talent_form_id: str = ""

    # GA4 Measurement Protocol (docs/integrations/ga4.md). Server-side conversion events.
    ga4_measurement_id: str = ""
    ga4_api_secret: str = ""

    @property
    def hubspot_enabled(self) -> bool:
        return bool(self.hubspot_portal_id)

    @property
    def ga4_enabled(self) -> bool:
        return bool(self.ga4_measurement_id and self.ga4_api_secret)


@lru_cache
def get_settings() -> Settings:
    return Settings()

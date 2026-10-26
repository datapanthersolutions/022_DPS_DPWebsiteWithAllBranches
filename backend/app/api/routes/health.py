from fastapi import APIRouter
from pydantic import BaseModel

from app.core.config import get_settings

router = APIRouter(tags=["health"])


class Health(BaseModel):
    status: str
    environment: str


@router.get("/health", response_model=Health)
def health() -> Health:
    """Liveness check used by Docker and load balancers."""
    return Health(status="ok", environment=get_settings().environment)

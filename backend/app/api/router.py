from fastapi import APIRouter

from app.api.routes import health, leads

# All versioned API routes. Add new route modules here.
api_router = APIRouter()
api_router.include_router(health.router)
api_router.include_router(leads.router)

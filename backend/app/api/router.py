from fastapi import APIRouter

from app.api.routes import health

# All versioned API routes. Add new route modules here, e.g.:
#   from app.api.routes import contact
#   api_router.include_router(contact.router, prefix="/contact")
api_router = APIRouter()
api_router.include_router(health.router)

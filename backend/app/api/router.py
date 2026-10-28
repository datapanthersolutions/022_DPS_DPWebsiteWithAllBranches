from fastapi import APIRouter

from app.api.routes import chat, health

# All versioned API routes. Add new route modules here.
api_router = APIRouter()
api_router.include_router(health.router)
api_router.include_router(chat.router)

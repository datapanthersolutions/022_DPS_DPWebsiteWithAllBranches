import logging
from contextlib import asynccontextmanager

import anthropic
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.router import api_router
from app.core.config import get_settings

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(name)s: %(message)s")


@asynccontextmanager
async def lifespan(app: FastAPI):
    settings = get_settings()
    # One Claude client for the whole process (connection pooling). Retries 429/5xx before streaming starts.
    app.state.anthropic = (
        anthropic.AsyncAnthropic(
            api_key=settings.anthropic_api_key.get_secret_value(),
            timeout=anthropic.Timeout(60.0, connect=5.0),
            max_retries=2,
        )
        if settings.chat_enabled
        else None
    )
    if app.state.anthropic is None:
        logging.getLogger(__name__).warning("ANTHROPIC_API_KEY not set: chat assistant disabled")
    yield
    if app.state.anthropic is not None:
        await app.state.anthropic.close()


def create_app() -> FastAPI:
    settings = get_settings()
    is_prod = settings.environment == "production"

    app = FastAPI(
        title=settings.app_name,
        debug=settings.debug,
        lifespan=lifespan,
        # Hide the interactive docs in production.
        docs_url=None if is_prod else "/docs",
        redoc_url=None,
        openapi_url=None if is_prod else "/openapi.json",
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins,
        allow_methods=["GET", "POST"],
        allow_headers=["Content-Type"],
        expose_headers=["Retry-After"],  # the chat widget reads it on 429
    )

    app.include_router(api_router, prefix=settings.api_prefix)
    return app


app = create_app()

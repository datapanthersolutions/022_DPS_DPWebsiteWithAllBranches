import httpx2
from fastapi import Request

# One shared client for outbound calls (HubSpot, GA4), created in app.main's lifespan.
TIMEOUT = httpx2.Timeout(10.0, connect=5.0)


def get_http(request: Request) -> httpx2.AsyncClient:
    return request.app.state.http


def client_ip(request: Request) -> str | None:
    """Visitor IP. The site sits behind Cloudflare, which sends the real IP in CF-Connecting-IP."""
    ip = request.headers.get("cf-connecting-ip") or request.headers.get("x-forwarded-for", "").split(",")[0]
    return ip.strip() or (request.client.host if request.client else None)

from fastapi import Request


def client_ip(request: Request) -> str:
    """Visitor IP. Behind Cloudflare the real IP is in CF-Connecting-IP; other proxies use X-Forwarded-For.

    These headers can be forged when the API is reachable directly, so in production only expose the
    API through the proxy.
    """
    ip = request.headers.get("cf-connecting-ip") or request.headers.get("x-forwarded-for", "").split(",")[0]
    return ip.strip() or (request.client.host if request.client else "unknown")

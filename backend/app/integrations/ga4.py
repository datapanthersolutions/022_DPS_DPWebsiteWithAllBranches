"""GA4 Measurement Protocol: send events from the server. Docs: docs/integrations/ga4.md"""

import logging
import uuid

import httpx2

from app.core.config import Settings

log = logging.getLogger(__name__)

URL = "https://www.google-analytics.com/mp/collect"


async def send_event(
    http: httpx2.AsyncClient,
    settings: Settings,
    name: str,
    params: dict[str, str | int | float] | None = None,
    client_id: str | None = None,
    session_id: str | None = None,
) -> None:
    """Send one GA4 event. Never raises: analytics must not break the request that triggered it.

    Only call this for visitors who accepted analytics cookies. `client_id` comes from the
    browser's _ga cookie so the event joins the visitor's session; without it a random id is used
    and the event is counted but not attributed to a traffic source.
    """
    if not settings.ga4_enabled:
        return
    event_params: dict[str, str | int | float] = {**(params or {}), "engagement_time_msec": 1}
    if session_id:
        event_params["session_id"] = session_id
    body = {
        "client_id": client_id or f"{uuid.uuid4().int % 10**10}.{uuid.uuid4().int % 10**10}",
        "events": [{"name": name, "params": event_params}],
    }
    try:
        res = await http.post(
            URL,
            params={"measurement_id": settings.ga4_measurement_id, "api_secret": settings.ga4_api_secret},
            json=body,
        )
        if res.status_code >= 300:
            log.warning("GA4 rejected event %s: %s", name, res.status_code)
    except httpx2.HTTPError as e:
        log.warning("GA4 unreachable for event %s: %s", name, e)

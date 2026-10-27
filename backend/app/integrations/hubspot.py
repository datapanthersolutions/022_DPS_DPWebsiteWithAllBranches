"""HubSpot Forms API (v3 submissions). Docs: docs/integrations/hubspot.md"""

import logging

import httpx2

from app.core.config import Settings

log = logging.getLogger(__name__)

BASE = "https://api.hsforms.com/submissions/v3/integration"


class HubSpotError(Exception):
    pass


async def submit_form(
    http: httpx2.AsyncClient,
    settings: Settings,
    form_id: str,
    fields: dict[str, str],
    context: dict[str, str],
) -> None:
    """Submit one form to HubSpot. Raises HubSpotError if HubSpot rejects it or can't be reached.

    `fields` keys must match the internal property names on the HubSpot form (email, firstname, ...).
    `context` may carry hutk (the hubspotutk cookie), pageUri, pageName and ipAddress, which link
    the submission to the visitor's browsing history in HubSpot.
    """
    headers = {}
    if settings.hubspot_access_token:
        # Authenticated endpoint: higher rate limits, can't be abused from a browser.
        url = f"{BASE}/secure/submit/{settings.hubspot_portal_id}/{form_id}"
        headers["Authorization"] = f"Bearer {settings.hubspot_access_token}"
    else:
        url = f"{BASE}/submit/{settings.hubspot_portal_id}/{form_id}"

    body = {
        "fields": [{"name": k, "value": v} for k, v in fields.items() if v],
        "context": {k: v for k, v in context.items() if v},
    }
    try:
        res = await http.post(url, json=body, headers=headers)
    except httpx2.HTTPError as e:
        raise HubSpotError(f"HubSpot unreachable: {e}") from e
    if res.status_code >= 400:
        # HubSpot explains validation problems (e.g. unknown field names) in the body.
        log.error("HubSpot rejected form %s: %s %s", form_id, res.status_code, res.text[:500])
        raise HubSpotError(f"HubSpot returned {res.status_code}")

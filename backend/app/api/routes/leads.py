"""Website form submissions -> HubSpot (CRM) + GA4 (server-side conversion events).

Docs: docs/integrations/hubspot.md and docs/integrations/ga4.md
"""

import logging
from typing import Annotated

import httpx2
from fastapi import APIRouter, BackgroundTasks, Depends, HTTPException, Request

from app.core.config import Settings, get_settings
from app.core.http import client_ip, get_http
from app.integrations import ga4, hubspot
from app.schemas.leads import ContactLead, LeadAccepted, Subscription, Tracking

log = logging.getLogger(__name__)
router = APIRouter(prefix="/leads", tags=["leads"])

SettingsDep = Annotated[Settings, Depends(get_settings)]
HttpDep = Annotated[httpx2.AsyncClient, Depends(get_http)]


def _context(t: Tracking, request: Request) -> dict[str, str]:
    return {
        "hutk": t.hutk or "",
        "pageUri": t.page_uri or "",
        "pageName": t.page_name or "",
        "ipAddress": client_ip(request) or "",
    }


async def _submit(
    http: httpx2.AsyncClient,
    settings: Settings,
    form_id: str,
    fields: dict[str, str],
    tracking: Tracking,
    request: Request,
    background: BackgroundTasks,
    event: str,
    event_params: dict[str, str],
) -> None:
    if not settings.hubspot_enabled or not form_id:
        if settings.environment == "production":
            raise HTTPException(503, "Form handling is not configured")
        # Local development without HubSpot credentials: accept and log instead.
        log.warning("HubSpot not configured; lead not sent: %s", fields.get("email"))
        return
    try:
        await hubspot.submit_form(http, settings, form_id, fields, _context(tracking, request))
    except hubspot.HubSpotError as e:
        raise HTTPException(502, "Could not submit the form, please try again or email us") from e

    # Conversion counted server-side, only for visitors who accepted analytics cookies.
    if tracking.analytics_consent:
        background.add_task(
            ga4.send_event, http, settings, event, event_params, tracking.ga_client_id, tracking.ga_session_id
        )


@router.post("/contact", response_model=LeadAccepted)
async def contact(
    lead: ContactLead, request: Request, background: BackgroundTasks, settings: SettingsDep, http: HttpDep
) -> LeadAccepted:
    if lead.website:  # honeypot filled: pretend success, drop it
        return LeadAccepted()
    first, _, last = lead.full_name.strip().partition(" ")
    fields = {"email": lead.email, "firstname": first, "lastname": last.strip(), "message": lead.message}
    await _submit(
        http, settings, settings.hubspot_contact_form_id, fields, lead.tracking, request, background,
        event="generate_lead", event_params={"form_name": "contact"},
    )  # fmt: skip
    return LeadAccepted()


@router.post("/subscribe", response_model=LeadAccepted)
async def subscribe(
    sub: Subscription, request: Request, background: BackgroundTasks, settings: SettingsDep, http: HttpDep
) -> LeadAccepted:
    if sub.website:
        return LeadAccepted()
    form_id = {
        "newsletter": settings.hubspot_newsletter_form_id,
        "talent_community": settings.hubspot_talent_form_id,
    }[sub.list]
    await _submit(
        http, settings, form_id, {"email": sub.email}, sub.tracking, request, background,
        event="sign_up", event_params={"method": sub.list},
    )  # fmt: skip
    return LeadAccepted()

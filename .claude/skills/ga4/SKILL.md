---
name: ga4
description: Work on Google Analytics 4 for the Data Panther site - the browser Google tag (configured in GTM) and server-side Measurement Protocol events sent from FastAPI (generate_lead, sign_up, and future purchase/booking events). Use when adding or changing a conversion, sending an event from the backend, debugging missing or double-counted GA4 data, or changing GA4 IDs/secrets.
---

# GA4

Full reference: `docs/integrations/ga4.md`. Read it first.

## Split of responsibilities
- **Browser (GTM Google tag):** page views (history changes via enhanced measurement), `contact_click`. No code in the repo.
- **Server (FastAPI):** conversions confirmed by the backend. `backend/app/integrations/ga4.py` → `send_event(http, settings, name, params, client_id, session_id)`, called as a `BackgroundTasks` task from `backend/app/api/routes/leads.py` after HubSpot accepts the lead.
- `generate_lead` and `sign_up` are sent **server-side only**. Never add a GTM GA4 event tag for them, because that would double count.

## Where things are
- IDs and secret: `GA4_MEASUREMENT_ID`, `GA4_API_SECRET` in `backend/.env` (`backend/app/core/config.py`, `settings.ga4_enabled`)
- Browser IDs: `trackingContext()` in `frontend/lib/analytics.ts` reads `_ga` (client ID) and `_ga_*` (session ID, GS1 or GS2 format), **only with consent**
- Schema: `Tracking` in `backend/app/schemas/leads.py`

## Rules
- Send server events only when `tracking.analytics_consent` is true.
- `send_event` must never raise; analytics must not break a request. Keep it in a background task.
- The API secret stays in backend env vars, never in frontend code or git.
- Use GA4 recommended event names and params (`purchase` with `currency`, `value`, `transaction_id`, etc.).

## Adding a server-side event
1. Make sure the request includes the `tracking` object (the frontend's `submitLead()` adds it; for other endpoints, include `trackingContext()`).
2. After the action succeeds: `background.add_task(ga4.send_event, http, settings, "<name>", {...}, tracking.ga_client_id, tracking.ga_session_id)`, guarded by `tracking.analytics_consent`.
3. Add a test like those in `backend/tests/test_leads.py`, which use `httpx2.MockTransport` and check the `/mp/collect` call.
4. Update `docs/integrations/ga4.md` and remind the user to mark it as a key event in GA4.

## Verify
```bash
cd backend && .venv/bin/ruff check . && .venv/bin/pytest -q
```
To check a payload against Google's validator, send the same body to `https://www.google-analytics.com/debug/mp/collect`.

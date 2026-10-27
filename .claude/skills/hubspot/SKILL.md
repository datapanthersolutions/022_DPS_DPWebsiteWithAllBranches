---
name: hubspot
description: Work on the HubSpot CRM integration of the Data Panther site - website forms submitted through FastAPI to the HubSpot Forms API (contact, newsletter, talent community), the hutk visitor link, and the HubSpot tracking code in GTM. Use when adding or changing a form or form field, mapping fields to HubSpot properties, debugging leads that don't reach HubSpot, or changing HubSpot IDs/tokens.
---

# HubSpot

Full reference: `docs/integrations/hubspot.md`. Read it first.

## Where things are
- API endpoints: `backend/app/api/routes/leads.py` (`POST /api/v1/leads/contact`, `POST /api/v1/leads/subscribe`)
- HubSpot client: `backend/app/integrations/hubspot.py` → `submit_form(http, settings, form_id, fields, context)`. It uses the authenticated `/secure/submit` endpoint when `HUBSPOT_ACCESS_TOKEN` is set.
- Request schemas: `backend/app/schemas/leads.py` (`ContactLead`, `Subscription`, `Tracking`)
- Settings: `HUBSPOT_PORTAL_ID`, `HUBSPOT_ACCESS_TOKEN`, `HUBSPOT_*_FORM_ID` in `backend/.env` (`backend/app/core/config.py`)
- Frontend: `submitLead()` in `frontend/lib/api.ts`. Forms are `frontend/components/ContactView.tsx` and `Subscribe` in `frontend/components/sections/Sections.tsx`; `list` comes from `content/types.ts` / the page content.
- Tracking code and SPA page views: GTM Custom HTML tags (see the doc). There is no HubSpot script in the repo.

## Adding a field to a form
1. Add it to the pydantic model (with `max_length`) and to the `fields` dict in `leads.py`, keyed by the **HubSpot internal property name**.
2. Add the input to the React form and pass it to `submitLead()`.
3. Tell the user to add the same field (same internal name) to the HubSpot form, or HubSpot rejects the submission with 400.
4. Update the forms table in `docs/integrations/hubspot.md` and extend `backend/tests/test_leads.py`.

## Adding a new form
New HubSpot form → new `HUBSPOT_<NAME>_FORM_ID` setting → new `list` value or new endpoint → frontend form → dataLayer success event (`gtm` skill) → GA4 server event if it is a conversion (`ga4` skill) → docs and tests.

## Rules
- Submissions go through the API, never straight from the browser to HubSpot, and never with the token in frontend code.
- Keep the honeypot (`website` field) on every public form.
- Send `hutk` only with consent; `trackingContext()` already handles that.
- HubSpot's "collect data from non-HubSpot forms" must stay off, or forms get submitted twice.
- On HubSpot failure, return 502 so the site shows the email fallback. Never report success when the lead wasn't stored.

## Verify
```bash
cd backend && .venv/bin/ruff check . && .venv/bin/pytest -q
```
For a live check (user's HubSpot), submit a test contact and confirm it appears with its earlier page views on the timeline. API logs show `HubSpot rejected form <id>: <status> <reason>` on failures.

---
name: gtm
description: Work on the Google Tag Manager setup of the Data Panther website - the GTM snippet, Consent Mode defaults, the cookie banner's consent wiring, dataLayer events (track(), dp_page_view, generate_lead, sign_up, consent_update) and the matching GTM triggers/tags. Use when adding or renaming a tracking event, changing the container ID, debugging tags that don't fire, or touching cookie consent.
---

# Google Tag Manager

Full reference: `docs/integrations/gtm.md`, `docs/integrations/consent.md`, and the dataLayer table in `docs/integrations/README.md`. Read the relevant doc before changing anything.

## Where things are
- `frontend/lib/analytics.ts`: `GTM_ID`, `consentDefaultsScript`, `gtmScript()`, `track()`, `setConsent()`, `hasConsent()`, `trackingContext()`
- `frontend/app/layout.tsx`: injects consent defaults, then GTM, in `<head>`, plus the `<noscript>` iframe
- `frontend/components/analytics/RouteTracker.tsx`: `dp_page_view` on in-app navigation
- `frontend/components/layout/Floating.tsx`: cookie banner → `setConsent(true|false)`
- Container ID: `NEXT_PUBLIC_GTM_ID` in `frontend/.env.production` (read at **build** time)

## Rules
- Third-party tags (GA4, LinkedIn, HubSpot, Apollo, anything new) go **in GTM**, never as `<script>` in the Next.js code. Otherwise they escape consent control.
- Consent defaults must stay **before** the GTM snippet in `<head>`.
- The dataLayer event names are a contract with GTM triggers. When adding or renaming one, update the table in `docs/integrations/README.md` and say which GTM trigger or tag has to change. GTM is configured in its web UI, not in this repo.
- Push events with `track(name, params)` only after the action has actually succeeded (e.g. after the API returns OK).
- Prefer GA4 recommended event names.

## Adding an event
1. Call `track("event_name", {...})` from `@/lib/analytics` at the point of success.
2. Add a row to the dataLayer table in `docs/integrations/README.md`.
3. Tell the user which GTM Custom Event trigger and tags to create (name, type, consent signal).

## Verify
```bash
cd frontend && npx tsc --noEmit && npx next lint
NEXT_PUBLIC_GTM_ID=GTM-TEST123 npm run build   # then check out/index.html contains gtm.js?id=GTM-TEST123
```
In a browser, `window.dataLayer` should start with the `consent default` entry before `gtm.js`. Clicking Accept should add `consent update` and `consent_update`. Live tag behaviour is checked with GTM Preview mode, which the user has to run.

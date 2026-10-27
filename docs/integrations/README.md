# Marketing & analytics integrations

How Google Tag Manager, GA4, the LinkedIn Insight Tag, HubSpot and Apollo.io plug into the website (`frontend/`) and API (`backend/`).

**New to these tools? Start with the [beginner's guide](beginners-guide.md).** It explains each tool in plain language, with no technical background needed.

| Tool | What it does for us | Where it lives | Doc |
|---|---|---|---|
| Google Tag Manager | Loads and controls every other browser tag | Snippet in `frontend/app/layout.tsx`; tags configured in the GTM web UI | [gtm.md](gtm.md) |
| Google Analytics 4 | Traffic, sources, conversions | GTM (page views, clicks) + FastAPI (lead and sign-up conversions) | [ga4.md](ga4.md) |
| LinkedIn Insight Tag | LinkedIn ad conversions and retargeting | GTM only | [linkedin-insight-tag.md](linkedin-insight-tag.md) |
| HubSpot | CRM: contacts from forms, each contact's page visits | GTM (tracking code) + FastAPI (form submissions) | [hubspot.md](hubspot.md) |
| Apollo.io | Identifies which companies visit the site | GTM only | [apollo.md](apollo.md) |
| Cookie consent | Decides which of the above may run | Banner in `frontend/components/layout/Floating.tsx` | [consent.md](consent.md) |

## How it fits together

```
Visitor's browser                                          Our API (FastAPI)            Vendors
─────────────────                                          ─────────────────            ───────
<head>: consent defaults (all denied) → GTM container
          │
          ├─ Cookie banner: Accept ─► consent "granted" + `consent_update` event
          │
          └─ GTM fires, only with consent:
                Google tag ─────────────────────────────────────────────────────────► GA4
                LinkedIn Insight Tag ───────────────────────────────────────────────► LinkedIn
                HubSpot tracking code (sets hubspotutk cookie) ─────────────────────► HubSpot
                Apollo tracker ─────────────────────────────────────────────────────► Apollo

Contact / newsletter / talent form
   POST /api/v1/leads/{contact|subscribe}  ─────────►  validate, honeypot
   { fields, tracking: hutk, ga ids, page }             ├─ HubSpot Forms API ───────► HubSpot (contact created,
                                                        │                              linked to visits via hutk)
                                                        └─ GA4 Measurement Protocol ► GA4 (generate_lead / sign_up)
   on success: dataLayer `generate_lead` / `sign_up` ─► GTM ─► LinkedIn conversion
```

Why forms go through the API instead of HubSpot's embed:
- The site keeps its own form design.
- The HubSpot token and GA4 API secret stay on the server.
- Conversions are counted only when HubSpot has actually accepted the lead, and ad blockers can't drop them.

## Code map

| File | Role |
|---|---|
| `frontend/lib/analytics.ts` | GTM snippet, consent defaults, `track()`, `setConsent()`, reading `_ga` / `hubspotutk` cookies |
| `frontend/lib/api.ts` | `submitLead()`: posts a form plus tracking context to the API |
| `frontend/components/analytics/RouteTracker.tsx` | Pushes `dp_page_view` on in-app page changes |
| `frontend/components/layout/Floating.tsx` | Cookie banner → `setConsent()` |
| `frontend/components/ContactView.tsx` | Contact form → `submitLead("contact")` |
| `frontend/components/sections/Sections.tsx` (`Subscribe`) | Newsletter / talent community → `submitLead("subscribe")` |
| `backend/app/api/routes/leads.py` | `POST /api/v1/leads/contact`, `POST /api/v1/leads/subscribe` |
| `backend/app/integrations/hubspot.py` | HubSpot Forms API client |
| `backend/app/integrations/ga4.py` | GA4 Measurement Protocol client |
| `backend/app/core/config.py` | All IDs and secrets, read from env vars |

## dataLayer events (contract between the code and GTM)

| Event | Pushed when | Params | Used by |
|---|---|---|---|
| `consent_update` | Visitor clicks Accept or Reject | `consent`: `granted` / `denied` | Re-fires tags that were waiting for consent |
| `dp_page_view` | In-app navigation to another page (not the first load) | `page_path`, `page_location` | HubSpot page views |
| `generate_lead` | Contact form accepted by the API | `form_name`: `contact` | LinkedIn conversion |
| `sign_up` | Newsletter / talent form accepted by the API | `method`: `newsletter` / `talent_community` | LinkedIn conversion |

Renaming an event breaks the GTM triggers that listen for it. Change both together.

## What you need to provide

| # | Item | Example | Where it goes | Where to find it |
|---|---|---|---|---|
| 1 | GTM container ID | `GTM-ABC1234` | `frontend/.env.production` → `NEXT_PUBLIC_GTM_ID` | tagmanager.google.com → container (Web) |
| 2 | GA4 Measurement ID | `G-ABCDEF1234` | GTM variable + `backend/.env` → `GA4_MEASUREMENT_ID` | GA4 Admin → Data streams → Web |
| 3 | GA4 Measurement Protocol API secret | 22-char string | `backend/.env` → `GA4_API_SECRET` (**secret**) | Same data stream → Measurement Protocol API secrets |
| 4 | LinkedIn Partner ID | `1234567` | GTM variable | Campaign Manager → Analyze → Insight Tag |
| 5 | LinkedIn conversion IDs (lead, sign-up) | `12345678` | GTM tags | Campaign Manager → Conversion tracking |
| 6 | HubSpot Portal (Hub) ID | `12345678` | GTM variable + `backend/.env` → `HUBSPOT_PORTAL_ID` | HubSpot account menu |
| 7 | HubSpot data region | `na1` or `eu1` | GTM HubSpot tag (script URL) | Settings → Tracking code |
| 8 | HubSpot form GUIDs (contact, newsletter, talent community) | `1a2b3c4d-…` | `backend/.env` → `HUBSPOT_*_FORM_ID` | Marketing → Forms → form URL |
| 9 | HubSpot private app token, scope `forms` (recommended) | `pat-eu1-…` | `backend/.env` → `HUBSPOT_ACCESS_TOKEN` (**secret**) | Settings → Integrations → Private Apps |
| 10 | Apollo tracking snippet | JS snippet with your app ID | GTM Custom HTML tag | Apollo → Website Visitors → add domain |
| 11 | Public API URL | `https://api.datapanthersolutions.com` | `frontend/.env.production` → `NEXT_PUBLIC_API_URL`; add the site to `CORS_ORIGINS` | Wherever the backend is hosted |
| 12 | Updated Cookie and Privacy Policy text | n/a | `frontend/content/pages/cookies.ts`, `privacy.ts` | Your legal review (see [consent.md](consent.md)) |

Plus edit access (or admin access) to GTM, GA4, LinkedIn Campaign Manager, HubSpot and Apollo for whoever sets them up.

## Setup order

1. **HubSpot:** create the 3 forms and the private app, then fill in `backend/.env`. Forms start reaching the CRM right away.
2. **GA4:** create the property and the API secret, then fill in `backend/.env`.
3. **GTM:** create the container, then follow [gtm.md](gtm.md) to add the GA4, HubSpot, LinkedIn and Apollo tags.
4. **Frontend:** set `NEXT_PUBLIC_GTM_ID` and `NEXT_PUBLIC_API_URL`, then rebuild and deploy.
5. **Check:** test everything with GTM Preview mode, then publish the container.

## Local development

Without GTM or HubSpot settings, nothing breaks:
- With no `NEXT_PUBLIC_GTM_ID`, no tags load.
- With no HubSpot settings, the API accepts forms and only logs them. It returns 503 if `ENVIRONMENT=production`.
- With no GA4 settings, no server-side events are sent.

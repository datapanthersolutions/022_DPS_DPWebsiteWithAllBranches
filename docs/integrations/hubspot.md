# HubSpot

HubSpot is our CRM. It gets data from two places:

| Source | What it does | Where |
|---|---|---|
| **Tracking code**, via GTM | Records each visitor's page views and sets the `hubspotutk` cookie | GTM Custom HTML tags |
| **Form submissions**, via FastAPI | Creates or updates the contact, and links them to their earlier visits through `hutk` | `backend/app/integrations/hubspot.py`, `backend/app/api/routes/leads.py` |

Forms are posted to our API, not straight to HubSpot:
- The site keeps its own design.
- The API rejects spam (honeypot) and invalid emails before they reach the CRM.
- The token stays on the server.
- The GA4 conversion is sent only after HubSpot confirms the lead.

## Forms on the site

| Site form | Page | API call | HubSpot form (env var) | Fields sent |
|---|---|---|---|---|
| Contact | `/ContactUs/` | `POST /api/v1/leads/contact` | `HUBSPOT_CONTACT_FORM_ID` | `email`, `firstname`, `lastname`, `message` |
| Newsletter | `/blog/` | `POST /api/v1/leads/subscribe` (`list: newsletter`) | `HUBSPOT_NEWSLETTER_FORM_ID` | `email` |
| Talent community | `/careers/` | `POST /api/v1/leads/subscribe` (`list: talent_community`) | `HUBSPOT_TALENT_FORM_ID` | `email` |

The contact form has one "Full Name" box. The API splits it at the first space: `firstname` gets the first word, `lastname` gets the rest.

Every submission also sends a `context`, which links the contact to their browsing history in HubSpot:
- `hutk`: the visitor's `hubspotutk` cookie, sent only with consent
- `pageUri` and `pageName`
- `ipAddress`: from Cloudflare's `CF-Connecting-IP` header

## 1. HubSpot account setup

1. **Portal ID:** the account menu (top right) shows the Hub ID.
2. **Forms:** go to Marketing → Forms and create three forms ("Website - Contact", "Website - Newsletter", "Website - Talent community"). Each form's fields must use these **internal names**:
   - Contact: `email`, `firstname`, `lastname`, `message`. If `message` doesn't exist, create a multi-line text contact property with internal name `message`.
   - Newsletter and Talent: `email`.

   The form GUID is in the form editor URL (`…/forms/<portal>/editor/<GUID>/…`) or in its embed code (`formId`).
3. **Private app token** (recommended): Settings → Integrations → **Private Apps** → Create. Grant the `forms` scope and copy the token. On newer accounts this lives under Development → Legacy apps. With a token, the API uses HubSpot's authenticated endpoint, which has higher rate limits. Without one, it falls back to the public endpoint.
4. **Turn off "Collect data from website forms"** (Settings → Marketing → Forms → Non-HubSpot forms). Otherwise the tracking code would also capture our forms and create duplicate submissions.
5. **Turn off HubSpot's cookie banner** (see [consent.md](consent.md)).
6. Optional: set up an email notification or workflow on each form, so the team hears about new leads.

## 2. Backend

`backend/.env`:
```bash
HUBSPOT_PORTAL_ID=12345678
HUBSPOT_ACCESS_TOKEN=pat-eu1-...            # secret
HUBSPOT_CONTACT_FORM_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
HUBSPOT_NEWSLETTER_FORM_ID=...
HUBSPOT_TALENT_FORM_ID=...
```

How the API responds:

| Situation | API response | What the visitor sees |
|---|---|---|
| HubSpot accepted | 200 | "Message sent" / "Subscribed ✓" |
| Honeypot filled (bot) | 200, nothing sent | (bot) |
| Invalid email | 422 | Error message |
| HubSpot rejected or unreachable | 502, logged with HubSpot's reason | Error message with email fallback |
| Not configured, `ENVIRONMENT=production` | 503 | Error message |
| Not configured, development | 200, lead only logged | Success |

HubSpot's error body names the problem. It is often a field name that doesn't exist on the form. Check the API logs for `HubSpot rejected form`.

## 3. GTM (tracking code)

| Tag | Type | Trigger | Consent |
|---|---|---|---|
| **HubSpot - tracking code** | Custom HTML (below) | `All Pages` + `CE - consent_update` | `analytics_storage`, once per page |
| **HubSpot - SPA page view** | Custom HTML (below) | `CE - dp_page_view` | `analytics_storage` |

Tracking code: copy the exact script from HubSpot (Settings → Tracking & Analytics → Tracking code). It looks like this, and EU-hosted accounts use `js-eu1.hs-scripts.com`:
```html
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/{{HubSpot Portal ID}}.js"></script>
```

The site changes pages without reloading, so page views after the first one have to be sent manually:
```html
<script>
  var _hsq = window._hsq = window._hsq || [];
  _hsq.push(['setPath', {{DLV - page_path}}]);
  _hsq.push(['trackPageView']);
</script>
```
If a contact's timeline shows each page twice, HubSpot is already detecting page changes on its own. Remove the SPA tag in that case.

## Checking it works
1. **Backend tests:** `cd backend && pytest tests/test_leads.py` checks the URL, token, field mapping and context.
2. In GTM Preview, accept cookies, browse 2–3 pages, then submit the contact form with a test email.
3. In HubSpot → Contacts, the test contact should appear with the form submission. Its timeline should list the pages viewed **before** submitting, which proves `hutk` linking works.
4. Delete the test contact afterwards.

## Later: marketing consent
If HubSpot's GDPR features are on, newsletter sign-ups may need `legalConsentOptions` (consent text plus subscription type ID) in the submission. Add them in `hubspot.submit_form` when needed. See HubSpot's Forms API docs.

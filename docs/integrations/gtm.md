# Google Tag Manager (GTM)

GTM is the only third-party script the site loads itself. GA4, LinkedIn, HubSpot and Apollo are all added as tags **inside GTM**, so marketing can change them without a code deploy.

## In the code (already done)

| What | Where |
|---|---|
| Consent defaults (run first) | `consentDefaultsScript` in `frontend/lib/analytics.ts`, injected in `<head>` by `frontend/app/layout.tsx` |
| GTM loader | `gtmScript()` in `frontend/lib/analytics.ts`, injected in `<head>` when `NEXT_PUBLIC_GTM_ID` is set |
| `<noscript>` fallback | Top of `<body>` in `frontend/app/layout.tsx` |
| Page changes inside the site | `frontend/components/analytics/RouteTracker.tsx` → `dp_page_view` |
| Custom events | `track()` in `frontend/lib/analytics.ts` |

Set the container ID at build time. The site is a static export, so the ID is baked in when you build:

```bash
# frontend/.env.production (public value, safe to commit)
NEXT_PUBLIC_GTM_ID=GTM-ABC1234
```

## One-time GTM setup (in tagmanager.google.com)

### 1. Container
Create a **Web** container for `datapanthersolutions.com`. Then go to Admin → Container Settings and tick **Enable consent overview**.

### 2. Built-in variables
Variables → Configure → enable **Click URL**, **Page Path** and **Page URL**.

### 3. User-defined variables

| Name | Type | Value |
|---|---|---|
| `GA4 Measurement ID` | Constant | `G-…` |
| `LinkedIn Partner ID` | Constant | `1234567` |
| `HubSpot Portal ID` | Constant | `12345678` |
| `DLV - page_path` | Data Layer Variable | `page_path` |
| `DLV - form_name` | Data Layer Variable | `form_name` |
| `DLV - method` | Data Layer Variable | `method` |

### 4. Triggers

| Name | Type | Fires on |
|---|---|---|
| `All Pages` | Page View | All (built in) |
| `Init - All Pages` | Initialization | All (built in, "Initialization - All Pages") |
| `CE - consent_update` | Custom Event | Event name `consent_update` |
| `CE - dp_page_view` | Custom Event | Event name `dp_page_view` |
| `CE - generate_lead` | Custom Event | Event name `generate_lead` |
| `CE - sign_up` | Custom Event | Event name `sign_up` |
| `Click - contact links` | Click - Just Links | Some link clicks: Click URL matches RegEx `^(mailto:\|tel:\|https://wa\.me/)` |

### 5. Tags
Each tool's doc has the exact steps. Summary:

| Tag | Type | Triggers | Consent required |
|---|---|---|---|
| GA4 - Google tag | Google Tag | `Init - All Pages`, `CE - consent_update` | `analytics_storage` |
| GA4 - contact click | GA4 Event | `Click - contact links` | (inherits) |
| HubSpot - tracking code | Custom HTML | `All Pages`, `CE - consent_update` | `analytics_storage` |
| HubSpot - SPA page view | Custom HTML | `CE - dp_page_view` | `analytics_storage` |
| LinkedIn - Insight Tag | LinkedIn Insight (template) | `All Pages`, `CE - consent_update` | `ad_storage` |
| LinkedIn - lead conversion | LinkedIn Insight (template) | `CE - generate_lead` | `ad_storage` |
| LinkedIn - sign-up conversion | LinkedIn Insight (template) | `CE - sign_up` | `ad_storage` |
| Apollo - website tracker | Custom HTML | `All Pages`, `CE - consent_update` | `ad_storage` |

### Consent settings per tag
In each tag, open Advanced Settings and set:
- **Consent Settings:** Require additional consent for tag to fire → add the signal from the table.
- **Tag firing options:** Once per page.

Tags fire on both the page trigger and `consent_update`:
- A returning visitor who already accepted is tracked on page load.
- A new visitor is tracked the moment they click Accept.
- "Once per page" stops a tag running twice.

### 6. Test and publish
1. Click **Preview** and open the live site (or a staging build with the same container ID).
2. Before accepting cookies, Tag Assistant should show every tag as **Not fired: blocked by consent**.
3. Click Accept: the tags fire on `consent_update`.
4. Navigate between pages: `dp_page_view` appears and the HubSpot page-view tag fires.
5. Submit the contact form: `generate_lead` appears and the LinkedIn lead conversion fires.
6. **Submit** (publish) the container with a version name such as "GA4 + LinkedIn + HubSpot + Apollo".

## Adding a new event

1. In code, call `track("event_name", { param: value })` from `@/lib/analytics`. Use GA4's [recommended event names](https://support.google.com/analytics/answer/9267735) where one fits.
2. Add the event to the dataLayer table in [README.md](README.md#datalayer-events-contract-between-the-code-and-gtm).
3. In GTM, add a Custom Event trigger and the tags that should fire on it, then Preview and Publish.

## Gotchas

- Don't add GA4, HubSpot, LinkedIn or Apollo `<script>` tags to the Next.js code. Add them in GTM, or consent control is lost.
- The ID is read at **build** time. Changing `.env.production` needs a rebuild and deploy.
- GTM's "History Change" trigger also works for page changes. Prefer `dp_page_view`, because it fires once per real page change.

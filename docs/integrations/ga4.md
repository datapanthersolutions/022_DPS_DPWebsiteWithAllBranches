# Google Analytics 4 (GA4)

GA4 gets data from two places:

| Source | What it records | Code |
|---|---|---|
| **Browser**, via the Google tag in GTM | Page views (including in-app page changes), scrolls, outbound and contact-link clicks, traffic sources | None: configured in GTM |
| **Server**, via FastAPI and the [Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/ga4) | Conversions confirmed by the backend: `generate_lead` (contact form) and `sign_up` (newsletter / talent community) | `backend/app/integrations/ga4.py`, called from `backend/app/api/routes/leads.py` |

Conversions come from the server so they count only when HubSpot actually accepted the lead, and so ad blockers can't drop them. The future booking and payment events belong here too (see [below](#adding-server-side-events-bookings-payments)).

## 1. GA4 property

1. In analytics.google.com, create a property and a **Web** data stream for `https://datapanthersolutions.com`. Copy the **Measurement ID** (`G-…`).
2. Open the stream → **Enhanced measurement** → gear icon → Page views → keep **"Page changes based on browser history events"** ticked. This is what tracks in-app navigation.
3. In the same stream, open **Measurement Protocol API secrets** → Create. Copy the full value. The UI can cut it off visually, and a full secret is usually 22 characters.
4. Go to Admin → Events (or Key events). Once the first `generate_lead` and `sign_up` arrive, mark both as **key events**.
5. Optional: under Admin → Data streams → Configure tag settings → List unwanted referrals, add `api.hsforms.com` if it shows up as a referrer.

## 2. Backend (server-side events)

`backend/.env`:
```bash
GA4_MEASUREMENT_ID=G-ABCDEF1234
GA4_API_SECRET=xxxxxxxxxxxxxxxxxxxxxx   # secret, never in frontend code or git
```

How it works:
- The website sends `tracking.ga_client_id` (from the `_ga` cookie) and `tracking.ga_session_id` (from the `_ga_<stream>` cookie) with each form, **only if the visitor accepted cookies**.
- After HubSpot accepts the form, `leads.py` queues `ga4.send_event(...)` as a background task, so the visitor never waits for Google.
- The event uses the visitor's own client and session IDs, so it is credited to their session and traffic source.
- If consent was given but GA was blocked (no `_ga` cookie), a random client ID is used. The conversion is counted but shows no source.
- `send_event` never raises. A GA4 outage can't break a form.

## 3. GTM (browser)

| Tag | Settings |
|---|---|
| **GA4 - Google tag** | Type **Google Tag**, Tag ID `{{GA4 Measurement ID}}`. Triggers `Init - All Pages` + `CE - consent_update`. Consent: require `analytics_storage`. Once per page. |
| **GA4 - contact click** | Type **Google Analytics: GA4 Event**, Measurement ID `{{GA4 Measurement ID}}`, event name `contact_click`, parameter `link_url` = `{{Click URL}}`. Trigger `Click - contact links`. |

Do **not** create GA4 event tags for `generate_lead` or `sign_up` in GTM. Those come from the server, so a browser tag would count each conversion twice.

## Checking it works

- **Browser:** GA4 → Admin → DebugView, together with GTM Preview. Accept cookies and browse; you should see `page_view` events, one per page change.
- **Server:** the events show up in Realtime within about a minute. To check a payload, send it to `https://www.google-analytics.com/debug/mp/collect` (same query string). That endpoint returns validation messages instead of recording the event.
- **Backend tests:** `cd backend && pytest tests/test_leads.py` checks that the conversion is sent with the right client ID, and skipped without consent.

## Adding server-side events (bookings, payments)

When the API gains a booking or payment flow:
1. Have the frontend send the same `tracking` object (`trackingContext()` in `frontend/lib/api.ts` already builds it).
2. After the action is confirmed (booking saved, payment webhook received), call:
   ```python
   background.add_task(ga4.send_event, http, settings, "purchase",
                       {"currency": "GBP", "value": 499.0, "transaction_id": order_id},
                       tracking.ga_client_id, tracking.ga_session_id)
   ```
3. Use GA4's recommended names (`purchase`, `begin_checkout`, …). For a webhook, which has no browser, store the client ID with the order when it is created.
4. Mark the new event as a key event in GA4.

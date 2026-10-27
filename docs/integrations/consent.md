# Cookie consent

Every tag in this setup sets cookies or identifies visitors, so none of them may run until the visitor clicks **Accept** on the cookie banner. This is required under UK GDPR / PECR and EU GDPR.

## How it works

1. `frontend/app/layout.tsx` runs `consentDefaultsScript` (from `frontend/lib/analytics.ts`) in `<head>`, **before** GTM loads. It sets [Google Consent Mode v2](https://developers.google.com/tag-platform/security/guides/consent):
   - `analytics_storage`, `ad_storage`, `ad_user_data` and `ad_personalization` start as `denied`.
   - If the visitor accepted on an earlier visit (`localStorage["dp-cookie-consent"] === "accepted"`), they are granted straight away.
2. The banner in `frontend/components/layout/Floating.tsx` calls `setConsent(true|false)`, which:
   - saves the choice in `localStorage`;
   - sends `gtag('consent', 'update', …)`;
   - pushes the `consent_update` dataLayer event.
3. In GTM, every tag has a consent requirement and fires on both its normal trigger **and** `consent_update`. A visitor who accepts mid-visit gets tracked from that moment, with no reload needed (see [gtm.md](gtm.md#consent-settings-per-tag)).
4. Forms send cookie-based IDs (`hubspotutk`, `_ga`) to the API only when consent is granted. The API sends the GA4 conversion only when `analytics_consent` is true.

## Which consent each tag needs

| Tag | Required consent |
|---|---|
| Google tag (GA4) | `analytics_storage` |
| HubSpot tracking code | `analytics_storage` |
| LinkedIn Insight Tag | `ad_storage` (and `ad_user_data`) |
| Apollo tracker | `ad_storage` |

The banner has a single Accept / Reject choice, so all four are granted or denied together. If you later want per-category choices (analytics vs marketing), extend `setConsent()` to take categories and grant only the matching signals. The GTM side then needs no change.

## "Basic" vs "advanced" Consent Mode

This setup uses **basic** mode: Google tags don't load at all until consent. In advanced mode they would send cookieless pings while consent is denied, which gives Google more data to model with. Many UK/EU legal teams treat those pings as needing consent too. Only switch to advanced mode after legal review. The switch itself is a GTM-only change: remove the extra consent check from the Google tag.

## You must also update the policy pages

`frontend/content/pages/cookies.ts` and `privacy.ts` don't mention any of these tools yet. Before going live, list each tool, its purpose, its cookies and its data processor:
- Google: `_ga`, `_ga_*`
- LinkedIn: `li_sugr`, `bcookie`, `lidc`, `UserMatchHistory`, `AnalyticsSyncHistory`
- HubSpot: `hubspotutk`, `__hstc`, `__hssc`, `__hssrc`
- Apollo

The exact cookie names change over time, so confirm them with each vendor's current cookie documentation or a cookie scan once the tags are live.

## Turning off HubSpot's own banner

HubSpot can show its own cookie banner. Keep it **off** (Settings → Privacy & Consent → Cookies) so visitors see only the site's banner.

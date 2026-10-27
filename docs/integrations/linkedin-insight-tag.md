# LinkedIn Insight Tag

Used for LinkedIn ad **conversion tracking**, **retargeting** audiences and website demographics. It is browser-only and added entirely in GTM, so no code changes are needed.

## What you need
- **Partner ID**: Campaign Manager → Account assets / Analyze → **Insight Tag** → "I will use a tag manager" shows the Partner ID.
- **Conversion IDs** for the actions you want to count: Campaign Manager → Analyze → **Conversion tracking** → Create conversion → method **Insight Tag** → choose the **event-specific** option. Create one each for:
  - "Contact lead" (type: Lead)
  - "Newsletter / talent sign-up" (type: Sign up)

## GTM setup

1. Tags → New → Tag type → **Discover more tag types in the Community Template Gallery** → search **LinkedIn Insight** → add LinkedIn's template.
2. Create these tags:

| Tag | Partner ID | Conversion ID | Trigger | Consent |
|---|---|---|---|---|
| LinkedIn - Insight Tag | `{{LinkedIn Partner ID}}` | (empty) | `All Pages` + `CE - consent_update` | `ad_storage` |
| LinkedIn - lead conversion | `{{LinkedIn Partner ID}}` | contact lead conversion ID | `CE - generate_lead` | `ad_storage` |
| LinkedIn - sign-up conversion | `{{LinkedIn Partner ID}}` | sign-up conversion ID | `CE - sign_up` | `ad_storage` |

   For all three, set Advanced Settings → Tag firing options → **Once per page**.
3. Preview, accept cookies and submit the contact form. Check that the lead conversion fires after `generate_lead`. Then publish.

## Where the events come from (code)
- `generate_lead` is pushed by `frontend/components/ContactView.tsx` **after** the API has accepted the form.
- `sign_up` is pushed by `Subscribe` in `frontend/components/sections/Sections.tsx` (params `method: newsletter | talent_community`).
- Failed submissions push nothing, so LinkedIn only counts real leads.

## Checking it works
- In Campaign Manager, the Insight Tag status turns **Active** within about 24 hours of the first visit with consent.
- Conversions show as "Active" once one has been recorded. LinkedIn reporting can lag by a day.
- Browser dev tools → Network → filter `px.ads.linkedin.com`: requests appear only after you click Accept.

## Notes
- **Retargeting audiences** ("website visitors to /Services/…") need the base Insight Tag on all pages, which the setup above covers. LinkedIn needs a minimum audience size before it serves ads.
- LinkedIn also has a server-side **Conversions API**. It isn't set up here. If browser-side conversions turn out to undercount, it can be added to `backend/app/integrations/` the same way as GA4.

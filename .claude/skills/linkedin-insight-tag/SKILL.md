---
name: linkedin-insight-tag
description: Work on the LinkedIn Insight Tag for the Data Panther site - conversion tracking and retargeting, added through GTM and driven by dataLayer events from the website. Use when adding a LinkedIn conversion, mapping a site action to a LinkedIn conversion ID, or debugging LinkedIn conversions or the Insight Tag status.
---

# LinkedIn Insight Tag

Full reference: `docs/integrations/linkedin-insight-tag.md`. Read it first.

## How it is wired
- Lives **only in GTM** (LinkedIn's Community Template): a base tag on `All Pages` + `consent_update`, plus one conversion tag per action. Consent signal: `ad_storage`. There is no LinkedIn code in the repo.
- Conversions fire on dataLayer events that the site pushes after a confirmed success:
  - `generate_lead`: `frontend/components/ContactView.tsx`
  - `sign_up` (`method`: `newsletter` / `talent_community`): `Subscribe` in `frontend/components/sections/Sections.tsx`

## Adding a conversion for a new action
1. Make sure the action pushes a dataLayer event after success, using `track()` from `@/lib/analytics`. Follow the `gtm` skill.
2. Tell the user to:
   - create a conversion in Campaign Manager (Insight Tag, event-specific) and get its conversion ID;
   - add a GTM tag: LinkedIn template, `{{LinkedIn Partner ID}}`, that conversion ID, a Custom Event trigger for the event, consent `ad_storage`, once per page.
3. Add the event and conversion to `docs/integrations/linkedin-insight-tag.md`.

## Rules
- Never add the LinkedIn `<script>` snippet directly to the Next.js code; it must stay consent-gated in GTM.
- Push conversion events only after success, never on button click alone.

## Debugging
- No requests to `px.ads.linkedin.com` before the visitor clicks Accept is correct behaviour.
- Insight Tag "Not active" in Campaign Manager: check the GTM container is published and the tag's consent setting; status can take up to 24 hours.
- Conversions missing: in GTM Preview, confirm the custom event appears in the dataLayer and the conversion tag fires on it.

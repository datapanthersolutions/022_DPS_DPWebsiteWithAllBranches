---
name: apollo
description: Work on the Apollo.io website visitor tracker for the Data Panther site - company-level visitor identification loaded through GTM behind cookie consent. Use when installing or updating the Apollo snippet, checking whether Apollo is consent-gated, or debugging missing website-visitor data in Apollo.
---

# Apollo.io website visitors

Full reference: `docs/integrations/apollo.md`. Read it first.

## How it is wired
- One GTM **Custom HTML** tag containing the snippet copied from Apollo (Website Visitors → add domain), triggered on `All Pages` + `CE - consent_update`, consent `ad_storage`, once per page.
- There is no Apollo code in the repo.

## Rules
- Never invent or "tidy up" the Apollo snippet. It contains the account's app ID and is Apollo's format. Always ask the user to paste the current snippet from their Apollo account.
- Never put the snippet directly in the Next.js code; it must stay consent-gated in GTM.
- Apollo is gated on the marketing signal (`ad_storage`), not analytics.

## Debugging
- No requests to an `apollo.io` domain before the visitor clicks Accept is correct behaviour.
- No data in Apollo: Apollo says it can take up to 7 days. After that, check that the GTM container is published, the tag fires in GTM Preview after Accept, and the domain is added in Apollo.
- Plan limits (number of domains, person-level identification) are set in the user's Apollo account; check there rather than assuming.

## When the snippet changes
Ask the user for the new snippet, then give step-by-step instructions to replace the Custom HTML in the GTM tag, Preview, and Publish. Update `docs/integrations/apollo.md` if the setup steps changed.

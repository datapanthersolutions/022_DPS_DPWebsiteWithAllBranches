# Apollo.io (website visitors)

Apollo's website tracker identifies **which companies** visit the site, matched from the visitor's IP address. You see them in Apollo and can prospect into those accounts. It is browser-only and added in GTM, so no code changes are needed.

## What you need
- An Apollo account with access to **Website Visitors**.
- The tracking snippet for `datapanthersolutions.com`: in Apollo, open Website Visitors → add the domain, and Apollo shows the JS snippet to install. The snippet contains your account's app ID. **Copy it exactly from Apollo**, because its format is Apollo's and can change.

## GTM setup

| Tag | Type | Trigger | Consent |
|---|---|---|---|
| **Apollo - website tracker** | Custom HTML: paste the snippet from Apollo unchanged | `All Pages` + `CE - consent_update` | `ad_storage`, once per page |

Then Preview, accept cookies, and check in dev tools → Network that a request to an `apollo.io` domain appears only **after** Accept. Then publish.

## Notes
- Apollo says visitor data can take **up to 7 days** to show up.
- Domain limits and person-level (rather than company-level) identification depend on your Apollo plan and add-ons. Check what your plan includes in Apollo → Website Visitors.
- Apollo identifies visitors for sales prospecting, so it is gated on the marketing consent signal (`ad_storage`), not analytics. List Apollo in the Cookie and Privacy Policy as a data processor (see [consent.md](consent.md)).
- The tracker loads once per full page load. In-app page changes may not each be recorded. That's fine for company identification, which needs only one hit per visit.

## Reference
- Apollo help: [Track website visitors](https://knowledge.apollo.io/hc/en-us/articles/20544185285389), [Use website visitors data](https://knowledge.apollo.io/hc/en-us/articles/26595261473805-Use-Website-Visitors-Data)

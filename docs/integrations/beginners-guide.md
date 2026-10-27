# The tracking & marketing tools, explained from zero

This guide is for someone who has never used Google Tag Manager, Google Analytics, LinkedIn's Insight Tag, HubSpot or Apollo. No technical background needed.

For each tool you'll learn:
- **what it is**, with an everyday comparison
- **how it helps Data Panther**
- **how it works**, step by step
- **where it's plugged in** (website, server, or the tool's own website)

The other files in this folder are the technical setup guides. Read this one first.

---

## Part 1: Five ideas you need first

### 1. Frontend vs backend

| | Frontend | Backend |
|---|---|---|
| What it is | The website itself: the pages, buttons and forms visitors see in their browser | A program running on our server that visitors never see |
| Comparison | A restaurant's dining room | The restaurant's kitchen |
| In our project | The `frontend/` folder (Next.js) | The `backend/` folder (FastAPI) |
| Can keep secrets? | **No.** Anything on the website can be read by anyone who opens it | **Yes.** Passwords and keys stay hidden on the server |

That last row matters. Some tools give us a secret key, like a password. Those keys must live in the backend, never in the website.

### 2. A "tag" (or "tracking code")

A tag is a small piece of code from a company (Google, LinkedIn, …) that runs on our website and reports back to that company: "someone opened the Services page", "someone clicked Contact".

Think of a **visitor counter at a shop door**, except it can also note which aisles people walk down.

### 3. Cookies

A cookie is a tiny note a website saves in your browser, like a **cloakroom ticket**. When you come back, the site (or a tool on it) reads the ticket and recognises you as the same visitor. It doesn't know your name, only "ticket #4821 is back".

### 4. Consent (the cookie banner)

In the UK and EU, the law (UK GDPR, PECR, EU GDPR) says we must **ask permission** before using tracking cookies. That's why our site shows the "We Value Your Privacy" banner with **Accept** and **Reject**.

**On our site, none of the five tools track anyone until the visitor clicks Accept.** If they click Reject, the website still works normally, forms included, but no tracking happens.

### 5. Lead and conversion

- A **lead** is a person who might become a customer, for example someone who filled in our contact form.
- A **conversion** is the moment a visitor does something valuable: sends the contact form, signs up for the newsletter, joins the talent community. Counting conversions shows whether our marketing works.

---

## Part 2: The big picture

```
                        ┌──────────────────────────────────────────┐
  Visitor opens         │  Cookie banner: "Accept" or "Reject"?    │
  our website  ───────► │  (nothing tracks until they Accept)      │
                        └──────────────┬───────────────────────────┘
                                       │ Accept
                                       ▼
                        ┌──────────────────────────────────────────┐
                        │  GOOGLE TAG MANAGER (the "manager")      │
                        │  loads the other tools:                  │
                        │   • Google Analytics  → counts visits    │
                        │   • LinkedIn tag      → ads & audiences  │
                        │   • HubSpot tracking  → visit history    │
                        │   • Apollo tracker    → which companies  │
                        └──────────────────────────────────────────┘

  Visitor fills in      ┌──────────────────────────────────────────┐
  the contact form ───► │  OUR BACKEND (FastAPI)                   │
                        │   • checks it's real (not spam)          │
                        │   • saves the person in HUBSPOT          │
                        │   • tells GOOGLE ANALYTICS "1 new lead"  │
                        └──────────────────────────────────────────┘
```

In one sentence each:

| Tool | In one sentence | Lives in |
|---|---|---|
| **Google Tag Manager** | The manager that switches the other tools on and off | Website (one small snippet) |
| **Google Analytics 4** | Tells us how many people visit, from where, and what they do | Through Tag Manager **and** our backend |
| **LinkedIn Insight Tag** | Tells LinkedIn who visited, so our LinkedIn ads can be measured and aimed | Through Tag Manager only |
| **HubSpot** | Our address book of leads, with each person's history on our site | Through Tag Manager **and** our backend |
| **Apollo.io** | Tells our sales team which companies are looking at our site | Through Tag Manager only |

---

## Part 3: Each tool, one by one

### 1. Google Tag Manager (GTM)

#### What it is
A free Google tool that acts as a **manager for all the other tracking tools**.

Comparison: a **power strip with switches**. Instead of wiring every appliance into the wall (our code), we plug them all into one strip and flip the switches from a control panel (the GTM website).

#### How it helps us
- **Marketing can add, change or remove tools without a developer.** Without GTM, every change would mean editing code and re-publishing the website.
- **Everything in one place.** One screen shows every tool on the site and when it runs.
- **Consent in one place.** GTM checks the cookie-banner answer before switching anything on.
- **Safe testing.** GTM's "Preview" mode lets you try changes before real visitors see them.

#### How it works
1. Our website loads one small GTM snippet on every page.
2. That snippet downloads our "container", the box of settings we built on the GTM website.
3. The container holds **tags** (the tools), **triggers** ("when should a tag run?", e.g. on every page, or after a form is sent) and **variables** (values like our account IDs).
4. When something happens on the site, GTM checks its triggers and runs the matching tags, but only if the visitor gave consent.

The website also sends GTM short messages called **events**, through a message board called the **dataLayer**, so GTM knows what happened:

| Message | Means |
|---|---|
| `consent_update` | The visitor just clicked Accept or Reject |
| `dp_page_view` | The visitor moved to another page |
| `generate_lead` | The contact form was sent successfully |
| `sign_up` | Someone joined the newsletter or talent community |

#### Where it's plugged in
**Frontend only**, plus the GTM website.

| What | Where |
|---|---|
| The GTM snippet and the "everything off until Accept" default | `frontend/app/layout.tsx`, loading code from `frontend/lib/analytics.ts` |
| Sending events to GTM | `track()` in `frontend/lib/analytics.ts` |
| The page-change message | `frontend/components/analytics/RouteTracker.tsx` |
| The cookie banner telling GTM the answer | `frontend/components/layout/Floating.tsx` |
| Which tags exist and when they run | On **tagmanager.google.com**, not in our code |
| Our container ID (`GTM-XXXXXXX`) | `frontend/.env.production`, set before building the site |

**Setup technical guide:** [gtm.md](gtm.md)

---

### 2. Google Analytics 4 (GA4)

#### What it is
Google's free tool for **measuring website visitors**. "GA4" just means version 4.

Comparison: a **shop's footfall counter plus security-camera stats**, but anonymous. It tells you how many people came in, through which door, which aisles they visited and whether they bought, never who they are by name.

#### How it helps us
It answers questions like:
- How many people visited this week? More than last week?
- **Where did they come from?** Google search, LinkedIn, an email, typing our address directly?
- Which pages are popular, and which do people leave quickly?
- Which countries and devices (phone or laptop)?
- **How many leads did we get, and from which source?** For example: "LinkedIn brought 300 visitors and 6 contact-form leads."

That last point shows which marketing is worth the money.

#### How it works
GA4 gets information from **two places**:

1. **From the visitor's browser (through GTM):** when an accepting visitor views a page, the Google tag sends "page viewed: /Services/" to Google. It also notes contact-link clicks (email, phone, WhatsApp).
2. **From our backend (server-side):** when someone sends the contact form and **HubSpot confirms it was saved**, our server tells Google "1 new lead" (`generate_lead`). Newsletter and talent sign-ups send `sign_up` the same way.

Why count leads from the server instead of the browser?
- **Only real leads count.** If the form fails, nothing is counted.
- **Ad blockers can't hide it.** Many tech-savvy visitors block tracking in their browser, which would make us undercount leads. The server's message isn't affected.

GA4 still connects that lead to the visitor's visit, so it can say "this lead came from LinkedIn". The website passes along the visitor's anonymous GA4 ticket number (from the `_ga` cookie) with the form, but **only if they clicked Accept**.

#### Where it's plugged in
**Both** frontend (through GTM) **and** backend.

| What | Where |
|---|---|
| Page views and clicks | A "Google tag" set up **in GTM**; no code of ours |
| Reading the visitor's GA ticket number (only with consent) | `trackingContext()` in `frontend/lib/analytics.ts` |
| Sending "new lead" / "new sign-up" from the server | `backend/app/integrations/ga4.py`, called from `backend/app/api/routes/leads.py` |
| GA4 account ID and secret key | `backend/.env` (`GA4_MEASUREMENT_ID`, `GA4_API_SECRET`). The secret key never goes on the website |
| Viewing the reports | **analytics.google.com** |

**Setup technical guide:** [ga4.md](ga4.md)

---

### 3. LinkedIn Insight Tag

#### What it is
A free tag from LinkedIn that **connects our website to our LinkedIn advertising account** (LinkedIn Campaign Manager). It matters most once we run, or plan to run, ads on LinkedIn.

Comparison: a **loyalty-card scanner** at the shop door that only LinkedIn can read. LinkedIn learns "a LinkedIn member visited", but we never see who that person is.

#### How it helps us
It does three things:
1. **Conversion tracking.** Shows which LinkedIn ads led to leads, e.g. "Ad A brought 4 contact-form leads, Ad B brought none." We can stop paying for ads that don't work.
2. **Retargeting.** We can show ads specifically to people who visited our site, e.g. "visited the Generative AI page in the last 30 days". They already know us, so they're more likely to respond.
3. **Visitor insights.** LinkedIn shows a summary of our visitors' **job titles, industries, company sizes and seniority** (e.g. "35% IT decision-makers"). It's anonymous and grouped, never individual people.

For a B2B company selling to businesses, like us, this is very valuable, because LinkedIn is where business buyers are.

#### How it works
1. When an accepting visitor views any page, GTM runs the LinkedIn tag.
2. If that person is logged into LinkedIn on that browser, LinkedIn can match the visit to their (private) profile and adds them to our audiences and statistics.
3. When the contact form succeeds, the website sends GTM `generate_lead`. GTM runs the LinkedIn "lead conversion" tag, and LinkedIn records "1 lead", crediting the ad the person clicked if there was one. `sign_up` works the same way.
4. LinkedIn needs a minimum number of people before it shows statistics or runs retargeting ads, which protects individual privacy.

#### Where it's plugged in
**Frontend only, through GTM.** We wrote no LinkedIn code.

| What | Where |
|---|---|
| The LinkedIn tag and conversion tags | **In GTM** (LinkedIn's ready-made template) |
| The "form succeeded" signals it listens for | `frontend/components/ContactView.tsx` (`generate_lead`) and the subscribe form in `frontend/components/sections/Sections.tsx` (`sign_up`) |
| Results, audiences, demographics | **LinkedIn Campaign Manager** |

**Setup technical guide:** [linkedin-insight-tag.md](linkedin-insight-tag.md)

---

### 4. HubSpot

#### What it is
HubSpot is a **CRM**, short for Customer Relationship Management. In plain words, it's a **smart shared address book for the sales and marketing team**. Every lead becomes a contact card with their name, email, message, which company they're from, and every interaction we've had with them.

Comparison: a **receptionist's visitor book** that also remembers each guest's previous visits, and which rooms they looked into, before they signed in.

#### How it helps us
- **No lead gets lost.** Every contact-form message, newsletter sign-up and talent-community sign-up lands in HubSpot automatically, not just in someone's inbox.
- **The team sees context before replying.** For example: "This person read the Healthcare page, two case studies and the Generative AI page before writing to us." Sales can tailor the first conversation.
- **Follow-up.** HubSpot can alert the team, assign the lead, and send newsletters or follow-up emails.
- **One shared record** for everyone, instead of scattered emails and spreadsheets.

#### How it works
HubSpot has **two parts**, and they connect:

**Part A: watching visits (through GTM)**
1. When an accepting visitor views a page, GTM loads HubSpot's tracking code.
2. HubSpot gives the visitor an anonymous **visitor badge number**, saved in a cookie called `hubspotutk`.
3. HubSpot quietly records which pages that badge number views. At this point HubSpot doesn't know who they are.

**Part B: receiving the form (through our backend)**
1. The visitor fills in the contact form and clicks Send.
2. The website sends the form to **our backend**, not straight to HubSpot, along with the badge number if they accepted cookies.
3. Our backend:
   - checks for spam (bots are caught by a hidden field only bots fill in);
   - checks the email address is valid;
   - sends the person to HubSpot using our **secret HubSpot key**, which stays on the server.
4. HubSpot creates or updates the contact card. Because the badge number came along, **HubSpot links all the pages they viewed earlier to their new card.**
5. The website shows "Message sent". If HubSpot couldn't be reached, the visitor sees an apology with our email address instead, so the lead isn't silently lost.

Why go through our backend instead of HubSpot's ready-made form?
- **Our site keeps its own design.**
- **The secret key stays secret.**
- **Spam is filtered first.**
- **The lead is counted in GA4 only when HubSpot confirms it was saved.**

The three website forms map to three HubSpot forms:

| Website form | Page | HubSpot form |
|---|---|---|
| Contact us | `/ContactUs/` | "Website - Contact" (email, first name, last name, message) |
| Newsletter | `/blog/` | "Website - Newsletter" (email) |
| Talent community | `/careers/` | "Website - Talent community" (email) |

#### Where it's plugged in
**Both** frontend (through GTM) **and** backend.

| What | Where |
|---|---|
| Visit tracking (the badge number) | HubSpot tracking-code tag **in GTM** |
| Contact form sending to our backend | `frontend/components/ContactView.tsx` → `submitLead()` in `frontend/lib/api.ts` |
| Newsletter / talent forms | `Subscribe` in `frontend/components/sections/Sections.tsx` |
| Receiving forms, spam check | `backend/app/api/routes/leads.py` |
| Talking to HubSpot | `backend/app/integrations/hubspot.py` |
| HubSpot account ID, form IDs, secret key | `backend/.env` (`HUBSPOT_…`) |
| The contacts themselves | **app.hubspot.com** → Contacts |

**Setup technical guide:** [hubspot.md](hubspot.md)

---

### 5. Apollo.io

#### What it is
Apollo is a **sales prospecting tool**: a large database of companies and business contacts that sales teams use to find and reach potential customers. Its **Website Visitors** feature tells us **which companies** visited our website, even if nobody filled in a form.

Comparison: a **receptionist who recognises company uniforms**. They can't tell you a visitor's name, but they can say "someone from Acme Bank came in and looked around for 10 minutes".

#### How it helps us
Most visitors (often over 95%) leave without filling in a form. Apollo shows some of these "silent" visitors at company level:
- "**Barclays** visited 6 pages, including Financial Services and the fraud-detection case study."
- Sales can then look up the right people at that company in Apollo, such as the Head of Data, and reach out at the right moment.

It turns anonymous traffic into a list of **interested companies** for the sales team.

#### How it works
1. When an accepting visitor views a page, GTM runs Apollo's tracker.
2. The tracker sends Apollo the visit, including the visitor's **internet address (IP address)**.
3. Apollo looks the IP address up in its database. If it belongs to a company network (say, an office of a known company), Apollo records "a visitor from Company X".
4. The company appears in our Apollo account under **Website Visitors**. Apollo says this can take **up to 7 days**.

Limits to know:
- It identifies **companies, not people**, by default. Naming individuals depends on your Apollo plan and add-ons.
- People working from home or on mobile data often can't be matched to a company.

#### Where it's plugged in
**Frontend only, through GTM.** We wrote no Apollo code.

| What | Where |
|---|---|
| The Apollo tracker | A "Custom HTML" tag **in GTM**, with the snippet copied from your Apollo account |
| The list of visiting companies | **app.apollo.io** → Website Visitors |

**Setup technical guide:** [apollo.md](apollo.md)

---

## Part 4: One visitor's journey through all five tools

Meet **Priya**, Head of Data at a UK bank.

1. **Priya clicks one of our LinkedIn ads** and lands on our Financial Services page.
2. **The cookie banner appears.** Until she chooses, nothing tracks her.
3. **She clicks Accept.** The website tells GTM, and GTM switches on the four tools:
   - **GA4** notes: a visitor arrived from LinkedIn and viewed Financial Services.
   - **LinkedIn** notes: a member visited from our ad, and adds her to our "website visitors" audience.
   - **HubSpot** gives her anonymous badge #4821 and starts noting pages.
   - **Apollo** recognises her bank's office network: "a visitor from Bank X".
4. **She reads two case studies and the Generative AI page.** Each page change is recorded by GA4 and HubSpot under her anonymous IDs.
5. **She fills in the contact form and clicks Send.** The website sends her name, email and message, plus badge #4821 and her GA4 ticket number, to **our backend**.
6. **Our backend** checks it isn't spam and saves her in **HubSpot**. HubSpot creates "Priya, priya@bank.co.uk" and attaches the 4 pages she read earlier.
7. Once HubSpot confirms, **our backend tells GA4** "1 new lead". GA4 credits it to the LinkedIn visit.
8. **The website shows "Message sent"** and sends GTM `generate_lead`. GTM fires the **LinkedIn conversion**, so LinkedIn credits the ad she clicked.
9. **The next morning:**
   - **Sales opens HubSpot**, sees Priya's message *and* that she read the fraud-detection case study, and replies with a relevant example.
   - **Marketing opens GA4 and LinkedIn**, sees the ad produced a lead, and keeps funding it.
   - **Apollo** lists Bank X as a visiting company, and sales checks whether other decision-makers there are worth contacting.

**If Priya had clicked Reject:** her form still reaches HubSpot (she asked us to contact her), but without her browsing history. GA4, LinkedIn and Apollo record nothing about her.

---

## Part 5: Quick reference

### Which tool answers which question?

| Question | Tool |
|---|---|
| How many people visit, and from where? | GA4 |
| Which marketing channel brings the most leads? | GA4 |
| Are our LinkedIn ads worth the money? | LinkedIn Insight Tag (in Campaign Manager) |
| Who are our visitors professionally (job titles, industries)? | LinkedIn Insight Tag (website demographics) |
| Who contacted us, and what did they read first? | HubSpot |
| Which companies looked at our site without contacting us? | Apollo |
| How do I add or change a tracking tool without a developer? | Google Tag Manager |

### Frontend, backend, or the tool's own website?

| Tool | Website code (frontend) | Our server (backend) | Configured on the tool's website |
|---|---|---|---|
| Google Tag Manager | ✅ One snippet + events | n/a | ✅ All tags and triggers |
| GA4 | Via GTM | ✅ Sends lead and sign-up conversions | ✅ Reports, key events |
| LinkedIn Insight Tag | Via GTM | n/a | ✅ Conversions, audiences |
| HubSpot | Via GTM + forms send to backend | ✅ Saves form submissions | ✅ Forms, contacts |
| Apollo | Via GTM | n/a | ✅ Website Visitors list |

### Cost (check current pricing with each vendor)

| Tool | Cost |
|---|---|
| Google Tag Manager | Free |
| GA4 | Free (a paid enterprise version exists; we don't need it) |
| LinkedIn Insight Tag | Free; you pay only for the ads themselves |
| HubSpot | Free CRM tier available; marketing and sales features are paid plans |
| Apollo | Free and paid plans; Website Visitors limits depend on the plan |

### What's left before it's live

The code is ready, but each tool needs an account and its IDs. The full checklist, with what to provide and where to find it, is in the [README](README.md#what-you-need-to-provide). The Cookie Policy and Privacy Policy pages also need updating to name these tools (see [consent.md](consent.md)).

---

## Glossary

| Word | Meaning |
|---|---|
| **Ad blocker** | A browser add-on that stops ads and tracking tags from loading |
| **API** | A way for two programs to talk to each other, e.g. our backend talking to HubSpot |
| **Backend** | Our server-side program (`backend/`), invisible to visitors |
| **Container** | Our "box" of tags and settings in Google Tag Manager |
| **Conversion / key event** | A valuable action, such as a form sent or a sign-up |
| **Cookie** | A small note a site saves in your browser to recognise you later |
| **CRM** | Customer Relationship Management: a shared address book of leads and customers (HubSpot) |
| **dataLayer** | The message board our website uses to tell GTM what just happened |
| **Event** | Any action that gets recorded: a page view, a click, a form sent |
| **Frontend** | The website visitors see (`frontend/`) |
| **IP address** | A device's internet address, which can sometimes reveal the company network it's on |
| **Lead** | A potential customer, e.g. someone who contacted us |
| **Retargeting** | Showing ads to people who already visited your website |
| **Secret key / token** | A password that lets our server use a tool's services; must stay in the backend |
| **Tag** | A small piece of code from a vendor that runs on a website and reports back |
| **Trigger** | A GTM rule saying when a tag should run |

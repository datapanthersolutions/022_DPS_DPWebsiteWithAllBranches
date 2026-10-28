# Data Panther — website (frontend)

All commands below run from this `frontend/` folder.

Next.js 14 (static export) · Tailwind CSS · GSAP + ScrollTrigger · Framer Motion · Three.js (React Three Fiber) · Lenis smooth scroll.

All 57 pages from datapanthersolutions.com, with the same URLs (`/AboutUs/`, `/Services/`, `/case-studies/...`, `/blog/...` and so on) and the same copy.

## Run locally
Needs Node 20+.
```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts
| Command | What it does |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Static build into `./out` |
| `npm run lint` | ESLint (Next.js rules) |
| `npm run typecheck` | TypeScript check |
| `npm run check` | Lint + type check + build. Run this before pushing |
| `npm run images` | Shrinks large images in `public/img` (run after adding images) |
| `npm run content:index` | Registers new content files in `content/index.ts` |
| `npm run content:knowledge` | Exports all content as text for the chat assistant (`backend/app/chat/knowledge.md`) |
| `npm start` | Serves the built `./out` folder locally |

## Build & deploy
```bash
npm run build      # writes static HTML to ./out
```
Upload the contents of `out/` to the web root (`public_html` on cPanel). You don't need a Node server.

The build also writes these to `out/`:
- `robots.txt` and `sitemap.xml` for search engines (generated from `content/`)
- `.htaccess` for Apache/cPanel: real 404 page, caching for hashed assets, compression and security headers (source: `public/.htaccess`)
- `404.html`, which also forwards URLs typed in the wrong case (`/aboutus/` → `/AboutUs/`)

The site URL used for canonical links and social previews is set in `lib/seo.ts`.

## Where things live
| What | Where |
|---|---|
| Page copy (one file per page) | `content/pages/*.ts` |
| Case studies / blog / insight articles | `content/case-studies`, `content/blog`, `content/articles` |
| Menus, footer links, WhatsApp, LinkedIn | `content/nav.ts` |
| Page titles, descriptions, share image | `lib/seo.ts` and each page's `metadata` |
| Home page sections | `components/home/` |
| Reusable animated sections (hero, cards, steps, stats…) | `components/sections/Sections.tsx` |
| 3D data sphere | `components/three/DataSphere.tsx` |
| Colors & fonts | `tailwind.config.ts`, `app/globals.css` |

| Chat assistant | `components/chat/` (widget, scripted answers), `lib/site-search.ts` (search), `lib/chat.ts` (AI API client) |

After you add a new content file, run `npm run content:index` to register it. After any content change, also run `npm run content:knowledge`, which refreshes the AI assistant's copy of the site (CI checks this). The no-AI search updates by itself on every build.

## Chat assistant
The round button next to WhatsApp opens a chat assistant (`components/chat/`). It works in two modes:

**Without AI (default).** Everything runs in the visitor's browser: no backend, no API key, no running cost.
- Topic buttons (Our services, Industries we serve, Case studies, Careers, Contact the team) give scripted answers built from `content/nav.ts`, in `components/chat/bot.ts`.
- Common typed questions (contact, pricing, jobs, greetings) get scripted answers too.
- Anything else is searched across every page, case study, blog post and article, and the best 2–3 pages are shown as cards with a short excerpt. The search index (`/chat-index.json`) is built from `content/` on every build and only downloads when someone opens the chat.
- To change the scripted answers or the patterns that trigger them, edit `components/chat/bot.ts`.

**With AI (later).** Set `NEXT_PUBLIC_CHAT_AI=true` and `NEXT_PUBLIC_API_URL` in `.env.production` and rebuild, after setting up the backend's chat endpoint (`backend/README.md`). Typed questions are then answered by AI; the topic buttons stay scripted. If the AI is unavailable, the assistant answers from the site search instead of showing an error.

The conversation is kept in the browser tab (sessionStorage) and survives page changes and reloads. Replies are rendered from a small Markdown subset as React elements, never as raw HTML.

## Before going live
- **Contact form** (`components/ContactView.tsx`): the form shows a success message but doesn't send anything yet. Connect it to your existing endpoint, or to Formspree, Web3Forms or similar, and add Cloudflare Turnstile.
- **Newsletter / talent-community forms** also need connecting.

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

After you add a new content file, run `npm run content:index` to register it.

## Before going live
- **Contact form** (`components/ContactView.tsx`): the form shows a success message but doesn't send anything yet. Connect it to your existing endpoint, or to Formspree, Web3Forms or similar, and add Cloudflare Turnstile.
- **Newsletter / talent-community forms** also need connecting.

# Data Panther — website rebuild

Next.js 14 (static export) · Tailwind CSS · GSAP + ScrollTrigger · Framer Motion · Three.js (React Three Fiber) · Lenis smooth scroll.

All 57 pages from datapanthersolutions.com, with the same URLs (`/AboutUs/`, `/Services/`, `/case-studies/...`, `/blog/...` and so on) and the same copy.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Build & deploy
```bash
npm run build      # writes static HTML to ./out
```
Upload the `out/` folder to any static host (Hostinger, Netlify, Vercel, S3, cPanel). You don't need a Node server.

## Where things live
| What | Where |
|---|---|
| Page copy (one file per page) | `content/pages/*.ts` |
| Case studies / blog / insight articles | `content/case-studies`, `content/blog`, `content/articles` |
| Menus, footer links, WhatsApp, LinkedIn | `content/nav.ts` |
| Home page sections | `components/home/` |
| Reusable animated sections (hero, cards, steps, stats…) | `components/sections/Sections.tsx` |
| 3D data sphere | `components/three/DataSphere.tsx` |
| Colors & fonts | `tailwind.config.ts`, `app/globals.css` |

After you add a new content file, run `python3 scripts/gen_index.py` to register it.

## Before going live
- **Contact form** (`components/ContactView.tsx`): the form shows a success message but doesn't send anything yet. Connect it to your existing endpoint, or to Formspree, Web3Forms or similar, and add Cloudflare Turnstile.
- **Newsletter / talent-community forms** also need connecting.

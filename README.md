# Data Panther — website (revamped UI)

Next.js 14 (static export) · Tailwind CSS 3 · GSAP + ScrollTrigger · Framer Motion · Three.js (React Three Fiber) · Lenis smooth scroll.

All pages from datapanthersolutions.com, with the same URLs (`/AboutUs/`, `/Services/`, `/case-studies/...`, `/blog/...` and so on) and the same copy.

## Run locally
```bash
npm ci
npm run dev        # http://localhost:3000
```

## Build & deploy
```bash
npm run build      # writes static HTML to ./out
npm start          # preview ./out locally
```
Upload the `out/` folder to any static host (cPanel, Hostinger, Netlify, Vercel, S3). You don't need a Node server.
To host under a sub-folder, set `BASEPATH` (for example `BASEPATH=/nextjs-app-new`) at build time.

## Where things live
| What | Where |
|---|---|
| Page copy (one file per page) | `src/content/pages/*.ts` |
| Case studies / blog / insight articles | `src/content/case-studies`, `src/content/blog`, `src/content/articles` |
| Menus, footer links, WhatsApp, LinkedIn | `src/content/nav.ts` |
| Home page sections | `src/components/home/` |
| Reusable animated sections (hero, cards, steps, stats…) | `src/components/sections/Sections.tsx` |
| 3D data sphere (home + contact) | `src/components/three/DataSphere.tsx` |
| 3D hero objects per page | `src/components/three/HeroObject.tsx`, picked per page in `src/lib/objects.ts` |
| Intro loader & page transitions | `src/components/transition/` (links use `src/components/TLink.tsx`) |
| Custom cursor, marquee bands | `src/components/motion/` |
| Colors & fonts | `tailwind.config.ts`, `src/app/globals.css` |
| Images | `public/img/` |

After you add a new content file, run `python3 scripts/gen_index.py` to register it.

The intro loader plays once per browser session (it is skipped on reloads until the tab is closed).

Dynamic routes (`[slug]`) must not export `dynamicParams = false`: with `output: "export"` that makes `next dev` return 500 on every page. The static export is the same without it.

## Contact form
`src/components/ContactView.tsx` posts `{ name, email, message, turnstileToken }` as JSON to `/send-mail.php` on the host.
Set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` at build time to enable Cloudflare Turnstile. It runs in "interaction-only" mode, so it only appears when Cloudflare needs the visitor to confirm.

The newsletter and talent-community forms are not connected yet.

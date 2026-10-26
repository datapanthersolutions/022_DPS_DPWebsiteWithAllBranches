// Builds /sitemap.xml for search engines. (The human-readable /sitemap/ page lives in app/sitemap/.)
// Written as a route handler rather than app/sitemap.ts, because that file name would clash with app/sitemap/.
import { pages, caseStudies, blogPosts, articles } from "@/content";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const paths = [
    "/",
    "/ContactUs/",
    "/Insights/",
    "/blog/",
    "/case-studies/",
    "/sitemap/",
    ...pages.map((p) => `/${p.slug}/`),
    ...caseStudies.map((c) => `/case-studies/${c.slug}/`),
    ...blogPosts.map((p) => `/blog/${p.slug}/`),
    ...articles.map((p) => `/article/${p.slug}/`),
  ];
  const urls = paths.map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}

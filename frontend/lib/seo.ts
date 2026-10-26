import type { Metadata } from "next";

// Public URL of the live site. Used for canonical links, sitemap.xml and social previews.
export const SITE_URL = "https://datapanthersolutions.com";
export const SITE_NAME = "Data Panther";
const SITE_DESCRIPTION =
  "Data Panther builds enterprise AI solutions: generative AI, AIOps, conversational AI, data modernisation, cloud migration and threat detection.";
const DEFAULT_OG_IMAGE = "/img/og-default.jpg";

type SeoInput = {
  title: string;
  description?: string;
  path: string;            // e.g. "/AboutUs/" (keep the trailing slash)
  image?: string;          // JPG/PNG only: LinkedIn and others don't reliably show WebP previews
  type?: "website" | "article";
};

// Per-page metadata: title, description, canonical URL and Open Graph / Twitter tags.
// Next.js does not copy a page's title into og:title on its own, so every page should use this.
export function seo({ title, description = SITE_DESCRIPTION, path, image, type = "website" }: SeoInput): Metadata {
  const images = [{ url: image ?? DEFAULT_OG_IMAGE }];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: SITE_NAME, type, locale: "en_GB", images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

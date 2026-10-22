import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {(phase: string) => import('next').NextConfig} */
const nextConfig = (phase) => ({
  // Static HTML export -> /out on `npm run build`. Skipped for `next dev`, where export mode
  // throws "missing generateStaticParams()" for any URL that isn't a pre-built page.
  output: phase === PHASE_DEVELOPMENT_SERVER ? undefined : "export",
  trailingSlash: true,       // keeps the existing /AboutUs/ style URLs
  images: { unoptimized: true },
  reactStrictMode: true,
});
export default nextConfig;

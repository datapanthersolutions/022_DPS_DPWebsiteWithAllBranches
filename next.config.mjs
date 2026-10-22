// Optional sub-folder hosting (used by .cpanel.yml); empty when hosted at the domain root.
const base = process.env.BASEPATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // static HTML export -> /out, host anywhere
  trailingSlash: true,       // keeps the existing /AboutUs/ style URLs
  images: { unoptimized: true },
  reactStrictMode: true,
  basePath: base,
  assetPrefix: base,
};
export default nextConfig;

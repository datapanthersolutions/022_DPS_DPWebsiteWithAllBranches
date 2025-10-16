/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for next export
  },
  assetPrefix: '',
  basePath: '',
}

export default nextConfig

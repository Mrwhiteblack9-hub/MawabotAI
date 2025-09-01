/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    unoptimized: true,
    remotePatterns: [ { protocol: 'https', hostname: 'placehold.co' } ]
  }
}
module.exports = nextConfig;

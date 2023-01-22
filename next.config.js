/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['media.graphassets.com'],
  },
}

module.exports = nextConfig

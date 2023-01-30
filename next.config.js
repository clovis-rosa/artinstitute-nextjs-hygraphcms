/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: { subsets: ['latin'] },
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['media.graphassets.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  unoptimized: process.env.PREVIEW_ON_RENDER === 'true',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig

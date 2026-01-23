/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: process.env.PREVIEW_ON_RENDER === 'true',
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

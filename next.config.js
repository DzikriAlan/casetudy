// next.config.js
import 'dotenv/config'; // load environment variables sekali di root

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: process.env.PREVIEW_ON_RENDER === 'true',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'popular-bat-7f00ad6d75.strapiapp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'popular-bat-7f00ad6d75.media.strapiapp.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
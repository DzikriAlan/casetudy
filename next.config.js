// next.config.js
import 'dotenv/config'; // load environment variables sekali di root

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
};

export default nextConfig;
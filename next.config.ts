import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      }
    ],
    // Optional: Configure image quality and formats
    formats: ['image/webp'],
    minimumCacheTTL: 86400, // 24 hours
  },
  /* config options here */
};

export default nextConfig;

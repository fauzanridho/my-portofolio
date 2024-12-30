import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '82.112.234.10',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;

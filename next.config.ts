import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "cms.neuralmindatlas.ai",
      "localhost",
      "104.131.163.245",
      'lh3.googleusercontent.com',
    ]
  },
};

export default nextConfig;
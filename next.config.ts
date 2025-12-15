// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},

  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;

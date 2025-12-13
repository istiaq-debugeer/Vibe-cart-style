// next.config.ts
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // existing config...
  turbopack: {}, // <<-- add this
  // webpack: (config) => { ... } // if you have a webpack hook you can keep it, but note Turbopack won't use it
};

export default nextConfig;

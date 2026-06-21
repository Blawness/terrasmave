import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* output defaults to undefined = full Next.js server (SSR/SSG) */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;

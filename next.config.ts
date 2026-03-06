import type { NextConfig } from "next";

const isProd = process.env.NEXT_PUBLIC_SITE_ENV === "production";
const isStaging = process.env.NEXT_PUBLIC_SITE_ENV === "staging";

const nextConfig: NextConfig = {
  // Static export for deployment (both staging on GitHub Pages and production)
  output: "export",
  trailingSlash: true,

  // GitHub Pages uses repo name as base path for non-root deploys
  // Production runs on root domain — no basePath needed
  basePath: isStaging
    ? `/${process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "emxsports"}`
    : "",

  images: {
    // Static export requires unoptimized images
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  // Strict mode
  reactStrictMode: true,
};

export default nextConfig;

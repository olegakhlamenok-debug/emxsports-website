import type { NextConfig } from "next";

const isProd = process.env.NEXT_PUBLIC_SITE_ENV === "production";
const isStaging = process.env.NEXT_PUBLIC_SITE_ENV === "staging";
const isGHPages = !!process.env.GITHUB_PAGES_PREVIEW;

const repoBasePath = `/${process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "emxsports-website"}`;

const resolvedBasePath =
  isProd && !isGHPages ? "" : isStaging || isGHPages ? repoBasePath : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: resolvedBasePath,

  env: {
    NEXT_PUBLIC_BASE_PATH: resolvedBasePath,
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "emxsports.com" },
    ],
  },

  reactStrictMode: true,
};

export default nextConfig;

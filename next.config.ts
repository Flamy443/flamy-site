import type { NextConfig } from "next";

// GitHub Pages serves the site from /<repo>, so CI sets NEXT_PUBLIC_BASE_PATH=/flamy-site.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

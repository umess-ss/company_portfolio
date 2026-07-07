import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.BASE_PATH || '',
  // next/image does NOT prepend basePath to string srcs — expose it
  // to the bundle so lib/images.ts#getImagePath can (empty in dev,
  // "/company_portfolio" on GitHub Pages).
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.BASE_PATH || '',
  },
  images: {
    unoptimized: true,
    loader: 'default',
  },
  // Pin the workspace root — a stray lockfile in a parent directory
  // otherwise makes Turbopack infer the wrong root.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

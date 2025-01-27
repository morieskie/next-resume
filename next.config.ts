import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/next-resume',
  output: 'export',
  assetPrefix: "/next-resume",
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

};

export default nextConfig;

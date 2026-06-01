import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    externalDir: true,
  },
  transpilePackages: [path.join(__dirname, "../../src")],
  outputFileTracingRoot: path.join(__dirname, "../../"),
};

export default nextConfig;

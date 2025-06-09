import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@mastra/*"],
  experimental: {
    // @ts-expect-error: outputFileTracingIncludes is experimental and may not be in types yet
    outputFileTracingIncludes: {
      ".mastra": [path.join(__dirname, ".mastra/output/**")]
    }
  }
};

export default nextConfig;

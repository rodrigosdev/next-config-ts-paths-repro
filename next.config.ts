import type { NextConfig } from "next";

// A module next.config.ts imports, one directory down.
import { headers } from "./src/config/headers";

const nextConfig: NextConfig = {
  headers: async () => headers,
};

export default nextConfig;

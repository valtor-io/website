import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cache static assets aggressively (video, fonts, etc.)
  async headers() {
    return [
      {
        source: "/header.mp4",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/(.*\\.(?:mp4|webm|woff2|woff|ttf|otf)$)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;

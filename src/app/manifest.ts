import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Valtor.io — AI-First Business Optimization",
    short_name: "Valtor.io",
    description:
      "Deterministic business truth for mid-market companies. Structured P&Ls, unified data, process intelligence.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF9",
    theme_color: "#1a1a1a",
  };
}

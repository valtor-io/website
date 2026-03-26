import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Valtor.io — AI-First Business Optimization for Mid-Market Companies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAFAF9",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "6px",
            background: "#c2956a",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              fontSize: "32px",
              fontWeight: 600,
              color: "#1a1a1a",
              letterSpacing: "-0.02em",
            }}
          >
            Valtor
          </span>
          <span
            style={{
              fontSize: "32px",
              fontWeight: 600,
              color: "#c2956a",
            }}
          >
            .io
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "52px",
            fontWeight: 600,
            color: "#1a1a1a",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            maxWidth: "900px",
            marginBottom: "24px",
          }}
        >
          AI-First Business Optimization
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "#6b6b6b",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          Deterministic business truth for mid-market companies in DACH. Structured P&Ls, unified data, process intelligence.
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "32px",
            fontSize: "16px",
            color: "#999999",
          }}
        >
          <span>www.valtor.io</span>
          <span style={{ color: "#e8e8e6" }}>|</span>
          <span>kontakt@valtor.io</span>
          <span style={{ color: "#e8e8e6" }}>|</span>
          <span>DACH</span>
        </div>
      </div>
    ),
    { ...size },
  );
}

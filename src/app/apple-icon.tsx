import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "180px",
          height: "180px",
          background: "#1a1a1a",
          borderRadius: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <span
          style={{
            fontSize: "112px",
            fontWeight: 700,
            color: "#FAFAF9",
            letterSpacing: "-4px",
            marginRight: "8px",
          }}
        >
          V
        </span>
        <div
          style={{
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            background: "#c2956a",
            position: "absolute",
            right: "30px",
            bottom: "50px",
          }}
        />
      </div>
    ),
    { ...size },
  );
}

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Have Fun Athletics — Train Hard. Have Fun.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "80px",
          background: "#111110",
          fontFamily: "sans-serif",
        }}
      >
        {/* Coral accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#E8614A",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.28em",
            color: "#E8614A",
            marginBottom: 20,
            textTransform: "uppercase",
          }}
        >
          Have Fun Athletics · Winthrop, MA
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 120,
            fontWeight: 900,
            color: "#FDFCFB",
            lineHeight: 0.88,
            marginBottom: 40,
            textTransform: "uppercase",
            letterSpacing: "0.02em",
          }}
        >
          Train Hard.{"\n"}Have Fun.
        </div>

        {/* Sub */}
        <div
          style={{
            fontSize: 24,
            color: "#C8C4BC",
            letterSpacing: "0.04em",
          }}
        >
          Performance Training · Summer 2026 · Grades 5–12
        </div>
      </div>
    ),
    { ...size }
  );
}

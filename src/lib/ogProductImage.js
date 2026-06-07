import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Render a branded product OG card. Used by per-product opengraph-image.js
 * routes (AppDeploy, AXOS, ClarityPath) for clean LinkedIn / X / Slack previews.
 */
export function renderProductOg({ eyebrow, name, tagline, accent = "#E2580E" }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #FDEBDD 0%, #FFFFFF 55%, #FAFAF7 100%)",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: -1,
            }}
          >
            ST
          </div>
          <div style={{ fontSize: 26, fontWeight: 600, color: "#0B1220" }}>
            ScotiTech Solutions
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 16px",
              borderRadius: 999,
              background: "#FDEBDD",
              color: accent,
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              alignSelf: "flex-start",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              color: "#0B1220",
              lineHeight: 1.0,
              letterSpacing: -3,
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#334155",
              lineHeight: 1.3,
              maxWidth: 1000,
              fontWeight: 500,
            }}
          >
            {tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#64748B",
            fontSize: 22,
            fontWeight: 500,
          }}
        >
          <div>scotitech.com</div>
          <div style={{ color: accent, fontWeight: 700 }}>
            Product · Live
          </div>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}

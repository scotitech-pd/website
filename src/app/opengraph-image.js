import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "ScotiTech Solutions — Business Software for Controlled Operations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
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
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#E2580E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: -1,
            }}
          >
            ST
          </div>
          <div style={{ fontSize: 32, fontWeight: 600, color: "#0B1220" }}>
            ScotiTech Solutions
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "#0B1220",
              lineHeight: 1.04,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            Business software for controlled operations.
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#475569",
              lineHeight: 1.4,
              maxWidth: 980,
            }}
          >
            AppDeploy · AXOS · ClarityPath — built and supported by a UK technology company.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#64748B",
            fontSize: 24,
            fontWeight: 500,
          }}
        >
          <div>scotitech.com</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 16px",
              borderRadius: 999,
              background: "#FDEBDD",
              color: "#B8430B",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            Scotland · United Kingdom
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

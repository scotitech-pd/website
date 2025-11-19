"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RouteLoader({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const LOADER_TIME = 1500;

  useEffect(() => {
    if (!pathname) return;

    const visited = JSON.parse(sessionStorage.getItem("scottie_routes") || "{}");

    // If page was already visited in the same session → NO LOADER
    if (visited[pathname]) {
      setLoading(false);
      return;
    }

    // First visit → show loader
    setLoading(true);

    const t = setTimeout(() => {
      visited[pathname] = true;
      sessionStorage.setItem("scottie_routes", JSON.stringify(visited));
      setLoading(false);
    }, LOADER_TIME);

    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <>
      {loading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "black",
            zIndex: 999999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {/* Rotating Ring */}
          <div
            style={{
              position: "absolute",
              width: 180,
              height: 180,
              borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.2)",
              animation: "rotate 5s linear infinite",
            }}
          />

          {/* Scan-line */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: 80,
              background:
                "linear-gradient(to bottom, transparent, rgba(0,255,255,0.25), transparent)",
              animation: "scan 2s ease-in-out infinite",
            }}
          />

          {/* Logo */}
          <img
            src="/logo/logo.png"
            style={{
              width: 110,
              animation: "breathe 2s ease-in-out infinite",
              zIndex: 3,
            }}
          />
        </div>
      )}

      <div style={{ opacity: loading ? 0 : 1, transition: "opacity .4s" }}>
        {children}
      </div>

      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scan {
          0% { top:-20%; opacity:0;}
          40% {opacity:0.6;}
          50% {top:40%; opacity:1;}
          60% {opacity:0.6;}
          100% {top:120%; opacity:0;}
        }
        @keyframes breathe {
          0% { transform:scale(1); filter:drop-shadow(0 0 4px rgba(255,255,255,0.3)); }
          50% { transform:scale(1.05); filter:drop-shadow(0 0 12px rgba(255,255,255,0.7)); }
          100% { transform:scale(1); filter:drop-shadow(0 0 4px rgba(255,255,255,0.3)); }
        }
      `}</style>
    </>
  );
}

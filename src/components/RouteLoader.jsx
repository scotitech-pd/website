"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function RouteLoader({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const LOADER_TIME = 700;

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
            background: "#0E1116",
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
              width: 170,
              height: 170,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.16)",
              boxShadow: "inset 0 0 32px rgba(255,255,255,0.03)",
              animation: "loaderPulse 1.7s ease-in-out infinite",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: 96,
              height: 96,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.08), transparent 68%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: "100%",
              height: 64,
              background:
                "linear-gradient(to bottom, transparent, rgba(94,234,212,0.16), transparent)",
              animation: "scan 1.9s ease-in-out infinite",
            }}
          />

          {/* Logo */}
          <Image
            src="/logo/logo.png"
            alt="Logo"
            width={132}
            height={49}
            className="animate-breathe"
            priority
            style={{
              zIndex: 3,
              width: 132,
              height: "auto",
            }}
          />
        </div>
      )}

      <div style={{ opacity: loading ? 0 : 1, transition: "opacity .4s" }}>
        {children}
      </div>

      <style>{`
        @keyframes loaderPulse {
          0% { transform:scale(0.96); opacity:0.45; }
          50% { transform:scale(1); opacity:0.9; }
          100% { transform:scale(0.96); opacity:0.45; }
        }
        @keyframes scan {
          0% { top:-18%; opacity:0; }
          42% { opacity:0.42; }
          50% { top:42%; opacity:0.72; }
          58% { opacity:0.42; }
          100% { top:118%; opacity:0; }
        }
        @keyframes breathe {
          0% { transform:scale(1); filter:drop-shadow(0 0 4px rgba(255,255,255,0.18)); opacity:0.88; }
          50% { transform:scale(1.025); filter:drop-shadow(0 0 12px rgba(255,255,255,0.34)); opacity:1; }
          100% { transform:scale(1); filter:drop-shadow(0 0 4px rgba(255,255,255,0.18)); opacity:0.88; }
        }
      `}</style>
    </>
  );
}

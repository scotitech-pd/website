import { renderProductOg, ogSize, ogContentType } from "@/lib/ogProductImage";

export const dynamic = "force-static";

export const alt = "AXOS — Governance-first AI in a private team workspace";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderProductOg({
    eyebrow: "Private AI workspace",
    name: "AXOS",
    tagline: "Governance-first AI, grounded in your own knowledge.",
    accent: "#EA580C",
  });
}

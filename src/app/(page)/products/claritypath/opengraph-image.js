import { renderProductOg, ogSize, ogContentType } from "@/lib/ogProductImage";

export const dynamic = "force-static";

export const alt = "ClarityPath — Guided decision support, accessed via AppDeploy";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderProductOg({
    eyebrow: "Guided decision support",
    name: "ClarityPath",
    tagline: "Structured support for sensitive, high-stakes journeys.",
    accent: "#B45309",
  });
}

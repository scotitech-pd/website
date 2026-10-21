import { renderProductOg, ogSize, ogContentType } from "@/lib/ogProductImage";

export const dynamic = "force-static";

export const alt = "Vamiq — Private app distribution and Apple device management";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderProductOg({
    eyebrow: "Private apps and Apple devices",
    name: "Vamiq",
    tagline: "Your private apps, on your team’s iPhones, iPads and Macs.",
    accent: "#0F766E",
  });
}

import { renderProductOg, ogSize, ogContentType } from "@/lib/ogProductImage";

export const dynamic = "force-static";

export const alt = "Vamiq — Apple device management and private app distribution";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderProductOg({
    eyebrow: "Apple devices and private apps",
    name: "Vamiq",
    tagline: "Manage iPhone, iPad and Mac, and give your people their own branded app store.",
    accent: "#0F766E",
  });
}

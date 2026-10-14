import { renderProductOg, ogSize, ogContentType } from "@/lib/ogProductImage";

export const dynamic = "force-static";

export const alt = "AppDeploy — Apple device management and private app distribution";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderProductOg({
    eyebrow: "Apple devices and private apps",
    name: "AppDeploy",
    tagline: "Manage iPhone, iPad and Mac, and give your people their own branded app store.",
    accent: "#C2410C",
  });
}

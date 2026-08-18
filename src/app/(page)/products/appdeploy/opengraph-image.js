import { renderProductOg, ogSize, ogContentType } from "@/lib/ogProductImage";

export const dynamic = "force-static";

export const alt = "AppDeploy — Private app distribution, built around Apple Business";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderProductOg({
    eyebrow: "Private app distribution",
    name: "AppDeploy",
    tagline: "Private app distribution with optional remote deployment, built around Apple Business.",
    accent: "#C2410C",
  });
}

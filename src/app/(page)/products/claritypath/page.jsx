import ProductTemplate from "@/components/products/ProductTemplate";
import { getProduct } from "@/lib/products";
import { ogImage, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "ClarityPath: guided decision support",
  description:
    "ClarityPath turns high-stakes choices such as relocation, career, property and finances into a clear daily focus and a plan. Delivered through Vamiq.",
  path: "/products/claritypath",
  image: ogImage("claritypath.jpg", "ClarityPath, guided decision support from ScotiTech"),
  keywords: ["ClarityPath", "decision support", "guided planning", "structured planning", "Vamiq"],
});

export default function ClarityPathPage() {
  return <ProductTemplate product={getProduct("claritypath")} />;
}

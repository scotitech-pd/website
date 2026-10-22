import ProductTemplate from "@/components/products/ProductTemplate";
import { getProduct } from "@/lib/products";
import { ogImage, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AXOS: private AI workspace on your own servers",
  description:
    "AXOS is a self-hosted enterprise workspace: mail, files, chat, video and tasks with governed AI built in, running entirely inside your own environment.",
  path: "/products/axos",
  image: ogImage("axos.jpg", "AXOS, the private AI workspace from ScotiTech"),
  keywords: [
    "AXOS",
    "private AI workspace",
    "self-hosted AI",
    "enterprise AI platform",
    "secure collaboration software",
    "enterprise knowledge management",
    "self-hosted collaboration suite",
    "on-premises AI",
    "governance-first AI",
  ],
});

export default function AxosPage() {
  return <ProductTemplate product={getProduct("axos")} />;
}

import ProductTemplate from "@/components/products/ProductTemplate";
import { getProduct } from "@/lib/products";

export const metadata = {
  title: "AXOS - Private AI Workspace & Enterprise Collaboration Platform",
  description:
    "AXOS is a private AI workspace and self-hosted enterprise collaboration platform for teams evaluating secure Google Workspace or Microsoft 365 alternatives with governed AI.",
  alternates: { canonical: "/products/axos" },
  keywords: [
    "AXOS",
    "AI workspace",
    "enterprise AI platform",
    "private AI",
    "digital workplace solutions",
    "digital workspace platform",
    "secure collaboration software",
    "secure collaboration platforms",
    "enterprise knowledge management",
    "enterprise knowledge management platform",
    "enterprise search AI",
    "Google Workspace alternative",
    "alternative to Google Workspace",
    "Microsoft 365 alternative",
    "Office 365 alternative",
    "private AI workspace",
    "self-hosted AI",
    "self hosted AI",
    "governance-first AI",
    "enterprise productivity suite",
    "on-premise AI",
    "on premise AI",
    "private workspace",
    "RAG",
  ],
  openGraph: {
    title: "AXOS - Private AI Workspace & Enterprise Collaboration Platform",
    description:
      "A private, self-hostable workspace for secure collaboration, enterprise knowledge management, and governed AI.",
    url: "/products/axos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AXOS - Private AI Workspace & Enterprise Collaboration Platform",
    description: "A private, self-hostable collaboration platform with governed AI built in.",
  },
};

export default function AxosPage() {
  return <ProductTemplate product={getProduct("axos")} />;
}

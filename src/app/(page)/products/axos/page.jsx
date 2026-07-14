import ProductTemplate from "@/components/products/ProductTemplate";
import { getProduct } from "@/lib/products";

export const metadata = {
  title: "AXOS - Private AI Workspace & Enterprise AI Platform",
  description:
    "AXOS is a private AI workspace and self-hosted enterprise AI platform for digital workplace teams that need mail, drive, chat, video, tasks, and governed AI in one controlled environment.",
  alternates: { canonical: "/products/axos" },
  keywords: [
    "AXOS",
    "AI workspace",
    "enterprise AI platform",
    "private AI",
    "digital workplace solutions",
    "digital workspace platform",
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
    title: "AXOS - Private AI Workspace & Enterprise AI Platform",
    description:
      "A private, self-hostable AI workspace and digital workplace platform with mail, drive, chat, video, tasks, and governed AI built in.",
    url: "/products/axos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AXOS - Private AI Workspace & Enterprise AI Platform",
    description: "A private, self-hostable enterprise AI platform with workspace tools built in.",
  },
};

export default function AxosPage() {
  return <ProductTemplate product={getProduct("axos")} />;
}

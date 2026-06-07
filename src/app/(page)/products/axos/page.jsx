import ProductTemplate from "@/components/products/ProductTemplate";
import { getProduct } from "@/lib/products";

export const metadata = {
  title: "AXOS — Governance-First AI in a Private Workspace",
  description:
    "AXOS is a private, self-hostable workspace with governance-first AI grounded in your own knowledge — mail, drive, chat, video, tasks, and AI in one controlled environment.",
  alternates: { canonical: "/products/axos" },
  keywords: [
    "AXOS",
    "private AI workspace",
    "self-hosted AI",
    "governance-first AI",
    "enterprise productivity suite",
    "on-premise AI",
    "private workspace",
    "RAG",
  ],
  openGraph: {
    title: "AXOS — Governance-First AI in a Private Workspace",
    description:
      "A private, self-hostable enterprise workspace with AI built in. Mail, drive, chat, video, tasks — your perimeter, your data.",
    url: "/products/axos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AXOS — Governance-First AI in a Private Workspace",
    description: "A private, self-hostable enterprise workspace with AI built in.",
  },
};

export default function AxosPage() {
  return <ProductTemplate product={getProduct("axos")} />;
}

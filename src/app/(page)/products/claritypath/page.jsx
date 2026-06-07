import ProductTemplate from "@/components/products/ProductTemplate";
import { getProduct } from "@/lib/products";

export const metadata = {
  title: "ClarityPath — Guided Decision Support",
  description:
    "Private, structured decision support for sensitive, high-stakes journeys — relocation, career, property, finance, and yearly planning — delivered through the AppDeploy portal.",
  alternates: { canonical: "/products/claritypath" },
  keywords: [
    "ClarityPath",
    "decision support",
    "guided planning",
    "structured planning",
    "private mobile app",
    "AppDeploy portfolio",
  ],
  openGraph: {
    title: "ClarityPath — Guided Decision Support",
    description:
      "Structured decision support for sensitive, high-stakes journeys, delivered through the AppDeploy portal.",
    url: "/products/claritypath",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClarityPath — Guided Decision Support",
    description:
      "Structured decision support for sensitive, high-stakes journeys.",
  },
};

export default function ClarityPathPage() {
  return <ProductTemplate product={getProduct("claritypath")} />;
}

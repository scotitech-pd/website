import ProductTemplate from "@/components/products/ProductTemplate";
import { getProduct } from "@/lib/products";

export const metadata = {
  title: "ClarityPath — Decision-Support Tools | ScotiTech Solutions",
  description:
    "ClarityPath provides private, structured decision-support for sensitive, high-stakes user journeys where a generic form or chatbot isn't enough.",
};

export default function ClarityPathPage() {
  return <ProductTemplate product={getProduct("claritypath")} />;
}

import ProductTemplate from "@/components/products/ProductTemplate";
import { getProduct } from "@/lib/products";

export const metadata = {
  title: "AXOS — Enterprise AI Workspace | ScotiTech Solutions",
  description:
    "AXOS is a completed enterprise-only, self-hostable workspace with AI. Organisations share business requirements and receive a limited testing platform before adoption.",
};

export default function AxosPage() {
  return <ProductTemplate product={getProduct("axos")} />;
}

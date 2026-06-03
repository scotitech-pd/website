import ProductTemplate from "@/components/products/ProductTemplate";
import { getProduct } from "@/lib/products";

export const metadata = {
  title: "AXOS — Private Team Workspace with AI | ScotiTech Solutions",
  description:
    "AXOS is a private, self-hostable workspace bringing mail, drive, chat, tasks, notes and AI into one controlled environment. Now in early access.",
};

export default function AxosPage() {
  return <ProductTemplate product={getProduct("axos")} />;
}

import ProductTemplate from "@/components/products/ProductTemplate";
import { getProduct } from "@/lib/products";

export const metadata = {
  title: "AppDeploy — Internal iOS App Distribution | ScotiTech Solutions",
  description:
    "AppDeploy is live internal iOS app distribution: branded access pages, one-tap install, release control, and rollout visibility for teams and partners.",
};

export default function AppDeployPage() {
  return <ProductTemplate product={getProduct("appdeploy")} />;
}

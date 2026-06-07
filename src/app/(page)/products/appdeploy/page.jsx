import ProductTemplate from "@/components/products/ProductTemplate";
import { getProduct } from "@/lib/products";

export const metadata = {
  title: "AppDeploy — Private iOS App Distribution",
  description:
    "MDM-free private app distribution, built around Apple Business. Branded access pages, one-tap install, release control, and rollout visibility for teams and partners.",
  alternates: { canonical: "/products/appdeploy" },
  keywords: [
    "AppDeploy",
    "private app distribution",
    "internal iOS app distribution",
    "Apple Business Manager alternative",
    "branded app portal",
    "enterprise iOS distribution",
    "MDM-free deployment",
  ],
  openGraph: {
    title: "AppDeploy — Private iOS App Distribution",
    description:
      "MDM-free private app distribution, built around Apple Business. Branded portal, one-tap install, full rollout visibility.",
    url: "/products/appdeploy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AppDeploy — Private iOS App Distribution",
    description: "MDM-free private app distribution, built around Apple Business.",
  },
};

export default function AppDeployPage() {
  return <ProductTemplate product={getProduct("appdeploy")} />;
}

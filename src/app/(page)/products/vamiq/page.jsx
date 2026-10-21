import ProductTemplate from "@/components/products/ProductTemplate";
import { getProduct } from "@/lib/products";

export const metadata = {
  title: "Vamiq — Private App Distribution and Apple Device Management",
  description:
    "Vamiq (formerly AppDeploy) is a branded app store for your private apps, and Apple device management that installs them on iPhone, iPad and Mac, with build checks before each release.",
  alternates: { canonical: "/products/vamiq" },
  keywords: [
    "Vamiq",
    "AppDeploy",
    "private app distribution",
    "internal iOS app distribution",
    "Apple device management",
    "Mac management",
    "Apple Business integration",
    "branded app store",
    "release controls",
  ],
  openGraph: {
    title: "Vamiq — Private App Distribution and Apple Device Management",
    description:
      "A branded app store for your private apps, and Apple device management that installs them on iPhone, iPad and Mac, with build checks before each release.",
    url: "/products/vamiq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vamiq — Private apps on your team’s iPhones, iPads and Macs",
    description: "A branded app store, Apple device management and release controls in one workspace.",
  },
};

export default function VamiqPage() {
  return <ProductTemplate product={getProduct("vamiq")} />;
}

import ProductTemplate from "@/components/products/ProductTemplate";
import { getProduct } from "@/lib/products";

export const metadata = {
  title: "AppDeploy — Apple Device Management and Private App Distribution",
  description:
    "Manage iPhone, iPad and Mac and give your people a branded app store, in one workspace built on Apple Business. Zero-touch setup, security baselines, FileVault, compliance evidence and release controls. First 5 devices free, then £1 per device a month.",
  alternates: { canonical: "/products/appdeploy" },
  keywords: [
    "AppDeploy",
    "Apple device management",
    "Mac device management",
    "iPhone and iPad management",
    "private app distribution",
    "internal iOS app distribution",
    "Apple Business integration",
    "branded app store",
    "SOC 2 device evidence",
    "zero-touch enrolment",
  ],
  openGraph: {
    title: "AppDeploy — Apple Device Management and Private App Distribution",
    description:
      "iPhone, iPad and Mac management with your own branded app store, built on Apple Business. First 5 devices free, then £1 per device a month.",
    url: "/products/appdeploy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AppDeploy — Apple Device Management and Private App Distribution",
    description: "iPhone, iPad and Mac management with your own branded app store, built on Apple Business.",
  },
};

export default function AppDeployPage() {
  return <ProductTemplate product={getProduct("appdeploy")} />;
}

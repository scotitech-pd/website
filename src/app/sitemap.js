import { insights } from "@/lib/insights";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://scotitech.com";

export const dynamic = "force-static";

const staticRoutes = [
  "",
  "/products",
  "/products/appdeploy",
  "/products/axos",
  "/products/axos/deployment-discovery",
  "/products/claritypath",
  "/aboutus",
  "/media",
  "/contact",
  "/insights",
  "/privacy-policy",
  "/terms-and-conditions",
];

export default function sitemap() {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route || "/"}`,
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : route === "/insights" ? 0.8 : 0.7,
    })),
    ...insights.map((insight) => ({
      url: `${SITE_URL}/insights/${insight.slug}`,
      lastModified: new Date(insight.updated),
      changeFrequency: "monthly",
      priority: 0.75,
    })),
  ];
}

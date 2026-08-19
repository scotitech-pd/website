import { insights } from "@/lib/insights";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://scotitech.com";

export const dynamic = "force-static";

/**
 * Static routes carry an explicit lastModified date.
 *
 * Bump the date on a route when its content meaningfully changes. Do NOT use
 * the build time: stamping every page as modified on every deploy trains
 * search engines to ignore lastmod entirely, so the signal is worthless on the
 * pages where it matters.
 *
 * Home and /insights derive their date from the newest published insight,
 * since that is what actually changes on them.
 */
const staticRoutes = [
  { path: "", lastModified: "2026-08-19", changeFrequency: "weekly", priority: 1, followsInsights: true },
  { path: "/products", lastModified: "2026-08-19", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/appdeploy", lastModified: "2026-08-19", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/axos", lastModified: "2026-07-14", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/axos/deployment-discovery", lastModified: "2026-07-14", changeFrequency: "yearly", priority: 0.6 },
  { path: "/products/claritypath", lastModified: "2026-06-07", changeFrequency: "yearly", priority: 0.6 },
  { path: "/aboutus", lastModified: "2026-08-19", changeFrequency: "monthly", priority: 0.7 },
  { path: "/trust", lastModified: "2026-08-10", changeFrequency: "monthly", priority: 0.7 },
  { path: "/careers", lastModified: "2026-08-19", changeFrequency: "monthly", priority: 0.7 },
  { path: "/media", lastModified: "2026-08-18", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", lastModified: "2026-06-07", changeFrequency: "yearly", priority: 0.7 },
  { path: "/insights", lastModified: "2026-08-16", changeFrequency: "weekly", priority: 0.8, followsInsights: true },
  { path: "/privacy-policy", lastModified: "2026-08-12", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookie-policy", lastModified: "2026-08-03", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-and-conditions", lastModified: "2026-08-12", changeFrequency: "yearly", priority: 0.3 },
];

const toDate = (value) => new Date(`${value}T00:00:00.000Z`);

export default function sitemap() {
  const insightDates = insights.map((insight) =>
    toDate(insight.updated || insight.date).getTime()
  );
  const newestInsight = insightDates.length ? new Date(Math.max(...insightDates)) : null;

  return [
    ...staticRoutes.map(({ path, lastModified, changeFrequency, priority, followsInsights }) => {
      const own = toDate(lastModified);
      const resolved =
        followsInsights && newestInsight && newestInsight > own ? newestInsight : own;

      return {
        url: `${SITE_URL}${path || "/"}`,
        lastModified: resolved,
        changeFrequency,
        priority,
      };
    }),
    ...insights.map((insight) => ({
      url: `${SITE_URL}/insights/${insight.slug}`,
      lastModified: toDate(insight.updated || insight.date),
      changeFrequency: "monthly",
      priority: 0.75,
    })),
  ];
}

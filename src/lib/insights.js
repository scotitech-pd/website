export {
  featuredInsight,
  getInsightBySlug,
  insights,
} from "@/lib/insights.generated";

/**
 * Responsive WebP versions of an article photo. Every /images/insights/*.jpg
 * has -800.webp and -1600.webp siblings (made with Pillow when the photo was
 * added); anything else is returned as it is.
 */
export function insightImage(src) {
  const match = /^(\/images\/insights\/.+)\.jpg$/.exec(src || "");
  if (!match) return { src, srcSet: undefined, small: src };
  const base = match[1];
  return {
    src: `${base}-1600.webp`,
    small: `${base}-800.webp`,
    srcSet: `${base}-800.webp 800w, ${base}-1600.webp 1600w`,
  };
}

export const formatInsightDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

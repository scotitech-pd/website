import fs from "node:fs";
import path from "node:path";

export const CONTENT_DIR = path.join(process.cwd(), "content/insights");
export const GENERATED_MODULE_PATH = path.join(
  process.cwd(),
  "src/lib/insights.generated.js"
);
export const REVIEW_MODULE_PATH = path.join(
  process.cwd(),
  "src/lib/insights.review.generated.js"
);
export const QUEUE_PATH = path.join(process.cwd(), "content/editorial-queue.json");

const REQUIRED_FIELDS = [
  "slug",
  "category",
  "topic",
  "title",
  "summary",
  "seoDescription",
  "date",
  "updated",
  "displayDate",
  "readTime",
  "sourceName",
  "sourceUrl",
  "image",
];

export function ensureInsightsDir() {
  fs.mkdirSync(CONTENT_DIR, { recursive: true });
}

export function todayUtc() {
  return new Date().toISOString().slice(0, 10);
}

export function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

export function formatDisplayDate(dateString) {
  const date = new Date(`${dateString}T00:00:00Z`);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function buildSeoDescription(text, maxLength = 160) {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (!clean) return "";
  if (clean.length <= maxLength) return clean;
  const clipped = clean.slice(0, maxLength - 1);
  return `${clipped.slice(0, clipped.lastIndexOf(" "))}...`;
}

export function estimateReadTime(insight) {
  const content = [
    insight.summary,
    ...(insight.sections || []).flatMap((section) => section.paragraphs || []),
    ...(insight.actionItems || []),
  ]
    .filter(Boolean)
    .join(" ");
  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(3, Math.ceil(wordCount / 220));
  return `${minutes} min read`;
}

export function normalizeInsight(rawInsight) {
  const insight = JSON.parse(JSON.stringify(rawInsight));

  insight.slug = insight.slug || slugify(insight.title);
  insight.status = insight.status || "draft";
  insight.featured = Boolean(insight.featured);
  insight.editorialPriority = Number.isFinite(Number(insight.editorialPriority))
    ? Number(insight.editorialPriority)
    : 0;
  insight.date = insight.date || todayUtc();
  insight.updated = insight.updated || insight.date;
  insight.displayDate = insight.displayDate || formatDisplayDate(insight.date);
  insight.tags = Array.isArray(insight.tags) ? insight.tags.filter(Boolean) : [];
  insight.highlights = Array.isArray(insight.highlights)
    ? insight.highlights.filter(
        (item) => item?.label && item?.value && item?.description
      )
    : [];
  insight.sections = Array.isArray(insight.sections)
    ? insight.sections.filter(
        (section) =>
          section?.heading &&
          Array.isArray(section?.paragraphs) &&
          section.paragraphs.length > 0
      )
    : [];
  insight.actionItems = Array.isArray(insight.actionItems)
    ? insight.actionItems.filter(Boolean)
    : [];
  insight.readTime = insight.readTime || estimateReadTime(insight);
  insight.seoDescription =
    insight.seoDescription || buildSeoDescription(insight.summary);

  return insight;
}

export function validateInsight(insight, sourcePath = "unknown source") {
  for (const field of REQUIRED_FIELDS) {
    if (!String(insight[field] || "").trim()) {
      throw new Error(`Missing required field "${field}" in ${sourcePath}`);
    }
  }

  if (!Array.isArray(insight.tags) || insight.tags.length === 0) {
    throw new Error(`Missing tags in ${sourcePath}`);
  }

  if (!Array.isArray(insight.highlights) || insight.highlights.length < 2) {
    throw new Error(`At least two highlights are required in ${sourcePath}`);
  }

  if (!Array.isArray(insight.sections) || insight.sections.length < 3) {
    throw new Error(`At least three sections are required in ${sourcePath}`);
  }

  if (!Array.isArray(insight.actionItems) || insight.actionItems.length < 3) {
    throw new Error(`At least three action items are required in ${sourcePath}`);
  }
}

export function insightFilePath(slug) {
  return path.join(CONTENT_DIR, `${slug}.json`);
}

export function listInsightFiles() {
  ensureInsightsDir();
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".json"))
    .sort();
}

export function readInsightFile(fileName) {
  const filePath = fileName.endsWith(".json")
    ? path.join(CONTENT_DIR, fileName)
    : insightFilePath(fileName);
  return normalizeInsight(JSON.parse(fs.readFileSync(filePath, "utf8")));
}

export function readAllInsights() {
  const seenSlugs = new Set();

  return listInsightFiles()
    .map((fileName) => {
      const insight = readInsightFile(fileName);
      if (seenSlugs.has(insight.slug)) {
        throw new Error(`Duplicate insight slug "${insight.slug}"`);
      }
      seenSlugs.add(insight.slug);
      validateInsight(insight, fileName);
      return insight;
    })
    .sort(sortInsightsByDateDesc);
}

export function writeInsightFile(insight) {
  ensureInsightsDir();
  const normalizedInsight = normalizeInsight(insight);
  const filePath = insightFilePath(normalizedInsight.slug);
  fs.writeFileSync(filePath, `${JSON.stringify(normalizedInsight, null, 2)}\n`);
  return filePath;
}

export function sortInsightsByDateDesc(left, right) {
  if (left.editorialPriority !== right.editorialPriority) {
    return right.editorialPriority - left.editorialPriority;
  }

  const leftDate = new Date(`${left.date}T00:00:00Z`).getTime();
  const rightDate = new Date(`${right.date}T00:00:00Z`).getTime();
  if (leftDate !== rightDate) return rightDate - leftDate;

  const leftUpdated = new Date(`${left.updated}T00:00:00Z`).getTime();
  const rightUpdated = new Date(`${right.updated}T00:00:00Z`).getTime();
  if (leftUpdated !== rightUpdated) return rightUpdated - leftUpdated;

  return left.slug.localeCompare(right.slug);
}

export function renderGeneratedModule(allInsights) {
  const publishedInsights = allInsights.filter(
    (insight) => insight.status === "published"
  );
  const featuredInsight =
    publishedInsights.find((insight) => insight.featured) || publishedInsights[0] || null;

  const featuredSlug = featuredInsight?.slug || null;
  const normalizedPublishedInsights = publishedInsights.map((insight) => ({
    ...insight,
    featured: insight.slug === featuredSlug,
  }));

  return `// This file is auto-generated by scripts/build-insights-index.mjs.
// Edit content/insights/*.json, then run npm run insights:sync.

export const insights = ${JSON.stringify(normalizedPublishedInsights, null, 2)};

export const featuredInsight =
  insights.find((insight) => insight.featured) || insights[0] || null;

export function getInsightBySlug(slug) {
  return insights.find((insight) => insight.slug === slug);
}
`;
}

export function renderReviewModule(allInsights) {
  return `// This file is auto-generated by scripts/build-insights-index.mjs.
// Edit content/insights/*.json, then run npm run insights:sync.

export const allInsights = ${JSON.stringify(allInsights, null, 2)};

export const publishedInsights = allInsights.filter(
  (insight) => insight.status === "published"
);

export const draftInsights = allInsights.filter(
  (insight) => insight.status === "draft"
);

export const scheduledInsights = allInsights.filter(
  (insight) => insight.status === "scheduled"
);

export function getAnyInsightBySlug(slug) {
  return allInsights.find((insight) => insight.slug === slug);
}
`;
}

export function writeGeneratedModule(allInsights) {
  const moduleSource = renderGeneratedModule(allInsights);
  const reviewModuleSource = renderReviewModule(allInsights);
  fs.writeFileSync(GENERATED_MODULE_PATH, moduleSource);
  fs.writeFileSync(REVIEW_MODULE_PATH, reviewModuleSource);
  return {
    total: allInsights.length,
    published: allInsights.filter((insight) => insight.status === "published").length,
    drafts: allInsights.filter((insight) => insight.status === "draft").length,
    scheduled: allInsights.filter((insight) => insight.status === "scheduled").length,
  };
}

export function loadEditorialQueue() {
  if (!fs.existsSync(QUEUE_PATH)) {
    return {
      defaults: {
        publish: false,
        featured: false,
        status: "draft",
      },
      items: [],
    };
  }

  const queue = JSON.parse(fs.readFileSync(QUEUE_PATH, "utf8"));
  return {
    defaults: queue.defaults || {
      publish: false,
      featured: false,
      status: "draft",
    },
    items: Array.isArray(queue.items) ? queue.items : [],
  };
}

export function writeEditorialQueue(queue) {
  fs.mkdirSync(path.dirname(QUEUE_PATH), { recursive: true });
  fs.writeFileSync(QUEUE_PATH, `${JSON.stringify(queue, null, 2)}\n`);
}

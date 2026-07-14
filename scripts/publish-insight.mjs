import { loadLocalEnv } from "./lib/env.mjs";
import {
  readAllInsights,
  readInsightFile,
  todayUtc,
  writeGeneratedModule,
  writeInsightFile,
} from "./lib/insights.mjs";

loadLocalEnv();

const slug = process.argv[2];

if (!slug) {
  throw new Error("Usage: node scripts/publish-insight.mjs <slug>");
}

const insight = readInsightFile(slug);
const publishedInsight = {
  ...insight,
  status: "published",
  updated: todayUtc(),
};

writeInsightFile(publishedInsight);
const syncResult = writeGeneratedModule(readAllInsights());

console.log(`Published ${slug}`);
console.log(
  `Insights synced: ${syncResult.published} published, ${syncResult.drafts} drafts`
);

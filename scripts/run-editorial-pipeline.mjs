import { loadLocalEnv } from "./lib/env.mjs";
import { createInsightFromBrief } from "./lib/editorial-ai.mjs";
import {
  loadEditorialQueue,
  readAllInsights,
  todayUtc,
  writeEditorialQueue,
  writeGeneratedModule,
  writeInsightFile,
} from "./lib/insights.mjs";

loadLocalEnv();

const queue = loadEditorialQueue();
const queuedItems = queue.items.filter((item) => item.status === "queued");

if (queuedItems.length === 0) {
  const syncResult = writeGeneratedModule(readAllInsights());
  console.log("No queued editorial items found.");
  console.log(
    `Insights synced: ${syncResult.published} published, ${syncResult.drafts} drafts`
  );
  process.exit(0);
}

for (const item of queue.items) {
  if (item.status !== "queued") continue;

  const insight = await createInsightFromBrief({
    ...queue.defaults,
    ...item,
  });

  writeInsightFile(insight);

  item.generatedSlug = insight.slug;
  item.generatedAt = todayUtc();
  item.generationMode =
    process.env.OPENAI_API_KEY && process.env.OPENAI_MODEL ? "openai" : "template";
  item.status = insight.status === "published" ? "published" : "drafted";
}

writeEditorialQueue(queue);
const syncResult = writeGeneratedModule(readAllInsights());

console.log(`Processed ${queuedItems.length} queued editorial item(s).`);
console.log(
  `Insights synced: ${syncResult.published} published, ${syncResult.drafts} drafts`
);

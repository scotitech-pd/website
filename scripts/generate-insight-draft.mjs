import { loadLocalEnv } from "./lib/env.mjs";
import { createInsightFromBrief } from "./lib/editorial-ai.mjs";
import {
  readAllInsights,
  slugify,
  writeGeneratedModule,
  writeInsightFile,
} from "./lib/insights.mjs";

loadLocalEnv();

function parseArgs(argv) {
  const args = {};

  for (let index = 0; index < argv.length; index += 1) {
    const current = argv[index];
    if (!current.startsWith("--")) continue;

    const key = current.slice(2);
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      args[key] = true;
      continue;
    }

    args[key] = next;
    index += 1;
  }

  return args;
}

const args = parseArgs(process.argv.slice(2));

if (!args.topic && !args.title) {
  throw new Error("Provide at least --topic or --title");
}

const draft = await createInsightFromBrief({
  title: args.title,
  topic: args.topic,
  angle: args.angle,
  product: args.product,
  category: args.category,
  sourceName: args["source-name"],
  sourceUrl: args["source-url"],
  sourceNotes: args["source-notes"],
  image: args.image,
  keywords: args.keywords
    ? args.keywords.split(",").map((value) => value.trim()).filter(Boolean)
    : [],
  slug: args.slug || (args.title ? slugify(args.title) : undefined),
  publish: Boolean(args.publish),
  featured: Boolean(args.featured),
  date: args.date,
});

const filePath = writeInsightFile(draft);
const syncResult = writeGeneratedModule(readAllInsights());

console.log(`Draft saved to ${filePath}`);
console.log(
  `Insights synced: ${syncResult.published} published, ${syncResult.drafts} drafts`
);

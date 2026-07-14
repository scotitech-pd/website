import { loadLocalEnv } from "./lib/env.mjs";
import { readAllInsights, writeGeneratedModule } from "./lib/insights.mjs";

loadLocalEnv();

const allInsights = readAllInsights();
const result = writeGeneratedModule(allInsights);

console.log(
  `Synced insights module: ${result.published} published, ${result.drafts} drafts, ${result.scheduled} scheduled`
);

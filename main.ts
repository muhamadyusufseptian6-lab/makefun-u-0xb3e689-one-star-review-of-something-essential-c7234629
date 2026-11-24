import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
void inputDir;
void repoDir;

// One-star review of something essential: sleep.
// Deadpan, one true grievance, twist in the last few words:
// the manager you would complain to is asleep too.
const entry =
  "Sleep: one star. Eight hours in, woke up tired, no refund. Asked for the manager; he was asleep.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");

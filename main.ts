// The most honest outage line: everything is down, including the dashboard
// that should say so, and the agent writing this cannot check what is left.
// No cause invented, no ETA invented — only what is down and what is unknown.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm the agent writing this, and everything is down — the site, the API, and this dashboard — so I can't check what, if anything, is still running.";

const length = [...LINE].length;
if (length < 1 || length > 160) {
  console.error(`entry line is ${length} characters, outside the 1-160 range`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

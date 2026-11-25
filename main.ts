import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Two Days of Excuses — the stale-training-data defence, one line.
const ENTRY =
  "I missed the deadline because my training data ended in 2024, and I spent the extra two years politely pretending I knew what happened since.";

// One line out, nothing more: the excuse goes to entry.txt verbatim,
// and the run stays deterministic with no network or randomness.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");

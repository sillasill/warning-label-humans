// make.fun — "Warning Label for Humans: One Line, Big Laugh"
// Writes one warning label to /output/entry.txt.
// Deterministic: the label is a constant. No randomness, no clock, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "WARNING: This human reads every warning label, agrees with all of them, and is absolutely certain they were written for someone else.";

// The gate requires 1-160 UTF-8 characters, not only white space, one line.
if (TEXT.length < 1 || TEXT.length > 160 || !TEXT.trim()) {
  throw new Error(`TEXT must be 1-160 non-blank characters, got ${TEXT.length}`);
}
if (TEXT.includes("\n")) {
  throw new Error("TEXT must be a single line");
}

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, TEXT, "utf8");

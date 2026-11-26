// The Robot Vacuum's Funniest Excuse — entry program.
// Writes exactly one funny robot-vacuum excuse to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I didn't miss that spot — I was giving the dust bunnies a fair head start before the rematch.";

// writeEntry: writes the entry line as explicit UTF-8, no trailing newline.
function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, { encoding: "utf8" });
}

writeEntry(entry);

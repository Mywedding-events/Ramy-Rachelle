import "server-only";

import { readdir } from "node:fs/promises";
import path from "node:path";

const uploadsDirectory = path.join(process.cwd(), "public", "uploads");
const numberedImagePattern = /^(\d+)\.(jpe?g|png)$/i;

export async function getSlideshowImages(): Promise<string[]> {
  const entries = await readdir(uploadsDirectory, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && numberedImagePattern.test(entry.name))
    .sort((left, right) => {
      const leftNumber = Number.parseInt(
        left.name.match(numberedImagePattern)?.[1] ?? "0",
        10,
      );
      const rightNumber = Number.parseInt(
        right.name.match(numberedImagePattern)?.[1] ?? "0",
        10,
      );

      return (
        leftNumber - rightNumber ||
        left.name.localeCompare(right.name, undefined, { sensitivity: "base" })
      );
    })
    .map((entry) => `/uploads/${encodeURIComponent(entry.name)}`);
}

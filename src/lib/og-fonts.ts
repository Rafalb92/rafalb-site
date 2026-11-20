import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cacheLife } from "next/cache";
const FONTS_DIR = join(process.cwd(), "src/assets/fonts");

/**
 * Cached so image routes don't count as dynamic: with cacheComponents,
 * uncached file reads would make them render on every request.
 */
async function readFontFile(fileName: string): Promise<ArrayBuffer> {
  "use cache";
  cacheLife("max"); // font files never change between deploys
  const file = await readFile(join(FONTS_DIR, fileName));
  // Copy into a plain ArrayBuffer — serializable for the cache and accepted by next/og.
  return new Uint8Array(file).buffer;
}

/** Raleway for next/og. Satori needs raw TTF/OTF/WOFF data — WOFF2 is not supported. */
export async function loadOgFonts() {
  const [regular, bold] = await Promise.all([
    readFontFile("Raleway-Regular.ttf"),
    readFontFile("Raleway-Bold.ttf"),
  ]);

  return [
    {
      name: "Raleway",
      data: regular,
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "Raleway",
      data: bold,
      weight: 700 as const,
      style: "normal" as const,
    },
  ];
}

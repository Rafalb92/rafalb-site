import { readFile } from "node:fs/promises";
import { join } from "node:path";

const FONTS_DIR = join(process.cwd(), "src/assets/fonts");

/** Raleway for next/og. Satori needs raw TTF/OTF/WOFF data — WOFF2 is not supported. */
export async function loadOgFonts() {
  const [regular, bold] = await Promise.all([
    readFile(join(FONTS_DIR, "Raleway-Regular.ttf")),
    readFile(join(FONTS_DIR, "Raleway-Bold.ttf")),
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

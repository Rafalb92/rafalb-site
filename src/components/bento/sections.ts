export const SECTION_IDS = [
  "hero",
  "links",
  "now",
  "skills",
  "projects",
  "experience",
  "about",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

/** Shared between the grid tile and its expanded panel — Motion animates between them. */
export function tileLayoutId(id: SectionId): string {
  return `tile-${id}`;
}

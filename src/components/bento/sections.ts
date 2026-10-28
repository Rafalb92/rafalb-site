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

interface SectionMeta {
  /** Human-readable name, used for headings and aria labels. */
  label: string;
  /** Large background word shown while the tile is hovered or expanded. */
  ghostWord: string;
}

export interface SectionConfig extends SectionMeta {
  id: SectionId;
}

const SECTION_META = {
  hero: { label: "Intro", ghostWord: "FULLSTACK DEVELOPER" },
  links: { label: "Links", ghostWord: "CONTACT" },
  now: { label: "Now", ghostWord: "AVAILABLE" },
  skills: { label: "Skills", ghostWord: "SKILLS" },
  projects: { label: "Featured projects", ghostWord: "PROJECTS" },
  experience: { label: "Experience", ghostWord: "JOURNEY" },
  about: { label: "About", ghostWord: "ABOUT" },
} as const satisfies Record<SectionId, SectionMeta>;

export function getSection(id: SectionId): SectionConfig {
  return { id, ...SECTION_META[id] };
}

export const SECTIONS: readonly SectionConfig[] = SECTION_IDS.map(getSection);

/** Shared between the grid tile and its expanded panel — Motion animates between them. */
export function tileLayoutId(id: SectionId): string {
  return `tile-${id}`;
}

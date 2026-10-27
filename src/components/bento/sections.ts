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
  /** Whether clicking the tile expands it over the whole grid. */
  expandable: boolean;
}

export interface SectionConfig extends SectionMeta {
  id: SectionId;
}

const SECTION_META = {
  hero: { label: "Intro", ghostWord: "FULLSTACK DEVELOPER", expandable: false },
  links: { label: "Links", ghostWord: "CONTACT", expandable: false },
  now: { label: "Now", ghostWord: "AVAILABLE", expandable: false },
  skills: { label: "Skills", ghostWord: "SKILLS", expandable: true },
  projects: {
    label: "Featured projects",
    ghostWord: "PROJECTS",
    expandable: true,
  },
  experience: { label: "Experience", ghostWord: "JOURNEY", expandable: true },
  about: { label: "About", ghostWord: "ABOUT", expandable: true },
} as const satisfies Record<SectionId, SectionMeta>;

export const SECTIONS: readonly SectionConfig[] = SECTION_IDS.map((id) => ({
  id,
  ...SECTION_META[id],
}));

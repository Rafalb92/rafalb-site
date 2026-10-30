export interface ExperienceData {
  start: number;
  /** `null` means ongoing. */
  end: number | null;
  /** Proper noun — the same in every language. Omitted for independent work. */
  organization?: string;
  location?: string;
  tags?: readonly string[];
}

/** Object order is display order — newest first. */
const EXPERIENCE_DATA = {
  independent: {
    start: 2025,
    end: null,
    tags: ["TypeScript", "NestJS", "Nuxt", "React Native", "MediaPipe"],
  },
  nexcoder: {
    start: 2018,
    end: 2025,
    organization: "NEXCODER",
    location: "Dzierżoniów",
  },
  conditor: {
    start: 2017,
    end: 2018,
    organization: "Conditor Sp. z o.o.",
    location: "Ząbkowice Śląskie",
    tags: ["WordPress", "SEO"],
  },
  alphaVision: {
    start: 2013,
    end: 2016,
    organization: "Alpha Vision Sp. z o.o.",
  },
} satisfies Record<string, ExperienceData>;

export type ExperienceId = keyof typeof EXPERIENCE_DATA;

export const EXPERIENCE: Record<ExperienceId, ExperienceData> = EXPERIENCE_DATA;

export const EXPERIENCE_IDS = Object.keys(EXPERIENCE) as ExperienceId[];

export const EDUCATION = {
  start: 2008,
  end: 2012,
  school: "Zespół Szkół nr 1, Dzierżoniów",
} as const;

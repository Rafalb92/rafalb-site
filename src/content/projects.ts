import type { StaticImageData } from "next/image";
import ironoakHero from "@/assets/projects/ironoak/hero.png";

export type ProjectStatus = "live" | "inProgress";

/** Which mockup the screenshot is shown in. */
export type ProjectDevice = "laptop" | "phone";

export interface ProjectData {
  name: string;
  year: string;
  status: ProjectStatus;
  device: ProjectDevice;
  /** Laptop: 16:10 screenshot. Phone: ~9:19.5 screenshot. */
  image: StaticImageData;
  /** Brand names — the same in every language. */
  stack: readonly string[];
  links: {
    live?: string;
    repo?: string;
  };
}

/** Object order is display order. */
const PROJECT_DATA = {
  ironoak: {
    name: "IronOak",
    year: "2026",
    status: "live",
    device: "laptop",
    image: ironoakHero,
    stack: [
      "Nuxt 4",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "MikroORM",
      "Redis",
      "BullMQ",
      "Turborepo",
      "Docker",
    ],
    links: {
      live: "https://ironoak.example.com",
      repo: "https://github.com/your-handle/ironoak",
    },
  },
} satisfies Record<string, ProjectData>;

export type ProjectId = keyof typeof PROJECT_DATA;

export const PROJECTS: Record<ProjectId, ProjectData> = PROJECT_DATA;

export const PROJECT_IDS = Object.keys(PROJECTS) as ProjectId[];

/** First project of a given device kind — drives the collapsed tile composition. */
export function findProjectByDevice(
  device: ProjectDevice,
): ProjectId | undefined {
  return PROJECT_IDS.find((id) => PROJECTS[id].device === device);
}

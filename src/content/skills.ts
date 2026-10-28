import type { IconType } from "react-icons";
import {
  SiDocker,
  SiDrizzle,
  SiExpo,
  SiExpress,
  SiGit,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxt,
  SiPnpm,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiRedis,
  SiTailwindcss,
  SiThreedotjs,
  SiTurborepo,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

export interface Skill {
  name: string;
  /** Brand icon. Skills without one fall back to a monogram. */
  icon?: IconType;
  /** Handwritten note: where or how the skill was used. */
  note?: string;
  /** Shown in the collapsed Skills tile (keep it to max 6). */
  featured?: boolean;
}

export type SkillCategoryId = "frontend" | "backend" | "mobile" | "tooling";

export interface SkillCategory {
  id: SkillCategoryId;
  label: string;
  description: string;
  skills: readonly Skill[];
}

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Interfaces, state and 3D in the browser.",
    skills: [
      {
        name: "TypeScript",
        icon: SiTypescript,
        featured: true,
        note: "everything, strict mode",
      },
      { name: "React", icon: SiReact, featured: true },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        featured: true,
        note: "this very site",
      },
      { name: "Vue", icon: SiVuedotjs },
      {
        name: "Nuxt",
        icon: SiNuxt,
        featured: true,
        note: "IronOak storefront + admin",
      },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "TanStack Query", icon: SiReactquery },
      { name: "Pinia" },
      { name: "Zustand" },
      {
        name: "Three.js / R3F",
        icon: SiThreedotjs,
        note: "3D product configurators",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "APIs, domain logic and data.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      {
        name: "NestJS",
        icon: SiNestjs,
        featured: true,
        note: "IronOak — modular monolith, DDD",
      },
      { name: "Express", icon: SiExpress },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        note: "schema per bounded context",
      },
      { name: "Redis", icon: SiRedis },
      { name: "BullMQ", note: "background jobs in IronOak" },
      { name: "MikroORM", note: "IronOak persistence layer" },
      { name: "Prisma", icon: SiPrisma },
      { name: "Drizzle", icon: SiDrizzle },
    ],
  },
  {
    id: "mobile",
    label: "Mobile & on-device ML",
    description: "Native apps with models running on the phone.",
    skills: [
      { name: "React Native", icon: SiReact, featured: true, note: "RepCheck" },
      { name: "Expo", icon: SiExpo },
      { name: "VisionCamera", note: "live camera frame processing" },
      { name: "React Native Skia", note: "real-time skeleton overlay" },
      { name: "MediaPipe", note: "33 keypoints, ~22 ms per frame" },
    ],
  },
  {
    id: "tooling",
    label: "Tooling & infrastructure",
    description:
      "Monorepos, containers and the boring parts that keep it running.",
    skills: [
      { name: "Docker", icon: SiDocker, note: "Postgres + Redis via Compose" },
      { name: "pnpm", icon: SiPnpm },
      { name: "Turborepo", icon: SiTurborepo, note: "IronOak monorepo" },
      { name: "Git", icon: SiGit },
    ],
  },
];

export const ALL_SKILLS: readonly Skill[] = SKILL_CATEGORIES.flatMap(
  (category) => category.skills,
);

export const FEATURED_SKILLS: readonly Skill[] = ALL_SKILLS.filter(
  (skill) => skill.featured,
);

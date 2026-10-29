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

export interface SkillData {
  /** Brand names are the same in every language — not translated. */
  name: string;
  /** Brand icon. Skills without one fall back to a monogram. */
  icon?: IconType;
  /** Shown in the collapsed Skills tile (keep it to max 6). */
  featured?: boolean;
}

const SKILL_DATA = {
  // Frontend
  typescript: { name: "TypeScript", icon: SiTypescript, featured: true },
  react: { name: "React", icon: SiReact, featured: true },
  nextjs: { name: "Next.js", icon: SiNextdotjs, featured: true },
  vue: { name: "Vue", icon: SiVuedotjs },
  nuxt: { name: "Nuxt", icon: SiNuxt, featured: true },
  tailwind: { name: "Tailwind CSS", icon: SiTailwindcss },
  tanstackQuery: { name: "TanStack Query", icon: SiReactquery },
  pinia: { name: "Pinia" },
  zustand: { name: "Zustand" },
  threejs: { name: "Three.js / R3F", icon: SiThreedotjs },
  // Backend
  nodejs: { name: "Node.js", icon: SiNodedotjs },
  nestjs: { name: "NestJS", icon: SiNestjs, featured: true },
  express: { name: "Express", icon: SiExpress },
  postgresql: { name: "PostgreSQL", icon: SiPostgresql },
  redis: { name: "Redis", icon: SiRedis },
  bullmq: { name: "BullMQ" },
  mikroorm: { name: "MikroORM" },
  prisma: { name: "Prisma", icon: SiPrisma },
  drizzle: { name: "Drizzle", icon: SiDrizzle },
  // Mobile & on-device ML
  reactNative: { name: "React Native", icon: SiReact, featured: true },
  expo: { name: "Expo", icon: SiExpo },
  visionCamera: { name: "VisionCamera" },
  skia: { name: "React Native Skia" },
  mediapipe: { name: "MediaPipe" },
  // Tooling
  docker: { name: "Docker", icon: SiDocker },
  pnpm: { name: "pnpm", icon: SiPnpm },
  turborepo: { name: "Turborepo", icon: SiTurborepo },
  git: { name: "Git", icon: SiGit },
} satisfies Record<string, SkillData>;

export type SkillId = keyof typeof SKILL_DATA;

export const SKILLS: Record<SkillId, SkillData> = SKILL_DATA;

export const SKILL_CATEGORY_IDS = [
  "frontend",
  "backend",
  "mobile",
  "tooling",
] as const;

export type SkillCategoryId = (typeof SKILL_CATEGORY_IDS)[number];

export interface SkillCategory {
  id: SkillCategoryId;
  skillIds: readonly SkillId[];
}

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    id: "frontend",
    skillIds: [
      "typescript",
      "react",
      "nextjs",
      "vue",
      "nuxt",
      "tailwind",
      "tanstackQuery",
      "pinia",
      "zustand",
      "threejs",
    ],
  },
  {
    id: "backend",
    skillIds: [
      "nodejs",
      "nestjs",
      "express",
      "postgresql",
      "redis",
      "bullmq",
      "mikroorm",
      "prisma",
      "drizzle",
    ],
  },
  {
    id: "mobile",
    skillIds: ["reactNative", "expo", "visionCamera", "skia", "mediapipe"],
  },
  {
    id: "tooling",
    skillIds: ["docker", "pnpm", "turborepo", "git"],
  },
];

export const SKILL_COUNT = Object.keys(SKILLS).length;

export const FEATURED_SKILL_IDS: readonly SkillId[] = (
  Object.keys(SKILLS) as SkillId[]
).filter((id) => SKILLS[id].featured);

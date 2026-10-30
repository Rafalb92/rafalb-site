import type { SectionId } from "@/components/bento/sections";
import type { ProjectId } from "@/content/projects";
import type { SkillCategoryId, SkillId } from "@/content/skills";
import type { ExperienceId } from "@/content/experience";
interface SectionText {
  label: string;
  /** Large background word shown while the tile is hovered or expanded. */
  ghostWord: string;
}

interface SkillCategoryText {
  label: string;
  description: string;
}

interface ProjectText {
  tagline: string;
  description: string;
  highlights: string[];
  imageAlt: string;
}

interface ExperienceText {
  role: string;
  description: string;
}

/** Partial on purpose: a missing note just means no tooltip for that skill. */
const skillNotes: Partial<Record<SkillId, string>> = {
  typescript: "everything, strict mode",
  nextjs: "this very site",
  nuxt: "IronOak storefront + admin",
  threejs: "3D product configurators",
  nestjs: "IronOak — modular monolith, DDD",
  postgresql: "schema per bounded context",
  bullmq: "background jobs in IronOak",
  mikroorm: "IronOak persistence layer",
  reactNative: "RepCheck",
  visionCamera: "live camera frame processing",
  skia: "real-time skeleton overlay",
  mediapipe: "33 keypoints, ~22 ms per frame",
  docker: "Postgres + Redis via Compose",
  turborepo: "IronOak monorepo",
};

export const en = {
  meta: {
    title: "Rafał — Fullstack Developer",
    description:
      "Fullstack TypeScript developer — Node.js, NestJS, React, Next.js, React Native.",
  },
  header: {
    letsTalk: "Let's talk",
    languageSwitcher: "Language",
  },
  footer: {
    builtWith: "Built with Next.js & Motion",
  },
  tile: {
    open: (label: string) => `Open ${label}`,
    close: (label: string) => `Close ${label}`,
  },
  sections: {
    hero: { label: "Intro", ghostWord: "FULLSTACK DEVELOPER" },
    links: { label: "Links", ghostWord: "CONTACT" },
    now: { label: "Now", ghostWord: "AVAILABLE" },
    skills: { label: "Skills", ghostWord: "SKILLS" },
    projects: { label: "Featured projects", ghostWord: "PROJECTS" },
    experience: { label: "Experience", ghostWord: "JOURNEY" },
    about: { label: "About", ghostWord: "ABOUT" },
  } satisfies Record<SectionId, SectionText>,
  hero: {
    role: "Fullstack Developer",
    tagline:
      "I build fullstack TypeScript products end to end — domain-driven NestJS backends, React and React Native interfaces, and on-device ML when the product needs it.",
  },
  now: {
    status: "Open to work",
    details: [
      { term: "Based in", value: "Wrocław, Poland" },
      { term: "Work mode", value: "Remote · Hybrid" },
      { term: "Building", value: "RepCheck — on-device exercise analysis" },
    ],
  },
  links: {
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
    cv: "Download CV",
    opensInNewTab: "(opens in a new tab)",
  },
  skills: {
    intro:
      "Tools I reach for, grouped by where they live in the stack. Hover the ones marked with a dot for a note on where I've used them.",
    categories: {
      frontend: {
        label: "Frontend",
        description: "Interfaces, state and 3D in the browser.",
      },
      backend: {
        label: "Backend",
        description: "APIs, domain logic and data.",
      },
      mobile: {
        label: "Mobile & on-device ML",
        description: "Native apps with models running on the phone.",
      },
      tooling: {
        label: "Tooling & infrastructure",
        description:
          "Monorepos, containers and the boring parts that keep it running.",
      },
    } satisfies Record<SkillCategoryId, SkillCategoryText>,
    notes: skillNotes,
  },
  projects: {
    intro:
      "Selected work — what each project is, the decisions behind it and where to see it running.",
    status: {
      live: "Live",
      inProgress: "In progress",
    },
    labels: {
      highlights: "Key decisions",
      stack: "Stack",
      liveDemo: "Live demo",
      sourceCode: "Source code",
    },
    items: {
      ironoak: {
        tagline:
          "Premium home gym equipment store — storefront, admin panel and a domain-driven backend.",
        description:
          "A production-grade e-commerce platform built the way a software house would: a NestJS modular monolith behind two Nuxt apps, with the business core modeled explicitly instead of hidden in CRUD.",
        highlights: [
          "Modular monolith with six bounded contexts, each in its own PostgreSQL schema",
          "Ordering context modeled with DDD — aggregates, ports and adapters (hexagonal architecture)",
          "Identity built from scratch — Argon2id password hashing, JWT via jose",
          "Two Nuxt 4 apps (storefront + admin) in a Turborepo monorepo",
        ],
        imageAlt: "IronOak storefront — homepage",
      },
    } satisfies Record<ProjectId, ProjectText>,
  },
  experience: {
    intro:
      "From a production line to production code — the path, honestly, newest first.",
    labels: {
      present: "now",
      independent: "Independent",
      education: "Education",
    },
    items: {
      independent: {
        role: "Product engineer",
        description:
          "Building IronOak and RepCheck to production standard — domain-driven backends, monorepos and ML running on the device.",
      },
      nexcoder: {
        role: "Freelance web developer",
        description:
          "Websites for small businesses under my own company, alongside deep self-study that took me from WordPress to modern TypeScript stacks.",
      },
      conditor: {
        role: "Web developer & marketing",
        description: "My first commercial web role — WordPress sites and SEO.",
      },
      alphaVision: {
        role: "Machine operator → shift lead",
        description:
          "Ran production machines, then led a shift — responsibility for a process, a team and the results. Systems thinking I still use every day.",
      },
    } satisfies Record<ExperienceId, ExperienceText>,
    education: {
      degree: "Mechatronics technician",
    },
  },
  about: {
    portraitAlt: "Illustrated portrait of Rafał",
    story: [
      {
        heading: "Where I come from",
        body: "I started as a mechatronics technician and spent years on a production line, eventually leading a shift. That's where I learned to think in systems: every part has a job, and the whole thing has to run reliably. Software turned out to be the same problem — just more fun to build.",
      },
      {
        heading: "How I work",
        body: "Domain first, code second. I model the business before I touch the framework — which is why IronOak's core is built with DDD rather than CRUD. Even portfolio projects get production treatment: monorepos, migrations, real deployments.",
      },
      {
        heading: "Where I'm heading",
        body: "Next step: AI and ML in real products. RepCheck already runs pose estimation on the phone in about 22 ms per frame — I want to keep building where solid backend engineering meets models that do something useful.",
      },
    ],
    lookingFor: {
      heading: "What I'm looking for",
      items: [
        "Fullstack, frontend or backend roles in TypeScript",
        "Any contract type — employment or B2B",
        "Remote preferred, open to hybrid",
      ],
    },
    languages: {
      heading: "Languages",
      items: [
        { name: "Polish", level: "native" },
        { name: "English", level: "B1" },
      ],
    },
    outside: {
      heading: "Outside code",
      items: [
        "The gym — the reason IronOak and RepCheck exist",
        "Cooking and baking",
        "Hiking in the mountains",
      ],
    },
  },
};

/** The English dictionary defines the shape every other locale must match. */
export type Dictionary = typeof en;

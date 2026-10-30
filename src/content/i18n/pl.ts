import type { Dictionary } from "./en";

export const pl: Dictionary = {
  meta: {
    title: "Rafał — Fullstack Developer",
    description:
      "Fullstack developer TypeScript — Node.js, NestJS, React, Next.js, React Native.",
  },
  header: {
    letsTalk: "Porozmawiajmy",
    languageSwitcher: "Język",
  },
  footer: {
    builtWith: "Zbudowane w Next.js i Motion",
  },
  tile: {
    open: (label) => `Otwórz sekcję: ${label}`,
    close: (label) => `Zamknij sekcję: ${label}`,
  },
  sections: {
    hero: { label: "Intro", ghostWord: "FULLSTACK DEVELOPER" },
    links: { label: "Linki", ghostWord: "KONTAKT" },
    now: { label: "Teraz", ghostWord: "DOSTĘPNY" },
    skills: { label: "Umiejętności", ghostWord: "UMIEJĘTNOŚCI" },
    projects: { label: "Wybrane projekty", ghostWord: "PROJEKTY" },
    experience: { label: "Doświadczenie", ghostWord: "ŚCIEŻKA" },
    about: { label: "O mnie", ghostWord: "O MNIE" },
  },
  hero: {
    role: "Fullstack Developer",
    tagline:
      "Buduję produkty w TypeScripcie od A do Z — backendy w NestJS projektowane zgodnie z DDD, interfejsy w React i React Native, a gdy produkt tego potrzebuje — ML działające bezpośrednio na urządzeniu.",
  },
  now: {
    status: "Otwarty na oferty",
    details: [
      { term: "Lokalizacja", value: "Wrocław, Polska" },
      { term: "Tryb pracy", value: "Zdalnie · Hybrydowo" },
      { term: "Buduję", value: "RepCheck — analiza ćwiczeń na urządzeniu" },
    ],
  },
  links: {
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "E-mail",
    cv: "Pobierz CV",
    opensInNewTab: "(otwiera się w nowej karcie)",
  },
  skills: {
    intro:
      "Narzędzia, po które sięgam, pogrupowane według miejsca w stacku. Najedź na te oznaczone kropką, żeby zobaczyć, gdzie ich używałem.",
    categories: {
      frontend: {
        label: "Frontend",
        description: "Interfejsy, stan i 3D w przeglądarce.",
      },
      backend: {
        label: "Backend",
        description: "API, logika domenowa i dane.",
      },
      mobile: {
        label: "Mobile i ML na urządzeniu",
        description: "Natywne aplikacje z modelami działającymi na telefonie.",
      },
      tooling: {
        label: "Narzędzia i infrastruktura",
        description:
          "Monorepo, kontenery i nudne rzeczy, dzięki którym wszystko działa.",
      },
    },
    notes: {
      typescript: "wszędzie, strict mode",
      nextjs: "ta strona",
      nuxt: "sklep + panel IronOak",
      threejs: "konfiguratory 3D produktów",
      nestjs: "IronOak — modularny monolit, DDD",
      postgresql: "schemat na bounded context",
      bullmq: "zadania w tle w IronOak",
      mikroorm: "warstwa persystencji IronOak",
      reactNative: "RepCheck",
      visionCamera: "klatki z kamery na żywo",
      skia: "szkielet rysowany na żywo",
      mediapipe: "33 punkty, ~22 ms na klatkę",
      docker: "Postgres + Redis przez Compose",
      turborepo: "monorepo IronOak",
    },
  },
  projects: {
    intro:
      "Wybrane realizacje — czym jest każdy projekt, jakie decyzje za nim stoją i gdzie zobaczyć go w działaniu.",
    status: {
      live: "Online",
      inProgress: "W trakcie",
    },
    labels: {
      highlights: "Kluczowe decyzje",
      stack: "Stack",
      liveDemo: "Zobacz na żywo",
      sourceCode: "Kod źródłowy",
    },
    items: {
      ironoak: {
        tagline:
          "Sklep z premium sprzętem do domowej siłowni — witryna, panel admina i backend oparty na DDD.",
        description:
          "Platforma e-commerce zbudowana tak, jak zrobiłby to software house: modularny monolit w NestJS za dwiema aplikacjami Nuxt, z logiką biznesową zamodelowaną wprost zamiast ukrytej w CRUD-zie.",
        highlights: [
          "Modularny monolit z sześcioma bounded contextami, każdy we własnym schemacie PostgreSQL",
          "Kontekst Ordering zamodelowany w DDD — agregaty, porty i adaptery (architektura heksagonalna)",
          "Własny moduł Identity — hashowanie haseł Argon2id, tokeny JWT przez jose",
          "Dwie aplikacje Nuxt 4 (witryna + panel admina) w monorepo Turborepo",
        ],
        imageAlt: "IronOak — strona główna sklepu",
      },
    },
  },
};

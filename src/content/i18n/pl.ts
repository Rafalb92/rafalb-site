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
  experience: {
    intro:
      "Od linii produkcyjnej do kodu produkcyjnego — moja ścieżka, uczciwie, od najnowszego.",
    labels: {
      present: "teraz",
      independent: "Niezależnie",
      education: "Edukacja",
    },
    items: {
      independent: {
        role: "Product engineer",
        description:
          "Buduję IronOak i RepCheck w standardzie produkcyjnym — backendy oparte na DDD, monorepo i ML działające na urządzeniu.",
      },
      nexcoder: {
        role: "Freelance web developer",
        description:
          "Strony dla małych firm w ramach własnej działalności, a równolegle intensywna samodzielna nauka, która zaprowadziła mnie od WordPressa do nowoczesnego stacku TypeScript.",
      },
      conditor: {
        role: "Web developer i marketing",
        description:
          "Pierwsza komercyjna praca w webie — strony na WordPressie i SEO.",
      },
      alphaVision: {
        role: "Operator maszyn → lider zmiany",
        description:
          "Obsługa maszyn produkcyjnych, a potem prowadzenie zmiany — odpowiedzialność za proces, zespół i wyniki. Myślenie systemowe, z którego korzystam do dziś.",
      },
    },
    education: {
      degree: "Technik mechatronik",
    },
  },
  about: {
    portraitAlt: "Ilustrowany portret Rafała",
    story: [
      {
        heading: "Skąd idę",
        body: "Zaczynałem jako technik mechatronik i spędziłem lata na linii produkcyjnej, ostatecznie prowadząc zmianę. Tam nauczyłem się myśleć systemami: każdy element ma swoje zadanie, a całość musi działać niezawodnie. Oprogramowanie okazało się tym samym problemem — tylko budowanie go daje więcej frajdy.",
      },
      {
        heading: "Jak pracuję",
        body: "Najpierw domena, potem kod. Modeluję biznes, zanim dotknę frameworka — dlatego rdzeń IronOak jest zbudowany w DDD, a nie jako CRUD. Nawet projekty portfolio traktuję produkcyjnie: monorepo, migracje, prawdziwe wdrożenia.",
      },
      {
        heading: "Dokąd zmierzam",
        body: "Kolejny krok: AI i ML w prawdziwych produktach. RepCheck już teraz rozpoznaje pozę człowieka na telefonie w około 22 ms na klatkę — chcę dalej budować tam, gdzie solidny backend spotyka modele, które robią coś pożytecznego.",
      },
    ],
    lookingFor: {
      heading: "Czego szukam",
      items: [
        "Role fullstack, frontend lub backend w TypeScripcie",
        "Dowolna forma współpracy — UoP lub B2B",
        "Preferuję pracę zdalną, jestem otwarty na hybrydę",
      ],
    },
    languages: {
      heading: "Języki",
      items: [
        { name: "Polski", level: "ojczysty" },
        { name: "Angielski", level: "B1" },
      ],
    },
    outside: {
      heading: "Poza kodem",
      items: [
        "Siłownia — to z niej wzięły się IronOak i RepCheck",
        "Gotowanie i pieczenie",
        "Wędrówki po górach",
      ],
    },
  },
};

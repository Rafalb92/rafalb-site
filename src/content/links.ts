import { PROFILE } from "./profile";

export type ContactLinkKind = "github" | "linkedin" | "email" | "cv";

export interface ContactLink {
  kind: ContactLinkKind;
  label: string;
  href: string;
}

export const CONTACT_LINKS: readonly ContactLink[] = [
  { kind: "github", label: "GitHub", href: "https://github.com/Rafalb92" },
  {
    kind: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
  { kind: "email", label: "Email", href: `mailto:${PROFILE.email}` },
  {
    kind: "cv",
    label: "Download CV",
    href: "/cv/Rafal-Fullstack-Developer-CV.pdf",
  },
];

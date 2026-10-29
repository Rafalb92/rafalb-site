import type { Locale } from "@/lib/i18n/config";
import { PROFILE } from "./profile";

export const CONTACT_LINK_KINDS = [
  "github",
  "linkedin",
  "email",
  "cv",
] as const;

export type ContactLinkKind = (typeof CONTACT_LINK_KINDS)[number];

const STATIC_HREFS = {
  github: "https://github.com/Rafalb92",
  linkedin: "https://www.linkedin.com",
  email: `mailto:${PROFILE.email}`,
} satisfies Record<Exclude<ContactLinkKind, "cv">, string>;

/** One CV per language — the link follows the active locale. */
const CV_HREFS: Record<Locale, string> = {
  en: "/cv/Rafal-Fullstack-Developer-CV-EN.pdf",
  pl: "/cv/Rafal-Fullstack-Developer-CV-PL.pdf",
};

export function getContactHref(kind: ContactLinkKind, locale: Locale): string {
  return kind === "cv" ? CV_HREFS[locale] : STATIC_HREFS[kind];
}

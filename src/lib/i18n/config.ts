export const LOCALES = ["en", "pl"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Remembers a locale the visitor picked manually — wins over the browser language. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

/** Native names, used for screen readers in the language switcher. */
export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  pl: "Polski",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

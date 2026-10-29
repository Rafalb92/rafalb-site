import { en, type Dictionary } from "@/content/i18n/en";
import { pl } from "@/content/i18n/pl";
import type { Locale } from "./config";

const DICTIONARIES: Record<Locale, Dictionary> = { en, pl };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

export type { Dictionary };

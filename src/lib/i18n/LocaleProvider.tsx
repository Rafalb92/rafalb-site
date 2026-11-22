"use client";

import { createContext, type ReactNode, use } from "react";
import type { Locale } from "./config";
import { type Dictionary, getDictionary } from "./dictionaries";

const LocaleContext = createContext<Locale | null>(null);

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return <LocaleContext value={locale}>{children}</LocaleContext>;
}

export function useLocale(): Locale {
  const locale = use(LocaleContext);
  if (!locale)
    throw new Error("useLocale must be used inside <LocaleProvider>.");
  return locale;
}

export function useDictionary(): Dictionary {
  return getDictionary(useLocale());
}

import { notFound } from "next/navigation";
import { isLocale, type Locale } from "./config";

/** Reads the `[locale]` route param; unknown locales render a 404. */
export async function resolveLocale(
  params: Promise<{ locale: string }>,
): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}

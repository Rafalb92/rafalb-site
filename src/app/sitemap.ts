import type { MetadataRoute } from "next";
import { DEFAULT_LOCALE, LOCALES } from "@/lib/i18n/config";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Every entry lists all language versions, so Google treats them as one page in two languages.
  const languages = {
    ...Object.fromEntries(
      LOCALES.map((locale) => [locale, `${SITE_URL}/${locale}`]),
    ),
    "x-default": `${SITE_URL}/${DEFAULT_LOCALE}`,
  };

  return LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    alternates: { languages },
  }));
}

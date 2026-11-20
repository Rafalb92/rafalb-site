import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { cacheLife } from "next/cache";
async function getCurrentYear(): Promise<number> {
  "use cache";
  cacheLife("days"); // the year changes once a year — no need to recheck every 15 minutes
  return new Date().getFullYear();
}
export async function SiteFooter({ locale }: { locale: Locale }) {
  const currentYear = await getCurrentYear();
  const { footer } = getDictionary(locale);

  return (
    <footer className="flex items-center justify-between px-gutter py-3 font-mono text-xs text-fg-subtle">
      <span>© {currentYear} Rafał</span>
      <span>{footer.builtWith}</span>
    </footer>
  );
}

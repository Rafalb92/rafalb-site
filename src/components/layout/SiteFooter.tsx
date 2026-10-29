import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

async function getCurrentYear(): Promise<number> {
  "use cache";
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

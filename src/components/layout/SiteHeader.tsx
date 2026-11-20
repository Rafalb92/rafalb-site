import Link from "next/link";
import { ContactDialog } from "@/components/contact/ContactDialog";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function SiteHeader({ locale }: { locale: Locale }) {
  const { header } = getDictionary(locale);

  return (
    <header className="flex items-center justify-between px-gutter py-4">
      <Link
        href={`/${locale}`}
        className="text-lg font-semibold tracking-tight text-fg"
      >
        Rafał<span className="text-accent">.</span>
      </Link>

      <div className="flex items-center gap-4">
        <LanguageSwitcher locale={locale} label={header.languageSwitcher} />
        <ContactDialog />
      </div>
    </header>
  );
}

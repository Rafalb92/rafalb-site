import Link from "next/link";
import { Fragment } from "react";
import { cn } from "@/lib/cn";
import { LOCALE_NAMES, LOCALES, type Locale } from "@/lib/i18n/config";

interface LanguageSwitcherProps {
  locale: Locale;
  /** Accessible name of the navigation, e.g. "Language". */
  label: string;
}

export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  return (
    <nav
      aria-label={label}
      className="flex items-center gap-1 font-mono text-xs"
    >
      {LOCALES.map((code, index) => {
        const isActive = code === locale;

        return (
          <Fragment key={code}>
            {index > 0 && (
              <span aria-hidden="true" className="text-fg-subtle">
                /
              </span>
            )}
            <Link
              href={`/${code}`}
              hrefLang={code}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "rounded px-1 py-0.5 uppercase transition-colors duration-200",
                isActive ? "text-fg" : "text-fg-subtle hover:text-fg",
              )}
            >
              <span aria-hidden="true">{code}</span>
              <span className="sr-only">{LOCALE_NAMES[code]}</span>
            </Link>
          </Fragment>
        );
      })}
    </nav>
  );
}

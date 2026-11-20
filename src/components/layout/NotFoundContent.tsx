"use client";

import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { GhostWord } from "@/components/background/GhostWord";
import { buttonStyles } from "@/components/ui/button-styles";
import { useDictionary, useLocale } from "@/lib/i18n/LocaleProvider";

export function NotFoundContent() {
  const locale = useLocale();
  const { notFound } = useDictionary();

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 px-gutter text-center">
      <GhostWord word="404" />

      <p className="font-mono text-xs uppercase tracking-widest text-fg-subtle">
        {notFound.eyebrow}
      </p>

      <h1 className="text-display font-semibold text-fg">
        {notFound.title}
        <span className="text-accent">.</span>
      </h1>

      <p className="max-w-md text-pretty text-fg-muted">{notFound.body}</p>

      <Link href={`/${locale}`} className={buttonStyles("primary")}>
        <LuArrowLeft aria-hidden="true" className="size-4" />
        {notFound.backHome}
      </Link>
    </main>
  );
}

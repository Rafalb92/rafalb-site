"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatusDot } from "@/components/ui/StatusDot";
import { useDictionary } from "@/lib/i18n/LocaleProvider";

export function NowTile() {
  const { sections, now } = useDictionary();

  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <div className="flex items-center justify-between gap-3">
        <Eyebrow as="h2">{sections.now.label}</Eyebrow>
        <p className="flex items-center gap-2 text-sm font-medium text-fg">
          <StatusDot />
          {now.status}
        </p>
      </div>

      <dl className="space-y-2 text-sm">
        {now.details.map(({ term, value }) => (
          <div key={term} className="flex items-baseline justify-between gap-4">
            <dt className="shrink-0 font-mono text-xs text-fg-subtle">
              {term}
            </dt>
            <dd className="text-right text-fg">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

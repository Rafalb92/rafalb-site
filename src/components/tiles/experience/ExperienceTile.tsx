"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { EXPERIENCE, EXPERIENCE_IDS } from "@/content/experience";
import { useDictionary } from "@/lib/i18n/LocaleProvider";
import { TimelineDot } from "./TimelineDot";

export function ExperienceTile() {
  const { sections, experience } = useDictionary();

  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <Eyebrow as="h2">{sections.experience.label}</Eyebrow>

      <div className="relative">
        {/* Timeline line — centered under the 8px dots. */}
        <span
          aria-hidden="true"
          className="absolute top-1 bottom-1 left-1 w-px -translate-x-1/2 bg-line"
        />

        <ol className="relative space-y-2.5">
          {EXPERIENCE_IDS.map((id) => {
            const { start, end } = EXPERIENCE[id];
            const isCurrent = end === null;

            return (
              <li
                key={id}
                className="flex items-center gap-3 font-mono text-xs"
              >
                <TimelineDot current={isCurrent} />
                <span className={isCurrent ? "text-fg" : "text-fg-subtle"}>
                  {start}
                  {isCurrent && ` – ${experience.labels.present}`}
                </span>
                <span className="sr-only"> {experience.items[id].role}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

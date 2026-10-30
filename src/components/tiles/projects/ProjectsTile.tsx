"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { PROJECT_IDS } from "@/content/projects";
import { useDictionary } from "@/lib/i18n/LocaleProvider";
import { DeviceShowcase } from "./DeviceShowcase";

export function ProjectsTile() {
  const { sections } = useDictionary();

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-baseline gap-2">
        <Eyebrow as="h2">{sections.projects.label}</Eyebrow>
        <span className="font-mono text-xs text-fg-subtle">
          · {PROJECT_IDS.length}
        </span>
      </div>

      <DeviceShowcase />
    </div>
  );
}

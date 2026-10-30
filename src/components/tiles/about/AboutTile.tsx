"use client";

import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PORTRAIT } from "@/content/about";
import { useDictionary } from "@/lib/i18n/LocaleProvider";

export function AboutTile() {
  const { sections, about } = useDictionary();

  return (
    <>
      <Image
        src={PORTRAIT}
        alt={about.portraitAlt}
        fill
        sizes="(min-width: 1024px) 15vw, 100vw"
        placeholder="blur"
        className="object-cover object-top transition duration-700 ease-out-expo group-hover:grayscale-0 group-focus-within:grayscale-0 [@media(hover:hover)]:grayscale"
      />

      {/* Bottom fade keeps the label readable on any portrait. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-surface to-transparent"
      />

      <div className="relative flex h-full items-end">
        <Eyebrow as="h2" className="text-fg-muted">
          {sections.about.label}
        </Eyebrow>
      </div>
    </>
  );
}

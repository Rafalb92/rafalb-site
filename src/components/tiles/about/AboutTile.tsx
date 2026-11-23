"use client";

import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PORTRAIT } from "@/content/about";
import { useDictionary } from "@/lib/i18n/LocaleProvider";

/**
 * Mobile: a compact card — small face-framed thumbnail next to a short teaser
 * (a full-width strip would crop the portrait to the top of the head).
 * Desktop: the portrait fills the whole tile, label over a bottom fade.
 */
export function AboutTile() {
  const { sections, about } = useDictionary();

  return (
    <div className="flex h-full items-center gap-4 lg:items-end">
      {/* Thumbnail on mobile; full-bleed layer on desktop (inset-0 of the padded wrapper). */}
      <div className="relative size-24 shrink-0 overflow-hidden rounded-xl border border-line lg:absolute lg:inset-0 lg:size-auto lg:rounded-none lg:border-0">
        <Image
          src={PORTRAIT}
          alt={about.portraitAlt}
          fill
          sizes="(min-width: 1024px) 15vw, 96px"
          placeholder="blur"
          className="object-cover object-[center_25%] transition duration-700 ease-out-expo group-hover:grayscale-0 group-focus-within:grayscale-0 lg:object-top [@media(hover:hover)]:grayscale"
        />
      </div>

      {/* Bottom fade keeps the label readable on the full-bleed portrait. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 hidden h-1/2 bg-linear-to-t from-surface to-transparent lg:block"
      />

      <div className="relative space-y-1.5">
        <Eyebrow as="h2" className="lg:text-fg-muted">
          {sections.about.label}
        </Eyebrow>
        <p className="text-sm text-pretty text-fg-muted lg:hidden">
          {about.teaser}
        </p>
      </div>
    </div>
  );
}

"use client";

import { useDictionary } from "@/lib/i18n/LocaleProvider";
import { BlowAwayWord } from "./BlowAwayWord";
import { useGhostWord } from "./GhostWordProvider";

/** Ghost word centered in the header band — the one area tiles never cover. Desktop only. */
export function HeaderGhostWord() {
  const { sectionId } = useGhostWord();
  const { sections } = useDictionary();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 hidden items-center justify-center lg:flex"
    >
      <BlowAwayWord word={sectionId ? sections[sectionId].ghostWord : null} />
    </div>
  );
}

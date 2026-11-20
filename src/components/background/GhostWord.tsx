"use client";

import { AnimatePresence, motion } from "motion/react";
import { EASE_OUT_EXPO } from "@/lib/motion";

/** Average uppercase glyph width of Raleway Bold, in em — used to fit any word to the viewport width. */
const GLYPH_WIDTH_EM = 0.68;

/**
 * Huge, barely visible word at the bottom edge of the viewport, cropped by it.
 * Desktop only — on mobile the stacked tiles cover it anyway.
 */
export function GhostWord({ word }: { word: string }) {
  const fontSize = `min(16rem, calc(100vw / ${word.length * GLYPH_WIDTH_EM}))`;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 bottom-0 -z-10 hidden overflow-hidden lg:block"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.p
          key={word}
          initial={{ opacity: 0, y: "12%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-6%" }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          style={{ fontSize }}
          className="w-full translate-y-[38%] text-center leading-none font-bold tracking-tighter whitespace-nowrap text-ghost select-none"
        >
          {word}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
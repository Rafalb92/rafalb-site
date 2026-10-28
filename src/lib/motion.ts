import type { Transition } from "motion/react";

/** Mirrors `--ease-out-expo` in globals.css. */
export const EASE_OUT_EXPO: [number, number, number, number] = [
  0.16, 1, 0.3, 1,
];

/**
 * Mirrors `--tile-radius` (1.25rem) in globals.css.
 * Motion corrects border-radius distortion during layout animations
 * only when the radius is set through the `style` prop as a px value.
 */
export const TILE_RADIUS = 20;

/** Tile expand / collapse (shared layout animation). */
export const TILE_LAYOUT_TRANSITION: Transition = {
  type: "spring",
  duration: 0.55,
  bounce: 0.12,
};

/** Sibling tiles fading out when one tile expands. */
export const TILE_FADE_OUT: Transition = {
  duration: 0.2,
  ease: EASE_OUT_EXPO,
};

/** Sibling tiles fading back in — waits for the expanded tile to start shrinking. */
export const TILE_FADE_IN: Transition = {
  duration: 0.35,
  delay: 0.2,
  ease: EASE_OUT_EXPO,
};

/** Expanded content reveal — waits until the tile has mostly grown. */
export const CONTENT_REVEAL: Transition = {
  duration: 0.3,
  delay: 0.18,
  ease: EASE_OUT_EXPO,
};

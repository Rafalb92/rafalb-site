import type { CSSProperties } from "react";

/* -------------------------------------------------------------------------- */
/* LED dots — hardcoded so server and client render identical markup.         */
/* Values are percentages of the viewport. Tiles are opaque, so roughly half  */
/* the dots sit in the edge bands (header, footer, sides) where they stay      */
/* visible; the rest show through gaps and on wide screens.                    */
/* -------------------------------------------------------------------------- */

export interface LedDot {
  x: number;
  y: number;
}

export const LED_DOTS: readonly LedDot[] = [
  // Edge bands
  { x: 2, y: 7 },
  { x: 4, y: 38 },
  { x: 2.5, y: 71 },
  { x: 6, y: 94 },
  { x: 11, y: 3 },
  { x: 19, y: 97 },
  { x: 28, y: 4 },
  { x: 37, y: 95 },
  { x: 46, y: 2.5 },
  { x: 55, y: 97 },
  { x: 64, y: 5 },
  { x: 72, y: 96 },
  { x: 81, y: 3 },
  { x: 88, y: 95 },
  { x: 95, y: 6 },
  { x: 97, y: 29 },
  { x: 94, y: 58 },
  { x: 97.5, y: 83 },
  // Interior — visible through gaps and on wide screens
  { x: 9, y: 22 },
  { x: 7, y: 55 },
  { x: 15, y: 81 },
  { x: 24, y: 31 },
  { x: 33, y: 62 },
  { x: 42, y: 18 },
  { x: 48, y: 50 },
  { x: 51, y: 74 },
  { x: 59, y: 41 },
  { x: 67, y: 23 },
  { x: 76, y: 67 },
  { x: 84, y: 44 },
  { x: 89, y: 77 },
  { x: 91, y: 16 },
];

/* -------------------------------------------------------------------------- */
/* Ghost icons — large, barely visible, cropped by the viewport edges.        */
/* -------------------------------------------------------------------------- */

export type GhostIconName = "braces" | "chevrons" | "skeleton";

export interface GhostIconPlacement {
  name: GhostIconName;
  /** Offsets from the viewport edges. Negative values crop the icon. */
  position: Pick<CSSProperties, "top" | "right" | "bottom" | "left">;
  size: string;
  /** Rotation in degrees. */
  rotate: number;
}

export const GHOST_ICONS: readonly GhostIconPlacement[] = [
  {
    name: "chevrons",
    position: { top: "-4rem", right: "-6rem" },
    size: "22rem",
    rotate: 8,
  },
  {
    name: "braces",
    position: { bottom: "8%", left: "-8rem" },
    size: "24rem",
    rotate: -10,
  },
  {
    name: "skeleton",
    position: { bottom: "-7rem", right: "14%" },
    size: "18rem",
    rotate: -4,
  },
];

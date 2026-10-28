import type { CSSProperties } from "react";

/* -------------------------------------------------------------------------- */
/* LED dots — hardcoded so server and client render identical markup.         */
/* Values are percentages of the viewport. Keep it irregular on purpose.      */
/* -------------------------------------------------------------------------- */

export interface LedDot {
  x: number;
  y: number;
}

export const LED_DOTS: readonly LedDot[] = [
  { x: 3, y: 12 },
  { x: 8, y: 64 },
  { x: 14, y: 91 },
  { x: 21, y: 6 },
  { x: 27, y: 47 },
  { x: 33, y: 78 },
  { x: 41, y: 19 },
  { x: 46, y: 96 },
  { x: 52, y: 58 },
  { x: 58, y: 4 },
  { x: 63, y: 33 },
  { x: 69, y: 84 },
  { x: 74, y: 52 },
  { x: 79, y: 15 },
  { x: 85, y: 71 },
  { x: 89, y: 38 },
  { x: 94, y: 93 },
  { x: 97, y: 8 },
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

import type { ReactNode } from "react";
import { GHOST_ICONS, type GhostIconName } from "@/content/decor";

// Keeps the stroke 1.5px wide no matter how large the icon is rendered.
const STROKE = { vectorEffect: "non-scaling-stroke" } as const;

const GHOST_ICON_SHAPES: Record<GhostIconName, ReactNode> = {
  braces: (
    <>
      <path
        {...STROKE}
        d="M38 15 C 28 15, 28 22, 28 32 L 28 42 C 28 47, 24 50, 18 50 C 24 50, 28 53, 28 58 L 28 68 C 28 78, 28 85, 38 85"
      />
      <path
        {...STROKE}
        d="M62 15 C 72 15, 72 22, 72 32 L 72 42 C 72 47, 76 50, 82 50 C 76 50, 72 53, 72 58 L 72 68 C 72 78, 72 85, 62 85"
      />
    </>
  ),
  chevrons: (
    <>
      <path {...STROKE} d="M30 30 L 12 50 L 30 70" />
      <path {...STROKE} d="M70 30 L 88 50 L 70 70" />
      <path {...STROKE} d="M58 22 L 42 78" />
    </>
  ),
  skeleton: (
    <>
      <rect {...STROKE} x="10" y="18" width="80" height="64" rx="6" />
      <circle {...STROKE} cx="26" cy="36" r="7" />
      <rect {...STROKE} x="38" y="31" width="40" height="4" rx="2" />
      <rect {...STROKE} x="38" y="40" width="28" height="4" rx="2" />
      <rect {...STROKE} x="18" y="56" width="64" height="4" rx="2" />
      <rect {...STROKE} x="18" y="66" width="50" height="4" rx="2" />
    </>
  ),
};

export function GhostIcons() {
  return (
    <>
      {GHOST_ICONS.map(({ name, position, size, rotate }) => (
        <svg
          key={name}
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute hidden text-ghost lg:block"
          style={{
            ...position,
            width: size,
            height: size,
            rotate: `${rotate}deg`,
          }}
        >
          {GHOST_ICON_SHAPES[name]}
        </svg>
      ))}
    </>
  );
}

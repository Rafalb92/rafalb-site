import { GhostIcons } from "./GhostIcons";
import { LedField } from "./LedField";

/** Fixed, non-interactive decor layer behind all page content. */
export function BackgroundDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <GhostIcons />
      <LedField />
    </div>
  );
}

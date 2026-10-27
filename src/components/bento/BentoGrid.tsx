import { SECTIONS } from "./sections";
import { Tile } from "./Tile";

export function BentoGrid() {
  return (
    <div className="bento">
      {SECTIONS.map((section) => (
        <Tile key={section.id} area={section.id} aria-label={section.label}>
          <span className="font-mono text-xs uppercase tracking-widest text-fg-subtle">
            {section.label}
          </span>
        </Tile>
      ))}
    </div>
  );
}

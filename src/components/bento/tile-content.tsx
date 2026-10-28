import type { ComponentType } from "react";
import { HeroTile } from "@/components/tiles/HeroTile";
import { LinksTile } from "@/components/tiles/LinksTile";
import { NowTile } from "@/components/tiles/NowTile";
import { SkillsExpanded } from "@/components/tiles/skills/SkillsExpanded";
import { SkillsTile } from "@/components/tiles/skills/SkillsTile";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getSection, type SectionId } from "./sections";

export interface TileContent {
  /** Rendered inside the tile in the grid. */
  Collapsed: ComponentType;
  /** Rendered in the expanded panel. Tiles without it are not expandable. */
  Expanded?: ComponentType;
}

/* -------------------------------------------------------------------------- */
/* Temporary placeholders — replaced section by section in later steps.       */
/* -------------------------------------------------------------------------- */

function createCollapsedPlaceholder(label: string): ComponentType {
  function CollapsedPlaceholder() {
    return <Eyebrow as="h2">{label}</Eyebrow>;
  }
  CollapsedPlaceholder.displayName = `CollapsedPlaceholder(${label})`;
  return CollapsedPlaceholder;
}

function createExpandedPlaceholder(label: string): ComponentType {
  function ExpandedPlaceholder() {
    return (
      <div className="max-w-prose space-y-4 text-fg-muted">
        {Array.from({ length: 12 }, (_, index) => (
          <p key={index}>
            {label} — placeholder paragraph {index + 1}. Real content arrives in
            a later step; this text only exists to test scrolling inside the
            expanded tile.
          </p>
        ))}
      </div>
    );
  }
  ExpandedPlaceholder.displayName = `ExpandedPlaceholder(${label})`;
  return ExpandedPlaceholder;
}

function expandablePlaceholder(id: SectionId): TileContent {
  const { label } = getSection(id);
  return {
    Collapsed: createCollapsedPlaceholder(label),
    Expanded: createExpandedPlaceholder(label),
  };
}

/* -------------------------------------------------------------------------- */

export const TILE_CONTENT: Record<SectionId, TileContent> = {
  hero: { Collapsed: HeroTile },
  links: { Collapsed: LinksTile },
  now: { Collapsed: NowTile },
  skills: { Collapsed: SkillsTile, Expanded: SkillsExpanded },
  projects: expandablePlaceholder("projects"),
  experience: expandablePlaceholder("experience"),
  about: expandablePlaceholder("about"),
};

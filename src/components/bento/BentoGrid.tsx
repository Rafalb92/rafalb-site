"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef } from "react";
import { useDictionary } from "@/lib/i18n/LocaleProvider";
import { TILE_FADE_OUT } from "@/lib/motion";
import { ExpandedTile } from "./ExpandedTile";
import { SECTION_IDS, type SectionId } from "./sections";
import { TILE_CONTENT } from "./tile-content";
import { Tile } from "./Tile";

interface BentoGridProps {
  activeId: SectionId | null;
  onOpen?: (id: SectionId) => void;
  onClose?: () => void;
}

export function BentoGrid({ activeId, onOpen, onClose }: BentoGridProps) {
  const { sections, tile } = useDictionary();
  const triggerRefs = useRef(new Map<SectionId, HTMLButtonElement>());

  // Ignore ids pointing at non-expandable sections (e.g. `?section=hero`).
  const ExpandedContent = activeId
    ? TILE_CONTENT[activeId].Expanded
    : undefined;
  const expandedId = ExpandedContent ? activeId : null;
  const isExpanded = expandedId !== null;

  const previousExpandedIdRef = useRef(expandedId);

  // Return focus to the tile that was open, so keyboard users don't get lost.
  useEffect(() => {
    const previousId = previousExpandedIdRef.current;
    previousExpandedIdRef.current = expandedId;

    if (previousId && !expandedId) {
      triggerRefs.current.get(previousId)?.focus({ preventScroll: true });
    }
  }, [expandedId]);

  return (
    <div className="relative lg:h-full">
      <div className="bento" inert={isExpanded}>
        {SECTION_IDS.map((id) => {
          // The expanded panel takes over this tile's layoutId.
          if (id === expandedId) return null;

          const { Collapsed, Expanded } = TILE_CONTENT[id];
          const { label } = sections[id];

          return (
            <Tile
              key={id}
              area={id}
              label={label}
              triggerLabel={tile.open(label)}
              dimmed={isExpanded}
              onExpand={Expanded && onOpen ? () => onOpen(id) : undefined}
              triggerRef={(node) => {
                if (node) triggerRefs.current.set(id, node);
                else triggerRefs.current.delete(id);
              }}
            >
              <Collapsed />
            </Tile>
          );
        })}
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="backdrop"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={TILE_FADE_OUT}
            className="fixed inset-0 z-40 bg-bg lg:hidden"
          />
        )}

        {expandedId && ExpandedContent && (
          <ExpandedTile
            key={expandedId}
            area={expandedId}
            label={sections[expandedId].label}
            closeLabel={tile.close(sections[expandedId].label)}
            onClose={onClose}
          >
            <ExpandedContent />
          </ExpandedTile>
        )}
      </AnimatePresence>
    </div>
  );
}

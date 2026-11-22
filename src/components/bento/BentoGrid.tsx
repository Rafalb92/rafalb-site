"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useGhostWord } from "@/components/ghost/GhostWordProvider";
import { useDictionary } from "@/lib/i18n/LocaleProvider";
import { TILE_FADE_OUT } from "@/lib/motion";
import { ExpandedTile } from "./ExpandedTile";
import { SECTION_IDS, type SectionId } from "./sections";
import { Tile } from "./Tile";
import { TILE_CONTENT } from "./tile-content";

/** Delay before the ghost word is blown away — prevents flicker when crossing gaps. */
const HOVER_LEAVE_DELAY_MS = 150;

interface BentoGridProps {
  activeId: SectionId | null;
  onOpen?: (id: SectionId) => void;
  onClose?: () => void;
}

export function BentoGrid({ activeId, onOpen, onClose }: BentoGridProps) {
  const { sections, tile } = useDictionary();
  const { setSectionId } = useGhostWord();
  const triggerRefs = useRef(new Map<SectionId, HTMLButtonElement>());

  const [hoveredId, setHoveredId] = useState<SectionId | null>(null);
  const leaveTimeoutRef = useRef<number | undefined>(undefined);

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

  const handleTileEnter = useCallback((id: SectionId) => {
    window.clearTimeout(leaveTimeoutRef.current);
    setHoveredId(id);
  }, []);

  const handleTileLeave = useCallback(() => {
    window.clearTimeout(leaveTimeoutRef.current);
    leaveTimeoutRef.current = window.setTimeout(
      () => setHoveredId(null),
      HOVER_LEAVE_DELAY_MS,
    );
  }, []);

  useEffect(() => () => window.clearTimeout(leaveTimeoutRef.current), []);

  // Expanded tile wins, then the hovered or focused tile; nothing otherwise.
  const ghostSectionId = expandedId ?? hoveredId;

  useEffect(() => {
    setSectionId(ghostSectionId);
  }, [ghostSectionId, setSectionId]);

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
              onPointerEnter={() => handleTileEnter(id)}
              onPointerLeave={handleTileLeave}
              onFocus={() => handleTileEnter(id)}
              onBlur={handleTileLeave}
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

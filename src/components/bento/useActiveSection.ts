import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";
import { SECTION_IDS, type SectionId } from "./sections";

const SEARCH_PARAM = "section";

function isSectionId(value: string | null): value is SectionId {
  return value !== null && (SECTION_IDS as readonly string[]).includes(value);
}

/**
 * Keeps the expanded section in the URL (`?section=skills`) so it can be
 * deep-linked and closed with the browser back button.
 *
 * Uses the native History API: Next.js syncs it with `useSearchParams`
 * without a server round-trip.
 */
export function useActiveSection() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const openedInAppRef = useRef(false);

  const value = searchParams.get(SEARCH_PARAM);
  const activeId = isSectionId(value) ? value : null;

  const open = useCallback(
    (id: SectionId) => {
      openedInAppRef.current = true;
      window.history.pushState(null, "", `${pathname}?${SEARCH_PARAM}=${id}`);
    },
    [pathname],
  );

  const close = useCallback(() => {
    if (openedInAppRef.current) {
      // We pushed this entry ourselves — going back restores the previous URL.
      openedInAppRef.current = false;
      window.history.back();
      return;
    }
    // Deep link: there is no in-app entry to go back to.
    window.history.replaceState(null, "", pathname);
  }, [pathname]);

  return { activeId, open, close };
}

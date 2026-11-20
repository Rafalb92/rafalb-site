import { notFound } from "next/navigation";

/**
 * This segment only ever renders a 404, so there is no instant UI to validate.
 * Without this, dev-time instant-navigation validation reports the intentional
 * notFound() as a failure.
 */
export const instant = false;

/** Catches every unknown path under a locale, so it renders that locale's not-found page. */
export default function CatchAllPage() {
  notFound();
}

/** Canonical site origin, without a trailing slash. Set NEXT_PUBLIC_SITE_URL in production. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

/** Host shown on generated images, e.g. "bochniewicz.dev". */
export const SITE_HOST = new URL(SITE_URL).host;

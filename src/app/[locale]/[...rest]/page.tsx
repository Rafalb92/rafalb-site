import { notFound } from "next/navigation";

/** Catches every unknown path under a locale, so it renders that locale's not-found page. */
export default function CatchAllPage() {
  notFound();
}

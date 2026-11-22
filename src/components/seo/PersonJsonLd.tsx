import { getContactHref } from "@/content/links";
import { PROFILE } from "@/content/profile";
import { FEATURED_SKILL_IDS, SKILLS } from "@/content/skills";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SITE_URL } from "@/lib/site";

/** schema.org Person — tells search engines who this page is about. */
export function PersonJsonLd({ locale }: { locale: Locale }) {
  const { hero } = getDictionary(locale);

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    jobTitle: hero.role,
    url: `${SITE_URL}/${locale}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wrocław",
      addressCountry: "PL",
    },
    sameAs: [
      getContactHref("github", locale),
      getContactHref("linkedin", locale),
    ],
    knowsAbout: FEATURED_SKILL_IDS.map((id) => SKILLS[id].name),
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD must be inlined as raw JSON; "<" is escaped below so content cannot close the script tag.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

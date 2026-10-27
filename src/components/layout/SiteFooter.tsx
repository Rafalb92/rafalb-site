async function getCurrentYear(): Promise<number> {
  "use cache";
  return new Date().getFullYear();
}

export async function SiteFooter() {
  const currentYear = await getCurrentYear();

  return (
    <footer className="flex items-center justify-between px-gutter py-3 font-mono text-xs text-fg-subtle">
      <span>© {currentYear} Rafał</span>
      <span>Built with Next.js &amp; Motion</span>
    </footer>
  );
}

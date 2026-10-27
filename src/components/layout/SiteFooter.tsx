export function SiteFooter() {
  return (
    <footer className="flex items-center justify-between px-gutter py-3 font-mono text-xs text-fg-subtle">
      <span>© {new Date().getFullYear()} Rafał</span>
      <span>Built with Next.js &amp; Motion</span>
    </footer>
  );
}

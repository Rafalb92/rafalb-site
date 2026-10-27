import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between px-gutter py-4">
      <Link href="/" className="text-lg font-semibold tracking-tight text-fg">
        Rafał<span className="text-accent">.</span>
      </Link>

      <button
        type="button"
        className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-fg transition-opacity duration-150 hover:opacity-90"
      >
        Let&apos;s talk
      </button>
    </header>
  );
}

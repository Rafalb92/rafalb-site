"use client";

import { useEffect, useState } from "react";
import { LuCheck, LuCopy } from "react-icons/lu";
import { PROFILE } from "@/content/profile";
import { useDictionary } from "@/lib/i18n/LocaleProvider";

const RESET_AFTER_MS = 2000;

export function CopyEmailButton() {
  const { contact } = useDictionary();
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;
    const timeout = window.setTimeout(() => setIsCopied(false), RESET_AFTER_MS);
    return () => window.clearTimeout(timeout);
  }, [isCopied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setIsCopied(true);
    } catch {
      // Clipboard blocked (permissions, insecure context) — fall back to the mail client.
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`${contact.copy}: ${PROFILE.email}`}
        className="group touch-target inline-flex cursor-pointer items-center gap-2 font-mono text-xs text-fg transition-colors duration-200 hover:text-accent"
      >
        {PROFILE.email}
        {isCopied ? (
          <LuCheck aria-hidden="true" className="size-3.5 text-accent" />
        ) : (
          <LuCopy
            aria-hidden="true"
            className="size-3.5 text-fg-subtle transition-colors duration-200 group-hover:text-accent"
          />
        )}
      </button>

      <span aria-live="polite" className="sr-only">
        {isCopied ? contact.copied : ""}
      </span>
    </>
  );
}

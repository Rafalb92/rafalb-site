"use client";

import { AnimatePresence, motion } from "motion/react";
import { Dialog } from "radix-ui";
import { useState } from "react";
import { LuX } from "react-icons/lu";
import { buttonStyles } from "@/components/ui/button-styles";
import { useDictionary } from "@/lib/i18n/LocaleProvider";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { ContactForm } from "./ContactForm";
import { CopyEmailButton } from "./CopyEmailButton";

export function ContactDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const { header, contact } = useDictionary();

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button type="button" className={buttonStyles("primary")}>
          {header.letsTalk}
        </button>
      </Dialog.Trigger>

      {/* forceMount hands mounting to AnimatePresence, so the exit animation can play. */}
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-70 bg-bg/80 backdrop-blur-sm"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount>
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
                className="fixed top-1/2 left-1/2 z-70 max-h-[calc(100dvh-2rem)] w-[min(calc(100vw-2rem),32rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-tile border border-line bg-surface p-6 shadow-2xl"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <Dialog.Title className="text-2xl font-semibold tracking-tight text-fg">
                      {contact.title}
                    </Dialog.Title>
                    <Dialog.Description className="text-sm text-pretty text-fg-muted">
                      {contact.description}
                    </Dialog.Description>
                  </div>

                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label={contact.close}
                      className="touch-target grid size-9 shrink-0 cursor-pointer place-items-center rounded-full border border-line text-fg-muted transition-colors duration-200 hover:border-line-strong hover:text-fg"
                    >
                      <LuX aria-hidden="true" className="size-4" />
                    </button>
                  </Dialog.Close>
                </div>

                <ContactForm onClose={() => setIsOpen(false)} />

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 text-sm">
                  <span className="text-fg-muted">{contact.orEmail}</span>
                  <CopyEmailButton />
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

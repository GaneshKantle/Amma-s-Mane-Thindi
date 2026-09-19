"use client";

import { useEffect, useId, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { NAV_LINKS } from "@/lib/constants/nav";
import { SITE } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60] lg:hidden"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-ink/35 backdrop-blur-[2px]"
            onClick={onClose}
          />

          <motion.nav
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="absolute inset-y-0 right-0 flex w-[min(100%,22rem)] flex-col border-l border-ink/10 bg-paper shadow-[-8px_0_24px_rgba(41,37,31,0.12)]"
            initial={reduceMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={reduceMotion ? undefined : { x: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 36 }}
          >
            <div className="flex items-start justify-between gap-3 border-b border-ink/10 px-5 py-4">
              <div className="min-w-0">
                <BrandLogo size="sm" withWordmark />
                <p id={titleId} className="sr-only">
                  {SITE.name} menu
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="tap-target inline-flex items-center justify-center rounded-full border border-ink/15 bg-cream/80 text-ink transition-colors hover:bg-cream"
                aria-label="Close navigation"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "tap-target flex items-center rounded-[0.95rem_0.7rem_1rem_0.8rem] px-4 text-base font-medium text-ink transition-colors hover:bg-paper-deep/80 hover:text-terracotta",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="border-t border-ink/10 px-5 py-4">
              <p lang="kn" className="font-kannada text-sm text-ink-soft">
                {SITE.taglineKn}
              </p>
            </div>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

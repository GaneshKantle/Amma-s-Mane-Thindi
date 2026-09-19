"use client";

import { useEffect, useState } from "react";
import { MessageCircle, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { SITE } from "@/lib/constants/site";
import { whatsappDefaultHref } from "@/lib/utils/whatsapp";
import { cn } from "@/lib/utils/cn";
import { storyEase } from "@/lib/motion/storybook";

const actionBase =
  "tap-target inline-flex flex-1 items-center justify-center gap-1 rounded-[0.85rem_0.55rem_0.95rem_0.65rem] px-2 text-[0.7rem] font-semibold text-cream transition-[transform,background-color,filter] duration-200 active:scale-[0.98] sm:gap-2 sm:px-3 sm:text-sm";

/**
 * Mobile-only WhatsApp / Location bar (no phone number outside footer).
 */
export function FloatingContactBar() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 120);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden">
      <motion.div
        className="pointer-events-auto mx-auto flex w-[min(100%-1rem,22rem)] items-center gap-1.5 rounded-[1.15rem_0.9rem_1.25rem_1rem] border border-ink/12 bg-paper/95 p-1.5 shadow-[0_-4px_24px_rgba(41,37,31,0.12)] backdrop-blur-md min-[380px]:w-[min(100%-1.5rem,24rem)]"
        initial={false}
        animate={
          visible
            ? { y: 0, opacity: 1 }
            : { y: 24, opacity: 0 }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 0.35, ease: storyEase }
        }
        style={{ pointerEvents: visible ? "auto" : "none" }}
        aria-hidden={!visible}
      >
        <a
          href={whatsappDefaultHref()}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(actionBase, "bg-terracotta hover:bg-terracotta-deep")}
          aria-label="WhatsApp us"
          tabIndex={visible ? 0 : -1}
        >
          <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
          <span className="truncate">WhatsApp</span>
        </a>
        <a
          href={SITE.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(actionBase, "bg-ink hover:bg-ink-soft")}
          aria-label="Find us on the map"
          tabIndex={visible ? 0 : -1}
        >
          <MapPin className="h-4 w-4 shrink-0" aria-hidden />
          <span className="truncate">Location</span>
        </a>
      </motion.div>
    </div>
  );
}

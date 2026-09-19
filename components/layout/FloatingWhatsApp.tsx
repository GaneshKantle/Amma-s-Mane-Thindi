"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { MEDIA } from "@/lib/constants/media";
import { whatsappDefaultHref } from "@/lib/utils/whatsapp";
import { storyEase } from "@/lib/motion/storybook";
import { cn } from "@/lib/utils/cn";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/**
 * Branded floating WhatsApp CTA — bottom-right.
 * Sits above the mobile contact bar; one entrance, then still.
 */
export function FloatingWhatsApp({ className }: { className?: string }) {
  const [barVisible, setBarVisible] = useState(false);
  const [entered, setEntered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const onScroll = () => setBarVisible(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => setEntered(true), reduceMotion ? 0 : 600);
    return () => window.clearTimeout(id);
  }, [reduceMotion]);

  const bottom = isDesktop
    ? "max(1.5rem, env(safe-area-inset-bottom, 0px))"
    : barVisible
      ? "calc(var(--fab-clearance) + 0.35rem + env(safe-area-inset-bottom, 0px))"
      : "max(1.25rem, env(safe-area-inset-bottom, 0px))";

  return (
    <motion.a
      href={whatsappDefaultHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Talk to us on WhatsApp"
      className={cn(
        "group chrome-inset-right fixed z-[45] flex items-center gap-2 rounded-[1.15rem_0.85rem_1.25rem_0.95rem] border border-ink/12 bg-cream px-2.5 py-2 shadow-[2px_4px_0_rgba(41,37,31,0.1)] transition-[transform,box-shadow,bottom] duration-200 sm:px-3 sm:py-2.5",
        "hover:shadow-[3px_5px_0_rgba(41,37,31,0.12)] motion-safe:hover:scale-[1.03]",
        "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-terracotta",
        className,
      )}
      style={{ bottom }}
      initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.94 }}
      animate={
        entered
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 16, scale: 0.94 }
      }
      transition={{ duration: 0.45, ease: storyEase }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-1.5 -left-1 h-5 w-5 overflow-hidden rounded-full border border-mustard/50 bg-cream shadow-sm"
      >
        {/* Tiny brand mark */}
        <Image
          src={MEDIA.logo}
          alt=""
          width={20}
          height={20}
          className="h-full w-full object-cover"
        />
      </span>
      <span
        aria-hidden
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[0.85rem_0.65rem_0.95rem_0.7rem] bg-[#25D366]/15 text-[#128C7E]"
      >
        <WhatsAppGlyph className="h-5 w-5" />
      </span>
      <span className="hidden pr-1.5 font-display text-sm font-medium tracking-wide text-ink sm:inline">
        Talk to us
      </span>
    </motion.a>
  );
}

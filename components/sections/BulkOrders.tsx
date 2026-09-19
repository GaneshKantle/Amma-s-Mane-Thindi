"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ProcessMark } from "@/components/illustrations/ProcessMarks";
import { BulkContactModal } from "@/components/bulk/BulkContactModal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DrawPath } from "@/components/ui/DrawPath";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { BULK_OCCASIONS } from "@/lib/constants/bulk";
import { whatsappBulkHref } from "@/lib/utils/whatsapp";
import { storyDuration, storyEase, viewportOnce } from "@/lib/motion/storybook";

const BULK_STORY = [
  { mark: "phone" as const, label: "Call" },
  { mark: "pot" as const, label: "Prepare" },
  { mark: "parcel" as const, label: "Pack" },
  { mark: "plate" as const, label: "Ready" },
];

export function BulkOrders() {
  const [popupOpen, setPopupOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const closePopup = useCallback(() => setPopupOpen(false), []);

  return (
    <Section
      id="bulk-orders"
      ariaLabelledBy="bulk-heading"
      className="relative overflow-x-clip"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -bottom-32 h-80 w-80 rounded-full bg-mustard/15 blur-2xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -left-20 h-64 w-64 rounded-full bg-leaf/10 blur-2xl"
      />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.18em] text-terracotta uppercase">
              Bulk &amp; functions
            </p>
            <h2
              id="bulk-heading"
              className="font-display mt-2 text-[clamp(1.9rem,5vw,3.15rem)] leading-[1.12] tracking-tight text-ink"
            >
              Planning a function?
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft sm:text-base">
              We take bulk orders for gatherings large and small. Tell us the occasion,
              quantity and date — we&apos;ll prepare and pack with care. Call or WhatsApp
              (no online checkout). Takeout only: order in advance and collect from our
              kitchen in Kothanur.
            </p>

            {/* Mini process sequence */}
            <ol className="relative mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <svg
                aria-hidden
                className="pointer-events-none absolute top-1/2 left-2 hidden h-6 w-[min(100%,22rem)] -translate-y-1/2 sm:block"
                viewBox="0 0 360 24"
                fill="none"
                preserveAspectRatio="none"
              >
                <DrawPath
                  d="M8 14 C60 4, 120 20, 180 10 C240 2, 300 18, 350 12"
                  stroke="#B85C38"
                  strokeWidth={1.4}
                  opacity={0.35}
                  delay={0.1}
                  duration={1.2}
                />
              </svg>
              {BULK_STORY.map((item, index) => (
                <motion.li
                  key={item.label}
                  className="relative z-[1] flex flex-col items-center gap-1"
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{
                    delay: 0.1 + index * 0.12,
                    duration: storyDuration.soft,
                    ease: storyEase,
                  }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[0.95rem_0.7rem_1.05rem_0.8rem] border border-ink/10 bg-cream shadow-[1px_2px_0_rgba(41,37,31,0.06)]">
                    <ProcessMark mark={item.mark} className="h-9 w-9" />
                  </div>
                  <span className="text-[0.65rem] font-medium tracking-wide text-ink-soft">
                    {item.label}
                  </span>
                  {index < BULK_STORY.length - 1 ? (
                    <span
                      aria-hidden
                      className="absolute top-5 -right-3 font-display text-terracotta/40 sm:hidden"
                    >
                      →
                    </span>
                  ) : null}
                </motion.li>
              ))}
            </ol>

            <div className="mt-8 flex flex-col gap-3 sm:max-w-md sm:flex-row sm:flex-wrap">
              <Button
                type="button"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => setPopupOpen(true)}
              >
                Call Us
              </Button>
              <Button
                href={whatsappBulkHref()}
                external
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                WhatsApp Us
              </Button>
              <Link
                href="/bulk-orders"
                className="tap-target inline-flex items-center justify-center text-sm font-medium text-terracotta underline decoration-terracotta/30 underline-offset-4 transition-[text-decoration-color] hover:decoration-terracotta sm:min-h-12"
              >
                Learn more about bulk orders
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="flex flex-wrap gap-2.5 sm:gap-3">
              {BULK_OCCASIONS.map((occasion) => (
                <li key={occasion.id}>
                  <span className="inline-flex min-h-11 items-center rounded-[1rem_0.7rem_1.1rem_0.85rem] border border-ink/12 bg-cream/80 px-4 py-2 text-sm font-medium text-ink shadow-[1px_2px_0_rgba(41,37,31,0.06)] transition-transform duration-200 motion-safe:hover:-translate-y-px">
                    {occasion.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>

      <BulkContactModal open={popupOpen} onClose={closePopup} />
    </Section>
  );
}

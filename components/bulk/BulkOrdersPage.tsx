"use client";

import { useCallback, useState } from "react";
import { BulkContactModal } from "@/components/bulk/BulkContactModal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { DrawPath } from "@/components/ui/DrawPath";
import { Reveal } from "@/components/ui/Reveal";
import {
  BULK_OCCASIONS,
  BULK_PROCESS_STEPS,
} from "@/lib/constants/bulk";
import { SITE } from "@/lib/constants/site";
import { whatsappBulkHref } from "@/lib/utils/whatsapp";

export function BulkOrdersPage() {
  const [popupOpen, setPopupOpen] = useState(false);
  const closePopup = useCallback(() => setPopupOpen(false), []);

  return (
    <>
      <section className="relative overflow-hidden pb-12 pt-8 sm:pb-16 sm:pt-12 lg:pt-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-16 h-72 w-72 rounded-full bg-mustard/20 blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 -left-24 h-64 w-64 rounded-full bg-leaf/10 blur-2xl"
        />

        <Container>
          <Reveal>
            <p className="text-xs font-medium tracking-[0.18em] text-terracotta uppercase">
              Bulk food orders
            </p>
            <h1 className="font-display mt-2 max-w-[14ch] text-[clamp(2rem,6vw,3.5rem)] leading-[1.12] tracking-tight text-ink">
              Planning a function?
            </h1>
            <Divider className="mx-0 my-5 max-w-[9rem] py-0" tone="mustard" />
            <p className="max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Tell us what you&apos;re planning. We&apos;ll discuss the food, quantity and
              packing with you. Order in advance — takeout only; collect from our kitchen
              in Kothanur.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:max-w-md sm:flex-row">
              <Button
                type="button"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto sm:flex-1"
                onClick={() => setPopupOpen(true)}
              >
                Call Us
              </Button>
              <Button
                href={whatsappBulkHref()}
                external
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto sm:flex-1"
              >
                WhatsApp Us
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section
        aria-labelledby="bulk-occasions-heading"
        className="border-t border-ink/10 bg-paper-deep/30 py-14 sm:py-16"
      >
        <Container>
          <Reveal>
            <h2
              id="bulk-occasions-heading"
              className="font-display text-[clamp(1.65rem,4vw,2.5rem)] tracking-tight text-ink"
            >
              We cook for gatherings like these
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-soft sm:text-base">
              From quiet pooja mornings to lively office trays — homemade food, packed
              for your people.
            </p>
          </Reveal>

          <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {BULK_OCCASIONS.map((occasion, index) => (
              <Reveal key={occasion.id} delay={index * 0.05} as="li">
                <div
                  className={`flex h-full flex-col gap-2 rounded-[1.25rem_0.95rem_1.4rem_1.05rem] border border-ink/10 bg-cream/70 p-5 sm:p-6 ${
                    index % 2 === 0 ? "-rotate-[0.4deg]" : "rotate-[0.5deg]"
                  }`}
                >
                  <span
                    aria-hidden
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-terracotta/15 font-display text-sm font-semibold text-terracotta"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {occasion.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {occasion.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section
        aria-labelledby="bulk-process-heading"
        className="py-14 sm:py-16 lg:py-20"
      >
        <Container>
          <Reveal>
            <h2
              id="bulk-process-heading"
              className="font-display text-[clamp(1.65rem,4vw,2.5rem)] tracking-tight text-ink"
            >
              How bulk orders work
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-soft sm:text-base">
              A simple conversation — no online form, no cart.
            </p>
          </Reveal>

          <ol className="relative mt-12 max-w-2xl space-y-0 sm:mt-14">
            <svg
              aria-hidden
              className="pointer-events-none absolute top-4 bottom-4 left-[1.15rem] hidden w-4 sm:block"
              viewBox="0 0 16 600"
              fill="none"
              preserveAspectRatio="none"
            >
              <DrawPath
                d="M8 0 C4 80, 12 160, 7 240 C3 320, 11 400, 8 480 C6 540, 9 580, 8 600"
                stroke="#B85C38"
                strokeWidth={1.5}
                opacity={0.35}
                dashArray="3 7"
                delay={0.1}
                duration={1.6}
              />
            </svg>

            {BULK_PROCESS_STEPS.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.08} as="li">
                <div className="relative flex gap-4 pb-10 last:pb-0 sm:gap-6">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-paper font-display text-sm font-semibold text-terracotta shadow-sm sm:h-11 sm:w-11">
                    {step.number}
                  </div>
                  <div className="min-w-0 pt-1.5">
                    <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft sm:text-base">
                      {step.description}
                    </p>
                    {index < BULK_PROCESS_STEPS.length - 1 ? (
                      <span
                        aria-hidden
                        className="mt-3 inline-block font-display text-terracotta/40 sm:hidden"
                      >
                        ↓
                      </span>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section
        aria-labelledby="bulk-cta-heading"
        className="border-t border-ink/10 bg-cream/50 py-14 md:py-16"
      >
        <Container>
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <p className="rounded-[1.2rem_0.9rem_1.35rem_1rem] border border-dashed border-ink/20 bg-paper px-5 py-4 text-sm leading-relaxed text-ink-soft sm:text-base">
                For bulk orders, please contact us directly so we can understand your
                requirements. We are takeout only — no delivery. Place your order in
                advance and collect from our kitchen.
              </p>
              <h2
                id="bulk-cta-heading"
                className="font-display mt-10 text-[clamp(1.5rem,4vw,2.25rem)] tracking-tight text-ink"
              >
                Ready to plan your order?
              </h2>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
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
              </div>
              <p className="mt-4 text-sm text-ink-soft">
                {SITE.phoneDisplay} · {SITE.hours}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <BulkContactModal open={popupOpen} onClose={closePopup} />
    </>
  );
}

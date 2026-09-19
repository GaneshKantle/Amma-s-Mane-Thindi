"use client";

import { useCallback, useState } from "react";
import { BulkContactModal } from "@/components/bulk/BulkContactModal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { DrawPath } from "@/components/ui/DrawPath";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ProcessMark } from "@/components/illustrations/ProcessMarks";
import {
  BULK_OCCASIONS,
  BULK_PROCESS_STEPS,
} from "@/lib/constants/bulk";
import { MEDIA } from "@/lib/constants/media";
import { SITE } from "@/lib/constants/site";
import { whatsappBulkHref } from "@/lib/utils/whatsapp";
import { cn } from "@/lib/utils/cn";

const stepAccent = {
  terracotta: {
    bar: "bg-terracotta",
    ink: "text-terracotta",
    wash: "bg-terracotta/10",
  },
  mustard: {
    bar: "bg-mustard",
    ink: "text-mustard",
    wash: "bg-mustard/15",
  },
  leaf: {
    bar: "bg-leaf",
    ink: "text-leaf",
    wash: "bg-leaf/10",
  },
} as const;

export function BulkOrdersPage() {
  const [popupOpen, setPopupOpen] = useState(false);
  const closePopup = useCallback(() => setPopupOpen(false), []);

  return (
    <>
      <section
        aria-labelledby="bulk-heading"
        className="section-y ink-wash bg-paper-deep/25"
      >
        <Container>
          <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16 2xl:gap-20">
            <Reveal>
              <div className="mx-auto w-full max-w-[min(100%,22rem)] rotate-[-0.75deg] sm:max-w-md lg:mx-0 lg:max-w-lg xl:max-w-xl">
                <ImagePlaceholder
                  label="Bulk packed order"
                  aspect="square"
                  alt={`Packed bulk order from ${SITE.name}`}
                  src={MEDIA.packaging.whole}
                  sizes="(max-width: 1024px) 90vw, 42vw"
                />
                <p className="mt-4 text-center font-display text-xs tracking-[0.04em] text-ink-soft/80 italic sm:text-sm">
                  Packed for your function
                </p>
              </div>
            </Reveal>

            <div className="min-w-0">
              <Reveal delay={0.06}>
                <SectionEyebrow withSprig tone="mustard">
                  Bulk &amp; functions
                </SectionEyebrow>
                <h1
                  id="bulk-heading"
                  className="font-display text-title mt-3 leading-[1.15] tracking-tight text-ink"
                >
                  Planning a function?
                </h1>
                <Divider className="mx-0 my-4 max-w-[9rem] py-0" tone="mustard" />
                <p className="text-lead prose-measure text-ink-soft">
                  Tell us the occasion, quantity and date — we prepare and pack with care
                  for gatherings large and small. WhatsApp us (no online checkout). Takeout
                  only: order in advance and collect from our kitchen in Kothanur.
                </p>
                <p className="mt-5 text-sm tracking-[0.04em] text-ink-soft/80">
                  Ask · Prepare · Ready
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <Button
                    href={whatsappBulkHref()}
                    external
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    WhatsApp Us
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto"
                    onClick={() => setPopupOpen(true)}
                  >
                    Plan with us
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
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
        className="section-y relative overflow-x-clip ink-wash bg-paper-deep/20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute top-16 -right-10 h-56 w-56 rounded-full bg-mustard/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-20 -left-16 h-64 w-64 rounded-full bg-leaf/10 blur-3xl"
        />

        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <SectionEyebrow withSprig tone="mustard">
                From ask to ready
              </SectionEyebrow>
              <h2
                id="bulk-process-heading"
                className="font-display text-title mt-3 tracking-tight text-ink"
              >
                How bulk orders work
              </h2>
              <p className="text-lead prose-measure mt-3 text-ink-soft">
                A simple conversation — no online form, no cart.
              </p>
            </div>
          </Reveal>

          <ol className="relative mt-14 space-y-14 sm:mt-16 sm:space-y-16 lg:space-y-20">
            {/* Centre thread on large screens */}
            <svg
              aria-hidden
              className="pointer-events-none absolute top-6 bottom-6 left-1/2 hidden w-10 -translate-x-1/2 lg:block"
              viewBox="0 0 40 900"
              fill="none"
              preserveAspectRatio="none"
            >
              <DrawPath
                d="M20 0 C12 90, 28 180, 18 270 C8 360, 30 450, 20 540 C10 630, 26 720, 18 810 C14 860, 22 890, 20 900"
                stroke="#B85C38"
                strokeWidth={1.5}
                opacity={0.35}
                dashArray="3 8"
                delay={0.1}
                duration={1.8}
              />
              <DrawPath
                d="M22 20 C30 110, 14 200, 24 290 C34 380, 12 470, 22 560 C32 650, 16 740, 24 830"
                stroke="#687A52"
                strokeWidth={1.1}
                opacity={0.22}
                delay={0.35}
                duration={1.7}
              />
            </svg>

            {BULK_PROCESS_STEPS.map((step, index) => {
              const flip = index % 2 === 1;
              const accent = stepAccent[step.accent];
              const rotate = flip ? "lg:rotate-[0.6deg]" : "lg:-rotate-[0.55deg]";

              return (
                <Reveal key={step.number} delay={index * 0.07} as="li">
                  <div
                    className={cn(
                      "relative grid items-center gap-6 sm:gap-8",
                      "lg:grid-cols-2 lg:gap-16 xl:gap-24",
                    )}
                  >
                    {/* Mark + giant number */}
                    <div
                      className={cn(
                        "relative flex items-center gap-5 sm:gap-6",
                        flip ? "lg:order-2 lg:justify-start" : "lg:justify-end",
                      )}
                    >
                      <div
                        className={cn(
                          "relative z-[1] flex h-20 w-20 shrink-0 items-center justify-center border border-ink/15 bg-cream/90 shadow-[1px_2px_0_rgba(41,37,31,0.05)] sm:h-24 sm:w-24",
                          accent.wash,
                          rotate,
                        )}
                        style={{
                          borderRadius: "1.05rem 0.55rem 1.2rem 0.7rem",
                        }}
                      >
                        <ProcessMark mark={step.mark} className="h-12 w-12 sm:h-14 sm:w-14" />
                      </div>
                      <span
                        aria-hidden
                        className={cn(
                          "font-display text-[4.5rem] leading-none font-semibold tracking-tight select-none sm:text-[5.5rem] lg:text-[6.5rem]",
                          accent.ink,
                          "opacity-25",
                        )}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Copy */}
                    <div
                      className={cn(
                        "relative min-w-0 pl-4 sm:pl-5",
                        flip ? "lg:order-1 lg:text-right lg:pl-0 lg:pr-5" : "",
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "absolute top-1 bottom-1 w-[3px] rounded-full",
                          accent.bar,
                          flip ? "left-0 lg:left-auto lg:right-0" : "left-0",
                        )}
                      />
                      <p
                        className={cn(
                          "text-xs font-medium tracking-[0.18em] uppercase",
                          accent.ink,
                        )}
                      >
                        Step {step.number}
                      </p>
                      <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                </Reveal>
              );
            })}
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
                  href={whatsappBulkHref()}
                  external
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  WhatsApp Us
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => setPopupOpen(true)}
                >
                  Plan with us
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <BulkContactModal open={popupOpen} onClose={closePopup} />
    </>
  );
}

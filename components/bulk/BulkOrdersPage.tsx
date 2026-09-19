"use client";

import { useCallback, useState } from "react";
import { BulkContactModal } from "@/components/bulk/BulkContactModal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import {
  BULK_OCCASIONS,
  BULK_PROCESS_STEPS,
} from "@/lib/constants/bulk";
import { MEDIA } from "@/lib/constants/media";
import { SITE } from "@/lib/constants/site";
import { whatsappBulkHref } from "@/lib/utils/whatsapp";

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
        className="section-y"
      >
        <Container>
          <Reveal>
            <h2
              id="bulk-process-heading"
              className="font-display text-title tracking-tight text-ink"
            >
              How bulk orders work
            </h2>
            <p className="text-lead prose-measure mt-3 text-ink-soft">
              A simple conversation — no online form, no cart.
            </p>
          </Reveal>

          <ol className="mt-12 grid grid-cols-1 gap-x-10 gap-y-12 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-14">
            {BULK_PROCESS_STEPS.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.06} as="li">
                <div className="flex h-full flex-col">
                  <span className="font-display text-3xl font-semibold tracking-tight text-terracotta/55 sm:text-4xl">
                    {step.number}
                  </span>
                  <div className="mt-3 h-px w-10 bg-ink/15" aria-hidden />
                  <h3 className="font-display mt-4 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft sm:text-base">
                    {step.description}
                  </p>
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

"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { BulkContactModal } from "@/components/bulk/BulkContactModal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { MEDIA } from "@/lib/constants/media";
import { SITE } from "@/lib/constants/site";
import { whatsappBulkHref } from "@/lib/utils/whatsapp";

export function BulkOrders() {
  const [popupOpen, setPopupOpen] = useState(false);
  const closePopup = useCallback(() => setPopupOpen(false), []);

  return (
    <Section
      id="bulk-orders"
      ariaLabelledBy="bulk-heading"
      className="ink-wash bg-paper-deep/25"
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
              <h2
                id="bulk-heading"
                className="font-display text-title mt-3 leading-[1.15] tracking-tight text-ink"
              >
                Planning a function?
              </h2>
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
                <Link
                  href="/bulk-orders"
                  className="link-draw tap-target inline-flex items-center justify-center text-sm font-medium text-ink-soft"
                >
                  Learn more about bulk orders
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      <BulkContactModal open={popupOpen} onClose={closePopup} />
    </Section>
  );
}

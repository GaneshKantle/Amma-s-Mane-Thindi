import Link from "next/link";
import { ThreadBridge } from "@/components/illustrations/ThreadBridge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TAILORING_GALLERY } from "@/lib/constants/tailoring";
import { whatsappTailoringHref } from "@/lib/utils/whatsapp";

const HERO = TAILORING_GALLERY[0];

export function Tailoring() {
  return (
    <Section
      id="tailoring"
      ariaLabelledBy="tailoring-heading"
      className="overflow-x-clip"
    >
      <Container>
        <Reveal>
          <ThreadBridge className="mb-8 sm:mb-10" />
        </Reveal>

        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-16 2xl:gap-20">
          <div className="min-w-0">
            <Reveal delay={0.06}>
              <SectionEyebrow withSprig tone="terracotta">
                And there&apos;s more
              </SectionEyebrow>
              <h2
                id="tailoring-heading"
                className="font-display text-title mt-3 leading-[1.15] tracking-tight text-ink"
              >
                Tailoring &amp; Blouse Work
              </h2>
              <Divider className="mx-0 my-4 max-w-[9rem] py-0" tone="terracotta" />
              <p className="text-lead prose-measure text-ink-soft">
                Alongside homemade food, we offer careful blouse stitching and finishing
                work — the same patience, measured by hand.
              </p>
              <p className="mt-5 text-sm tracking-[0.04em] text-ink-soft/80">
                Blouse · Kuchu · Peeko · Fall · Custom
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button
                  href="/tailoring"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Explore Tailoring
                </Button>
                <Button
                  href={whatsappTailoringHref()}
                  external
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Ask about Tailoring
                </Button>
                <Link
                  href="/tailoring"
                  className="link-draw tap-target inline-flex items-center justify-center text-sm font-medium text-ink-soft"
                >
                  See gallery &amp; services
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="mx-auto w-full max-w-[min(100%,22rem)] rotate-[0.75deg] sm:max-w-md lg:mx-0 lg:max-w-lg xl:max-w-xl">
              <ImagePlaceholder
                label={HERO.label}
                aspect="portrait"
                alt={HERO.imageAlt}
                src={HERO.imageSrc}
                sizes="(max-width: 1024px) 90vw, 42vw"
              />
              <p className="mt-4 text-center font-display text-xs tracking-[0.04em] text-ink-soft/80 italic sm:text-sm">
                Stitched by hand
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

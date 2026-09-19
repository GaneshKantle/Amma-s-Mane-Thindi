import { ThreadBridge } from "@/components/illustrations/ThreadBridge";
import { TailoringMotif } from "@/components/illustrations/TailoringMotifs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/constants/site";
import { whatsappTailoringHref } from "@/lib/utils/whatsapp";
import {
  TAILORING_GALLERY,
  TAILORING_SERVICES,
  type GalleryOrientation,
} from "@/lib/constants/tailoring";
import { cn } from "@/lib/utils/cn";

const orientationAspect: Record<
  GalleryOrientation,
  "portrait" | "landscape" | "detail"
> = {
  portrait: "portrait",
  landscape: "landscape",
  detail: "detail",
};

export function TailoringPage() {
  return (
    <>
      {/* Hero + thread */}
      <section className="overflow-x-clip pb-10 pt-8 sm:overflow-visible sm:pb-14 sm:pt-12 lg:pt-14">
        <Container>
          <Reveal>
            <ThreadBridge className="mb-8 sm:mb-10" />
          </Reveal>

          <Reveal>
            <p className="text-xs font-medium tracking-[0.18em] text-leaf uppercase">
              Stitched with care
            </p>
            <h1 className="font-display mt-2 max-w-[16ch] text-[clamp(2rem,6vw,3.5rem)] leading-[1.12] tracking-tight text-ink">
              Tailoring &amp; Blouse Work
            </h1>
            <Divider className="mx-0 my-5 max-w-[9rem] py-0" tone="terracotta" />
            <p className="max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Blouse stitching, kuchu, peeko, fall and custom designs — measured by
              hand, finished with patience. The same care we bring to the kitchen.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Services — fabric-inspired, spaced list */}
      <section
        aria-labelledby="tailoring-services-heading"
        className="border-t border-ink/10 bg-paper-deep/35 py-14 sm:py-16"
      >
        <Container>
          <Reveal>
            <h2
              id="tailoring-services-heading"
              className="font-display text-[clamp(1.65rem,4vw,2.5rem)] tracking-tight text-ink"
            >
              What we stitch
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-soft sm:text-base">
              Tell us your fabric and fit. We&apos;ll take it from there.
            </p>
          </Reveal>

          <ul className="mt-10 max-w-3xl space-y-4 sm:mt-12 sm:space-y-5">
            {TAILORING_SERVICES.map((service, index) => (
              <Reveal key={service.id} delay={index * 0.05} as="li">
                <div className="flex gap-4 rounded-[1.25rem_0.95rem_1.4rem_1.05rem] border border-ink/10 bg-cream/60 p-4 sm:gap-5 sm:p-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1rem_0.75rem_1.1rem_0.85rem] bg-paper shadow-[1px_2px_0_rgba(41,37,31,0.06)] sm:h-16 sm:w-16">
                    <TailoringMotif
                      motif={service.motif}
                      className="h-10 w-10 sm:h-11 sm:w-11"
                    />
                  </div>
                  <div className="min-w-0 self-center">
                    <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Gallery */}
      <section
        aria-labelledby="tailoring-gallery-heading"
        className="py-14 sm:py-16 lg:py-20"
      >
        <Container>
          <Reveal>
            <h2
              id="tailoring-gallery-heading"
              className="font-display text-[clamp(1.65rem,4vw,2.5rem)] tracking-tight text-ink"
            >
              A glimpse of our work
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-soft sm:text-base">
              Real photographs will live here soon — portrait, landscape and close-up
              details, shown without aggressive cropping.
            </p>
          </Reveal>

          <ul className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 lg:gap-y-12">
            {TAILORING_GALLERY.map((item, index) => (
              <Reveal
                key={item.id}
                delay={index * 0.05}
                as="li"
                className={cn(
                  "min-w-0",
                  item.orientation === "landscape" && "sm:col-span-2",
                  item.orientation === "portrait" && index % 3 === 1 && "sm:mt-8",
                )}
              >
                <div
                  className={
                    index % 2 === 0 ? "-rotate-1" : "rotate-[0.75deg]"
                  }
                >
                  <ImagePlaceholder
                    label={item.label}
                    aspect={orientationAspect[item.orientation]}
                    alt={item.imageAlt}
                    objectFit="contain"
                  />
                </div>
                <p className="mt-3 px-1 font-display text-base font-semibold text-ink">
                  {item.label}
                </p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="tailoring-cta-heading"
        className="border-t border-ink/10 bg-cream/55 py-14 md:py-16"
      >
        <Container>
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <h2
                id="tailoring-cta-heading"
                className="font-display text-[clamp(1.65rem,4vw,2.5rem)] tracking-tight text-ink"
              >
                Have a design in mind?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                Call or WhatsApp us with your fabric, measurements and ideas. We&apos;ll
                guide you through blouse work, finishing and custom stitching.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button
                  href={SITE.phoneHref}
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Call Us
                </Button>
                <Button
                  href={whatsappTailoringHref()}
                  external
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

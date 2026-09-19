import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { MEDIA } from "@/lib/constants/media";
import { SITE } from "@/lib/constants/site";
import {
  TAILORING_GALLERY,
  TAILORING_SERVICES,
  type GalleryOrientation,
} from "@/lib/constants/tailoring";
import { cn } from "@/lib/utils/cn";
import { whatsappTailoringHref } from "@/lib/utils/whatsapp";

const accentBorder = {
  leaf: "border-l-leaf",
  terracotta: "border-l-terracotta",
  mustard: "border-l-mustard",
} as const;

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
      {/* Hero — brand + logo */}
      <section className="section-y-tight overflow-x-clip sm:overflow-visible">
        <Container>
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
            <Reveal>
              <SectionEyebrow withSprig tone="terracotta">
                Stitched at home
              </SectionEyebrow>
              <h1 className="font-display text-title mt-3 leading-[1.15] tracking-tight text-ink">
                Tailoring &amp; Blouse Work
              </h1>
              <Divider className="mx-0 my-4 max-w-[9rem] py-0" tone="terracotta" />
              <p className="text-lead prose-measure text-ink-soft">
                Blouse stitching, kuchu, peeko, fall and custom designs — measured by
                hand, finished with patience.
              </p>
              <div className="mt-8">
                <Button
                  href={whatsappTailoringHref()}
                  external
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  WhatsApp Us
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mx-auto w-full max-w-[min(100%,18rem)] rotate-[0.75deg] sm:max-w-xs lg:mx-0 lg:max-w-sm">
                <ImagePlaceholder
                  label="Tailoring"
                  aspect="square"
                  alt={`${SITE.name} tailoring — blouse stitching and saree finishing`}
                  src={MEDIA.tailoringLogo}
                  objectFit="contain"
                  className="bg-cream"
                  sizes="(max-width: 1024px) 70vw, 20rem"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Services — quiet border-l list */}
      <section
        aria-labelledby="tailoring-services-heading"
        className="section-y border-t border-ink/10 bg-paper-deep/30"
      >
        <Container>
          <Reveal>
            <h2
              id="tailoring-services-heading"
              className="font-display text-title tracking-tight text-ink"
            >
              What we stitch
            </h2>
            <p className="text-lead prose-measure mt-3 text-ink-soft">
              Tell us your fabric and fit. We&apos;ll take it from there.
            </p>
          </Reveal>

          <ul className="mt-10 max-w-2xl space-y-4 sm:mt-12 sm:space-y-5">
            {TAILORING_SERVICES.map((service, index) => (
              <Reveal key={service.id} delay={index * 0.05} as="li">
                <article
                  className={cn(
                    "border-l-[3px] bg-cream/40 py-4 pr-4 pl-5 sm:py-5 sm:pr-5 sm:pl-6",
                    accentBorder[service.accent],
                    "rounded-r-[1.1rem_0.85rem_1.2rem_0.9rem]",
                  )}
                >
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {service.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft sm:text-base">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Gallery — three quiet slots */}
      <section
        aria-labelledby="tailoring-gallery-heading"
        className="section-y border-t border-ink/10"
      >
        <Container>
          <Reveal>
            <h2
              id="tailoring-gallery-heading"
              className="font-display text-title tracking-tight text-ink"
            >
              A glimpse of our work
            </h2>
            <p className="text-lead prose-measure mt-3 text-ink-soft">
              Work photos coming soon.
            </p>
          </Reveal>

          <ul className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-3 sm:gap-6">
            {TAILORING_GALLERY.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.06} as="li" className="min-w-0">
                <ImagePlaceholder
                  label={item.label}
                  aspect={orientationAspect[item.orientation]}
                  alt={item.imageAlt}
                  objectFit="contain"
                />
                <p className="mt-3 font-display text-base font-semibold text-ink">
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
        className="section-y-tight border-t border-ink/10 bg-cream/55"
      >
        <Container>
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <h2
                id="tailoring-cta-heading"
                className="font-display text-title tracking-tight text-ink"
              >
                Have a design in mind?
              </h2>
              <p className="text-lead mx-auto mt-3 max-w-lg text-ink-soft">
                WhatsApp us with your fabric, measurements and ideas — we&apos;ll guide
                you through blouse work, finishing and custom stitching.
              </p>
              <div className="mt-8 flex justify-center">
                <Button
                  href={whatsappTailoringHref()}
                  external
                  variant="primary"
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

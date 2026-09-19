import { MapPin, MessageCircle, Star } from "lucide-react";
import { InkSprig } from "@/components/illustrations/InkOrnaments";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SITE } from "@/lib/constants/site";
import { whatsappDefaultHref } from "@/lib/utils/whatsapp";

export function Contact() {
  return (
    <Section
      id="contact"
      ariaLabelledBy="contact-heading"
      className="ink-wash pb-10 md:pb-16"
    >
      <Container>
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <SectionEyebrow withSprig tone="terracotta" className="items-center">
              Visit &amp; order
            </SectionEyebrow>
            <h2
              id="contact-heading"
              className="font-display text-title mt-3 tracking-tight text-ink"
            >
              Talk to us
            </h2>
            <p className="text-lead prose-measure mx-auto mt-3 text-ink-soft">
              WhatsApp us to place an order. We&apos;ll help with everyday food, bulk
              orders, or tailoring — then you collect from our kitchen.
            </p>
            <p className="mt-5 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 border border-ink/10 bg-cream/60 px-4 py-2 text-sm text-ink">
              <span className="inline-flex items-center gap-1.5 font-medium tracking-wide text-ink">
                <Star
                  className="h-3.5 w-3.5 fill-mustard text-mustard"
                  aria-hidden
                />
                {SITE.rating.toFixed(1)}
              </span>
              <span className="text-ink-soft">{SITE.googleReviewsLabel}</span>
              <span aria-hidden className="text-ink/25">
                ·
              </span>
              <span className="text-ink-soft">
                {SITE.cuisine} · {SITE.area}
              </span>
            </p>
            <InkSprig className="mt-4 h-5 w-10 opacity-70" />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button
              href={whatsappDefaultHref()}
              external
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp Us
            </Button>
            <Button
              href={SITE.mapsHref}
              external
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <MapPin className="h-4 w-4" aria-hidden />
              Find Us
            </Button>
          </div>
          <p className="mx-auto mt-5 max-w-md text-center text-sm text-ink-soft">
            Full contact details and kitchen hours are in the footer.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="story-card mx-auto mt-10 max-w-2xl p-5 text-center sm:mt-12 sm:p-7">
            <p className="text-xs font-medium tracking-[0.16em] text-leaf uppercase">
              How to order
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
              {SITE.serviceNote}
            </p>
            <a
              href={SITE.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw mt-4 inline-block text-sm font-medium text-ink"
            >
              {SITE.area} — open map
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

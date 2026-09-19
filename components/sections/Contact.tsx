import { MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/constants/site";
import { whatsappDefaultHref } from "@/lib/utils/whatsapp";

export function Contact() {
  return (
    <Section
      id="contact"
      ariaLabelledBy="contact-heading"
      className="pb-10 md:pb-16"
    >
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="contact-heading"
              className="font-display text-title tracking-tight text-ink"
            >
              Talk to us
            </h2>
            <p className="text-lead prose-measure mx-auto mt-3 text-ink-soft">
              Call or WhatsApp to place an order. We&apos;ll help with everyday food,
              bulk orders, or tailoring — then you collect from our kitchen.
            </p>
            <p className="mt-4 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-ink">
              <span className="inline-flex items-center gap-1 font-semibold text-ink">
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
              <span className="text-ink-soft">{SITE.cuisine} · {SITE.area}</span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button
              href={SITE.phoneHref}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call Us
            </Button>
            <Button
              href={whatsappDefaultHref()}
              external
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp Us
            </Button>
            <Button
              href={SITE.mapsHref}
              external
              variant="ghost"
              size="lg"
              className="w-full border border-ink/15 bg-cream/50 sm:w-auto"
            >
              <MapPin className="h-4 w-4" aria-hidden />
              Find Us
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <dl className="mx-auto mt-12 grid max-w-3xl gap-5 rounded-[1.4rem_1.1rem_1.5rem_1.2rem] border border-ink/10 bg-cream/70 p-4 min-[380px]:p-6 sm:mt-14 sm:grid-cols-2 sm:gap-8 sm:p-8">
            <div>
              <dt className="text-xs font-medium tracking-[0.14em] text-leaf uppercase">
                Phone / WhatsApp
              </dt>
              <dd className="mt-2">
                <a
                  href={SITE.phoneHref}
                  className="link-draw text-base font-medium text-ink"
                >
                  {SITE.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-[0.14em] text-leaf uppercase">
                Hours
              </dt>
              <dd className="mt-2 text-base text-ink-soft">{SITE.hours}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs font-medium tracking-[0.14em] text-leaf uppercase">
                Address
              </dt>
              <dd className="mt-2 text-base leading-relaxed text-ink-soft">
                <a
                  href={SITE.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-draw text-ink-soft hover:text-ink"
                >
                  {SITE.address}
                </a>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs font-medium tracking-[0.14em] text-leaf uppercase">
                How to order
              </dt>
              <dd className="mt-2 text-base leading-relaxed text-ink-soft">
                {SITE.serviceNote}
              </dd>
            </div>
          </dl>
        </Reveal>
      </Container>
    </Section>
  );
}

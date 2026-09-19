import Link from "next/link";
import { ThreadBridge } from "@/components/illustrations/ThreadBridge";
import { TailoringMotif } from "@/components/illustrations/TailoringMotifs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { whatsappTailoringHref } from "@/lib/utils/whatsapp";
import { TAILORING_SERVICES } from "@/lib/constants/tailoring";

export function Tailoring() {
  return (
    <Section
      id="tailoring"
      ariaLabelledBy="tailoring-heading"
      className="overflow-x-clip pb-16 md:overflow-visible md:pb-20"
    >
      <Container>
        <Reveal>
          <ThreadBridge className="mb-8 sm:mb-10" />
        </Reveal>

        <Reveal>
          <div className="max-w-2xl">
            <p className="font-display text-lg italic text-ink-soft sm:text-xl">
              And there&apos;s more...
            </p>
            <h2
              id="tailoring-heading"
              className="font-display mt-2 text-[clamp(1.85rem,5vw,3rem)] tracking-tight text-ink"
            >
              Tailoring &amp; Blouse Work
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-soft sm:text-base">
              Alongside homemade food, we offer careful blouse stitching and finishing
              work — the same patience, measured by hand.
            </p>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {TAILORING_SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.05} as="li">
              <div className="flex h-full gap-4 rounded-[1.2rem_0.9rem_1.35rem_1rem] border border-ink/10 bg-paper-deep/40 p-4 sm:p-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1rem_0.75rem_1.1rem_0.85rem] bg-cream">
                  <TailoringMotif motif={service.motif} className="h-10 w-10" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {service.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-col gap-3 sm:max-w-lg sm:flex-row sm:flex-wrap sm:items-center">
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
              className="tap-target inline-flex items-center text-sm font-medium text-ink-soft underline decoration-ink/20 underline-offset-4 hover:text-ink"
            >
              See gallery &amp; services
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

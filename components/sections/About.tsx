import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/constants/site";

export function About() {
  return (
    <Section
      id="about"
      ariaLabelledBy="about-heading"
      className="bg-paper-deep/30"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="mx-auto w-full max-w-md rotate-[-1.25deg] lg:mx-0 lg:max-w-none">
              <ImagePlaceholder
                label="Our packaged homemade foods"
                aspect="wide"
                alt={`Packaged foods from ${SITE.name}`}
                src="/images/food/food1.jpeg"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2
              id="about-heading"
              className="font-display text-[clamp(1.85rem,5vw,2.85rem)] leading-[1.15] tracking-tight text-ink"
            >
              Made at home. Shared with everyone.
            </h2>
            <Divider className="mx-0 my-5 max-w-[9rem] py-0" tone="leaf" />
            <div className="space-y-4 text-sm leading-relaxed text-ink-soft sm:text-base">
              <p>
                {SITE.name} began in a Kannada household kitchen — where recipes are
                remembered by hand, and food is made the way Amma makes it.
              </p>
              <p>
                We cook with traditional taste and everyday care: small batches,
                honest ingredients, and packaging that feels personal. Alongside the
                kitchen, we also stitch blouses and finish saree work with the same
                attention.
              </p>
              <p>
                This is a small business built on trust. When you call us, you are
                speaking to the people who prepare your order.
              </p>
            </div>
            <p lang="kn" className="font-kannada mt-6 text-base text-terracotta sm:text-lg">
              ಮನೆಯಿಂದ ಮನೆಗೆ — ಪ್ರೀತಿಯಿಂದ.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

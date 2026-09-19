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
                {SITE.name} is a home-based vegetarian kitchen in {SITE.area} —
                known for traditional, fresh Karnataka-style homemade food made with
                care and quality ingredients.
              </p>
              <p>
                From Obbattu, Chakli and Nippattu to everyday rotti, chapati, idli and
                vada — recipes are remembered by hand, the way Amma makes them. Alongside
                the kitchen, we also stitch blouses and finish saree work with the same
                patience.
              </p>
              <p>
                We are takeout only: place your order in advance, then collect from our
                kitchen. When you call, you speak to the people who prepare your food.
              </p>
            </div>
            <p className="mt-5 text-sm font-medium text-ink">
              {SITE.rating.toFixed(1)} ★ · {SITE.googleReviewsLabel} · {SITE.cuisine}
            </p>
            <p lang="kn" className="font-kannada mt-3 text-base text-terracotta sm:text-lg">
              ಮನೆಯಿಂದ ಮನೆಗೆ — ಪ್ರೀತಿಯಿಂದ.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

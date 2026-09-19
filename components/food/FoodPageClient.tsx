import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { BEYOND_MENU, MENU_CHAPTERS } from "@/lib/constants/kitchen";
import { MEDIA } from "@/lib/constants/media";
import { SITE } from "@/lib/constants/site";
import { whatsappFoodHref } from "@/lib/utils/whatsapp";
import { cn } from "@/lib/utils/cn";

const accentBorder = {
  leaf: "border-l-leaf",
  terracotta: "border-l-terracotta",
  mustard: "border-l-mustard",
} as const;

export function FoodPageClient() {
  return (
    <>
      {/* Menu hero */}
      <section className="overflow-x-clip pb-10 pt-8 sm:overflow-visible sm:pb-14 sm:pt-12 lg:pt-14">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <Reveal>
              <p className="text-xs font-medium tracking-[0.18em] text-leaf uppercase">
                From Amma&apos;s kitchen
              </p>
              <h1 className="font-display mt-2 text-[clamp(2rem,6vw,3.5rem)] tracking-tight text-ink">
                Our food, our way
              </h1>
              <p lang="kn" className="font-kannada mt-2 text-lg text-terracotta sm:text-xl">
                ಮನೆಯ ಅಡುಗೆ — ಅಮ್ಮನ ಕೈ
              </p>
              <Divider className="mx-0 my-4 max-w-[9rem] py-0" tone="leaf" />
              <p className="max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
                This is our printed menu — specialties, breakfasts, meals, sweets and
                boxes. Look through it, then tell us what you need. We cook at home in
                Kothanur; there is no cart and no delivery — takeout only.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
                Please order in advance and collect from our kitchen. If you don&apos;t
                see exactly what you want, ask — custom cooking is how Amma&apos;s kitchen
                works.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:max-w-md sm:flex-row">
                <Button
                  href={SITE.phoneHref}
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto sm:flex-1"
                >
                  Call Us
                </Button>
                <Button
                  href={whatsappFoodHref()}
                  external
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto sm:flex-1"
                >
                  WhatsApp the kitchen
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mx-auto w-full max-w-md rotate-[1deg] lg:mx-0 lg:max-w-none">
                <ImagePlaceholder
                  label="Our printed menu"
                  aspect="portrait"
                  alt={`${SITE.name} printed menu`}
                  src={MEDIA.menu}
                  objectFit="contain"
                  className="bg-cream"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Menu chapters — text, no fake dish photos */}
      <section
        aria-labelledby="menu-chapters-heading"
        className="border-t border-ink/10 bg-paper-deep/30 py-14 sm:py-16"
      >
        <Container>
          <Reveal>
            <h2
              id="menu-chapters-heading"
              className="font-display text-[clamp(1.65rem,4vw,2.5rem)] tracking-tight text-ink"
            >
              On the menu
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-soft sm:text-base">
              Chapters from our card — open the photo above for full details, or ask us
              what is available today.
            </p>
          </Reveal>

          <Stagger
            className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3"
            as="ul"
          >
            {MENU_CHAPTERS.map((chapter, index) => (
              <StaggerItem key={chapter.id} as="li">
                <div
                  className={cn(
                    "flex h-full flex-col gap-2 rounded-[1.2rem_0.9rem_1.35rem_1rem] border border-ink/10 bg-cream/70 p-5 sm:p-6",
                    index % 2 === 0 ? "-rotate-[0.4deg]" : "rotate-[0.5deg]",
                  )}
                >
                  <span className="font-display text-sm font-semibold tracking-widest text-terracotta">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {chapter.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{chapter.note}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Beyond menu — custom / mother's hand */}
      <section
        aria-labelledby="beyond-menu-heading"
        className="py-14 sm:py-16 lg:py-20"
      >
        <Container>
          <Reveal>
            <p className="text-xs font-medium tracking-[0.18em] text-terracotta uppercase">
              Custom kitchen
            </p>
            <h2
              id="beyond-menu-heading"
              className="font-display mt-2 text-[clamp(1.75rem,4.5vw,2.75rem)] tracking-tight text-ink"
            >
              We cook more than the card
            </h2>
            <p lang="kn" className="font-kannada mt-3 text-base text-ink-soft sm:text-lg">
              ಮೆನು ಮಾತ್ರವಲ್ಲ — ಅಮ್ಮನ ಕೈಯ ಆಡುಗೆ.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
              Mothers never cook from a fixed list alone. Share your occasion, quantity
              and preferences — we&apos;ll discuss and prepare food that feels personal.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2">
            {BEYOND_MENU.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.06} as="li">
                <article
                  className={cn(
                    "h-full border-l-[3px] bg-cream/40 py-4 pr-4 pl-5 sm:py-5 sm:pr-5 sm:pl-6",
                    accentBorder[item.accent],
                    "rounded-r-[1.1rem_0.85rem_1.2rem_0.9rem]",
                  )}
                >
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {item.title}
                  </h3>
                  {item.titleKn ? (
                    <p lang="kn" className="font-kannada mt-1 text-sm text-terracotta sm:text-base">
                      {item.titleKn}
                    </p>
                  ) : null}
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Real packaging photos — authentic, not fake dish shots */}
      <section
        aria-labelledby="packed-heading"
        className="border-t border-ink/10 bg-cream/55 py-14 sm:py-16"
      >
        <Container>
          <Reveal>
            <h2
              id="packed-heading"
              className="font-display text-[clamp(1.65rem,4vw,2.5rem)] tracking-tight text-ink"
            >
              Packed with Amma&apos;s mark
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-soft sm:text-base">
              Real parcels from our kitchen — snacks, powders and pickles, labelled the
              way they leave home.
            </p>
          </Reveal>

          <ul className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-3 sm:gap-5">
            {(
              [
                {
                  src: MEDIA.food.packaged1,
                  alt: "Homemade pickles and powders packed from AMMA'S MANE TINDI",
                  label: "Powders & pickles",
                  rotate: "-rotate-1",
                },
                {
                  src: MEDIA.food.packaged2,
                  alt: "Branded snack pouches from AMMA'S MANE TINDI",
                  label: "Evening snacks",
                  rotate: "rotate-[1.25deg]",
                },
                {
                  src: MEDIA.food.packaged3,
                  alt: "Ready parcels with AMMA'S MANE TINDI stickers",
                  label: "Ready to share",
                  rotate: "-rotate-[0.75deg]",
                },
              ] as const
            ).map((shot, index) => (
              <Reveal key={shot.src} delay={index * 0.07} as="li">
                <div className={cn("mx-auto w-full max-w-xs sm:max-w-none", shot.rotate)}>
                  <ImagePlaceholder
                    label={shot.label}
                    aspect="square"
                    alt={shot.alt}
                    src={shot.src}
                    sizes="(max-width: 640px) 90vw, 30vw"
                  />
                  <p className="mt-3 text-center font-display text-sm font-semibold text-ink">
                    {shot.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="food-order-cta"
        className="border-t border-ink/10 bg-paper-deep/35 py-12 md:py-14"
      >
        <Container>
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <h2
                id="food-order-cta"
                className="font-display text-[clamp(1.5rem,4vw,2.25rem)] tracking-tight text-ink"
              >
                Tell us what you&apos;re craving
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                Menu item or something custom — call or WhatsApp, order in advance, then
                collect from our kitchen in Kothanur. Takeout only; no delivery.
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
                  href={whatsappFoodHref()}
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

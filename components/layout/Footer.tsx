import Link from "next/link";
import { InkSprig } from "@/components/illustrations/InkOrnaments";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Container";
import { FOOTER_LINKS } from "@/lib/constants/nav";
import { SITE } from "@/lib/constants/site";
import { whatsappDefaultHref } from "@/lib/utils/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ink-wash relative border-t border-ink/12 bg-paper-deep/40 pb-fab">
      <Container className="py-14 sm:py-16">
        <div className="story-card relative overflow-hidden px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
          <InkSprig className="pointer-events-none absolute top-4 right-5 h-6 w-12 opacity-50" />

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-20">
            <div className="min-w-0">
              <BrandLogo size="md" withWordmark />
              <p className="prose-measure mt-4 text-sm leading-relaxed text-ink-soft sm:text-[0.95rem]">
                Homemade Karnataka vegetarian cooking from our kitchen in {SITE.area} —
                prepared with care, collected with trust.
              </p>
              <p className="mt-3 text-xs tracking-[0.14em] text-leaf uppercase">
                {SITE.cuisine} · {SITE.rating.toFixed(1)} ★ · {SITE.googleReviewsLabel}
              </p>

              <nav aria-label="Footer" className="mt-8">
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {FOOTER_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="link-draw text-sm font-medium text-ink-soft"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="min-w-0 border-t border-ink/10 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <p className="text-[0.7rem] font-medium tracking-[0.2em] text-terracotta uppercase">
                Contact &amp; hours
              </p>

              <dl className="mt-5 space-y-5 text-sm">
                <div>
                  <dt className="text-xs tracking-wide text-ink-soft/75">Call</dt>
                  <dd className="mt-1">
                    <a
                      href={SITE.phoneHref}
                      className="font-display text-lg font-semibold tracking-tight text-ink transition-colors hover:text-terracotta"
                    >
                      {SITE.phoneDisplay}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs tracking-wide text-ink-soft/75">WhatsApp</dt>
                  <dd className="mt-1">
                    <a
                      href={whatsappDefaultHref()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-draw font-medium text-terracotta"
                    >
                      Message us on WhatsApp
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs tracking-wide text-ink-soft/75">Hours</dt>
                  <dd className="mt-1 font-medium text-ink">{SITE.hours}</dd>
                </div>

                <div>
                  <dt className="text-xs tracking-wide text-ink-soft/75">Visit / collect</dt>
                  <dd className="mt-1 leading-relaxed text-ink-soft">
                    <a
                      href={SITE.mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-draw"
                    >
                      {SITE.address}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs tracking-wide text-ink-soft/75">Service</dt>
                  <dd className="mt-1 text-ink-soft">{SITE.serviceDisplay}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-ink-soft/75 sm:text-left">
          © {year} {SITE.name}. Made with care at home.
        </p>
      </Container>
    </footer>
  );
}

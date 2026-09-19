import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Container";
import { FOOTER_LINKS } from "@/lib/constants/nav";
import { SITE } from "@/lib/constants/site";
import { whatsappDefaultHref } from "@/lib/utils/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-paper-deep/50 pb-fab">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.7fr_1.2fr] lg:gap-12 xl:gap-16">
          <div className="max-w-sm">
            <BrandLogo size="md" withWordmark />
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Homemade Karnataka food and careful tailoring — from our home to yours.
            </p>
            <p className="mt-3 text-xs tracking-wide text-ink-soft/90">
              {SITE.cuisine} · {SITE.area}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.16em] text-leaf uppercase">
              Explore
            </p>
            <nav aria-label="Footer" className="mt-3">
              <ul className="flex flex-col gap-1">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="tap-target inline-flex items-center text-sm font-medium text-ink-soft transition-colors hover:text-terracotta"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.16em] text-leaf uppercase">
              Contact &amp; hours
            </p>
            <dl className="mt-3 space-y-4 text-sm">
              <div>
                <dt className="text-xs tracking-wide text-ink-soft/80">Phone / WhatsApp</dt>
                <dd className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                  <a
                    href={SITE.phoneHref}
                    className="link-draw font-medium text-ink"
                  >
                    {SITE.phoneDisplay}
                  </a>
                  <a
                    href={whatsappDefaultHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw font-medium text-terracotta"
                  >
                    WhatsApp
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-wide text-ink-soft/80">Hours</dt>
                <dd className="mt-1 text-ink-soft">{SITE.hours}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-wide text-ink-soft/80">Address</dt>
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
                <dt className="text-xs tracking-wide text-ink-soft/80">Service</dt>
                <dd className="mt-1 text-ink-soft">{SITE.serviceDisplay}</dd>
              </div>
            </dl>
          </div>
        </div>

        <p className="mt-10 border-t border-ink/10 pt-6 text-xs text-ink-soft/80">
          © {year} {SITE.name}. Made with care at home.
        </p>
      </Container>
    </footer>
  );
}

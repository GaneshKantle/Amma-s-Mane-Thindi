import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Container";
import { FOOTER_LINKS } from "@/lib/constants/nav";
import { SITE } from "@/lib/constants/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-paper-deep/50 pb-fab">
      <Container className="py-12 sm:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <BrandLogo size="md" withWordmark />
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Homemade Karnataka food and careful tailoring — from our home to yours.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
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

          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-leaf uppercase">
              Follow
            </p>
            <ul className="mt-3 flex flex-wrap gap-4">
              <li>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-ink-soft underline decoration-ink/20 underline-offset-4 hover:text-terracotta hover:decoration-terracotta"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-ink-soft underline decoration-ink/20 underline-offset-4 hover:text-terracotta hover:decoration-terracotta"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-ink/10 pt-6 text-xs text-ink-soft/80">
          © {year} {SITE.name}. Made with care at home.
        </p>
      </Container>
    </footer>
  );
}

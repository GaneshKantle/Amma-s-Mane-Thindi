import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageTransition } from "@/components/layout/PageTransition";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { SITE } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "About",
  description: `${SITE.name} is a home-based vegetarian kitchen in ${SITE.area} — traditional Karnataka homemade food, takeout only. Order in advance and collect from our kitchen.`,
  openGraph: {
    title: `About | ${SITE.name}`,
    description: `Made at home, shared with everyone — the story behind ${SITE.name}.`,
  },
};

export default function AboutRoute() {
  return (
    <>
      <Header />
      <PageTransition>
        <main id="main-content" className="flex-1">
          <AboutPage />
        </main>
      </PageTransition>
      <Footer />
      <SiteChrome />
    </>
  );
}

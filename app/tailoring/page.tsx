import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageTransition } from "@/components/layout/PageTransition";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { TailoringPage } from "@/components/tailoring/TailoringPage";
import { SITE } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Tailoring & Blouse Work",
  description: `Blouse work, kuchu, peeko, fall and custom designs from ${SITE.name}. Call or WhatsApp to discuss your fabric and fit — no online shop.`,
  openGraph: {
    title: `Tailoring & Blouse Work | ${SITE.name}`,
    description: `Careful blouse stitching and saree finishing. Contact ${SITE.name} directly for custom work.`,
  },
};

export default function TailoringRoute() {
  return (
    <>
      <Header />
      <PageTransition>
        <main id="main-content" className="flex-1">
          <TailoringPage />
        </main>
      </PageTransition>
      <Footer />
      <SiteChrome />
    </>
  );
}

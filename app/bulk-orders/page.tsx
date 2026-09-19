import type { Metadata } from "next";
import { BulkOrdersPage } from "@/components/bulk/BulkOrdersPage";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageTransition } from "@/components/layout/PageTransition";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { SITE } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Bulk Orders",
  description: `Plan bulk homemade food for functions, pooja, birthdays and office events with ${SITE.name}. WhatsApp us — no online checkout.`,
  openGraph: {
    title: `Bulk Orders | ${SITE.name}`,
    description: `Homemade bulk food orders for gatherings and celebrations. Contact ${SITE.name} directly to discuss your menu.`,
  },
};

export default function BulkOrdersRoute() {
  return (
    <>
      <Header />
      <PageTransition>
        <main id="main-content" className="flex-1">
          <BulkOrdersPage />
        </main>
      </PageTransition>
      <Footer />
      <SiteChrome />
    </>
  );
}

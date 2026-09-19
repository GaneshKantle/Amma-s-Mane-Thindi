import type { Metadata } from "next";
import { FoodPageClient } from "@/components/food/FoodPageClient";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageTransition } from "@/components/layout/PageTransition";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { SITE } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Our Food",
  description: `Homemade Karnataka food from ${SITE.name} — see our menu, ask for custom cooking, and order by call or WhatsApp. From Amma's home to yours.`,
  openGraph: {
    title: `Our Food | ${SITE.name}`,
    description: `Printed menu plus custom kitchen cooking from ${SITE.name}. No online cart — talk to us directly.`,
  },
};

export default function FoodPage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main id="main-content" className="flex-1">
          <FoodPageClient />
        </main>
      </PageTransition>
      <Footer />
      <SiteChrome />
    </>
  );
}

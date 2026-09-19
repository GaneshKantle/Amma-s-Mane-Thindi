import type { Metadata } from "next";
import { FoodPageClient } from "@/components/food/FoodPageClient";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageTransition } from "@/components/layout/PageTransition";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { SITE } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Our Food",
  description: `Browse homemade snacks, meals, traditional items and specials from ${SITE.name}. Call or WhatsApp to order — no online cart.`,
  openGraph: {
    title: `Our Food | ${SITE.name}`,
    description: `Homemade Karnataka food from ${SITE.name}. Browse the menu and order by call or WhatsApp.`,
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

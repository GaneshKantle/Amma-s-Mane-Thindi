import { SiteChrome } from "@/components/layout/SiteChrome";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageTransition } from "@/components/layout/PageTransition";
import { BulkOrders } from "@/components/sections/BulkOrders";
import { Contact } from "@/components/sections/Contact";
import { FoodShowcase } from "@/components/sections/FoodShowcase";
import { Hero } from "@/components/sections/Hero";
import { Packaging } from "@/components/sections/Packaging";
import { Tailoring } from "@/components/sections/Tailoring";
import { WhatWeDo } from "@/components/sections/WhatWeDo";

export default function Home() {
  return (
    <>
      <Header />
      <PageTransition>
        <main id="main-content" className="flex-1">
          <Hero />
          <WhatWeDo />
          <FoodShowcase />
          <Packaging />
          <BulkOrders />
          <Tailoring />
          <Contact />
        </main>
      </PageTransition>
      <Footer />
      <SiteChrome />
    </>
  );
}

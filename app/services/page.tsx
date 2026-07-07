import type { Metadata } from "next";
import { faq } from "@/data/faq";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { Cta } from "@/modules/cta";
import { Faq } from "@/modules/faq";
import { Footer } from "@/modules/footer";
import { Navbar } from "@/modules/navbar";
import { Services } from "@/modules/services";
import { WhyUs } from "@/modules/why-us";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, mobile apps, AI systems, UI/UX design, cloud & DevOps, APIs, and long-term maintenance — built end to end.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar site={site} />
      <main className="pt-16">
        <Services services={services} expanded />
        <WhyUs site={site} />
        <Faq items={faq} />
        <Cta />
      </main>
      <Footer site={site} />
    </>
  );
}

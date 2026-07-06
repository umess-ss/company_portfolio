import type { Metadata } from "next";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { Footer } from "@/modules/footer";
import { Navbar } from "@/modules/navbar";
import { Services } from "@/modules/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, mobile apps, AI systems, education management, bulk SMS, SEO, and design — built end to end.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar site={site} />
      <main className="pt-16">
        <Services services={services} expanded />
      </main>
      <Footer site={site} />
    </>
  );
}

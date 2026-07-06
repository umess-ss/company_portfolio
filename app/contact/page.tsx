import type { Metadata } from "next";
import { site } from "@/data/site";
import { Contact } from "@/modules/contact";
import { Footer } from "@/modules/footer";
import { Navbar } from "@/modules/navbar";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what you're building — an engineer replies within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar site={site} />
      <main className="pt-16">
        <Contact site={site} />
      </main>
      <Footer site={site} />
    </>
  );
}

import type { Metadata } from "next";
import { site } from "@/data/site";
import { stats } from "@/data/stats";
import { About } from "@/modules/about";
import { Footer } from "@/modules/footer";
import { Navbar } from "@/modules/navbar";
import { Proof } from "@/modules/proof";

export const metadata: Metadata = {
  title: "About us",
  description:
    "A four-person senior software studio in Kathmandu — who we are, how we operate, and why we keep the team small.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar site={site} />
      <main className="pt-16">
        <About site={site} />
        <Proof stats={stats} />
      </main>
      <Footer site={site} />
    </>
  );
}

import type { Metadata } from "next";
import { site } from "@/data/site";
import { Footer } from "@/modules/footer";
import { Navbar } from "@/modules/navbar";
import { Process } from "@/modules/process";

export const metadata: Metadata = {
  title: "How we work",
  description:
    "Our seven-step delivery process, from requirement gathering to support and maintenance.",
};

export default function HowWeWorkPage() {
  return (
    <>
      <Navbar site={site} />
      <main className="pt-16">
        <Process />
      </main>
      <Footer site={site} />
    </>
  );
}

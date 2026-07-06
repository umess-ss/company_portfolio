import type { Metadata } from "next";
import { site } from "@/data/site";
import { Footer } from "@/modules/footer";
import { Navbar } from "@/modules/navbar";
import { Technologies } from "@/modules/technologies";

export const metadata: Metadata = {
  title: "Technologies",
  description:
    "Next.js, React, Python, Django, Node.js, Express, and Go — the stack behind our work.",
};

export default function TechnologiesPage() {
  return (
    <>
      <Navbar site={site} />
      <main className="pt-16">
        <Technologies />
      </main>
      <Footer site={site} />
    </>
  );
}

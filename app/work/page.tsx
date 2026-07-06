import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { Footer } from "@/modules/footer";
import { Navbar } from "@/modules/navbar";
import { Work } from "@/modules/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Production systems built end to end by one senior team.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar site={site} />
      <main className="pt-16">
        <Work projects={projects} expanded />
      </main>
      <Footer site={site} />
    </>
  );
}

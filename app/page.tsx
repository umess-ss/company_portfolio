/**
 * Shared file — trivial compositor ONLY. Changes require review from
 * all 4 founders.
 *
 * Rules:
 * 1. Import ONLY from module barrels (modules/*) and data/.
 * 2. Data is wired into sections here; modules never import each other.
 * 3. Home keeps the full overview; each section also has a dedicated
 *    route under app/<section>/page.tsx.
 */
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { stats } from "@/data/stats";
import { team } from "@/data/team";
import { Contact } from "@/modules/contact";
import { Footer } from "@/modules/footer";
import { Hero } from "@/modules/hero";
import { Navbar } from "@/modules/navbar";
import { Process } from "@/modules/process";
import { Proof } from "@/modules/proof";
import { Services } from "@/modules/services";
import { Technologies } from "@/modules/technologies";
import { Team } from "@/modules/team";
import { Work } from "@/modules/work";

export default function Home() {
  return (
    <>
      <Navbar site={site} />
      <main>
        <Hero site={site} />
        <Proof stats={stats} />
        <Services services={services} />
        <Technologies />
        <Work projects={projects} />
        <Process />
        <Team members={team} />
        <Contact site={site} />
      </main>
      <Footer site={site} />
    </>
  );
}

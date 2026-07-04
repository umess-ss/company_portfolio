"use client";

/**
 * Shared file — trivial compositor ONLY. Changes require review from
 * all 4 founders.
 *
 * Rules:
 * 1. Import ONLY from module barrels (modules/*) and data/.
 * 2. Data is wired into sections here; modules never import each other.
 * 3. The single piece of cross-section state (which case study modal is
 *    open) lives here so hero markers can open the work module's dialog.
 */
import { useState } from "react";

import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { team } from "@/data/team";
import { Contact } from "@/modules/contact";
import { Footer } from "@/modules/footer";
import { Hero } from "@/modules/hero";
import { Navbar } from "@/modules/navbar";
import { Process } from "@/modules/process";
import { Services } from "@/modules/services";
import { Team } from "@/modules/team";
import { Work } from "@/modules/work";

export default function Home() {
  const [openProjectSlug, setOpenProjectSlug] = useState<string | null>(null);

  return (
    <>
      <Navbar site={site} />
      <main>
        <Hero
          markerProjects={projects.slice(0, 3)}
          onMarkerClick={setOpenProjectSlug}
        />
        <Services services={services} />
        <Work
          projects={projects}
          openSlug={openProjectSlug}
          onOpenChange={setOpenProjectSlug}
        />
        <Process />
        <Team members={team} />
        <Contact />
      </main>
      <Footer site={site} />
    </>
  );
}

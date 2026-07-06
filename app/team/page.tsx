import type { Metadata } from "next";
import { site } from "@/data/site";
import { team } from "@/data/team";
import { Footer } from "@/modules/footer";
import { Navbar } from "@/modules/navbar";
import { Team } from "@/modules/team";

export const metadata: Metadata = {
  title: "Our team",
  description: "The four engineers who design, build, and ship your system.",
};

export default function TeamPage() {
  return (
    <>
      <Navbar site={site} />
      <main className="pt-16">
        <Team members={team} />
      </main>
      <Footer site={site} />
    </>
  );
}

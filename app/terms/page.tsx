import type { Metadata } from "next";
import { terms } from "@/data/legal";
import { site } from "@/data/site";
import { Footer } from "@/modules/footer";
import { Legal } from "@/modules/legal";
import { Navbar } from "@/modules/navbar";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms covering use of this website — client work is governed by a separate written agreement per project.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar site={site} />
      <main className="pt-16">
        <Legal doc={terms} />
      </main>
      <Footer site={site} />
    </>
  );
}

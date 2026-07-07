import type { Metadata } from "next";
import { privacy } from "@/data/legal";
import { site } from "@/data/site";
import { Footer } from "@/modules/footer";
import { Legal } from "@/modules/legal";
import { Navbar } from "@/modules/navbar";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "No accounts, no tracking, no analytics — what little happens with your data on this site, in plain language.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar site={site} />
      <main className="pt-16">
        <Legal doc={privacy} />
      </main>
      <Footer site={site} />
    </>
  );
}

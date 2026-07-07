import Link from "next/link";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Footer } from "@/modules/footer";
import { Navbar } from "@/modules/navbar";

export const metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <>
      <Navbar site={site} />
      <main className="pt-16">
        <section className="scroll-mt-24 bg-paper py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
            <p className="font-mono text-xs uppercase tracking-widest text-contour-strong">
              404
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
              Page not found
            </h1>
            <p className="mx-auto mt-4 max-w-xl font-body text-base text-contour-strong md:text-lg">
              The page you&apos;re looking for doesn&apos;t exist or has
              moved. Head back home, or tell us what you were after.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild className="px-6">
                <Link href="/">Back to home</Link>
              </Button>
              <Button asChild variant="outline" className="px-6">
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer site={site} />
    </>
  );
}

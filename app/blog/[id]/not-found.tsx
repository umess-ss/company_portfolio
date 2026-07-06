import Link from "next/link";
import { site } from "@/data/site";
import { Footer } from "@/modules/footer";
import { Navbar } from "@/modules/navbar";

export const metadata = {
  title: "Blog Post Not Found",
  description: "The blog post you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <>
      <Navbar site={site} />
      <main className="pt-16">
        <section className="scroll-mt-24 bg-paper py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-12 text-center">
            <h1 className="font-space-grotesk text-4xl md:text-5xl font-bold text-ink mb-6">
              Blog Post Not Found
            </h1>
            <p className="font-body text-lg text-contour-strong mb-8">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg bg-signal px-6 py-3 font-body font-semibold text-paper hover:bg-signal/90 transition"
            >
              ← Back to Blog
            </Link>
          </div>
        </section>
      </main>
      <Footer site={site} />
    </>
  );
}

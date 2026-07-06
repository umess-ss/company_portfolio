import type { Metadata } from "next";
import { blog } from "@/data/blog";
import { site } from "@/data/site";
import { Blog } from "@/modules/blog";
import { Footer } from "@/modules/footer";
import { Navbar } from "@/modules/navbar";

export const metadata: Metadata = {
  title: "Blog",
  description: "Engineering insights, tutorials, and company updates from Studio KTM.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar site={site} />
      <main className="pt-16">
        <Blog
          posts={blog}
          description="Explore our latest articles on engineering, product development, and industry insights. Stay updated with tutorials, best practices, and behind-the-scenes stories from Studio KTM."
        />
      </main>
      <Footer site={site} />
    </>
  );
}

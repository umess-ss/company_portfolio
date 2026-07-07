import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blog } from "@/data/blog";
import { site } from "@/data/site";
import { BlogPostView } from "@/modules/blog";
import { Footer } from "@/modules/footer";
import { Navbar } from "@/modules/navbar";

// Next 16: `params` is a Promise and must be awaited.
interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = blog.find((p) => p.id === id);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${site.url}/blog/${post.id}`,
      authors: [post.author],
    },
  };
}

export function generateStaticParams() {
  return blog.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = blog.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar site={site} />
      <main className="pt-16">
        <BlogPostView post={post} />
      </main>
      <Footer site={site} />
    </>
  );
}

"use client";

/**
 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 */
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import type { BlogPost } from "@/data/blog";

export interface BlogPostViewProps {
  post: BlogPost;
}

export function BlogPostView({ post }: BlogPostViewProps) {
  return (
    <article className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <Reveal delay={0}>
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 font-body text-signal hover:underline"
          >
            <ArrowLeft className="size-4" />
            Back to Blog
          </Link>
        </Reveal>

        <Reveal delay={30}>
          <div className="mb-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full bg-signal/10 px-3 py-1 text-xs font-medium text-signal">
              {post.category}
            </span>
            <div className="flex flex-wrap gap-3 text-xs text-contour-strong">
              <div className="flex items-center gap-1">
                <Calendar className="size-3.5" aria-hidden="true" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="size-3.5" aria-hidden="true" />
                {post.readTime} min read
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="font-space-grotesk text-4xl md:text-5xl font-bold text-ink mb-6">
            {post.title}
          </h1>
        </Reveal>

        <Reveal delay={90}>
          <p className="font-body text-lg text-contour-strong mb-12 pb-12 border-b border-contour/40">
            {post.excerpt}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="prose prose-invert max-w-none">
            <p className="font-body text-ink leading-relaxed whitespace-pre-wrap">
              {post.content}
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-12 pt-12 border-t border-contour/40">
            <div className="mb-8">
              <p className="font-body text-sm text-contour-strong mb-3">
                Written by <span className="font-semibold text-ink">{post.author}</span>
              </p>
            </div>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <p className="font-body text-sm text-contour-strong">Tags:</p>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full bg-contour/10 px-3 py-1 text-xs text-contour-strong hover:bg-contour/20 transition"
                  >
                    <Tag className="size-3" aria-hidden="true" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-12 pt-12 border-t border-contour/40">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg bg-signal/10 px-4 py-2 font-body text-signal hover:bg-signal/20 transition"
            >
              ← Read more articles
            </Link>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

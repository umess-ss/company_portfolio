"use client";

/**
 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 */
import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/ui/reveal";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost } from "@/data/blog";

export interface BlogProps {
  posts: BlogPost[];
  description?: string;
}

export function Blog({ posts, description }: BlogProps) {
  return (
    <section className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader
          eyebrow="Blog & Resources"
          title="Engineering insights & tutorials."
          className="mb-6 md:mb-8"
        />
        {description && (
          <Reveal delay={90} className="mb-12 md:mb-16 max-w-2xl">
            <p className="font-body text-contour-strong">
              {description}
            </p>
          </Reveal>
        )}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.id} delay={index * 30}>
              <Link href={`/blog/${post.id}`}>
                <Card className="group h-full overflow-hidden rounded-2xl border-contour/60 bg-card shadow-sm transition hover:shadow-lg hover:border-signal/40">
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-signal/10 px-3 py-1 text-xs font-medium text-signal">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="font-space-grotesk text-lg font-bold text-ink transition group-hover:text-signal">
                      {post.title}
                    </h3>

                    <p className="flex-1 font-body text-sm text-contour-strong">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-3 text-xs text-contour-strong">
                      <div className="flex items-center gap-1">
                        <Calendar className="size-3.5" aria-hidden="true" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
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

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-xs text-contour-strong"
                        >
                          <Tag className="size-3" aria-hidden="true" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-2 text-xs font-medium text-signal opacity-0 transition group-hover:opacity-100">
                      Read article →
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

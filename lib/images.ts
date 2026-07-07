/**
 * Prefix a public-asset path with the deploy basePath.
 *
 * next/image (and plain <img>) do NOT prepend basePath to string
 * srcs, so store asset paths WITHOUT the prefix (e.g. "/projects/x.png")
 * and wrap them with this at render time. NEXT_PUBLIC_BASE_PATH is
 * inlined at build time from BASE_PATH (see next.config.ts): empty in
 * dev, "/company_portfolio" on GitHub Pages.
 */
export function getImagePath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

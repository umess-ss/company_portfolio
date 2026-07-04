"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface RevealProps extends React.ComponentProps<"div"> {
  delay?: number;
}

function Reveal({ className, delay = 0, style, ...props }: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...props}
    />
  );
}

export { Reveal };
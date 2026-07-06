import {
  siDjango,
  siExpress,
  siGo,
  siNextdotjs,
  siNodedotjs,
  siPython,
  siReact,
} from "simple-icons";
import type { Technology } from "@/lib/types";

/**
 * Shared file — changes require review from all 4 founders.
 * Logos are the official brand marks from simple-icons, with official
 * brand colors. Near-black marks (Next.js, Express) are rendered as
 * currentColor by the technologies module so they stay visible in dark
 * mode.
 */
export const technologies: Technology[] = [
  {
    id: "nextjs",
    name: "Next.js",
    label: "Web framework",
    summary: "Production React apps with server rendering, SEO, and speed built in.",
    iconPath: siNextdotjs.path,
    hex: siNextdotjs.hex,
  },
  {
    id: "react",
    name: "React",
    label: "UI library",
    summary: "Fast, composable interfaces for dashboards and customer portals.",
    iconPath: siReact.path,
    hex: siReact.hex,
  },
  {
    id: "python",
    name: "Python",
    label: "AI & automation",
    summary: "Data pipelines, LLM workflows, integrations, and tooling.",
    iconPath: siPython.path,
    hex: siPython.hex,
  },
  {
    id: "django",
    name: "Django",
    label: "Backend framework",
    summary: "Batteries-included APIs and admin panels on a proven Python core.",
    iconPath: siDjango.path,
    hex: siDjango.hex,
  },
  {
    id: "nodejs",
    name: "Node.js",
    label: "JavaScript runtime",
    summary: "Event-driven services and realtime features on the V8 engine.",
    iconPath: siNodedotjs.path,
    hex: siNodedotjs.hex,
  },
  {
    id: "express",
    name: "Express",
    label: "API framework",
    summary: "Minimal, battle-tested HTTP APIs and middleware for Node.",
    iconPath: siExpress.path,
    hex: siExpress.hex,
  },
  {
    id: "go",
    name: "Go",
    label: "Systems language",
    summary: "High-throughput services and CLIs that stay fast under load.",
    iconPath: siGo.path,
    hex: siGo.hex,
  },
];

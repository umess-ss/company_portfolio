import type { Technology } from "@/lib/types";

/**
 * Shared file — changes require review from all 4 founders.
 */
export const technologies: Technology[] = [
  {
    id: "laravel",
    name: "Laravel",
    label: "Backend framework",
    summary: "Rapid APIs, admin panels, and server-side application logic.",
    badge: "L",
    accent: "from-[#ff8a5b] to-[#ff6f4d]",
  },
  {
    id: "php",
    name: "PHP",
    label: "Application runtime",
    summary: "Reliable server-side delivery for content-heavy and business apps.",
    badge: "php",
    accent: "from-[#ff9f50] to-[#ff7a45]",
  },
  {
    id: "react",
    name: "React",
    label: "UI layer",
    summary: "Fast, composable interfaces for dashboards and customer portals.",
    badge: "◎",
    accent: "from-[#ff9354] to-[#ff6c5d]",
  },
  {
    id: "angular",
    name: "Angular",
    label: "Enterprise frontend",
    summary: "Structured apps for teams that need conventions and scale.",
    badge: "A",
    accent: "from-[#ff964f] to-[#ff7052]",
  },
  {
    id: "javascript",
    name: "JavaScript",
    label: "Core language",
    summary: "The connective tissue for browser logic and full-stack product work.",
    badge: "JS",
    accent: "from-[#ff9150] to-[#ff6f47]",
  },
  {
    id: "python",
    name: "Python",
    label: "Automation & AI",
    summary: "Data pipelines, LLM workflows, integrations, and tooling.",
    badge: "py",
    accent: "from-[#ff8b5f] to-[#ff644f]",
  },
];
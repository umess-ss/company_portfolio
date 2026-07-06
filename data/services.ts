
import type { Service } from "@/lib/types";

/**
 * Shared file — changes require review from all 4 founders.
 */
export const services: Service[] = [
  {
    id: "web-development",
    name: "Web Development",
    description:
      "Modern, fast, and responsive websites and platforms — from a portfolio site to a complete e-commerce or internal dashboard — tailored to your goals.",
    iconName: "Code2",
    tags: ["Next.js", "React", "Node.js", "Go"],
    deliverables: [
      "Web platforms & dashboards",
      "E-commerce & booking systems",
      "API design & integrations",
    ],
  },
  {
    id: "mobile-apps",
    name: "App Development",
    description:
      "Modern, fast, and user-friendly mobile applications — from concept to launch, with smooth performance and app-store-ready polish.",
    iconName: "Smartphone",
    tags: ["React Native", "Flutter", "Expo", "Firebase"],
    deliverables: [
      "iOS & Android from one codebase",
      "Offline-first sync",
      "App-store release & maintenance",
    ],
  },
  {
    id: "ai-systems",
    name: "AI Systems",
    description:
      "Retrieval pipelines, document intelligence, and LLM-powered products — built on solid data foundations, deployed on your infrastructure.",
    iconName: "BrainCircuit",
    tags: ["Python", "Django", "RAG", "PostgreSQL"],
    deliverables: [
      "RAG & document pipelines",
      "Custom agents & copilots",
      "Model evaluation & monitoring",
    ],
  },
  {
    id: "education-management",
    name: "Education Management System",
    description:
      "A complete digital solution that simplifies and automates school, college, and institute operations — keeping administrators, teachers, students, and parents connected.",
    iconName: "GraduationCap",
    tags: ["Attendance", "Exams", "Fees", "Reports"],
    deliverables: [
      "Student, staff & fee management",
      "Realtime dashboards & reports",
      "Parent & student mobile access",
    ],
  },
  {
    id: "bulk-sms",
    name: "Bulk SMS Service",
    description:
      "Instant, reliable, and cost-effective messaging for alerts, notifications, marketing promotions, and OTPs — delivered within seconds.",
    iconName: "MessageSquareText",
    tags: ["Alerts", "OTP", "Campaigns"],
    deliverables: [
      "Campaign & contact management",
      "Delivery reports & scheduling",
      "API for your own systems",
    ],
  },
  {
    id: "seo-marketing",
    name: "SEO & Digital Marketing",
    description:
      "Proven strategies that push your website up the rankings, attract quality traffic, and convert visitors into customers.",
    iconName: "Search",
    tags: ["SEO", "Analytics", "Ads"],
    deliverables: [
      "Technical & on-page SEO",
      "Keyword & content strategy",
      "Performance tracking",
    ],
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    description:
      "Modern, creative visuals that make your brand stand out — from social media graphics to full branding packages.",
    iconName: "PenTool",
    tags: ["Branding", "UI/UX", "Print"],
    deliverables: [
      "Brand identity & logo systems",
      "Marketing & social creatives",
      "Product UI design",
    ],
  },
  {
    id: "social-media",
    name: "Social Media Management",
    description:
      "A strong online presence through engaging strategies — content creation, page management, and paid advertising handled end to end.",
    iconName: "Megaphone",
    tags: ["Content", "Community", "Paid ads"],
    deliverables: [
      "Content calendars & creation",
      "Page & community management",
      "Ad campaigns & reporting",
    ],
  },
];

import type { Service } from "@/lib/types";

/**
 * Shared file — changes require review from all 4 founders.
 * Plain-language cards: familiar category names, a one-paragraph
 * description anyone can understand, three concrete deliverables.
 * `details` renders on the /services/[id] description page.
 */
export const services: Service[] = [
  {
    id: "web-development",
    name: "Web Development",
    description:
      "Modern, fast, and responsive websites and platforms — from a business website to a complete e-commerce store, dashboard, or management system.",
    deliverables: [
      "Business websites & web platforms",
      "E-commerce & booking systems",
      "Dashboards, CRM & ERP systems",
    ],
    details: [
      "Whether you need a simple website that presents your business well or a full platform your team works in every day, we build it from start to finish — design, development, hosting, and launch.",
      "Every site we ship is fast, works on every device, and is easy for you to update. For larger systems like e-commerce stores, CRMs, or ERPs, we start by understanding how your business actually runs, then build software that fits it — not the other way around.",
      "After launch we stay available for changes, new features, and support. You'll always talk directly to the engineer who built your system.",
    ],
  },
  {
    id: "mobile-apps",
    name: "App Development",
    description:
      "Mobile apps for Android and iOS — from concept to app-store launch, with smooth performance and a polished feel.",
    deliverables: [
      "Android & iOS from one codebase",
      "Payments, notifications & offline use",
      "App-store release & updates",
    ],
    details: [
      "We build your app for Android and iOS at the same time from a single codebase, which keeps the cost down and the quality consistent on both platforms.",
      "Payments, push notifications, offline use, maps, cameras — whatever your app needs, we've shipped it before. We handle the app-store submission process end to end, including the reviews and rejections that trip most teams up.",
      "After launch, we keep the app updated for new phone models and OS versions, and add features as your users ask for them.",
    ],
  },
  {
    id: "ai-systems",
    name: "AI Systems",
    description:
      "AI chatbots, document processing, and smart assistants that save your team real time — running on your own infrastructure.",
    deliverables: [
      "AI chatbots & assistants",
      "Document AI & OCR",
      "Workflow automation",
    ],
    details: [
      "We build practical AI: chatbots that answer your customers' questions correctly, systems that read and sort documents automatically, and assistants that take repetitive work off your team's plate.",
      "Everything runs on your own infrastructure, so your data never leaves your control. We start with a small pilot so you can see real results before committing to a bigger build.",
      "We also stay honest about AI: if a simpler, cheaper solution without AI would solve your problem better, we'll tell you.",
    ],
  },
  {
    id: "education-management",
    name: "Education Management System",
    description:
      "A complete digital solution that simplifies school, college, and institute operations — connecting administrators, teachers, students, and parents.",
    deliverables: [
      "Student, staff & fee management",
      "Exams, results & report cards",
      "Parent & student mobile access",
    ],
    details: [
      "One system for everything a school runs on: student records, attendance, fees, exams, results, timetables, and staff management — instead of paper registers and scattered spreadsheets.",
      "Teachers enter marks and attendance once; parents and students see updates instantly on their phones, including fee notices and report cards. The office gets accurate reports without manual compiling.",
      "We handle setup, staff training, and data migration from your current records, and we support the system through every academic year.",
    ],
  },
  {
    id: "ui-ux-design",
    name: "UI/UX Design",
    description:
      "Clean, user-friendly interface design — wireframes, prototypes, and design systems your developers can build from.",
    deliverables: [
      "Wireframes & user flows",
      "Interactive prototypes",
      "Design systems & handoff",
    ],
    details: [
      "Good design is not decoration — it's making software that people understand at first glance. We design screens your users can navigate without a manual.",
      "You see interactive prototypes before any code is written, so changes happen when they're cheap. Once the design is right, we hand your developers a complete design system they can build from directly — or we build it ourselves.",
    ],
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    description:
      "Deployment, hosting, and infrastructure — Docker, CI/CD, AWS, DigitalOcean, monitoring, and backups, so your product runs reliably.",
    deliverables: [
      "Deployment & CI/CD pipelines",
      "AWS or DigitalOcean setup",
      "Monitoring & backups",
    ],
    details: [
      "We set up the infrastructure your product runs on: cloud servers sized to your budget, automated deployments so updates go live safely, and monitoring that alerts us before your users notice a problem.",
      "Backups are configured and actually tested — most teams discover their backups don't work on the day they need them. Yours will.",
      "If you already have infrastructure that's fragile or expensive, we can audit it and fix what's wrong without starting over.",
    ],
  },
  {
    id: "api-development",
    name: "API Development",
    description:
      "REST and GraphQL APIs, third-party integrations, and authentication — documented and built to be used by web, mobile, and partner systems.",
    deliverables: [
      "REST & GraphQL APIs",
      "Payment & third-party integrations",
      "Authentication & documentation",
    ],
    details: [
      "APIs are how your systems talk to each other — your website to your database, your app to your payment provider, your software to a partner's. We design and build them properly: secure, documented, and versioned.",
      "We integrate the services your business depends on — payment gateways, SMS providers, accounting tools — and build authentication so the right people see the right data.",
      "Clear documentation comes standard, so any developer who works with your API later can get productive in an afternoon.",
    ],
  },
  {
    id: "maintenance-support",
    name: "Maintenance & Support",
    description:
      "Bug fixes, security updates, and new features — for software we built, or systems you already run.",
    deliverables: [
      "Bug fixes & security updates",
      "Performance tuning",
      "New features & long-term support",
    ],
    details: [
      "Software needs care after launch: security patches, fixes when something breaks, and small improvements as your business changes. We provide that on a simple monthly retainer.",
      "We also take over systems other teams built. We start with a short audit, tell you honestly what shape the code is in, and then keep it running — or recommend a better path if it's beyond saving.",
    ],
  },
  {
    id: "bulk-sms",
    name: "Bulk SMS Service",
    description:
      "Instant, reliable, and cost-effective messaging for alerts, notifications, promotions, and OTPs — delivered within seconds.",
    deliverables: [
      "Campaign & contact management",
      "Delivery reports & scheduling",
      "API for your own systems",
    ],
    details: [
      "Send messages to hundreds or thousands of people in seconds — fee reminders, exam notices, appointment confirmations, OTP codes, or marketing campaigns.",
      "You get a simple dashboard to manage contacts, schedule campaigns, and see exactly which messages were delivered. If you have your own software, our API lets it send SMS directly.",
    ],
  },
  {
    id: "seo-marketing",
    name: "SEO & Digital Marketing",
    description:
      "Proven strategies that push your website up the rankings, attract quality traffic, and convert visitors into customers.",
    deliverables: [
      "Technical & on-page SEO",
      "Keyword & content strategy",
      "Performance tracking",
    ],
    details: [
      "A website nobody finds doesn't help your business. We fix the technical issues that hold your site back in search results, target the keywords your customers actually type, and build content around them.",
      "You get plain-language monthly reports: where you rank, how many people visited, and what they did — so you can see whether the investment is paying off.",
    ],
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    description:
      "Modern, creative visuals that make your brand stand out — from social media graphics to full branding packages.",
    deliverables: [
      "Brand identity & logos",
      "Marketing & social creatives",
      "Print & campaign assets",
    ],
    details: [
      "From a logo and brand colors to the graphics you post every week, we keep your business looking consistent and professional everywhere it appears.",
      "We deliver files in every format you'll need — for print, web, and social — so you're never stuck asking for a resize.",
    ],
  },
  {
    id: "social-media",
    name: "Social Media Management",
    description:
      "A strong online presence through engaging content, page management, and paid advertising — handled end to end.",
    deliverables: [
      "Content calendars & creation",
      "Page & community management",
      "Ad campaigns & reporting",
    ],
    details: [
      "We plan, create, and post your content on a regular schedule, reply to comments and messages, and keep your pages active — so your business stays visible without you spending hours on it.",
      "When you want to grow faster, we run paid ad campaigns with clear budgets and monthly reports showing exactly what the spend brought back.",
    ],
  },
];

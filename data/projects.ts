import type { Project } from "@/lib/types";

/**
 * Shared file — changes require review from all 4 founders.
 * Placeholder case studies with realistic Kathmandu context;
 * replace with real projects on feat/work-real-projects.
 */
export const projects: Project[] = [
  {
    id: "fleet-tracking",
    slug: "fleet-tracking-system",
    title: "Fleet Tracking System",
    clientName: null,
    serviceName: "Custom Software",
    summary:
      "Real-time GPS tracking and automated reporting for a 400-vehicle logistics fleet.",
    problem:
      "A Kathmandu logistics company managed 400 vehicles with paper trip sheets and phone calls. Compiling a fleet-wide utilization report took the operations team 3 full days, and fuel fraud was impossible to detect.",
    approach:
      "We embedded with the dispatch team for a week, mapped every manual touchpoint, then built the ingestion pipeline first — GPS pings from mixed low-cost trackers, normalized into a single PostgreSQL event stream — before touching the UI.",
    solution:
      "A FastAPI backend ingesting 2M+ GPS events per day, a Next.js dispatch dashboard with live map and geofence alerts, and one-click PDF reports that reconcile fuel purchases against actual routes.",
    outcomes:
      "Fleet-wide reporting went from 3 days of manual work to a 20-minute automated run. Fuel reconciliation caught discrepancies worth ~4% of monthly fuel spend in the first quarter.",
    metrics: [
      { label: "reporting time", value: "3 days → 20 min" },
      { label: "vehicles tracked", value: "400" },
      { label: "GPS events / day", value: "2M+" },
    ],
    techStack: ["FastAPI", "PostgreSQL", "Next.js", "Redis", "Docker"],
    coverPlaceholderColor: "#1F4E46",
  },
  {
    id: "hospital-appointments",
    slug: "hospital-appointment-platform",
    title: "Hospital Appointment Platform",
    clientName: null,
    serviceName: "Custom Software",
    summary:
      "Online booking, SMS reminders, and queue management for 12,000 monthly hospital visits.",
    problem:
      "A private hospital in Kathmandu handled 12,000 monthly appointments through a phone line and a paper ledger. Patients queued from 5 AM for tokens, and roughly a third of booked slots went unused because of no-shows.",
    approach:
      "We started with the failure mode — no-shows — and designed the reminder and rebooking loop before the booking flow itself. Nepali-language SMS with one-tap confirm/cancel was the core bet.",
    solution:
      "A patient-facing booking site, a front-desk queue console, and an SMS engine with confirm/cancel/rebook flows. Cancelled slots automatically reopen to the waitlist.",
    outcomes:
      "No-shows dropped 60% within two months. The 5 AM token queue disappeared, and front-desk staff handle scheduling exceptions instead of every booking.",
    metrics: [
      { label: "monthly bookings", value: "12,000" },
      { label: "no-show reduction", value: "60%" },
      { label: "waitlist backfill", value: "auto" },
    ],
    techStack: ["Next.js", "FastAPI", "PostgreSQL", "Twilio", "Docker"],
    coverPlaceholderColor: "#8FA6B3",
  },
  {
    id: "ai-document-classifier",
    slug: "ai-document-classifier",
    title: "AI Document Classifier",
    clientName: "Confidential",
    serviceName: "AI Systems",
    summary:
      "Automated intake classification and routing of 5,000 legal documents per day at 94% accuracy.",
    problem:
      "A legal firm's intake team manually read, labeled, and routed up to 5,000 scanned filings, contracts, and notices every day. Misrouted documents caused missed deadlines with real legal exposure.",
    approach:
      "We built an evaluation set from 6 months of historical intake before writing any model code, then combined OCR, layout features, and an LLM classification pass with confidence thresholds — anything uncertain falls back to a human review queue.",
    solution:
      "A FastAPI pipeline: OCR → chunking → RAG-assisted classification against the firm's own taxonomy → routing. A review UI surfaces low-confidence documents with the model's reasoning attached.",
    outcomes:
      "94% of documents are classified and routed with no human touch. The intake team shrank its daily backlog to zero and now audits samples instead of reading everything.",
    metrics: [
      { label: "docs / day", value: "5,000" },
      { label: "classification accuracy", value: "94%" },
      { label: "human review load", value: "-81%" },
    ],
    techStack: ["FastAPI", "LangChain", "PostgreSQL", "Tesseract", "RAG"],
    coverPlaceholderColor: "#E4572E",
  },
  {
    id: "mobile-banking",
    slug: "mobile-banking-app",
    title: "Mobile Banking App",
    clientName: null,
    serviceName: "Mobile Apps",
    summary:
      "Offline-first mobile banking for 50,000 users across rural Nepal.",
    problem:
      "A microfinance institution's rural members could only transact at branch offices — for many, a half-day walk. Existing banking apps assumed stable connectivity that simply doesn't exist across much of rural Nepal.",
    approach:
      "Offline-first from day one: every screen was designed to work with zero connectivity, with sync as a background concern. We tested on the cheapest Android devices sold in local markets, not flagships.",
    solution:
      "A React Native app with a local transaction ledger, conflict-free background sync, SMS-fallback OTP, and Nepali/English UI. Agents in the field get a companion mode for assisted transactions.",
    outcomes:
      "50,000 active users within the first year. Members check balances and repay loans from their village; branch congestion dropped measurably in pilot districts.",
    metrics: [
      { label: "active users", value: "50,000" },
      { label: "works offline", value: "100%" },
      { label: "min Android", value: "Go 8.1" },
    ],
    techStack: ["React Native", "Expo", "Firebase", "FastAPI", "PostgreSQL"],
    coverPlaceholderColor: "#111B26",
  },
];

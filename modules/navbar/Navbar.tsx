"use client";

/**
 * Owner: Umesh (@umess-ss)
 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 *
 * Premium mega-menu navbar inspired by AllStar (dark mega-dropdown panels)
 * and ekbana.com (clean layout). Nav items: Home, About Us, Service, Blog,
 * Resources, Contact Us — with mega-dropdown panels for About Us, Service,
 * Resources, and Contact Us.
 */
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  ChevronDown,
  Code2,
  FileText,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageSquareText,
  PenTool,
  Phone,
  Rocket,
  Search,
  Smartphone,
  Users,
  X,
  Briefcase,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { SiteConfig } from "@/lib/types";

export interface NavbarProps {
  site: SiteConfig;
}

/* ─── Mega-menu panel content ──────────────────────────────────────── */

function AboutUsPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <PanelCard
        href="/how-we-work"
        icon={<Rocket className="size-6" />}
        title="How We Work"
        description="We follow a clear and efficient 7-step workflow to ensure every project is delivered with quality, accuracy, and satisfaction."
        cta="HOW WE WORK"
        onClose={onClose}
      />
      <PanelCard
        href="/work"
        icon={<Briefcase className="size-6" />}
        title="Our Work"
        description="View our portfolio of production systems — from fleet tracking to AI document classification — built for real businesses."
        cta="CASE STUDIES"
        onClose={onClose}
      />
      <PanelCard
        href="/team"
        icon={<Users className="size-6" />}
        title="Our Core Team"
        description="Our Core Team is a group of skilled and experienced professionals who lead our company, make key decisions, and ensure smooth operations."
        cta="OUR TEAM"
        onClose={onClose}
      />
    </div>
  );
}

function ServicePanel({ onClose }: { onClose: () => void }) {
  const categories = [
    {
      label: "Development",
      items: [
        { icon: <Code2 className="size-4" />, name: "Web Development", desc: "Sites, platforms & dashboards", href: "/services" },
        { icon: <Smartphone className="size-4" />, name: "App Development", desc: "iOS & Android, one codebase", href: "/services" },
        { icon: <BrainCircuit className="size-4" />, name: "AI Systems", desc: "RAG, agents & copilots", href: "/services" },
        { icon: <Layers className="size-4" />, name: "Custom Development", desc: "Tailored software solutions", href: "/services" },
      ],
    },
    {
      label: "Marketing",
      items: [
        { icon: <Search className="size-4" />, name: "SEO & Digital Marketing", desc: "Rankings, traffic & conversions", href: "/services" },
        { icon: <Megaphone className="size-4" />, name: "Social Media Management", desc: "Content, community & paid ads", href: "/services" },
        { icon: <PenTool className="size-4" />, name: "Graphic Design", desc: "Branding, UI/UX & print", href: "/services" },
      ],
    },
    {
      label: "Solutions",
      items: [
        { icon: <GraduationCap className="size-4" />, name: "Education Management", desc: "School & institute operations", href: "/services" },
        { icon: <MessageSquareText className="size-4" />, name: "Bulk SMS Service", desc: "Alerts, OTP & campaigns", href: "/services" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {categories.map((cat) => (
        <div key={cat.label}>
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-signal">
            {cat.label}
          </p>
          <div className="space-y-1">
            {cat.items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="group/item flex items-start gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-white/5"
              >
                <span className="mt-0.5 text-signal">{item.icon}</span>
                <div>
                  <p className="font-body text-sm font-medium text-white group-hover/item:text-signal">
                    {item.name}
                  </p>
                  <p className="font-body text-xs text-white/50">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ResourcesPanel({ onClose }: { onClose: () => void }) {
  const resources = [
    { icon: <Briefcase className="size-5" />, name: "Case Studies", desc: "Real projects, real results — see how we solved it", href: "/work" },
    { icon: <Layers className="size-5" />, name: "Technologies", desc: "The modern stack we build with every day", href: "/technologies" },
    { icon: <FileText className="size-5" />, name: "How We Work", desc: "Our 7-step delivery process from call to launch", href: "/how-we-work" },
    { icon: <BookOpen className="size-5" />, name: "Blog", desc: "Engineering insights, tutorials & company updates", href: "/blog" },
  ];

  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
      {resources.map((r) => (
        <Link
          key={r.name}
          href={r.href}
          onClick={onClose}
          className="group/res flex flex-col gap-3 rounded-xl p-4 transition-colors hover:bg-white/5"
        >
          <span className="flex size-10 items-center justify-center rounded-lg bg-signal/15 text-signal">
            {r.icon}
          </span>
          <div>
            <p className="font-body text-sm font-medium text-white group-hover/res:text-signal">
              {r.name}
            </p>
            <p className="mt-1 font-body text-xs leading-relaxed text-white/50">
              {r.desc}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

function ContactUsPanel({ onClose, site }: { onClose: () => void; site: SiteConfig }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-lg bg-signal/15 text-signal">
            <Mail className="size-5" />
          </span>
          <div>
            <p className="font-body text-xs text-white/50">Email us</p>
            <a href={`mailto:${site.email}`} className="font-body text-sm text-white hover:text-signal">
              {site.email}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-lg bg-signal/15 text-signal">
            <MapPin className="size-5" />
          </span>
          <div>
            <p className="font-body text-xs text-white/50">Location</p>
            <p className="font-body text-sm text-white">{site.location}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-lg bg-signal/15 text-signal">
            <Clock className="size-5" />
          </span>
          <div>
            <p className="font-body text-xs text-white/50">Response time</p>
            <p className="font-body text-sm text-white">{site.responseTime}</p>
          </div>
        </div>
      </div>
      <div className="md:col-span-2 flex flex-col justify-center">
        <p className="mb-2 font-display text-lg font-medium text-white">
          Ready to talk to an expert?
        </p>
        <p className="mb-5 max-w-md font-body text-sm text-white/60">
          Tell us what you&apos;re building. An engineer — never a salesperson — reads it and replies with honest next steps.
        </p>
        <Button asChild size="lg" className="w-fit px-8">
          <Link href="/contact" onClick={onClose}>
            Talk to an Expert <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

/* ─── Shared panel card (About Us section) ─────────────────────────── */

function PanelCard({
  href, icon, title, description, cta, onClose,
}: {
  href: string; icon: React.ReactNode; title: string;
  description: string; cta: string; onClose: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="group/card flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-signal/30 hover:bg-white/8"
    >
      <span className="flex size-12 items-center justify-center rounded-xl bg-signal/15 text-signal">
        {icon}
      </span>
      <div>
        <h4 className="font-display text-base font-semibold text-white group-hover/card:text-signal">
          {title}
        </h4>
        <p className="mt-2 font-body text-sm leading-relaxed text-white/60">
          {description}
        </p>
      </div>
      <span className="mt-auto flex items-center gap-1 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-signal">
        {cta}
        <ArrowRight className="size-3 transition-transform group-hover/card:translate-x-1" />
      </span>
    </Link>
  );
}

/* ─── Types ────────────────────────────────────────────────────────── */

type NavItem = {
  label: string;
  href?: string;
  megaKey?: "about" | "service" | "resources" | "contact";
};

const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", megaKey: "about" },
  { label: "SERVICE", megaKey: "service" },
  { label: "BLOG", href: "/blog" },
  { label: "RESOURCES", megaKey: "resources" },
  { label: "CONTACT US", megaKey: "contact" },
];

/* ─── Main Navbar ──────────────────────────────────────────────────── */

export function Navbar({ site }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mega on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMenu(null);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const openMenu = useCallback((key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(key);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const closeMenu = useCallback(() => setActiveMenu(null), []);

  function renderMegaPanel() {
    switch (activeMenu) {
      case "about": return <AboutUsPanel onClose={closeMenu} />;
      case "service": return <ServicePanel onClose={closeMenu} />;
      case "resources": return <ResourcesPanel onClose={closeMenu} />;
      case "contact": return <ContactUsPanel onClose={closeMenu} site={site} />;
      default: return null;
    }
  }

  // Mobile accordion state
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* ── Top bar ─────────────────────────────────────────────── */}
      <div
        className={`transition-all duration-300 ${
          scrolled || mobileOpen || activeMenu
            ? "glass border-b border-contour/40 shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Home"
            className="font-display text-lg font-bold tracking-tight"
          >
            <span className="text-signal">A1</span>
            <span className="text-ink">Star</span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {NAV_ITEMS.map((item) =>
                item.megaKey ? (
                  <li
                    key={item.label}
                    onMouseEnter={() => openMenu(item.megaKey!)}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveMenu((prev) => (prev === item.megaKey ? null : item.megaKey!))
                      }
                      aria-expanded={activeMenu === item.megaKey}
                      className={`flex items-center gap-1 px-4 py-2 font-body text-xs font-medium tracking-wider transition-colors ${
                        activeMenu === item.megaKey
                          ? "text-signal"
                          : "text-ink/70 hover:text-ink"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`size-3.5 transition-transform duration-200 ${
                          activeMenu === item.megaKey ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      href={item.href!}
                      className="px-4 py-2 font-body text-xs font-medium tracking-wider text-ink/70 transition-colors hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button asChild size="sm" className="hidden px-5 lg:inline-flex">
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
            <button
              type="button"
              className="text-ink lg:hidden"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="size-6" aria-hidden="true" />
              ) : (
                <Menu className="size-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Desktop mega-dropdown panel ─────────────────────────── */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="border-t border-white/10 bg-[#0B1120]/98 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="mx-auto max-w-7xl px-8 py-8">
                {renderMegaPanel()}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile menu ─────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Main"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="border-t border-white/10 bg-[#0B1120]/98 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-5 py-4">
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) =>
                  item.megaKey ? (
                    <div key={item.label}>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpanded((prev) =>
                            prev === item.megaKey ? null : item.megaKey!,
                          )
                        }
                        className="flex w-full items-center justify-between py-3 font-body text-base text-white/80"
                      >
                        {item.label}
                        <ChevronDown
                          className={`size-4 transition-transform ${
                            mobileExpanded === item.megaKey ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === item.megaKey && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-3 pl-4">
                              <MobileSubLinks
                                megaKey={item.megaKey}
                                onClose={() => setMobileOpen(false)}
                                site={site}
                              />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href!}
                      onClick={() => setMobileOpen(false)}
                      className="py-3 font-body text-base text-white/80 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </div>
              <div className="mt-4 border-t border-white/10 pt-4">
                <Button asChild size="sm" className="w-full">
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    Talk to an Expert
                  </Link>
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ─── Mobile sub-links per mega section ─────────────────────────── */

function MobileSubLinks({
  megaKey, onClose, site,
}: {
  megaKey: string; onClose: () => void; site: SiteConfig;
}) {
  const links: { label: string; href: string }[] = (() => {
    switch (megaKey) {
      case "about":
        return [
          { label: "How We Work", href: "/how-we-work" },
          { label: "Our Work", href: "/work" },
          { label: "Our Team", href: "/team" },
        ];
      case "service":
        return [
          { label: "Web Development", href: "/services" },
          { label: "App Development", href: "/services" },
          { label: "AI Systems", href: "/services" },
          { label: "SEO & Marketing", href: "/services" },
          { label: "Education Management", href: "/services" },
          { label: "Bulk SMS", href: "/services" },
          { label: "View all services", href: "/services" },
        ];
      case "resources":
        return [
          { label: "Case Studies", href: "/work" },
          { label: "Technologies", href: "/technologies" },
          { label: "How We Work", href: "/how-we-work" },
          { label: "Blog", href: "/blog" },
        ];
      case "contact":
        return [
          { label: "Contact Form", href: "/contact" },
          { label: `Email: ${site.email}`, href: `mailto:${site.email}` },
        ];
      default:
        return [];
    }
  })();

  return (
    <div className="flex flex-col gap-1">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          onClick={onClose}
          className="py-2 font-body text-sm text-white/60 transition-colors hover:text-signal"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

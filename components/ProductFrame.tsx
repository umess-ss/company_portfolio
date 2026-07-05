/**
 * Shared component — code-drawn product mockups used as case-study cover
 * art. Renders a browser or phone frame containing a project-specific
 * skeleton UI, entirely in divs/SVG — no image assets. Text inside the
 * mockups is skeleton bars except a handful of mono figures that sell
 * the "real product" read.
 *
 * Changes require review from all 4 founders (used by hero + work).
 */
import type { ProductScreen } from "@/lib/types";
import { cn } from "@/lib/utils";

export interface ProductFrameProps {
  screen: ProductScreen;
  /** Defaults per screen: "banking" renders a phone, everything else a browser. */
  variant?: "browser" | "phone";
  className?: string;
}

/* ── shared skeleton primitives ────────────────────────────────────── */

function Bar({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-full",
        dark ? "bg-white/15" : "bg-ink/10",
        className,
      )}
      aria-hidden="true"
    />
  );
}

function BrowserChrome({
  domain,
  dark = false,
  children,
}: {
  domain: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-lg border shadow-lg",
        dark ? "border-white/10 bg-ink" : "border-ink/10 bg-white",
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-2 border-b px-2.5 py-1.5",
          dark ? "border-white/10 bg-white/5" : "border-ink/5 bg-ink/[0.03]",
        )}
      >
        <span className="flex gap-1" aria-hidden="true">
          <span className="size-1.5 rounded-full bg-[#EC6A5E]" />
          <span className="size-1.5 rounded-full bg-[#F5BF4F]" />
          <span className="size-1.5 rounded-full bg-[#61C554]" />
        </span>
        <span
          className={cn(
            "ml-1 min-w-0 flex-1 truncate rounded px-2 py-0.5 font-mono text-[8px] leading-relaxed",
            dark ? "bg-white/10 text-paper/50" : "bg-ink/5 text-ink/40",
          )}
        >
          {domain}
        </span>
      </div>
      <div className="min-h-0 flex-1">{children}</div>
    </div>
  );
}

/* ── Fleet Tracking — dark dispatch dashboard with live map ────────── */

const FLEET_STATS = [
  { value: "412", label: true },
  { value: "98.4%", label: true },
  { value: "2.1M", label: true },
];

const FLEET_VEHICLES: Array<[number, number]> = [
  [52, 96],
  [104, 62],
  [150, 88],
  [196, 46],
  [238, 72],
  [272, 34],
];

function FleetScreen() {
  return (
    <div className="flex h-full">
      <div className="flex w-[26%] shrink-0 flex-col gap-1.5 border-r border-white/10 p-2">
        <Bar dark className="mb-1 h-1.5 w-3/5" />
        {[0, 1, 2, 3].map((row) => (
          <div key={row} className="space-y-1 rounded bg-white/5 p-1.5">
            <Bar dark className="h-1 w-4/5" />
            <Bar dark className="h-1 w-1/2 opacity-60" />
          </div>
        ))}
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="grid shrink-0 grid-cols-3 gap-1.5 p-2">
          {FLEET_STATS.map((stat) => (
            <div key={stat.value} className="rounded bg-white/5 px-2 py-1">
              <p className="font-mono text-[9px] leading-tight text-paper">
                {stat.value}
              </p>
              <Bar dark className="mt-1 h-1 w-3/4" />
            </div>
          ))}
        </div>
        <div className="relative m-2 mt-0 min-h-0 flex-1 overflow-hidden rounded bg-[#16222F]">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 300 130"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* faint road grid */}
            <g stroke="#8FA6B3" strokeOpacity="0.12" strokeWidth="1" fill="none">
              <path d="M0 40 C 80 30, 160 55, 300 38" />
              <path d="M0 90 C 90 100, 190 78, 300 95" />
              <path d="M70 0 C 60 45, 85 90, 72 130" />
              <path d="M180 0 C 195 40, 170 95, 188 130" />
              <path d="M250 0 C 240 50, 262 85, 252 130" />
            </g>
            {/* active route */}
            <path
              d="M30 108 C 70 92, 92 70, 118 74 S 175 60, 205 42 S 258 30, 280 22"
              fill="none"
              stroke="#E4572E"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeDasharray="1 0"
            />
            {FLEET_VEHICLES.map(([x, y]) => (
              <g key={`${x}-${y}`}>
                <circle cx={x} cy={y} r="5" fill="#E4572E" fillOpacity="0.2" />
                <circle cx={x} cy={y} r="2.25" fill="#E4572E" />
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ── Hospital — light calendar week grid + mini bar chart ──────────── */

const HOSPITAL_WEEK: Array<Array<{ gap: number; h: number; pine: boolean }>> = [
  [
    { gap: 6, h: 14, pine: true },
    { gap: 4, h: 9, pine: false },
  ],
  [
    { gap: 2, h: 10, pine: false },
    { gap: 8, h: 16, pine: true },
  ],
  [{ gap: 12, h: 12, pine: true }],
  [
    { gap: 4, h: 8, pine: false },
    { gap: 3, h: 12, pine: true },
    { gap: 3, h: 8, pine: false },
  ],
  [
    { gap: 8, h: 18, pine: true },
  ],
  [
    { gap: 3, h: 10, pine: false },
    { gap: 6, h: 10, pine: true },
  ],
  [{ gap: 14, h: 8, pine: false }],
];

const HOSPITAL_BARS = [34, 58, 44, 72, 50, 88, 62];

function HospitalScreen() {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex shrink-0 items-center justify-between border-b border-ink/5 px-2.5 py-1.5">
        <Bar className="h-1.5 w-16" />
        <p className="font-mono text-[8px] leading-tight text-ink/60">
          Today: 47 appointments
        </p>
      </div>
      <div className="flex min-h-0 flex-1">
        <div className="grid min-w-0 flex-1 grid-cols-7 gap-px bg-ink/[0.06] p-px">
          {HOSPITAL_WEEK.map((day, i) => (
            <div key={i} className="flex flex-col bg-white px-0.5">
              {day.map((block, j) => (
                <div
                  key={j}
                  className={cn(
                    "rounded-[2px] border-l-2",
                    block.pine
                      ? "border-pine/70 bg-pine/20"
                      : "border-contour bg-contour/20",
                  )}
                  style={{ marginTop: block.gap, height: block.h }}
                  aria-hidden="true"
                />
              ))}
            </div>
          ))}
        </div>
        <div className="flex w-[24%] shrink-0 flex-col justify-end gap-1.5 border-l border-ink/5 p-2">
          <div className="flex h-14 items-end gap-1" aria-hidden="true">
            {HOSPITAL_BARS.map((height, i) => (
              <div
                key={i}
                className={cn(
                  "flex-1 rounded-sm",
                  i === 5 ? "bg-pine" : "bg-pine/30",
                )}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <Bar className="h-1 w-3/4" />
        </div>
      </div>
    </div>
  );
}

/* ── AI Doc Classifier — list rows with chips, confidence, donut ───── */

const DOC_ROWS = [
  { chip: "Contract", tone: "pine", score: "96.2%", w: "w-3/5" },
  { chip: "Notice", tone: "signal", score: "91.8%", w: "w-2/5" },
  { chip: "Filing", tone: "contour", score: "98.4%", w: "w-1/2" },
  { chip: "Contract", tone: "pine", score: "88.7%", w: "w-2/3" },
  { chip: "Invoice", tone: "ink", score: "95.1%", w: "w-2/5" },
  { chip: "Filing", tone: "contour", score: "93.6%", w: "w-1/2" },
] as const;

const CHIP_TONES: Record<(typeof DOC_ROWS)[number]["tone"], string> = {
  pine: "bg-pine/10 text-pine",
  signal: "bg-signal/10 text-signal",
  contour: "bg-contour/25 text-ink/60",
  ink: "bg-ink/10 text-ink/70",
};

/* donut segments as stroke-dasharray over circumference 100 */
const DONUT_SEGMENTS = [
  { color: "#1F4E46", opacity: 1, len: 46, offset: 0 },
  { color: "#8FA6B3", opacity: 0.8, len: 28, offset: -46 },
  { color: "#E4572E", opacity: 0.85, len: 16, offset: -74 },
  { color: "#111B26", opacity: 0.25, len: 10, offset: -90 },
];

function DocsScreen() {
  return (
    <div className="flex h-full bg-white">
      <div className="flex min-w-0 flex-1 flex-col gap-1 p-2">
        <Bar className="mb-0.5 h-1.5 w-1/3" />
        {DOC_ROWS.map((row, i) => (
          <div
            key={i}
            className="flex min-h-0 flex-1 items-center gap-1.5 rounded border border-ink/5 px-1.5"
          >
            <Bar className={cn("h-1", row.w)} />
            <span
              className={cn(
                "ml-auto shrink-0 rounded-full px-1.5 font-mono text-[7px] leading-relaxed",
                CHIP_TONES[row.tone],
              )}
            >
              {row.chip}
            </span>
            <span className="w-7 shrink-0 text-right font-mono text-[8px] leading-tight text-ink/60">
              {row.score}
            </span>
          </div>
        ))}
      </div>
      <div className="flex w-[30%] shrink-0 items-center justify-center border-l border-ink/5 p-2">
        <svg viewBox="0 0 42 42" className="h-4/5 max-h-24 w-auto" aria-hidden="true">
          {DONUT_SEGMENTS.map((seg) => (
            <circle
              key={seg.color + seg.offset}
              cx="21"
              cy="21"
              r="15.915"
              fill="none"
              stroke={seg.color}
              strokeOpacity={seg.opacity}
              strokeWidth="6"
              strokeDasharray={`${seg.len} ${100 - seg.len}`}
              strokeDashoffset={seg.offset}
              transform="rotate(-90 21 21)"
            />
          ))}
          <text
            x="21"
            y="23.5"
            textAnchor="middle"
            className="font-mono"
            fontSize="7"
            fill="#111B26"
          >
            94%
          </text>
        </svg>
      </div>
    </div>
  );
}

/* ── Mobile Banking — phone frame with balance, actions, sync pill ── */

const BANK_TRANSACTIONS = ["-1,200", "+8,500", "-450"];

function BankingPhone() {
  return (
    <div className="flex h-[94%] max-h-full flex-col overflow-hidden rounded-2xl border border-ink/15 bg-white shadow-lg"
      style={{ aspectRatio: "9 / 19" }}
    >
      {/* status bar */}
      <div className="flex shrink-0 items-center justify-between px-2.5 pt-1.5">
        <span className="font-mono text-[7px] leading-none text-ink/70">9:41</span>
        <span className="flex items-center gap-0.5" aria-hidden="true">
          <span className="h-1 w-2 rounded-[1px] bg-ink/40" />
          <span className="h-1 w-1 rounded-[1px] bg-ink/25" />
          <span className="h-1 w-2.5 rounded-[1px] bg-ink/40" />
        </span>
      </div>
      {/* balance card */}
      <div className="mx-1.5 mt-1.5 shrink-0 rounded-lg bg-pine p-2">
        <p className="font-mono text-[6px] uppercase tracking-wider text-paper/60">
          Balance
        </p>
        <p className="mt-0.5 font-mono text-[11px] leading-tight text-paper">
          NPR 24,580
        </p>
      </div>
      {/* quick actions */}
      <div className="mt-1.5 grid shrink-0 grid-cols-4 gap-1 px-1.5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center gap-0.5">
            <span
              className="flex size-4 items-center justify-center rounded-full bg-pine/10"
              aria-hidden="true"
            >
              <span className="size-1.5 rounded-sm bg-pine/60" />
            </span>
            <Bar className="h-0.5 w-3.5" />
          </div>
        ))}
      </div>
      {/* transactions */}
      <div className="mt-1.5 min-h-0 flex-1 space-y-1 px-1.5">
        {BANK_TRANSACTIONS.map((amount, i) => (
          <div key={i} className="flex items-center gap-1.5 rounded border border-ink/5 p-1">
            <span className="size-2.5 shrink-0 rounded-full bg-contour/30" aria-hidden="true" />
            <div className="min-w-0 flex-1 space-y-0.5">
              <Bar className="h-1 w-3/4" />
              <Bar className="h-0.5 w-1/2 opacity-60" />
            </div>
            <span className="shrink-0 font-mono text-[6px] leading-none text-ink/60">
              {amount}
            </span>
          </div>
        ))}
      </div>
      {/* offline-sync status pill */}
      <div className="flex shrink-0 justify-center pb-1.5 pt-1">
        <span className="flex items-center gap-1 rounded-full bg-pine/10 px-2 py-0.5">
          <span className="size-1 rounded-full bg-pine" aria-hidden="true" />
          <span className="font-mono text-[6px] leading-none text-pine">
            Offline · synced 2m ago
          </span>
        </span>
      </div>
    </div>
  );
}

/* ── frame dispatcher ──────────────────────────────────────────────── */

const BROWSER_SCREENS: Record<
  Exclude<ProductScreen, "banking">,
  { domain: string; dark: boolean; body: React.ReactNode }
> = {
  fleet: {
    domain: "dispatch.fleetops.com.np",
    dark: true,
    body: <FleetScreen />,
  },
  hospital: {
    domain: "appointments.citycare.com.np",
    dark: false,
    body: <HospitalScreen />,
  },
  docs: {
    domain: "intake.lexsort.com.np",
    dark: false,
    body: <DocsScreen />,
  },
};

export function ProductFrame({ screen, variant, className }: ProductFrameProps) {
  const resolvedVariant = variant ?? (screen === "banking" ? "phone" : "browser");
  const browserMeta =
    screen === "banking"
      ? BROWSER_SCREENS.fleet
      : BROWSER_SCREENS[screen];

  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center overflow-hidden bg-contour/15 p-[5%]",
        className,
      )}
      role="img"
      aria-label="Product interface preview"
    >
      {resolvedVariant === "phone" ? (
        <BankingPhone />
      ) : (
        <BrowserChrome domain={browserMeta.domain} dark={browserMeta.dark}>
          {browserMeta.body}
        </BrowserChrome>
      )}
    </div>
  );
}

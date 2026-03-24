"use client";

import { type Locale } from "@/i18n/translations";
import { translations, t } from "@/i18n/translations";

export function DashboardArtifacts({ locale }: { locale: Locale }) {
  const v = translations.hero_visual;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Faint dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--foreground) 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Mini P&L table — top left */}
      <div
        className="absolute top-[12%] left-[8%] w-[220px] opacity-60"
        style={{ transform: "rotate(-2deg)" }}
      >
        <div className="border border-border bg-surface/80 backdrop-blur-sm p-4 space-y-3" style={{ borderRadius: "8px" }}>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-foreground-subtle font-mono tracking-[0.1em] uppercase">
              {t(v.label, locale)}
            </span>
            <span className="text-[10px] text-foreground-subtle font-mono">Q1 2026</span>
          </div>
          <div className="h-px bg-border" />
          {[
            { label: t(v.product, locale), value: "682.4K", pct: 55 },
            { label: "Services", value: "389.2K", pct: 31 },
            { label: "Operations", value: "176.2K", pct: 14 },
          ].map((row) => (
            <div key={row.label} className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="text-foreground-muted">{row.label}</span>
                <span className="font-mono text-foreground-subtle">{row.value}</span>
              </div>
              <div className="h-[3px] bg-border/50 overflow-hidden" style={{ borderRadius: "1px" }}>
                <div
                  className="h-full bg-accent/40"
                  style={{ width: `${row.pct}%`, borderRadius: "1px" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Metric card — top right */}
      <div
        className="absolute top-[8%] right-[10%] opacity-50"
        style={{ transform: "rotate(1.5deg)" }}
      >
        <div className="border border-border bg-surface/80 backdrop-blur-sm p-5 w-[160px]" style={{ borderRadius: "8px" }}>
          <span className="text-[10px] text-foreground-subtle font-mono tracking-[0.1em] uppercase">
            {t(v.revenue_label, locale)}
          </span>
          <p
            className="mt-2 text-[28px] tracking-tight text-foreground"
            style={{ fontFamily: "var(--serif)" }}
          >
            1.25M
          </p>
          <div className="mt-2 flex items-center gap-1.5">
            <span className="text-[10px] font-mono text-accent">+12.4%</span>
            <svg width="40" height="12" viewBox="0 0 40 12" className="text-accent/60">
              <polyline
                points="0,10 8,8 16,6 24,7 32,3 40,1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Bar chart — bottom left */}
      <div
        className="absolute bottom-[15%] left-[12%] opacity-40"
        style={{ transform: "rotate(1deg)" }}
      >
        <div className="border border-border bg-surface/80 backdrop-blur-sm p-4 w-[180px]" style={{ borderRadius: "8px" }}>
          <span className="text-[10px] text-foreground-subtle font-mono tracking-[0.1em] uppercase">
            Cycle Times
          </span>
          <div className="mt-3 flex items-end gap-[6px] h-[48px]">
            {[65, 45, 80, 35, 55, 70, 40].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-accent"
                style={{
                  height: `${h}%`,
                  opacity: 0.2 + (i % 3) * 0.2,
                  borderRadius: "2px 2px 0 0",
                }}
              />
            ))}
          </div>
          <div className="mt-1.5 flex justify-between">
            <span className="text-[8px] font-mono text-foreground-subtle">Jan</span>
            <span className="text-[8px] font-mono text-foreground-subtle">Jul</span>
          </div>
        </div>
      </div>

      {/* Donut ring — bottom right */}
      <div
        className="absolute bottom-[18%] right-[14%] opacity-45"
        style={{ transform: "rotate(-1deg)" }}
      >
        <div className="border border-border bg-surface/80 backdrop-blur-sm p-4 w-[130px]" style={{ borderRadius: "8px" }}>
          <span className="text-[10px] text-foreground-subtle font-mono tracking-[0.1em] uppercase">
            Efficiency
          </span>
          <div className="mt-3 relative w-[60px] h-[60px] mx-auto">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(var(--accent) 0deg, var(--accent) 266deg, var(--border) 266deg, var(--border) 360deg)`,
                mask: "radial-gradient(circle, transparent 55%, black 56%)",
                WebkitMask: "radial-gradient(circle, transparent 55%, black 56%)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-[14px] tracking-tight text-foreground"
                style={{ fontFamily: "var(--serif)" }}
              >
                74%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Small floating data pill — mid right */}
      <div className="absolute top-[45%] right-[6%] opacity-30" style={{ transform: "rotate(-3deg)" }}>
        <div className="border border-border bg-surface/80 backdrop-blur-sm px-3 py-1.5 flex items-center gap-2" style={{ borderRadius: "20px" }}>
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-[10px] font-mono text-foreground-muted">DATEV + CRM + HR</span>
        </div>
      </div>

      {/* Small floating data pill — mid left */}
      <div className="absolute top-[52%] left-[5%] opacity-25" style={{ transform: "rotate(2deg)" }}>
        <div className="border border-border bg-surface/80 backdrop-blur-sm px-3 py-1.5 flex items-center gap-2" style={{ borderRadius: "20px" }}>
          <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
          <span className="text-[10px] font-mono text-foreground-muted">Lead → Deal: 18d</span>
        </div>
      </div>
    </div>
  );
}

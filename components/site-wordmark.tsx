"use client"

const SIZES = {
  sm: { icon: 22, top: "0.82rem", bottom: "0.60rem", gap: "0.55rem", divider: 20 },
  md: { icon: 28, top: "1.05rem", bottom: "0.68rem", gap: "0.70rem", divider: 26 },
  lg: { icon: 36, top: "1.35rem", bottom: "0.82rem", gap: "0.85rem", divider: 34 },
}

export function SiteWordmark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const s = SIZES[size]

  return (
    <span
      className="inline-flex items-center select-none"
      style={{ gap: s.gap }}
      aria-label="Trusted UK Betting Sites"
    >
      {/* ── Football / sport icon ── */}
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        {/* Circle outline */}
        <circle cx="16" cy="16" r="15" stroke="#C9922A" strokeWidth="1.6" fill="#0B1A35" />
        {/* Pentagon centre */}
        <polygon
          points="16,8.5 21.5,12.5 19.5,19 12.5,19 10.5,12.5"
          fill="#C9922A"
          opacity="0.92"
        />
        {/* Seam lines */}
        <line x1="16" y1="8.5"  x2="16"  y2="2"   stroke="#C9922A" strokeWidth="1.2" strokeLinecap="square" opacity="0.55" />
        <line x1="21.5" y1="12.5" x2="27.5" y2="10" stroke="#C9922A" strokeWidth="1.2" strokeLinecap="square" opacity="0.55" />
        <line x1="19.5" y1="19"  x2="24"  y2="25"  stroke="#C9922A" strokeWidth="1.2" strokeLinecap="square" opacity="0.55" />
        <line x1="12.5" y1="19"  x2="8"   y2="25"  stroke="#C9922A" strokeWidth="1.2" strokeLinecap="square" opacity="0.55" />
        <line x1="10.5" y1="12.5" x2="4.5" y2="10" stroke="#C9922A" strokeWidth="1.2" strokeLinecap="square" opacity="0.55" />
      </svg>

      {/* ── Divider ── */}
      <span
        aria-hidden
        style={{
          display: "block",
          width: "1px",
          height: s.divider,
          background: "rgba(201,146,42,0.30)",
          flexShrink: 0,
        }}
      />

      {/* ── Text — single horizontal row ── */}
      <span className="inline-flex items-baseline" style={{ gap: "0.38em" }}>
        <span
          style={{
            fontFamily: "var(--font-barlow), 'Barlow Condensed', system-ui, sans-serif",
            fontWeight: 900,
            fontSize: s.top,
            letterSpacing: "0.08em",
            color: "#C9922A",
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          Trusted
        </span>
        <span
          style={{
            fontFamily: "var(--font-barlow), 'Barlow Condensed', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: s.bottom,
            letterSpacing: "0.16em",
            color: "rgba(255,255,255,0.68)",
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          UK Betting Sites
        </span>
      </span>
    </span>
  )
}

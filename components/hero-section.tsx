"use client"

import Image from "next/image"
import { ShieldCheck, BadgeCheck, Scale } from "lucide-react"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

const PILLARS = [
  { icon: ShieldCheck, label: "UKGC Licensed" },
  { icon: BadgeCheck,  label: "Independent" },
  { icon: Scale,       label: "Responsible" },
]

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const month = new Date().toLocaleString("en-GB", { month: "long", year: "numeric" })

  return (
    <section className="hero-root" aria-label="Site introduction">

      {/* Sports photo — mobile only */}
      <Image
        src="/images/hero-sports-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="md:hidden object-cover object-center"
        aria-hidden
      />

      {/* Dark overlay on mobile photo */}
      <div
        className="md:hidden absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.50) 100%)" }}
        aria-hidden
      />

      {/* Main content — centred both axes */}
      <div
        className="relative z-10 w-full flex flex-col items-center justify-center text-center"
        style={{ padding: "0 1rem", height: "100%" }}
      >
        <div className="flex flex-col items-center" style={{ gap: "0.4rem", maxWidth: 680, padding: "0.75rem 0 2.5rem" }}>

          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-2.5 py-1"
            style={{
              background: "rgba(201,146,42,0.14)",
              border: "1px solid rgba(201,146,42,0.40)",
            }}
          >
            <ShieldCheck size={10} strokeWidth={2.5} style={{ color: "#C9922A" }} />
            <span
              style={{
                fontFamily: "var(--font-barlow), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "0.58rem",
                letterSpacing: "0.20em",
                textTransform: "uppercase",
                color: "#E8B84B",
              }}
            >
              UK Regulated &nbsp;&middot;&nbsp; {month}
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-barlow), system-ui, sans-serif",
              fontWeight: 900,
              fontStyle: "italic",
              fontSize: "clamp(2rem, 6vw, 4rem)",
              letterSpacing: "-0.02em",
              lineHeight: 0.95,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            <span style={{ color: "#ffffff", display: "block" }}>Trusted UK</span>
            <span style={{ color: "#C9922A", display: "block" }}>Betting Sites</span>
          </h1>

          {/* Description — all screens */}
          <p
            style={{
              fontSize: "clamp(0.72rem, 2vw, 0.84rem)",
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.88)",
              maxWidth: 500,
              margin: 0,
            }}
          >
            UKGC-licensed bookmakers ranked by bonuses, odds, live betting and payouts. Independently reviewed for 2026.
          </p>

          {/* Trust pillars — all screens */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {PILLARS.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.label}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1"
                  style={{
                    background: "rgba(0,0,0,0.50)",
                    border: "1px solid rgba(255,255,255,0.20)",
                  }}
                >
                  <Icon size={11} strokeWidth={2.5} style={{ color: "#C9922A" }} />
                  <span
                    style={{
                      fontFamily: "var(--font-barlow), system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.60rem",
                      letterSpacing: "0.10em",
                      textTransform: "uppercase",
                      color: "#ffffff",
                    }}
                  >
                    {p.label}
                  </span>
                </div>
              )
            })}
          </div>

        </div>
      </div>

      {/* Disclosure strip — pinned bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 flex flex-wrap items-center justify-center gap-x-3 px-4"
        style={{
          background: "rgba(5,14,30,0.88)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          paddingTop: 5,
          paddingBottom: 5,
        }}
      >
        <span style={{ fontSize: "0.60rem", color: "rgba(255,255,255,0.55)" }}>
          18+ &middot; Gamble responsibly.
        </span>
        <button
          type="button"
          onClick={onAdvertiserModalOpen}
          style={{ fontSize: "0.60rem", color: "rgba(255,255,255,0.65)", textDecoration: "underline", background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          Advertiser Disclosure
        </button>
        <span style={{ color: "rgba(255,255,255,0.25)" }} aria-hidden>·</span>
        <button
          type="button"
          onClick={onTermsModalOpen}
          style={{ fontSize: "0.60rem", color: "rgba(255,255,255,0.65)", textDecoration: "underline", background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          T&amp;Cs Apply
        </button>
        <span style={{ color: "rgba(255,255,255,0.25)" }} aria-hidden>·</span>
        <a
          href="https://www.begambleaware.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "0.60rem", color: "rgba(255,255,255,0.65)", textDecoration: "underline" }}
        >
          BeGambleAware.org
        </a>
      </div>
    </section>
  )
}

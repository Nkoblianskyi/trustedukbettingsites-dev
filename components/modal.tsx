"use client"

import { useState, useEffect } from "react"
import { X, ExternalLink, ShieldCheck, Star } from "lucide-react"
import Link from "next/link"
import type { BettingSite } from "../types"

interface Top3ModalProps {
  bettingSites: BettingSite[]
  casinoSites: BettingSite[]
}

function Stars({ score }: { score: number }) {
  const r = score / 2
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${score} out of 10`}>
      {[...Array(5)].map((_, i) => {
        const fill = Math.max(0, Math.min(1, r - i))
        return (
          <span key={i} className="relative" style={{ width: 14, height: 14 }}>
            <Star style={{ width: 14, height: 14, color: "hsl(216,28%,28%)" }} fill="currentColor" strokeWidth={0} className="absolute inset-0" />
            <Star style={{ width: 14, height: 14, color: "#C9922A", clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)` }} fill="currentColor" strokeWidth={0} className="absolute inset-0" />
          </span>
        )
      })}
    </div>
  )
}

export function Modal({ bettingSites }: Top3ModalProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 8000)
    return () => clearTimeout(t)
  }, [])

  if (!open) return null
  const top = bettingSites[0]
  if (!top) return null

  return (
    <div
      className="hidden md:flex fixed inset-0 z-50 items-center justify-center p-4"
      style={{ background: "rgba(6,12,28,0.80)", backdropFilter: "blur(8px)" }}
    >
      <div className="relative w-full max-w-[420px]">
        {/* Close */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute -top-4 -right-4 z-[60] flex w-9 h-9 items-center justify-center transition-colors"
          style={{ background: "hsl(216,58%,14%)", border: "1px solid hsl(216,28%,28%)", color: "rgba(255,255,255,0.60)" }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "#C9922A" }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.60)" }}
          aria-label="Close"
        >
          <X size={15} strokeWidth={2.5} />
        </button>

        {/* Card */}
        <div
          style={{
            background: "hsl(216,58%,8%)",
            border: "1px solid rgba(201,146,42,0.35)",
            boxShadow: "0 0 0 4px rgba(201,146,42,0.08), 0 32px 80px rgba(6,12,28,0.70)",
            overflow: "hidden",
          }}
        >
          {/* Gold top bar */}
          <div style={{ height: 4, background: "linear-gradient(90deg, #C9922A, #E8B84B, #C9922A)" }} />

          {/* Header */}
          <div
            className="px-6 pt-5 pb-4 text-center"
            style={{ background: "hsl(216,58%,6%)", borderBottom: "1px solid hsl(216,28%,19%)" }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <ShieldCheck size={13} style={{ color: "#C9922A" }} strokeWidth={2.5} />
              <span
                style={{
                  fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.58rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#C9922A",
                }}
              >
                trustedukbettingsites.com
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                fontWeight: 900,
                fontSize: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                color: "#fff",
                lineHeight: 1.1,
              }}
            >
              #1 Ranked UK Betting Site
            </h2>
            <p style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.38)", marginTop: "4px" }}>
              Expert-verified &middot; UKGC Licensed &middot; {new Date().toLocaleString("en-GB", { month: "long", year: "numeric" })}
            </p>
          </div>

          {/* Logo */}
          <div
            className="flex items-center justify-center px-8 py-6"
            style={{ background: "#fff", borderBottom: "1px solid hsl(216,28%,19%)" }}
          >
            <img src={top.logo || "/placeholder.svg"} alt={`${top.name} logo`} style={{ maxHeight: 64, maxWidth: 200, objectFit: "contain" }} />
          </div>

          {/* Bonus */}
          <div
            className="px-6 py-5 text-center"
            style={{ borderBottom: "1px solid hsl(216,28%,19%)" }}
          >
            <p
              style={{
                fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "0.58rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.30)",
                marginBottom: 6,
              }}
            >
              Welcome Bonus
            </p>
            <p className="bonus-main" style={{ fontSize: "1.65rem", justifyContent: "center", display: "flex" }}>{top.bonus}</p>
            <p className="bonus-sub" style={{ justifyContent: "center", marginTop: 4 }}>{top.welcomeOffer}</p>
          </div>

          {/* Score row */}
          <div
            className="flex items-center justify-between px-6 py-4"
            style={{ borderBottom: "1px solid hsl(216,28%,19%)" }}
          >
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="flex flex-col items-center justify-center w-[56px] h-[56px]"
                style={{ border: "2px solid #C9922A", background: "rgba(201,146,42,0.08)" }}
              >
                <span style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontWeight: 900, fontSize: "1.3rem", color: "#E8B84B", lineHeight: 1 }}>{top.score.toFixed(1)}</span>
                <span style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontWeight: 700, fontSize: "0.52rem", letterSpacing: "0.12em", color: "rgba(255,255,255,0.28)", textTransform: "uppercase" }}>/10</span>
              </div>
              <span style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.30)" }}>Expert score</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Stars score={top.score} />
              <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.32)" }}>{top.reviews.toLocaleString("en-GB")} reviews</span>
            </div>
            <div
              className="flex flex-col items-center justify-center px-4 py-2"
              style={{ background: "rgba(201,146,42,0.08)", border: "1px solid rgba(201,146,42,0.30)" }}
            >
              <span style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#C9922A" }}>UKGC</span>
              <span style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#C9922A" }}>Licensed</span>
            </div>
          </div>

          {/* CTA */}
          <div className="px-6 py-5">
            <Link
              href={top.link}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="cta-primary w-full justify-center"
              style={{ fontSize: "1rem", padding: "14px 0" }}
            >
              Claim Top Offer Now
              <ExternalLink size={15} strokeWidth={2.5} />
            </Link>
          </div>

          {/* Terms */}
          <div className="px-6 pb-5 text-center">
            <p style={{ fontSize: "0.68rem", lineHeight: 1.6, color: "rgba(255,255,255,0.28)" }}>
              {top.terms}
            </p>
            <p style={{ fontSize: "0.68rem", marginTop: 6, color: "rgba(255,255,255,0.24)" }}>
              18+ only &middot; New customers only &middot;{" "}
              <a href="https://www.begambleaware.org" target="_blank" rel="noreferrer" style={{ textDecoration: "underline", color: "rgba(201,146,42,0.70)" }}>
                BeGambleAware.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Star, ChevronDown, ChevronUp, ExternalLink, Trophy, Medal } from "lucide-react"
import type { BettingSite } from "../types"
import Link from "next/link"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

const RANK_META: Record<number, { label: string; icon: typeof Trophy; badgeBg: string; badgeColor: string }> = {
  1: { label: "Editor's Choice", icon: Trophy, badgeBg: "rgba(201,146,42,0.18)", badgeColor: "#E8B84B" },
  2: { label: "Top Rated",       icon: Medal,  badgeBg: "rgba(200,210,230,0.08)", badgeColor: "#c8d2e6" },
  3: { label: "Best Value",      icon: Medal,  badgeBg: "rgba(184,115,51,0.12)",  badgeColor: "#d4883a" },
}

function Stars({ score, isTop }: { score: number; isTop: boolean }) {
  const rating = score / 2
  return (
    <div className="flex items-center gap-[3px]" aria-label={`Rated ${score} out of 10`}>
      {[...Array(5)].map((_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i))
        return (
          <span key={i} className="relative inline-block" style={{ width: 14, height: 14 }}>
            <Star size={14} style={{ color: "rgba(255,255,255,0.15)" }} fill="currentColor" strokeWidth={0} className="absolute inset-0" />
            <Star
              size={14}
              style={{ color: isTop ? "#E8B84B" : "#C9922A", clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)` }}
              fill="currentColor" strokeWidth={0}
              className="absolute inset-0"
            />
          </span>
        )
      })}
    </div>
  )
}

export function Card({ site, rank }: SiteCardProps) {
  const [expanded, setExpanded] = useState(false)
  const isTop = rank === 1
  const meta = RANK_META[rank]
  const BadgeIcon = meta?.icon

  return (
    <article
      style={{
        background: isTop ? "rgba(12,26,54,0.97)" : "rgba(10,20,44,0.94)",
        border: isTop ? "1px solid rgba(201,146,42,0.50)" : "1px solid rgba(255,255,255,0.14)",
        borderLeft: isTop ? "4px solid #C9922A" : "1px solid rgba(255,255,255,0.14)",
        boxShadow: isTop ? "0 4px 32px rgba(0,0,0,0.60)" : "0 2px 12px rgba(0,0,0,0.40)",
        position: "relative",
        marginBottom: 2,
      }}
    >
      {/* BADGE BAR */}
      {meta && (
        <div
          className="flex items-center justify-between px-4 py-2"
          style={{
            background: meta.badgeBg,
            borderBottom: `1px solid ${isTop ? "rgba(201,146,42,0.25)" : "rgba(255,255,255,0.08)"}`,
          }}
        >
          <div className="flex items-center gap-1.5">
            {BadgeIcon && <BadgeIcon size={12} strokeWidth={2} style={{ color: meta.badgeColor }} />}
            <span style={{
              fontFamily: "var(--font-barlow), system-ui, sans-serif",
              fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.16em",
              textTransform: "uppercase", color: meta.badgeColor,
            }}>
              {meta.label}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e" }} />
            <span style={{
              fontFamily: "var(--font-barlow), system-ui, sans-serif",
              fontWeight: 600, fontSize: "0.62rem", letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#c8d2e6",
            }}>
              UKGC Licensed
            </span>
          </div>
        </div>
      )}

      {/* DESKTOP */}
      <div className="hidden md:flex items-stretch" style={{ minHeight: 120 }}>

        {/* Rank */}
        <div className="flex items-center justify-center"
          style={{ width: 64, flexShrink: 0, background: "rgba(0,0,0,0.30)", borderRight: "1px solid rgba(255,255,255,0.08)" }}>
          <span style={{
            fontFamily: "var(--font-barlow), system-ui, sans-serif",
            fontWeight: 900, fontStyle: "italic",
            fontSize: isTop ? "3.2rem" : "2.6rem", lineHeight: 1,
            color: rank === 1 ? "#C9922A" : rank === 2 ? "#c8d2e6" : rank === 3 ? "#d4883a" : "#c8d2e6",
          }}>
            {rank}
          </span>
        </div>

        {/* Logo */}
        <div style={{
          width: 175, flexShrink: 0, background: "#ffffff",
          borderRight: "1px solid rgba(255,255,255,0.08)",
          display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 16px",
        }}>
          <img src={site.logo || "/placeholder.svg"} alt={`${site.name} logo`}
            style={{ maxHeight: 64, maxWidth: 143, width: "auto", objectFit: "contain" }} />
        </div>

        {/* Bonus */}
        <div className="flex flex-col items-center justify-center text-center"
          style={{ flex: 1, padding: "16px 24px", borderRight: "1px solid rgba(255,255,255,0.08)", gap: 6 }}>
          <p style={{
            fontFamily: "var(--font-barlow), system-ui, sans-serif",
            fontWeight: 700, fontSize: "0.62rem", letterSpacing: "0.24em",
            textTransform: "uppercase", color: "#a8c0d6", margin: 0,
          }}>
            Welcome Bonus
          </p>
          <p style={{
            fontFamily: "var(--font-barlow), system-ui, sans-serif",
            fontWeight: 900, fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)",
            letterSpacing: "-0.01em", lineHeight: 1, color: "#ffffff", margin: 0,
          }}>
            {site.bonus}
          </p>
          <p style={{
            fontFamily: "var(--font-barlow), system-ui, sans-serif",
            fontWeight: 700, fontSize: "0.90rem", color: "#E8B84B",
            letterSpacing: "0.02em", margin: 0,
          }}>
            {site.welcomeOffer}
          </p>
        </div>

        {/* Score */}
        <div className="flex flex-col items-center justify-center"
          style={{ width: 128, flexShrink: 0, padding: "16px 12px", borderRight: "1px solid rgba(255,255,255,0.08)", gap: 8 }}>
          <div className="flex flex-col items-center justify-center"
            style={{
              width: 64, height: 64,
              border: `2px solid ${isTop ? "#C9922A" : "rgba(255,255,255,0.30)"}`,
              background: isTop ? "rgba(201,146,42,0.12)" : "rgba(255,255,255,0.06)",
            }}>
            <span style={{
              fontFamily: "var(--font-barlow), system-ui, sans-serif",
              fontWeight: 900, fontSize: "1.6rem", lineHeight: 1,
              color: isTop ? "#E8B84B" : "#ffffff",
            }}>
              {site.score.toFixed(1)}
            </span>
            <span style={{
              fontFamily: "var(--font-barlow), system-ui, sans-serif",
              fontWeight: 700, fontSize: "0.52rem", letterSpacing: "0.12em",
              color: "#a8c0d6", marginTop: 1,
            }}>
              /10
            </span>
          </div>
          <Stars score={site.score} isTop={isTop} />
          <span style={{ fontSize: "0.62rem", color: "#c8d2e6" }}>
            {site.reviews.toLocaleString("en-GB")} reviews
          </span>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center"
          style={{ width: 156, flexShrink: 0, padding: "16px 14px", gap: 8 }}>
          <Link
            href={site.link} target="_blank" rel="noopener noreferrer sponsored"
            className="flex items-center justify-center gap-1.5 w-full"
            style={{
              background: "#C9922A", color: "#07111f",
              fontFamily: "var(--font-barlow), system-ui, sans-serif",
              fontWeight: 800, fontSize: "0.84rem", letterSpacing: "0.06em",
              textTransform: "uppercase", padding: "0.72rem 1rem", textDecoration: "none",
              transition: "background 0.12s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#E8B84B" }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#C9922A" }}
          >
            Claim Offer
            <ExternalLink size={12} strokeWidth={2.5} />
          </Link>
          <span style={{ fontSize: "0.62rem", color: "#a8c0d6", textAlign: "center", lineHeight: 1.4 }}>
            New customers only
          </span>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden">
        {/* Row A: rank | logo | bonus */}
        <div className="flex items-stretch" style={{ minHeight: 90 }}>
          <div className="flex items-center justify-center shrink-0"
            style={{ width: 44, background: "rgba(0,0,0,0.30)", borderRight: "1px solid rgba(255,255,255,0.08)" }}>
            <span style={{
              fontFamily: "var(--font-barlow), system-ui, sans-serif",
              fontWeight: 900, fontStyle: "italic", fontSize: "2rem", lineHeight: 1,
              color: rank === 1 ? "#C9922A" : "#c8d2e6",
            }}>
              {rank}
            </span>
          </div>
          <div style={{
            width: 108, flexShrink: 0, background: "#ffffff",
            borderRight: "1px solid rgba(255,255,255,0.08)",
            display: "flex", alignItems: "center", justifyContent: "center", padding: "10px 12px",
          }}>
            <img src={site.logo || "/placeholder.svg"} alt={`${site.name} logo`}
              style={{ maxHeight: 48, maxWidth: 88, objectFit: "contain" }} />
          </div>
          <div className="flex flex-col items-center justify-center text-center min-w-0"
            style={{ flex: 1, padding: "10px 10px", gap: 4 }}>
            <p style={{
              fontFamily: "var(--font-barlow), system-ui, sans-serif",
              fontWeight: 700, fontSize: "0.54rem", letterSpacing: "0.20em",
              textTransform: "uppercase", color: "#a8c0d6", margin: 0,
            }}>
              Welcome Bonus
            </p>
            <p style={{
              fontFamily: "var(--font-barlow), system-ui, sans-serif",
              fontWeight: 900, fontSize: "1.25rem", lineHeight: 1, color: "#ffffff", margin: 0,
            }}>
              {site.bonus}
            </p>
            <p style={{
              fontFamily: "var(--font-barlow), system-ui, sans-serif",
              fontWeight: 700, fontSize: "0.76rem", color: "#E8B84B", margin: 0,
            }}>
              {site.welcomeOffer}
            </p>
          </div>
        </div>

        {/* Row B: score + stars | CTA */}
        <div className="flex items-center justify-between"
          style={{ padding: "10px 12px", borderTop: "1px solid rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.22)", gap: 12 }}>
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center shrink-0"
              style={{
                width: 46, height: 46,
                border: `2px solid ${isTop ? "#C9922A" : "rgba(255,255,255,0.30)"}`,
                background: isTop ? "rgba(201,146,42,0.12)" : "rgba(255,255,255,0.06)",
              }}>
              <span style={{
                fontFamily: "var(--font-barlow), system-ui, sans-serif",
                fontWeight: 900, fontSize: "1.1rem",
                color: isTop ? "#E8B84B" : "#ffffff", lineHeight: 1,
              }}>
                {site.score.toFixed(1)}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <Stars score={site.score} isTop={isTop} />
              <span style={{ fontSize: "0.62rem", color: "#c8d2e6" }}>
                {site.reviews.toLocaleString("en-GB")} reviews
              </span>
            </div>
          </div>
          <Link href={site.link} target="_blank" rel="noopener noreferrer sponsored"
            className="flex items-center gap-1"
            style={{
              background: "#C9922A", color: "#07111f",
              fontFamily: "var(--font-barlow), system-ui, sans-serif",
              fontWeight: 800, fontSize: "0.80rem", letterSpacing: "0.06em",
              textTransform: "uppercase", padding: "0.62rem 1.1rem", textDecoration: "none", flexShrink: 0,
            }}
          >
            Claim
            <ExternalLink size={11} strokeWidth={2.5} />
          </Link>
        </div>
      </div>

      {/* T&Cs */}
      {site.terms && (
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.18)" }}>
          <div className="flex items-start gap-2 px-4 py-2">
            <p
              className={`flex-1 leading-snug ${!expanded ? "line-clamp-1" : ""}`}
              style={{ fontSize: "0.66rem", color: "#a8c0d6", margin: 0 }}
            >
              <span style={{
                fontFamily: "var(--font-barlow), system-ui, sans-serif",
                fontWeight: 700, fontSize: "0.60rem", letterSpacing: "0.12em",
                textTransform: "uppercase", color: "#c8d2e6", marginRight: "0.4em",
              }}>
                T&Cs:
              </span>
              {site.terms}
            </p>
            {site.terms.length > 80 && (
              <button type="button" onClick={() => setExpanded((v) => !v)}
                className="shrink-0"
                style={{ color: "#c8d2e6", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                aria-label={expanded ? "Collapse T&Cs" : "Expand T&Cs"}
              >
                {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
              </button>
            )}
          </div>
        </div>
      )}
    </article>
  )
}

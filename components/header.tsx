"use client"

import Link from "next/link"
import { ShieldCheck } from "lucide-react"
import { SiteWordmark } from "@/components/site-wordmark"

export function Header() {
  return (
    <header
      className="sticky top-0 z-50"
      style={{ background: "hsl(216,54%,12%)", borderBottom: "2px solid #C9922A" }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 1rem",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Centered logo + wordmark */}
        <Link
          href="/"
          aria-label="Trusted UK Betting Sites — Home"
          style={{ display: "flex", alignItems: "center" }}
          className="transition-opacity hover:opacity-80"
        >
          <SiteWordmark size="md" />
        </Link>

        {/* Right badges — absolute so logo stays centred */}
        <div
          style={{
            position: "absolute",
            right: "1rem",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          {/* UKGC badge */}
          <div
            className="hidden sm:flex items-center gap-1.5"
            style={{
              padding: "5px 10px",
              background: "rgba(201,146,42,0.10)",
              border: "1px solid rgba(201,146,42,0.35)",
            }}
          >
            <ShieldCheck size={12} style={{ color: "#C9922A" }} strokeWidth={2.5} />
            <span
              style={{
                fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#C9922A",
                whiteSpace: "nowrap",
              }}
            >
              UKGC Licensed
            </span>
          </div>

          {/* 18+ badge */}
          <div
            style={{
              width: 34,
              height: 34,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(201,146,42,0.10)",
              border: "1px solid rgba(201,146,42,0.35)",
            }}
          >
            <span
              style={{
                fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                fontWeight: 900,
                fontSize: "0.75rem",
                color: "#C9922A",
              }}
            >
              18+
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

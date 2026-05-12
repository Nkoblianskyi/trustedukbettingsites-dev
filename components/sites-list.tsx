"use client"

import { Card } from "./card"
import { bettingSites } from "../data/mock-data"
import type { BettingSite } from "../types"

export function SitesList() {
  return (
    <section aria-label="UK Betting Sites Rankings">
      {/* Section header */}
      <div className="flex items-end justify-between mb-4 pb-4" style={{ borderBottom: "1px solid hsl(216,28%,19%)" }}>
        <div>
          <div className="gold-rule mb-2" />
          <span className="eyebrow block mb-1">Expert Rankings — {new Date().getFullYear()}</span>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', system-ui, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              color: "#fff",
              lineHeight: 1.05,
            }}
          >
            Top UK Betting Sites
          </h2>
        </div>
        <span
          style={{
            fontFamily: "'Barlow Condensed', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "0.7rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.60)",
            whiteSpace: "nowrap",
          }}
        >
          {bettingSites.length} Sites Ranked
        </span>
      </div>

      {/* Column labels — desktop */}
      <div
        className="hidden md:grid text-[0.58rem] font-bold uppercase tracking-[0.16em] mb-2 px-1"
        style={{
          gridTemplateColumns: "58px 188px 1fr 130px 152px",
          color: "rgba(255,255,255,0.55)",
          fontFamily: "'Barlow Condensed', system-ui, sans-serif",
        }}
      >
        <span className="text-center">Rank</span>
        <span className="text-center">Bookmaker</span>
        <span className="pl-6">Bonus Offer</span>
        <span className="text-center">Score</span>
        <span className="text-center">Action</span>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-2">
        {bettingSites.map((site: BettingSite, i: number) => (
          <Card key={site.id} site={site} rank={i + 1} />
        ))}
      </div>
    </section>
  )
}

"use client"

import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PolicyLayoutProps {
  title: string
  children: React.ReactNode
}

export function PolicyLayout({ title, children }: PolicyLayoutProps) {
  const date = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })

  return (
    <div style={{ background: "hsl(216,58%,9%)", minHeight: "100vh" }}>

      {/* Page header */}
      <div style={{ background: "hsl(216,58%,6%)", borderBottom: "1px solid hsl(216,28%,19%)" }}>
        <div className="header-top-bar" />
        <div className="site-wrap py-8 sm:py-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-6 transition-colors"
            style={{
              fontFamily: "'Barlow Condensed', system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "0.72rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#C9922A" }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.45)" }}
          >
            <ArrowLeft size={13} strokeWidth={2.5} />
            Back to Rankings
          </Link>

          <span
            className="block mb-2"
            style={{
              fontFamily: "'Barlow Condensed', system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "0.60rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#C9922A",
            }}
          >
            trustedukbettingsites.com
          </span>

          <h1
            style={{
              fontFamily: "'Barlow Condensed', system-ui, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              color: "#fff",
              lineHeight: 1.0,
            }}
          >
            {title}
          </h1>
          <p
            className="mt-2"
            style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.30)", letterSpacing: "0.06em" }}
          >
            Effective: {date}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="site-wrap py-10 sm:py-12">
        <div
          style={{
            background: "hsl(216,58%,8%)",
            border: "1px solid hsl(216,28%,19%)",
            borderLeft: "3px solid rgba(201,146,42,0.60)",
            padding: "clamp(1.25rem, 3vw, 2rem)",
          }}
        >
          <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.8 }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "2rem" }}>
      <h2
        className="flex items-center gap-2.5 mb-3 pb-2"
        style={{
          fontFamily: "'Barlow Condensed', system-ui, sans-serif",
          fontWeight: 800,
          fontSize: "1.0rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: "#fff",
          borderBottom: "1px solid hsl(216,28%,19%)",
        }}
      >
        <span
          className="inline-block w-0.5 h-4 shrink-0"
          style={{ background: "#C9922A" }}
          aria-hidden
        />
        {title}
      </h2>
      <div style={{ fontSize: "0.84rem", lineHeight: 1.8, color: "rgba(255,255,255,0.50)", paddingLeft: "0.75rem" }}>
        {children}
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"
import { SiteWordmark } from "@/components/site-wordmark"
import { ShieldCheck, Phone } from "lucide-react"

const LEGAL_LINKS = [
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/responsible-gaming", label: "Responsible Gaming" },
  { href: "/about", label: "About Us" },
]

const ORGS = [
  { href: "https://www.gamstop.co.uk/", src: "/gamstop.svg", alt: "GamStop" },
  { href: "https://www.begambleaware.org/", src: "/gamble.webp", alt: "BeGambleAware" },
  { href: "https://www.gamcare.org.uk/", src: "/gamecare.svg", alt: "GamCare" },
  { href: "https://gordonmoody.org.uk/", src: "/gordon.png", alt: "Gordon Moody" },
  { href: "https://www.gamblingcommission.gov.uk/", src: "/commission.png", alt: "UK Gambling Commission" },
]

export function Footer() {
  return (
    <footer style={{ background: "hsl(216,58%,6%)" }}>
      {/* Gold top bar */}
      <div className="header-top-bar" />

      {/* Safer gambling orgs */}
      <div style={{ borderBottom: "1px solid hsl(216,28%,19%)" }}>
        <div className="site-wrap py-8">
          <p
            className="text-center mb-5"
            style={{
              fontFamily: "'Barlow Condensed', system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "0.6rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.30)",
            }}
          >
            Safer Gambling Support Organisations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {ORGS.map((org) => (
              <Link
                key={org.alt}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white px-4 py-2 transition-opacity hover:opacity-75"
                style={{ minWidth: 80, height: 40 }}
              >
                <img src={org.src} alt={org.alt} className="max-h-6 w-auto object-contain" />
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 mt-5">
            <Phone size={12} style={{ color: "#C9922A" }} />
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)" }}>
              National Gambling Helpline:{" "}
              <strong style={{ color: "rgba(255,255,255,0.80)", fontWeight: 700 }}>0808 8020 133</strong>
              {" "}— free, 24 hours a day
            </p>
          </div>
        </div>
      </div>

      {/* 3-column grid */}
      <div className="site-wrap py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="Trusted UK Betting Sites — Home">
              <SiteWordmark size="lg" />
            </Link>
            <p style={{ fontSize: "0.8rem", lineHeight: 1.7, color: "rgba(255,255,255,0.42)" }}>
              Independent editorial rankings of UKGC-licensed bookmakers. We do not
              accept bets or hold player funds. Affiliate partnerships are fully
              disclosed and do not influence our scores.
            </p>
            <div
              className="flex items-center gap-2 px-3 py-2 mt-1"
              style={{ background: "rgba(201,146,42,0.07)", border: "1px solid rgba(201,146,42,0.22)" }}
            >
              <ShieldCheck size={13} style={{ color: "#C9922A" }} strokeWidth={2.5} />
              <span
                style={{
                  fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.62rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#C9922A",
                }}
              >
                UKGC Licensed Operators Only
              </span>
            </div>
          </div>

          {/* Legal links */}
          <div>
            <p
              className="mb-5"
              style={{
                fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.28)",
              }}
            >
              Legal & Policies
            </p>
            <nav className="flex flex-col gap-2" aria-label="Footer legal navigation">
              {LEGAL_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit footer-nav-link"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Responsible gambling */}
          <div>
            <p
              className="mb-5"
              style={{
                fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.28)",
              }}
            >
              Responsible Gambling
            </p>
            <p style={{ fontSize: "0.8rem", lineHeight: 1.7, color: "rgba(255,255,255,0.42)" }}>
              Gambling should be entertainment, not income. Set deposit limits, use
              session reminders, and use GAMSTOP to self-exclude from all UKGC
              operators in one step.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <div
                className="flex items-center justify-center w-10 h-10 shrink-0"
                style={{ border: "2px solid rgba(201,146,42,0.50)" }}
              >
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                    fontWeight: 900,
                    fontSize: "0.8rem",
                    color: "#C9922A",
                  }}
                >
                  18+
                </span>
              </div>
              <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.36)" }}>
                Gambling is for adults only.
                <br />Please gamble responsibly.
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer box */}
        <div
          className="mt-10 p-5"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid hsl(216,28%,19%)",
            borderLeft: "3px solid #C9922A",
          }}
        >
          <p style={{ fontSize: "0.75rem", lineHeight: 1.75, color: "rgba(255,255,255,0.40)" }}>
            <strong style={{ color: "rgba(255,255,255,0.72)", fontWeight: 700 }}>
              Affiliate Disclosure &amp; 18+ Warning:
            </strong>{" "}
            trustedukbettingsites.com earns commission through affiliate links. This does not affect
            our independent editorial rankings. All listed operators hold valid UKGC licences.
            Offers are subject to change without notice; operator T&amp;Cs apply at all times.
            Gambling involves financial risk — only wager what you can afford to lose.{" "}
            <strong style={{ color: "rgba(255,255,255,0.72)", fontWeight: 700 }}>18+ only.</strong>
          </p>
        </div>

        {/* Copyright bar */}
        <div
          className="mt-6 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: "1px solid hsl(216,28%,19%)" }}
        >
          <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.25)" }}>
            &copy; {new Date().getFullYear()} trustedukbettingsites.com &middot; United Kingdom
          </span>
          <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.22)" }}>
            For entertainment purposes only &middot; 18+
          </span>
        </div>
      </div>
    </footer>
  )
}

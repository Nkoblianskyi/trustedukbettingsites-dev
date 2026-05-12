"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 1000)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => { localStorage.setItem("cookieConsent", "accepted"); setVisible(false) }
  const decline = () => { localStorage.setItem("cookieConsent", "declined"); setVisible(false) }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      {/* Gold top line */}
      <div style={{ height: 3, background: "linear-gradient(90deg, #C9922A, #E8B84B, #C9922A)" }} />

      <div
        className="px-4 py-4 md:px-0"
        style={{ background: "hsl(216,58%,7%)", borderTop: "1px solid hsl(216,28%,19%)" }}
      >
        <div className="site-wrap">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1 sm:mb-0">
                <p
                  style={{
                    fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#fff",
                  }}
                >
                  Cookie Preferences
                </p>
                <button type="button" onClick={decline} aria-label="Dismiss" className="sm:hidden p-1 transition-opacity hover:opacity-100 opacity-50" style={{ color: "rgba(255,255,255,0.60)" }}>
                  <X size={14} />
                </button>
              </div>
              <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.48)", lineHeight: 1.55 }}>
                <span style={{ color: "rgba(255,255,255,0.78)", fontWeight: 600 }}>trustedukbettingsites.com</span>{" "}
                uses essential and optional analytics cookies to improve your experience.{" "}
                <Link
                  href="/cookie-policy"
                  style={{ color: "#C9922A", textDecoration: "underline", textUnderlineOffset: "2px" }}
                >
                  Cookie Policy
                </Link>
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={decline}
                className="px-4 py-2 text-[0.75rem] font-semibold transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.65)", background: "transparent" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)" }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}
              >
                Essential only
              </button>
              <button
                type="button"
                onClick={accept}
                className="px-4 py-2 text-[0.75rem] font-bold transition-all hover:brightness-110"
                style={{ background: "#C9922A", color: "hsl(216,58%,7%)" }}
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={decline}
                aria-label="Dismiss"
                className="hidden sm:flex p-1 transition-opacity hover:opacity-100 opacity-40"
                style={{ color: "rgba(255,255,255,0.60)" }}
              >
                <X size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

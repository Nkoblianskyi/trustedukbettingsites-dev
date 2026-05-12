"use client"

import { X, Megaphone, Check } from "lucide-react"

interface AdvertiserDisclosureModalProps {
  isOpen: boolean
  onClose: () => void
}

const CRITERIA = [
  "UKGC licence and regulatory compliance",
  "Odds competitiveness and market depth",
  "Promotional clarity and fairness of T&Cs",
  "Payout speed and withdrawal options",
  "App stability and customer support quality",
]

export function AdvertiserDisclosureModal({ isOpen, onClose }: AdvertiserDisclosureModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ background: "rgba(6,12,28,0.82)", backdropFilter: "blur(8px)" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="adv-title"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-[480px] flex flex-col overflow-hidden"
        style={{
          background: "hsl(216,58%,8%)",
          border: "1px solid hsl(216,28%,22%)",
          borderTop: "1px solid rgba(201,146,42,0.35)",
          maxHeight: "90vh",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold bar */}
        <div style={{ height: 3, background: "linear-gradient(90deg, #C9922A, #E8B84B, #C9922A)", flexShrink: 0 }} />

        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 shrink-0"
          style={{ background: "hsl(216,58%,6%)", borderBottom: "1px solid hsl(216,28%,19%)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center w-9 h-9 shrink-0"
              style={{ background: "rgba(201,146,42,0.12)", border: "1px solid rgba(201,146,42,0.35)" }}
            >
              <Megaphone size={16} style={{ color: "#C9922A" }} strokeWidth={2} />
            </div>
            <div>
              <h2
                id="adv-title"
                style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontWeight: 900, fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.02em", color: "#fff", lineHeight: 1.1 }}
              >
                Advertiser Disclosure
              </h2>
              <p
                style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontWeight: 700, fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#C9922A", marginTop: 2 }}
              >
                How we are funded
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex w-8 h-8 items-center justify-center transition-colors"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.50)" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#C9922A" }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.50)" }}
            aria-label="Close"
          >
            <X size={14} strokeWidth={2.5} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-4">

          <div
            className="p-4"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid hsl(216,28%,22%)" }}
          >
            <h3 style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.10em", color: "#fff", marginBottom: 8 }}>
              Commercial links
            </h3>
            <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "rgba(255,255,255,0.50)" }}>
              trustedukbettingsites.com may receive commission when you use outbound links to bookmakers.
              That income supports the hosting and independent editorial work of this site.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.10em", color: "#fff", marginBottom: 10 }}>
              Editorial independence
            </h3>
            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.50)", marginBottom: 10 }}>
              Commission arrangements do not buy placement. We order and score brands exclusively by:
            </p>
            <div className="flex flex-col gap-2">
              {CRITERIA.map((c) => (
                <div key={c} className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center w-4 h-4 shrink-0" style={{ background: "rgba(201,146,42,0.12)", border: "1px solid rgba(201,146,42,0.35)" }}>
                    <Check size={9} style={{ color: "#C9922A" }} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: "0.80rem", color: "rgba(255,255,255,0.55)" }}>{c}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="p-4"
            style={{ background: "rgba(201,146,42,0.06)", border: "1px solid rgba(201,146,42,0.22)", borderLeft: "3px solid rgba(201,146,42,0.60)" }}
          >
            <h3 style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.10em", color: "#C9922A", marginBottom: 6 }}>
              Your check
            </h3>
            <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "rgba(255,255,255,0.50)" }}>
              Always confirm every offer on the operator&apos;s own site before depositing.
              Only stake what you can afford to lose.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div
          className="shrink-0 px-5 py-3 text-center"
          style={{ background: "hsl(216,58%,6%)", borderTop: "1px solid hsl(216,28%,19%)" }}
        >
          <span style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.30)" }}>
            18+ &middot; UK customers only &middot; Play responsibly &middot; BeGambleAware.org
          </span>
        </div>
      </div>
    </div>
  )
}

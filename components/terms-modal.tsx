"use client"

import { X, ShieldAlert } from "lucide-react"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ background: "rgba(6,12,28,0.82)", backdropFilter: "blur(8px)" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-title"
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
              <ShieldAlert size={16} style={{ color: "#C9922A" }} strokeWidth={2} />
            </div>
            <div>
              <h2
                id="terms-title"
                style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontWeight: 900, fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.02em", color: "#fff", lineHeight: 1.1 }}
              >
                Site Rules &amp; 18+
              </h2>
              <p style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontWeight: 700, fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#C9922A", marginTop: 2 }}>
                Terms of use
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
          <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "rgba(255,255,255,0.50)" }}>
            Using <strong style={{ color: "rgba(255,255,255,0.80)", fontWeight: 600 }}>trustedukbettingsites.com</strong>{" "}
            means you accept these rules. They apply on phone, tablet, and desktop.
          </p>

          <div
            className="p-4"
            style={{ background: "rgba(201,146,42,0.06)", border: "1px solid rgba(201,146,42,0.22)", borderLeft: "3px solid #C9922A" }}
          >
            <p style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.10em", color: "#C9922A", marginBottom: 6 }}>
              Age restriction
            </p>
            <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "rgba(255,255,255,0.55)" }}>
              You must be <strong style={{ color: "#fff" }}>18 or older</strong>. This site discusses gambling
              — minors should leave immediately.
            </p>
          </div>

          <div className="p-4" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid hsl(216,28%,22%)" }}>
            <p style={{ fontFamily: "'Barlow Condensed', system-ui, sans-serif", fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.10em", color: "#fff", marginBottom: 8 }}>
              Responsible play
            </p>
            <ul className="flex flex-col gap-2" style={{ listStyle: "none", padding: 0 }}>
              {[
                "Set time and money limits before you bet",
                "Never chase losses — walk away and take a break",
                "Ask for help early — GambleAware: 0808 8020 133",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: "#C9922A", fontWeight: 700, marginTop: 2, flexShrink: 0 }}>·</span>
                  <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p style={{ fontSize: "0.78rem", lineHeight: 1.65, color: "rgba(255,255,255,0.38)" }}>
            We cannot guarantee offers remain accurate — operators change terms at any time.
            External sites have their own policies; we are not responsible for third-party content.
            No warranty is provided. Do not rely on this site as legal or financial advice.
          </p>
        </div>

        {/* Footer */}
        <div
          className="shrink-0 px-5 py-3 text-center"
          style={{ background: "hsl(216,58%,6%)", borderTop: "1px solid hsl(216,28%,19%)" }}
        >
          <span style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.30)" }}>
            18+ &middot; T&amp;Cs apply &middot; BeGambleAware.org &middot; Play responsibly
          </span>
        </div>
      </div>
    </div>
  )
}

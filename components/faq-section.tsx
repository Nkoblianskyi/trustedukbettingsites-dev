"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const FAQS = [
  {
    q: "Are all the betting sites listed UKGC-licensed?",
    a: "Yes. Every bookmaker featured on trustedukbettingsites.com holds a valid licence issued by the UK Gambling Commission. We verify licence status before publication and remove any operator whose licence lapses or is revoked.",
  },
  {
    q: "How often are rankings and bonuses updated?",
    a: "Our editorial team reviews rankings on a quarterly basis and checks live bonus data monthly. Welcome offers change without notice, so always confirm the current terms directly on the operator's site before depositing.",
  },
  {
    q: "Does trustedukbettingsites.com accept payment from operators?",
    a: "We earn commission through standard affiliate referral links, which is disclosed on every page. Commercial arrangements do not influence our editorial scores or the order in which sites appear. Our methodology is applied uniformly to every operator we review.",
  },
  {
    q: "What is the minimum age to use these betting sites?",
    a: "You must be 18 or over to open an account with any UK-licensed bookmaker. Age verification is mandatory under UKGC regulations. All operators listed here use identity-verification tools at registration and before processing withdrawals.",
  },
  {
    q: "How do welcome bonus wagering requirements work?",
    a: "Most free-bet and deposit-match bonuses carry wagering or turnover requirements, meaning you must bet the bonus amount (or a multiple of it) before withdrawing. Requirements vary widely: read the operator's full T&Cs before opting in. Minimum odds restrictions and time limits also apply on most offers.",
  },
  {
    q: "What self-exclusion tools are available?",
    a: "GAMSTOP (gamstop.co.uk) allows you to self-exclude from all UKGC-licensed sites with a single registration for a minimum of six months. Each operator also provides deposit limits, loss limits, session reminders, and cooling-off periods, all of which are free and mandatory under UK law.",
  },
  {
    q: "Can I bet from outside the United Kingdom?",
    a: "UKGC-licensed sites are authorised to accept customers resident in Great Britain. If you are accessing this site from outside the UK, you are responsible for ensuring online betting is legal in your jurisdiction.",
  },
  {
    q: "How do I report a problem with a listed operator?",
    a: "If you have an unresolved dispute with a UKGC-licensed bookmaker, you can escalate to an Alternative Dispute Resolution service (typically IBAS or eCOGRA). Contact the operator's complaints team first; if that fails, the UKGC can be notified at gamblingcommission.gov.uk.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="mt-16" aria-label="Frequently asked questions">
      <div className="mb-8">
        <div className="gold-rule mb-2" />
        <span className="eyebrow block mb-2">Need to Know</span>
        <h2
          style={{
            fontFamily: "'Barlow Condensed', system-ui, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            color: "#ffffff",
            lineHeight: 1.05,
          }}
        >
          Frequently Asked Questions
        </h2>
      </div>

      <div>
        {FAQS.map((faq, i) => {
          const isOpen = open === i
          return (
            <div
              key={i}
              style={{
                background: "transparent",
                borderBottom: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left"
                style={{
                  padding: "1rem 0",
                  background: "transparent",
                  cursor: "pointer",
                  border: "none",
                  outline: "none",
                }}
                aria-expanded={isOpen}
              >
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    letterSpacing: "0.02em",
                    color: "#ffffff",
                    lineHeight: 1.3,
                  }}
                >
                  {faq.q}
                </span>
                <span
                  className="shrink-0 flex items-center justify-center"
                  style={{
                    width: 28,
                    height: 28,
                    border: `1px solid ${isOpen ? "#C9922A" : "rgba(255,255,255,0.25)"}`,
                    color: isOpen ? "#C9922A" : "rgba(255,255,255,0.70)",
                    background: "transparent",
                  }}
                  aria-hidden
                >
                  {isOpen
                    ? <Minus size={13} strokeWidth={2.5} />
                    : <Plus size={13} strokeWidth={2.5} />
                  }
                </span>
              </button>

              {isOpen && (
                <p
                  style={{
                    paddingBottom: "1.1rem",
                    fontSize: "0.88rem",
                    lineHeight: 1.75,
                    color: "rgba(255,255,255,0.88)",
                    background: "transparent",
                  }}
                >
                  {faq.a}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

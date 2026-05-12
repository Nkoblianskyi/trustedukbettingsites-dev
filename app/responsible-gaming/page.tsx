import type { Metadata } from "next"
import { PolicyLayout, PolicySection } from "@/components/policy-layout"
import { ShieldCheck, Clock, Ban, Globe, Phone, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Safer Gambling — trustedukbettingsites.com",
  description:
    "Guidance on safer gambling practices, warning signs of gambling harm, and free UK support organisations.",
}

const CARD_STYLE = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid hsl(216,28%,22%)",
  padding: "1rem",
}
const TEXT_BODY = { fontSize: "0.8rem", lineHeight: 1.7, color: "rgba(255,255,255,0.50)" }
const TEXT_LABEL = { color: "rgba(255,255,255,0.80)", fontWeight: 600 }

export default function ResponsibleGamingPage() {
  return (
    <PolicyLayout title="Safer Gambling">

      {/* Emergency strip */}
      <div
        style={{
          padding: "1rem",
          display: "flex",
          gap: "0.75rem",
          background: "rgba(220,38,38,0.08)",
          border: "1px solid rgba(220,38,38,0.28)",
          borderLeft: "4px solid #dc2626",
          marginBottom: "1.5rem",
        }}
      >
        <AlertTriangle style={{ width: 18, height: 18, flexShrink: 0, marginTop: 2, color: "#f87171" }} />
        <div>
          <p style={{ fontWeight: 700, marginBottom: 4, fontSize: "0.88rem", color: "#fca5a5" }}>Need help right now?</p>
          <p style={{ fontSize: "0.82rem", lineHeight: 1.6, color: "rgba(252,165,165,0.80)" }}>
            Call the <strong style={{ color: "#fca5a5" }}>National Gambling Helpline: 0808 8020 133</strong> — free, confidential,
            and available 24 hours a day, every day of the year.
          </p>
        </div>
      </div>

      <PolicySection title="Understanding Safer Gambling">
        <p>
          Safer gambling means engaging with betting as a form of paid entertainment — with a pre-set budget,
          a fixed time limit, and a clear acceptance that losses are the cost of that entertainment. The
          mathematical edge in all gambling products sits with the operator over the long run. Short-term wins
          do not change that. Planning for that reality before you start is the single most effective step you
          can take.
        </p>
        <p>
          trustedukbettingsites.com lists only UKGC-licensed operators who are legally required to provide
          comprehensive safer-gambling tools. We encourage every visitor to use those tools before they are
          needed, not after.
        </p>
      </PolicySection>

      <PolicySection title="Practical Steps Before You Bet">
        <div className="grid sm:grid-cols-2 gap-3 mt-1">
          {[
            {
              icon: <Clock style={{ width: 16, height: 16, color: "#60a5fa" }} />,
              title: "Fix a time limit",
              body: "Decide how long you will spend before you open any betting app. Set a session-time reminder inside the bookmaker account settings so you receive an alert when that limit is reached.",
            },
            {
              icon: <ShieldCheck style={{ width: 16, height: 16, color: "#4ade80" }} />,
              title: "Set a deposit cap",
              body: "All UKGC-licensed operators must offer daily, weekly, and monthly deposit limits. Set them at account creation — reductions take immediate effect while increases require a 24-hour cooling period.",
            },
            {
              icon: <Ban style={{ width: 16, height: 16, color: "#f87171" }} />,
              title: "Never chase losses",
              body: "Increasing stakes to recover a deficit is the most common route to serious harm. A losing session is the cost of entertainment — nothing more. Close the account for the day and walk away.",
            },
            {
              icon: <Globe style={{ width: 16, height: 16, color: "#C9922A" }} />,
              title: "Only use surplus money",
              body: "Gambling with money earmarked for rent, bills, food, or debt repayments is a significant warning sign. Never borrow to fund betting activity under any circumstances.",
            },
          ].map((item) => (
            <div key={item.title} style={CARD_STYLE}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                {item.icon}
                <h3 style={{ fontWeight: 700, fontSize: "0.82rem", color: "rgba(255,255,255,0.88)" }}>{item.title}</h3>
              </div>
              <p style={TEXT_BODY}>{item.body}</p>
            </div>
          ))}
        </div>
      </PolicySection>

      <PolicySection title="Recognising Problem Gambling">
        <p style={{ marginBottom: "0.5rem" }}>The following behaviours may indicate that gambling is becoming harmful:</p>
        <ul style={{ paddingLeft: "1.25rem", listStyle: "disc" }}>
          {[
            "Spending more time or money on gambling than originally intended",
            "Feeling irritable, anxious, or low in mood when unable to gamble",
            "Concealing betting activity from family members, partners, or employers",
            "Borrowing money, selling possessions, or using savings to fund bets",
            "Neglecting work, family, or personal responsibilities because of gambling",
            "Repeatedly trying to stop or reduce gambling without success",
            "Using gambling as a way to escape stress, depression, or boredom",
            "Needing to increase stake sizes to experience the same level of excitement",
          ].map((item) => (
            <li key={item} style={{ fontSize: "0.82rem", lineHeight: 1.75, color: "rgba(255,255,255,0.52)" }}>{item}</li>
          ))}
        </ul>
        <p style={{ fontSize: "0.75rem", marginTop: "0.75rem", padding: "0.75rem", borderLeft: "3px solid #C9922A", background: "rgba(201,146,42,0.07)", color: "rgba(255,255,255,0.48)" }}>
          If you recognise two or more of these patterns in yourself or someone close to you, please speak with a
          professional support service as soon as possible. Early intervention leads to significantly better outcomes.
        </p>
      </PolicySection>

      <PolicySection title="Tools Built Into Licensed UK Sites">
        <p style={{ marginBottom: "0.5rem" }}>Every UKGC-licensed bookmaker is required to offer the following tools. Use them proactively:</p>
        <ul style={{ paddingLeft: "1.25rem", listStyle: "disc" }}>
          {[
            ["Deposit limits", "caps on daily, weekly, or monthly top-ups"],
            ["Loss limits", "caps on the amount you can lose in a set period"],
            ["Session reminders", "automatic alerts after a set number of minutes logged in"],
            ["Reality checks", "periodic on-screen summaries of net win or loss during a session"],
            ["Cooling-off periods", "short self-imposed breaks of 1 to 42 days"],
            ["Self-exclusion", "account closures from 6 months to permanent"],
          ].map(([bold, rest]) => (
            <li key={bold} style={{ fontSize: "0.82rem", lineHeight: 1.75, color: "rgba(255,255,255,0.52)" }}>
              <strong style={TEXT_LABEL}>{bold}</strong> — {rest}
            </li>
          ))}
          <li style={{ fontSize: "0.82rem", lineHeight: 1.75, color: "rgba(255,255,255,0.52)" }}>
            <strong style={TEXT_LABEL}>GamStop</strong> — the national multi-operator exclusion register at{" "}
            <a href="https://www.gamstop.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: "#C9922A", textDecoration: "underline" }}>
              gamstop.co.uk
            </a>
            , blocking access across all UKGC licensees simultaneously
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="Free Support Organisations">
        <div className="grid sm:grid-cols-2 gap-3 mt-1">
          {[
            {
              icon: <Globe style={{ width: 15, height: 15, color: "#60a5fa" }} />,
              name: "GambleAware",
              desc: "The UK leading safer gambling charity — information, self-assessment tools, and referrals to specialist treatment services.",
              web: "www.gambleaware.org",
              phone: "0808 8020 133",
            },
            {
              icon: <Phone style={{ width: 15, height: 15, color: "#4ade80" }} />,
              name: "GamCare",
              desc: "Free counselling, support forums, and a national helpline for anyone affected by gambling harm, including family members.",
              web: "www.gamcare.org.uk",
              phone: "0808 8020 133",
            },
            {
              icon: <ShieldCheck style={{ width: 15, height: 15, color: "#a78bfa" }} />,
              name: "Gamblers Anonymous",
              desc: "Peer-led fellowship meetings across the UK. No fees, no sign-up — just a shared commitment to recovery.",
              web: "www.gamblersanonymous.org.uk",
              phone: "020 7384 3040",
            },
            {
              icon: <Clock style={{ width: 15, height: 15, color: "#fb923c" }} />,
              name: "Gordon Moody",
              desc: "Specialist residential treatment and online therapy programmes for people experiencing severe gambling addiction.",
              web: "www.gordonmoody.org.uk",
              phone: "01384 241 292",
            },
          ].map((org) => (
            <div key={org.name} style={CARD_STYLE}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                {org.icon}
                <h3 style={{ fontWeight: 700, fontSize: "0.82rem", color: "rgba(255,255,255,0.88)" }}>{org.name}</h3>
              </div>
              <p style={{ ...TEXT_BODY, marginBottom: "0.5rem" }}>{org.desc}</p>
              <p style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.42)" }}>
                <strong style={{ color: "rgba(255,255,255,0.65)" }}>Web:</strong> {org.web}
              </p>
              <p style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.42)" }}>
                <strong style={{ color: "rgba(255,255,255,0.65)" }}>Phone:</strong> {org.phone}
              </p>
            </div>
          ))}
        </div>
      </PolicySection>

      <PolicySection title="If Someone You Care About Has a Problem">
        <p>
          Gambling harm rarely affects just one person. If you are concerned about a friend or family member, do
          not offer money to cover their debts — it typically enables continued gambling. Encourage them to contact
          GamCare, which provides dedicated support for affected families as well as the person gambling.
        </p>
        <p style={{ fontSize: "0.75rem", marginTop: "0.75rem", padding: "0.75rem", borderLeft: "3px solid #C9922A", background: "rgba(201,146,42,0.07)", color: "rgba(255,255,255,0.48)" }}>
          Gambling disorder is a recognised health condition, not a sign of weakness or poor character. Millions of
          people in the UK have successfully reduced or stopped harmful gambling with the right support. The most
          important step is asking for help.
        </p>
      </PolicySection>

    </PolicyLayout>
  )
}

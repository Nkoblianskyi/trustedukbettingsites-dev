const SECTIONS = [
  {
    num: "01",
    title: "How we rank UK betting sites",
    body: "Our editorial team opens real accounts at every bookmaker we review, deposits real money, places bets across multiple markets, tests withdrawals end-to-end, and contacts customer support through every available channel. Rankings reflect genuine product quality and are not influenced by the size of a welcome bonus or the scale of an affiliate arrangement.",
  },
  {
    num: "02",
    title: "What our scores measure",
    body: "Each bookmaker is assessed across five pillars: odds competitiveness in mainstream and specialist markets; live-betting depth and streaming availability; mobile app stability and performance; the clarity and fairness of promotional terms; and KYC, withdrawal speed, and support responsiveness.",
  },
  {
    num: "03",
    title: "Choosing the right bookmaker for you",
    body: "The top-ranked site is not automatically the best choice for every bettor. If you follow Premier League football daily, in-play depth and an acca builder matter most. If horse racing is your focus, look for Best Odds Guaranteed coverage and early-morning price availability.",
  },
  {
    num: "04",
    title: "Welcome bonuses: what to verify",
    body: "Free-bet and deposit-match offers are promotional snapshots and change without notice. Key things to check: minimum qualifying bet and odds, the time window to use the credit, any maximum stake restriction, and whether the free-bet stake is returned on a winning outcome.",
  },
  {
    num: "05",
    title: "UKGC licensing and what it means",
    body: "Every operator listed here holds a valid licence from the UK Gambling Commission. The UKGC mandates segregated player funds, independent technical auditing, mandatory responsible-gambling tooling, and an accessible dispute resolution process.",
  },
  {
    num: "06",
    title: "Responsible gambling",
    body: "Establish a fixed stake budget before every session. Every UKGC-licensed site is legally required to provide deposit limits, session time reminders, reality checks, and self-exclusion tools at no cost. GAMSTOP self-exclusion covers all UKGC-licensed operators with a single registration.",
  },
]

export function InfoSections() {
  return (
    <section className="mt-16" aria-label="Editorial information">
      <div className="mb-8">
        <div className="gold-rule mb-2" />
        <span className="eyebrow block mb-2">Editorial Guide</span>
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
          How We Review Bookmakers
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        {SECTIONS.map((s, i) => (
          <div
            key={s.num}
            className="flex flex-col gap-3 p-6"
            style={{
              background: "transparent",
              borderBottom: "1px solid rgba(255,255,255,0.12)",
              borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.12)" : "none",
            }}
          >
            <span
              aria-hidden
              style={{
                fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                fontWeight: 900,
                fontStyle: "italic",
                fontSize: "2.6rem",
                color: "rgba(201,146,42,0.45)",
                lineHeight: 1,
                letterSpacing: "-0.04em",
              }}
            >
              {s.num}
            </span>
            <h3
              style={{
                fontFamily: "'Barlow Condensed', system-ui, sans-serif",
                fontWeight: 800,
                fontSize: "1.05rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#ffffff",
                lineHeight: 1.2,
              }}
            >
              {s.title}
            </h3>
            <p
              style={{
                fontSize: "0.88rem",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.88)",
              }}
            >
              {s.body}
            </p>
          </div>
        ))}
      </div>

      <div
        className="mt-6 px-5 py-3"
        style={{
          background: "transparent",
          borderLeft: "3px solid rgba(201,146,42,0.55)",
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.6,
          }}
        >
          Content &copy; trustedukbettingsites.com &middot; All promotions are for adults aged 18+ in Great Britain only.
          Identity verification applies at point of registration. Offers subject to change; see each operator for full T&amp;Cs.
        </p>
      </div>
    </section>
  )
}

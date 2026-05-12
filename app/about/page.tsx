import type { Metadata } from "next"
import { PolicyLayout, PolicySection } from "@/components/policy-layout"

export const metadata: Metadata = {
  title: "About Us — trustedukbettingsites.com",
  description:
    "Learn who runs trustedukbettingsites.com, how we rank UK bookmakers, and what editorial standards we apply to every review.",
}

export default function AboutPage() {
  return (
    <PolicyLayout title="About trustedukbettingsites.com">
      <PolicySection title="Publisher Information">
        <p>
          trustedukbettingsites.com is an independent editorial comparison website. We publish
          unbiased comparisons and rankings of UK-licensed bookmakers. We do not accept bets, process
          payments, or hold funds on behalf of any person.
        </p>
      </PolicySection>

      <PolicySection title="Our Purpose">
        <p>
          The UK sports betting market lists hundreds of operators, each competing on headline welcome
          offers that can obscure meaningful differences in product quality. trustedukbettingsites.com
          exists to cut through that noise. We apply a consistent scoring framework to every major
          UKGC-licensed bookmaker and publish a single ranked table so you can evaluate the whole market
          in one place — without needing to open a dozen tabs.
        </p>
      </PolicySection>

      <PolicySection title="How We Score Bookmakers">
        <p>Every bookmaker on our list is scored across five weighted categories:</p>
        <ul className="space-y-2 pl-4 list-disc mt-2">
          <li>
            <strong>Odds quality:</strong> We record pre-match and in-play prices on high-volume markets
            and compare against a market composite. Consistent overrounds above the market average reduce
            a site&apos;s score.
          </li>
          <li>
            <strong>Live betting and streaming:</strong> Depth of in-play markets, speed of price updates,
            and access to live video or data streams.
          </li>
          <li>
            <strong>Platform experience:</strong> Desktop and mobile interface usability, bet builder
            availability, and cash-out reliability.
          </li>
          <li>
            <strong>Payments:</strong> Range of deposit methods, minimum withdrawal thresholds, and
            verified processing times via our own accounts.
          </li>
          <li>
            <strong>Responsible gambling tools:</strong> Accessibility of deposit limits, loss limits,
            reality checks, and self-exclusion options.
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="Our Review Methodology">
        <p>
          Our editors register real accounts under standard KYC processes, complete deposits using common
          UK payment methods, and withdraw funds to verify timelines first-hand. We test bet builders and
          acca tools on both desktop and mobile, and we cross-reference promotional terms against the ASA
          and UKGC advertising guidelines on a rolling basis. No operator can pay to improve its ranking
          position.
        </p>
      </PolicySection>

      <PolicySection title="Commercial Disclosures">
        <p>
          Outbound links to bookmakers may carry affiliate tracking identifiers. When a visitor registers
          via one of our links and places qualifying bets, we may earn a commission from the operator.
          This revenue funds our editorial operation. Full disclosure is available via the
          &ldquo;Advertiser Disclosure&rdquo; button on the homepage. Affiliate relationships never
          influence ranking order — if a product deteriorates, its score drops regardless of commercial
          ties.
        </p>
      </PolicySection>

      <PolicySection title="Responsibility Statement">
        <p>
          Gambling is entertainment with a real financial cost. We encourage every visitor to set strict
          time and money limits before placing a single bet. If gambling is causing distress — for you or
          someone you know — please reach out to the free support organisations listed in our footer.
          They are available around the clock and all calls are confidential.
        </p>
        <p className="text-[12px] mt-3 px-3 py-3 border-l-4" style={{ borderLeftColor: "#C9922A", background: "rgba(201,146,42,0.06)", color: "rgba(255,255,255,0.50)" }}>
          18+ only. trustedukbettingsites.com does not accept wagers. All betting activity takes place on
          fully licensed third-party platforms subject to their own terms and conditions.
        </p>
      </PolicySection>
    </PolicyLayout>
  )
}

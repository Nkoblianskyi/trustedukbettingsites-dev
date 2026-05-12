import type { Metadata } from "next"
import Link from "next/link"
import { PolicyLayout, PolicySection } from "@/components/policy-layout"

export const metadata: Metadata = {
  title: "Terms of Use — trustedukbettingsites.com",
  description:
    "The terms and conditions governing your use of trustedukbettingsites.com — an independent UK bookmaker comparison site.",
}

export default function TermsPage() {
  return (
    <PolicyLayout title="Website Terms of Use">

      <PolicySection title="Acceptance of Terms">
        <p>
          These terms govern your use of trustedukbettingsites.com (the &ldquo;Site&rdquo;). By browsing or using any part of
          the Site, you confirm that you have read, understood, and agreed to these terms in full. If you do not
          accept any provision, please stop using the Site immediately.
        </p>
      </PolicySection>

      <PolicySection title="What This Site Is">
        <p>
          trustedukbettingsites.com is an independent editorial comparison service. We research, test, and rank
          third-party bookmaking platforms on behalf of adult consumers in the United Kingdom. We are not a
          bookmaker, a betting exchange, or a gambling operator of any kind. We do not accept, process, or settle
          bets. We do not hold player deposits or funds.
        </p>
      </PolicySection>

      <PolicySection title="Age Requirement">
        <p>
          The Site is strictly intended for adults aged 18 years or over who are physically located in Great Britain
          at the time of use. By accessing any page you confirm that you meet this requirement. Gambling with
          operators linked from this Site is illegal under UK law for persons under the age of 18. If you have
          reason to believe a minor is using this Site, please notify us immediately at{" "}
          <a href="mailto:info@trustedukbettingsites.com" className="underline underline-offset-2 font-medium" style={{ color: "#C9922A" }}>
            info@trustedukbettingsites.com
          </a>
          .
        </p>
      </PolicySection>

      <PolicySection title="Accuracy and Currency of Information">
        <p>
          Welcome offers, odds information, and product descriptions reflect the state of each bookmaker&apos;s
          product at the time of writing. Promotional terms change without notice and may differ materially from
          those described on this Site. You must verify all current terms, wagering requirements, and eligibility
          conditions directly on each operator&apos;s official website before registering, depositing, or placing
          any bet. We accept no liability for decisions made on the basis of outdated content.
        </p>
      </PolicySection>

      <PolicySection title="External Links and Affiliate Relationships">
        <p>
          Links from this Site take you to third-party platforms governed by their own terms, privacy policies, and
          licensing conditions. We are not responsible for the practices, content, or conduct of any linked operator.
          Some outbound links carry affiliate tracking identifiers — when a qualifying account is opened and bets
          placed through such a link, we may earn a commission. Full details are available in the Advertiser
          Disclosure on the homepage.
        </p>
      </PolicySection>

      <PolicySection title="Responsible Gambling">
        <p>
          Sports betting carries inherent financial risk. Never bet more than you can comfortably afford to lose.
          Use the deposit limits, loss limits, and self-exclusion tools that all UKGC-licensed operators are
          required to provide. The National Gambling Helpline is free and available around the clock on{" "}
          <strong>0808 8020 133</strong>. For comprehensive guidance, see our{" "}
          <Link href="/responsible-gaming" className="underline underline-offset-2 font-medium" style={{ color: "#C9922A" }}>
            Safer Gambling
          </Link>{" "}
          page.
        </p>
      </PolicySection>

      <PolicySection title="Intellectual Property">
        <p>
          Original editorial content, layout design, and ranking methodologies published on
          trustedukbettingsites.com are the intellectual property of this website. Bookmaker names, logos, and
          brand assets remain the property of their respective owners and are reproduced here solely for the
          purpose of nominative identification in editorial comparisons. Reproduction or redistribution of our
          original content without written permission is prohibited.
        </p>
      </PolicySection>

      <PolicySection title="Limitation of Liability">
        <p>
          To the fullest extent permitted by the laws of England and Wales, trustedukbettingsites.com excludes all
          liability for any loss, damage, or cost arising directly or indirectly from use of this Site, including
          but not limited to financial losses resulting from betting or wagering decisions. Nothing in these terms
          affects any statutory rights you hold as a consumer under applicable UK law.
        </p>
      </PolicySection>

      <PolicySection title="Data and Privacy">
        <p>
          Information about how we collect and use your personal data is set out in our{" "}
          <Link href="/privacy-policy" className="underline underline-offset-2 font-medium" style={{ color: "#C9922A" }}>
            Privacy Policy
          </Link>
          . For cookie-related matters, see our{" "}
          <Link href="/cookie-policy" className="underline underline-offset-2 font-medium" style={{ color: "#C9922A" }}>
            Cookie Policy
          </Link>
          .
        </p>
      </PolicySection>

      <PolicySection title="Amendments">
        <p>
          We may update these terms at any time by publishing a revised version on this page. The effective date
          shown in the page header reflects the most recent revision. Continuing to use the Site after a change
          constitutes your acceptance of the updated terms.
        </p>
      </PolicySection>

      <PolicySection title="Governing Law">
        <p>
          These terms are governed by the laws of England and Wales. Any dispute arising from use of this Site
          shall be subject to the exclusive jurisdiction of the courts of England and Wales, unless mandatory
          consumer-protection laws in your country of residence provide otherwise.
        </p>
      </PolicySection>

      <PolicySection title="Contact">
        <p>
          For any questions relating to these terms:{" "}
          <a href="mailto:info@trustedukbettingsites.com" className="underline underline-offset-2 font-medium" style={{ color: "#C9922A" }}>
            info@trustedukbettingsites.com
          </a>
        </p>
      </PolicySection>

    </PolicyLayout>
  )
}

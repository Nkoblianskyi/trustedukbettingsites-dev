import type { Metadata } from "next"
import Link from "next/link"
import { PolicyLayout, PolicySection } from "@/components/policy-layout"

export const metadata: Metadata = {
  title: "Privacy Policy — trustedukbettingsites.com",
  description:
    "How trustedukbettingsites.com collects, processes, and protects personal data under UK GDPR.",
}

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy">

      <PolicySection title="Data Controller">
        <p>
          trustedukbettingsites.com is an independent editorial comparison site operated in the United Kingdom.
          We do not operate a sportsbook, accept wagers, or process financial transactions on behalf of users.
          The volume and sensitivity of personal data we process is accordingly limited.
        </p>
      </PolicySection>

      <PolicySection title="Personal Data We May Process">
        <ul className="space-y-2 pl-4 list-disc">
          <li>
            <strong>Server and access logs:</strong> Your IP address, browser type and version, approximate
            geographic region derived from IP, the page requested, and a timestamp. Generated automatically by
            our hosting infrastructure for security and performance monitoring.
          </li>
          <li>
            <strong>Analytics data (consent-dependent):</strong> Pages visited, scroll depth, time on page, and
            navigation paths — collected in anonymised, aggregated form only when you accept analytics cookies at
            the consent banner. No individual profiles are built from this data.
          </li>
          <li>
            <strong>Email correspondence:</strong> If you contact us by email, we retain the message thread for as
            long as is necessary to resolve your enquiry. We do not add email addresses to marketing lists without
            explicit consent.
          </li>
          <li>
            <strong>Cookie consent preference:</strong> A record of your cookie consent decision is stored locally
            on your device. We do not transmit this to our servers.
          </li>
        </ul>
        <p className="mt-3 text-[12px] px-3 py-2 border-l-4" style={{ borderLeftColor: "#C9922A", background: "rgba(201,146,42,0.06)" }}>
          We do not hold betting history, payment card details, or any personal account information related to gambling
          activity. We never operate as a data broker or sell personal data.
        </p>
      </PolicySection>

      <PolicySection title="Legal Basis for Processing (UK GDPR)">
        <p>
          We rely on <strong>legitimate interests</strong> to operate and secure the site, maintain server logs,
          and protect against fraud and abuse. We rely on your <strong>consent</strong> for optional analytics
          cookies. Consent may be withdrawn at any time by clearing your cookie preferences, which causes the
          consent banner to reappear on your next visit.
        </p>
      </PolicySection>

      <PolicySection title="How We Share Data">
        <p>
          We do not sell personal data. Data may be processed by the following categories of sub-processor, each
          subject to a data-processing agreement:
        </p>
        <ul className="space-y-1.5 pl-4 list-disc mt-2">
          <li>Hosting and infrastructure providers who store server logs</li>
          <li>Analytics platforms that aggregate anonymised usage signals (consent-dependent)</li>
          <li>Affiliate networks that attribute referrals when you click a bookmaker link</li>
        </ul>
        <p className="mt-2">
          We will disclose data to competent supervisory or law-enforcement authorities where required by a lawful
          request and only to the extent required.
        </p>
      </PolicySection>

      <PolicySection title="Data Retention">
        <p>
          Server access logs are rotated typically on a 30-day cycle. Analytics data is retained in anonymous,
          aggregated form. Email correspondence is deleted once fully resolved unless a longer retention period
          is required by applicable law.
        </p>
      </PolicySection>

      <PolicySection title="Security Measures">
        <p>
          The site is served exclusively over HTTPS with HSTS enforced. Administrative access requires multi-factor
          authentication. We conduct periodic security reviews and apply dependency updates promptly. If you
          discover a suspected vulnerability, please report it to{" "}
          <a href="mailto:privacy@trustedukbettingsites.com" className="underline underline-offset-2 font-medium" style={{ color: "#C9922A" }}>
            privacy@trustedukbettingsites.com
          </a>{" "}
          before public disclosure so we can investigate and respond.
        </p>
      </PolicySection>

      <PolicySection title="Your Rights Under UK GDPR">
        <p>Subject to the exceptions permitted by law, you have the right to:</p>
        <ul className="space-y-1 pl-4 list-disc mt-2">
          <li>Access a copy of personal data we hold about you</li>
          <li>Correct inaccurate or incomplete data</li>
          <li>Request erasure (&ldquo;right to be forgotten&rdquo;) where no lawful basis for retention remains</li>
          <li>Restrict processing while a rectification or erasure request is resolved</li>
          <li>Receive a portable copy of data you have provided to us</li>
          <li>Object to processing carried out on legitimate-interests grounds</li>
        </ul>
        <p className="mt-2">
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:privacy@trustedukbettingsites.com" className="underline underline-offset-2 font-medium" style={{ color: "#C9922A" }}>
            privacy@trustedukbettingsites.com
          </a>
          . If you are unsatisfied with our response, you have the right to lodge a complaint with the{" "}
          <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 font-medium" style={{ color: "#C9922A" }}>
            Information Commissioner&apos;s Office (ICO)
          </a>
          .
        </p>
      </PolicySection>

      <PolicySection title="Children">
        <p>
          This site is intended exclusively for adults aged 18 or over in line with UK gambling regulations. We do
          not knowingly collect or process personal data from minors. If you believe a child has submitted data
          through this site, contact us immediately so we can delete it without delay.
        </p>
      </PolicySection>

      <PolicySection title="International Data Transfers">
        <p>
          Our hosting provider and some analytics sub-processors may operate infrastructure outside the United
          Kingdom. In such cases we rely on UK Standard Contractual Clauses or other transfer mechanisms approved
          by the ICO to ensure equivalent levels of data protection are maintained.
        </p>
      </PolicySection>

      <PolicySection title="Changes to This Policy">
        <p>
          We will publish a revised version of this policy whenever we make material changes to our data-processing
          practices. The effective date in the page header reflects the most recent update. Continued use of the
          site after a revision constitutes acceptance of the updated policy, unless fresh consent is required by
          applicable law.
        </p>
      </PolicySection>

      <PolicySection title="Contact">
        <p>
          Privacy and data-protection queries:{" "}
          <a href="mailto:privacy@trustedukbettingsites.com" className="underline underline-offset-2 font-medium" style={{ color: "#C9922A" }}>
            privacy@trustedukbettingsites.com
          </a>
          . For cookie-specific questions, see our{" "}
          <Link href="/cookie-policy" className="underline underline-offset-2 font-medium" style={{ color: "#C9922A" }}>
            Cookie Policy
          </Link>
          .
        </p>
      </PolicySection>

    </PolicyLayout>
  )
}

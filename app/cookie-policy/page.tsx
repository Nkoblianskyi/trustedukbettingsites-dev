import type { Metadata } from "next"
import Link from "next/link"
import { PolicyLayout, PolicySection } from "@/components/policy-layout"

export const metadata: Metadata = {
  title: "Cookie Policy — trustedukbettingsites.com",
  description:
    "How trustedukbettingsites.com uses cookies, what each category does, and how you can manage your preferences.",
}

export default function CookiePolicyPage() {
  return (
    <PolicyLayout title="Cookie Policy">

      <PolicySection title="What Are Cookies">
        <p>
          Cookies are small text files placed on your device when you visit trustedukbettingsites.com. They allow
          the site to remember information about your visit, improve your browsing experience, and help us understand
          how visitors interact with our content.
        </p>
        <p>
          We use cookies solely to operate and improve this website. We do not sell cookie data to third parties.
        </p>
      </PolicySection>

      <PolicySection title="Types of Cookies We Use">
        <ul className="space-y-3 pl-4 list-disc">
          <li>
            <strong>Strictly necessary:</strong> These cookies store your cookie-consent decision and maintain
            basic session continuity. Without them the site cannot function correctly. They cannot be deactivated
            via the consent banner.
          </li>
          <li>
            <strong>Analytics (opt-in):</strong> Set only when you accept analytics at the consent banner. They
            record anonymised page-view counts, scroll depth, and broad navigation patterns so we can improve the
            layout and content of trustedukbettingsites.com. No personally identifiable information is retained,
            stored, or sold.
          </li>
          <li>
            <strong>Functional:</strong> Remember user interface preferences such as dismissed modals or banners
            so they do not reappear unnecessarily within the same browser session.
          </li>
          <li>
            <strong>Third-party affiliate / referral:</strong> When you follow a link to a bookmaker, that
            operator&apos;s affiliate network may set tracking cookies under their own domain, governed by the
            operator&apos;s privacy policy. We have no control over third-party cookies.
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="Session Cookies vs Persistent Cookies">
        <p>
          Session cookies are temporary and deleted automatically when you close your browser. Persistent cookies
          have a defined expiry date and remain on your device until that date or until you delete them manually.
          We do not use persistent cookies to build behavioural profiles of individual visitors.
        </p>
      </PolicySection>

      <PolicySection title="How to Manage Cookies">
        <p>
          When you first visit this site you are presented with a cookie consent banner. You may accept all cookies
          or restrict to essential cookies only. You can also manage or delete cookies through your browser settings
          at any time:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Google Chrome — Settings &gt; Privacy and security &gt; Cookies and other site data</li>
          <li>Mozilla Firefox — Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
          <li>Apple Safari — Preferences &gt; Privacy &gt; Manage Website Data</li>
          <li>Microsoft Edge — Settings &gt; Cookies and site permissions</li>
        </ul>
        <p className="mt-2">Disabling cookies may affect certain functionality of this website.</p>
      </PolicySection>

      <PolicySection title="Cookie Retention">
        <p>
          Essential and preference cookies are retained for up to 12 months from your last visit. Analytics cookies
          are retained in aggregated, anonymised form for up to 26 months. You may clear cookies at any time through
          your browser settings, causing the consent banner to reappear on your next visit.
        </p>
      </PolicySection>

      <PolicySection title="Policy Revisions">
        <p>
          We will update this Cookie Policy whenever we introduce new cookies, change our analytics provider, or
          make other material changes. The effective date shown at the top of the page indicates the most recent
          revision. Continued use of trustedukbettingsites.com after an update constitutes acceptance of the
          revised policy.
        </p>
      </PolicySection>

      <PolicySection title="Contact">
        <p>
          For questions about this Cookie Policy, contact us at{" "}
          <a href="mailto:privacy@trustedukbettingsites.com" className="underline underline-offset-2 font-medium" style={{ color: "#C9922A" }}>
            privacy@trustedukbettingsites.com
          </a>
          . For broader data privacy matters, see our{" "}
          <Link href="/privacy-policy" className="underline underline-offset-2 font-medium" style={{ color: "#C9922A" }}>
            Privacy Policy
          </Link>
          .
        </p>
      </PolicySection>

    </PolicyLayout>
  )
}

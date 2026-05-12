"use client"

import { useState } from "react"
import { Modal } from "./modal"
import { CookieBanner } from "./cookie-banner"
import { InfoSections } from "./info-sections"
import { FaqSection } from "./faq-section"
import { AdvertiserDisclosureModal } from "./advertiser-disclosure-modal"
import { TermsModal } from "./terms-modal"
import { bettingSites } from "../data/mock-data"
import { HeroSection } from "./hero-section"
import { SitesList } from "./sites-list"

export default function IrishPage() {
  const [advertiserOpen, setAdvertiserOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)

  return (
    <>
      <HeroSection
        onAdvertiserModalOpen={() => setAdvertiserOpen(true)}
        onTermsModalOpen={() => setTermsOpen(true)}
      />

      <main style={{ background: "rgba(0,0,0,0.52)" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "2.5rem 1rem 4rem",
          }}
        >
          <SitesList />
          <InfoSections />
          <FaqSection />
        </div>
      </main>

      <Modal bettingSites={bettingSites} casinoSites={[]} />
      <CookieBanner />
      <AdvertiserDisclosureModal isOpen={advertiserOpen} onClose={() => setAdvertiserOpen(false)} />
      <TermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </>
  )
}

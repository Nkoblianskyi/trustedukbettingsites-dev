import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Barlow_Condensed } from "next/font/google"
import "./globals.css"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
})

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#0B1A35",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://trustedukbettingsites.com"),
  title: "Trusted UK Betting Sites — Expert Rankings 2026",
  description:
    "trustedukbettingsites.com ranks the top UK-licensed bookmakers: welcome bonuses, odds quality, live betting, apps and payment methods — independently reviewed and updated for 2026.",
  keywords: "UK betting sites, best bookmakers UK, UKGC licensed betting, trusted betting sites 2026",
  openGraph: {
    siteName: "Trusted UK Betting Sites",
    url: "https://trustedukbettingsites.com",
    title: "Trusted UK Betting Sites — Expert Rankings 2026",
    description:
      "Independent rankings of top UK-licensed bookmakers. Bonuses, odds, apps and withdrawals — compared by our editorial team.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trusted UK Betting Sites — Expert Rankings 2026",
    description: "Independent expert rankings of the top UK-licensed bookmakers.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${barlow.variable}`}>
      <body className="font-sans min-h-screen flex flex-col antialiased">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}

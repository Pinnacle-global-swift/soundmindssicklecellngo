import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BackToTop } from "@/components/back-to-top"
import { CookieConsent } from "@/components/cookie-consent"
import { ChatSupport } from "@/components/chat-support"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Soundminds Sickle Cell Foundation | Support & Education",
    template: "%s | Soundminds Sickle Cell Foundation",
  },
  description:
    "Join Soundminds Sickle Cell Foundation in our mission to support, educate, and empower individuals affected by Sickle Cell Disease. Find resources, treatment information, support networks, and ways to get involved in our community. Together, we can make a difference.",
  keywords: [
    "sickle cell disease",
    "sickle cell anemia",
    "SCD awareness",
    "blood disorder support",
    "genetic disease education",
    "hemoglobin disorders",
    "sickle cell treatments",
    "disease management",
    "medical research",
    "patient support",
    "community outreach",
    "healthcare resources",
    "genetic counseling",
    "blood transfusion",
    "pain management",
  ],
  authors: [{ name: "Soundminds Sicklecell-Association" }],
  creator: "Soundminds Sicklecell-Association",
  publisher: "Soundminds Sicklecell-Association",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sicklecellinfo.org",
    title: "Soundminds Sickle Cell Foundation | Support & Education",
    description:
      "Join Soundminds Sickle Cell Foundation in our mission to support, educate, and empower individuals affected by Sickle Cell Disease. Find resources, treatment information, and support networks.",
    siteName: "Soundminds Sickle Cell Foundation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soundminds Sickle Cell Foundation | Support & Education",
    description:
      "Join Soundminds Sickle Cell Foundation in our mission to support, educate, and empower individuals affected by Sickle Cell Disease. Find resources and support.",
    creator: "@soundmindsSCD",
  },
  icons: {
    icon: "/smickle-logo.png",
    shortcut: "/smickle-logo.png",
    apple: "/smickle-logo.png",
  },
  manifest: "/site.webmanifest",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <BackToTop />
          <CookieConsent />
          <ChatSupport />
        </div>
      </body>
    </html>
  )
}

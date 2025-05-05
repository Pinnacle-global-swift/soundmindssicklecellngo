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
    default: "Sickle Cell Disease Information",
    template: "%s | SickleCell Info",
  },
  description:
    "Comprehensive information about sickle cell disease, including causes, symptoms, diagnosis, treatment options, and management strategies.",
  keywords: [
    "sickle cell disease",
    "sickle cell anemia",
    "SCD",
    "blood disorder",
    "genetic disease",
    "hemoglobin",
    "treatment",
    "management",
    "research",
    "support",
  ],
  authors: [{ name: "SickleCell Info" }],
  creator: "SickleCell Info",
  publisher: "SickleCell Info",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sicklecellinfo.org",
    title: "Sickle Cell Disease Information",
    description:
      "Comprehensive information about sickle cell disease, including causes, symptoms, diagnosis, treatment options, and management strategies.",
    siteName: "SickleCell Info",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sickle Cell Disease Information",
    description:
      "Comprehensive information about sickle cell disease, including causes, symptoms, diagnosis, treatment options, and management strategies.",
    creator: "@sicklecellinfo",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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

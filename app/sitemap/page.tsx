import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Sitemap | Soundminds Sicklecell-Association",
  description: "A complete map of all pages on the Soundminds Sicklecell-Association website.",
}

export default function SitemapPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="relative aspect-video overflow-hidden rounded-xl mb-12">
          <Image
            src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Website navigation concept"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-red/60 to-transparent"></div>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-green">Sitemap</h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            A complete map of all pages on the Soundminds Sicklecell-Association website.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-brand-red/5 p-6 rounded-xl border border-brand-green/20">
            <h2 className="text-2xl font-bold mb-4 text-brand-green">Main Pages</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-3 ml-6 list-disc">
                <li>
                  <Link href="/" className="text-brand-green hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-brand-green hover:underline">
                    About Sickle Cell Disease
                  </Link>
                </li>
                <li>
                  <Link href="/causes" className="text-brand-green hover:underline">
                    Causes & Risk Factors
                  </Link>
                </li>
                <li>
                  <Link href="/symptoms" className="text-brand-green hover:underline">
                    Symptoms & Diagnosis
                  </Link>
                </li>
                <li>
                  <Link href="/treatment" className="text-brand-green hover:underline">
                    Treatment Options
                  </Link>
                </li>
                <li>
                  <Link href="/management" className="text-brand-green hover:underline">
                    Management Strategies
                  </Link>
                </li>
              </ul>
              <ul className="space-y-3 ml-6 list-disc">
                <li>
                  <Link href="/research" className="text-brand-green hover:underline">
                    Research & Clinical Trials
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-brand-green hover:underline">
                    Resources & Support
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-brand-green hover:underline">
                    Events & Activities
                  </Link>
                </li>
                <li>
                  <Link href="/donate" className="text-brand-green hover:underline">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/impact" className="text-brand-green hover:underline">
                    Your Impact
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-brand-green hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-brand-red/5 p-6 rounded-xl border border-brand-green/20">
            <h2 className="text-2xl font-bold mb-4 text-brand-green">Legal & Information</h2>
            <ul className="space-y-3 ml-6 list-disc">
              <li>
                <Link href="/privacy" className="text-brand-green hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-brand-green hover:underline">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-brand-green hover:underline">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-brand-red/5 p-6 rounded-xl border border-brand-green/20">
            <h2 className="text-2xl font-bold mb-4 text-brand-green">Support & Community</h2>
            <ul className="space-y-3 ml-6 list-disc">
              <li>
                <Link href="/volunteer" className="text-brand-green hover:underline">
                  Volunteer Opportunities
                </Link>
              </li>
              <li>
                <Link href="/stories" className="text-brand-green hover:underline">
                  Patient Stories
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-brand-green hover:underline">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-brand-green hover:underline">
                  Newsletter Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <Link href="/">
            <Button className="bg-brand-green hover:bg-brand-green/90">
              Return to Homepage
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Privacy Policy | Soundminds Sicklecell-Association",
  description: "Our commitment to protecting your privacy and personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-green">
            Privacy Policy
          </h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">Last updated: April 3, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            At Soundminds Sicklecell-Association, we are committed to protecting your privacy and personal information. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">Information We Collect</h2>

          <h3 className="text-xl font-bold text-brand-green mt-6 mb-3">Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fill out forms on our website</li>
            <li>Make a donation</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us via email or our contact form</li>
            <li>Participate in surveys or provide feedback</li>
          </ul>
          <p>
            This information may include your name, email address, phone number, mailing address, and payment
            information when making donations.
          </p>

          <h3 className="text-xl font-bold text-brand-green mt-6 mb-3">Automatically Collected Information</h3>
          <p>
            When you visit our website, we may automatically collect certain information about your device, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>Pages visited</li>
            <li>Time and date of your visit</li>
            <li>Time spent on pages</li>
            <li>Referring website addresses</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Providing, maintaining, and improving our website</li>
            <li>Processing donations and sending receipts</li>
            <li>Sending newsletters and updates about our organization</li>
            <li>Responding to your inquiries and providing support</li>
            <li>Analyzing website usage to improve user experience</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and hold certain
            information. Cookies are files with small amounts of data that may include an anonymous unique identifier.
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">Third-Party Disclosure</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties
            except in the following cases:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              To trusted third parties who assist us in operating our website, conducting our business, or servicing
              you, provided those parties agree to keep this information confidential
            </li>
            <li>
              When we believe release is appropriate to comply with the law, enforce our site policies, or protect ours
              or others' rights, property, or safety
            </li>
            <li>With your consent</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. However, no method of
            transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute
            security.
          </p>

          <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to access the personal information we have about you</li>
            <li>The right to request correction of inaccurate information</li>
            <li>The right to request deletion of your information</li>
            <li>The right to opt-out of certain data uses</li>
            <li>The right to withdraw consent</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="mt-2">
            <strong>Email:</strong> privacy@sicklecellinfo.org
            <br />
            <strong>Phone:</strong> (555) 123-4567
            <br />
            <strong>Address:</strong> 123 Health Avenue, Medical District, New York, NY 10001
          </p>
        </div>

        <div className="flex justify-center pt-6">
          <Link href="/terms">
            <Button className="bg-brand-green hover:bg-brand-green/90">
              View Terms of Use
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

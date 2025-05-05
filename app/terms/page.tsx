import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Terms of Use | Soundminds Sicklecell-Association",
  description: "Terms and conditions governing the use of the Soundminds Sicklecell-Association website.",
}

export default function TermsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-green">Terms of Use</h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">Last updated: April 3, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            Welcome to Soundminds Sicklecell-Association. By accessing this website, you agree to be bound by these Terms of Use, all
            applicable laws and regulations, and agree that you are responsible for compliance with any applicable local
            laws.
          </p>

          <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials on Soundminds Sicklecell-Association's website for
            personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title,
            and under this license you may not:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on Soundminds Sicklecell-Association's website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
          <p>
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by
            Soundminds Sicklecell-Association at any time. Upon terminating your viewing of these materials or upon the termination of
            this license, you must destroy any downloaded materials in your possession whether in electronic or printed
            format.
          </p>

          <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">Disclaimer</h2>
          <p>
            The materials on Soundminds Sicklecell-Association's website are provided on an 'as is' basis. Soundminds Sicklecell-Association makes no
            warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
            non-infringement of intellectual property or other violation of rights.
          </p>
          <p>
            Further, Soundminds Sicklecell-Association does not warrant or make any representations concerning the accuracy, likely
            results, or reliability of the use of the materials on its website or otherwise relating to such materials
            or on any sites linked to this site.
          </p>

          <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">Medical Disclaimer</h2>
          <p>
            The information provided on this website is for general informational and educational purposes only and is
            not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your
            physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
          <p>
            Never disregard professional medical advice or delay in seeking it because of something you have read on
            this website. If you think you may have a medical emergency, call your doctor or emergency services
            immediately.
          </p>

          <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">Limitations</h2>
          <p>
            In no event shall Soundminds Sicklecell-Association or its suppliers be liable for any damages (including, without limitation,
            damages for loss of data or profit, or due to business interruption) arising out of the use or inability to
            use the materials on Soundminds Sicklecell-Association's website, even if Soundminds Sicklecell-Association or a Soundminds Sicklecell-Association authorized
            representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">Accuracy of Materials</h2>
          <p>
            The materials appearing on Soundminds Sicklecell-Association's website could include technical, typographical, or photographic
            errors. Soundminds Sicklecell-Association does not warrant that any of the materials on its website are accurate, complete, or
            current. Soundminds Sicklecell-Association may make changes to the materials contained on its website at any time without
            notice. However, Soundminds Sicklecell-Association does not make any commitment to update the materials.
          </p>

          <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">Links</h2>
          <p>
            Soundminds Sicklecell-Association has not reviewed all of the sites linked to its website and is not responsible for the
            contents of any such linked site. The inclusion of any link does not imply endorsement by Soundminds Sicklecell-Association of
            the site. Use of any such linked website is at the user's own risk.
          </p>

          <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">Modifications</h2>
          <p>
            Soundminds Sicklecell-Association may revise these terms of service for its website at any time without notice. By using this
            website, you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the United States
            and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>

          <h2 className="text-2xl font-bold text-brand-green mt-8 mb-4">Contact Us</h2>
          <p>If you have any questions about these Terms of Use, please contact us at:</p>
          <p className="mt-2">
            <strong>Email:</strong> legal@sicklecellinfo.org
            <br />
            <strong>Phone:</strong> (555) 123-4567
            <br />
            <strong>Address:</strong> 123 Health Avenue, Medical District, New York, NY 10001
          </p>
        </div>

        <div className="flex justify-center pt-6">
          <Link href="/privacy">
            <Button className="bg-brand-green hover:bg-brand-green/90 mr-4">
              View Privacy Policy
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/sitemap">
            <Button className="bg-brand-green hover:bg-brand-green/90">
              View Sitemap
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

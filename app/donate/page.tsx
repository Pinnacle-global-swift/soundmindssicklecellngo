import Image from "next/image"
import { Heart, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DonationForm } from "@/components/donation-form"

export const metadata = {
  title: "Donate | Soundminds Sicklecell-Association",
  description:
    "Support our mission to improve the lives of those affected by sickle cell disease through your generous donation.",
}

export default function DonatePage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-green/10 mb-4">
            <Heart className="h-6 w-6 text-brand-green" />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-green">
            Make a Difference Today
          </h1>
          <p className="text-gray-600 md:text-xl max-w-3xl mx-auto">
            Your donation helps fund critical research, education programs, and support services for those affected by
            sickle cell disease.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <DonationForm />
          </div>

          <div className="space-y-6">
            <Card className="border-brand-green/20">
              <CardHeader className="bg-brand-green/5">
                <CardTitle>Your Impact</CardTitle>
                <CardDescription>How your donation helps</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Research Advancement</p>
                    <p className="text-sm text-gray-500">
                      Fund critical research for new treatments and potential cures
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Patient Support</p>
                    <p className="text-sm text-gray-500">
                      Provide resources and support services to patients and families
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Education Programs</p>
                    <p className="text-sm text-gray-500">Develop educational materials and awareness campaigns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Advocacy Efforts</p>
                    <p className="text-sm text-gray-500">
                      Support advocacy for improved policies and healthcare access
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-green/20">
              <CardHeader className="bg-brand-green/5">
                <CardTitle>Other Ways to Give</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Planned Giving</h3>
                  <p className="text-sm text-gray-500">
                    Include Soundminds Sicklecell-Association in your estate planning to create a lasting legacy.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Corporate Matching</h3>
                  <p className="text-sm text-gray-500">
                    Many employers match charitable contributions. Check if your company participates.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Volunteer</h3>
                  <p className="text-sm text-gray-500">Donate your time and skills to support our mission.</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-brand-green text-brand-green hover:bg-brand-green/10"
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="bg-brand-green/5 p-8 rounded-xl border border-brand-green/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-brand-green mb-4">Our Commitment to Transparency</h2>
              <p className="text-gray-600 mb-4">
                We're committed to using your donation effectively and transparently. Over 85% of all donations go
                directly to research, education, and support programs.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center">
                  <span className="text-brand-green font-bold">85%</span>
                </div>
                <div>
                  <p className="font-medium">Programs & Services</p>
                  <p className="text-sm text-gray-500">Direct impact on the community</p>
                </div>
              </div>
            </div>
            <div className="relative h-[250px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Team working on sickle cell research"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-brand-green text-center">Our Donors Make a Difference</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <p className="italic text-gray-600 mb-4">
                "I donate because my daughter has sickle cell disease, and I've seen firsthand how research and support
                programs can improve lives."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center mr-3">
                  <span className="text-brand-green font-bold">JM</span>
                </div>
                <div>
                  <p className="font-medium">James Miller</p>
                  <p className="text-sm text-gray-500">Monthly Donor since 2018</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <p className="italic text-gray-600 mb-4">
                "Supporting sickle cell research is important to me because these advances can lead to better treatments
                and eventually a cure."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center mr-3">
                  <span className="text-brand-green font-bold">SR</span>
                </div>
                <div>
                  <p className="font-medium">Sarah Rodriguez</p>
                  <p className="text-sm text-gray-500">Annual Donor</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <p className="italic text-gray-600 mb-4">
                "As a healthcare professional, I've seen the impact of educational resources on patient outcomes. That's
                why I donate."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center mr-3">
                  <span className="text-brand-green font-bold">DT</span>
                </div>
                <div>
                  <p className="font-medium">Dr. Thomas Johnson</p>
                  <p className="text-sm text-gray-500">Donor since 2015</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

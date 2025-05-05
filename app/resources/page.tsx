import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Book, Users, Phone, FileText, ExternalLink, Globe, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export const metadata = {
  title: "Resources & Support | SickleCell Info",
  description:
    "Comprehensive resources, support groups, educational materials, and assistance programs for people affected by sickle cell disease.",
}

export default function ResourcesPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700 dark:text-blue-300">
            Resources & Support
          </h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400 max-w-3xl">
            Access a comprehensive collection of resources, support networks, and educational materials to help navigate
            life with sickle cell disease.
          </p>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Support group meeting with diverse participants"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-8 text-lg">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              Finding Support and Information
            </h2>
            <p>
              Living with sickle cell disease can be challenging, but you don't have to face it alone. This page
              provides access to a wide range of resources, from support groups and educational materials to financial
              assistance programs and healthcare provider directories. Whether you're a patient, caregiver, healthcare
              professional, or educator, you'll find valuable information to help navigate the journey with sickle cell
              disease.
            </p>
          </div>

          <Tabs defaultValue="support" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="support">Support Groups</TabsTrigger>
              <TabsTrigger value="education">Educational Resources</TabsTrigger>
              <TabsTrigger value="assistance">Financial Assistance</TabsTrigger>
              <TabsTrigger value="providers">Healthcare Providers</TabsTrigger>
            </TabsList>

            <TabsContent value="support" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Support Networks</h3>
                  <p className="mb-4">
                    Connecting with others who understand the challenges of living with sickle cell disease can provide
                    emotional support, practical advice, and a sense of community. Support groups exist in many forms,
                    from in-person meetings to online forums and social media communities.
                  </p>
                  <p>
                    These networks can be valuable resources for sharing experiences, learning coping strategies, and
                    staying informed about the latest treatments and research developments.
                  </p>
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                    alt="Diverse group of people in a support meeting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6 mt-8">
                <h4 className="text-xl font-bold text-blue-700 dark:text-blue-300">National Organizations</h4>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sickle Cell Disease Association of America</CardTitle>
                      <CardDescription>National advocacy and support organization</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        SCDAA is a national organization that provides advocacy, education, and support for individuals
                        and families affected by sickle cell disease. They offer resources, community events, and
                        connections to local chapters across the United States.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                          <span>www.sicklecelldisease.org</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                          <span>410-528-1555</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="https://www.sicklecelldisease.org" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="flex items-center">
                          Visit Website
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Sickle Cell Foundation</CardTitle>
                      <CardDescription>Support and research advocacy</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        The Sickle Cell Foundation focuses on improving the quality of life for individuals with sickle
                        cell disease through education, support services, and advocacy for research funding. They
                        provide resources for patients and healthcare providers.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                          <span>www.sicklecellfoundation.org</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                          <span>850-222-2355</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="https://www.sicklecellfoundation.org" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="flex items-center">
                          Visit Website
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              <div className="space-y-6 mt-8">
                <h4 className="text-xl font-bold text-blue-700 dark:text-blue-300">Online Communities</h4>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sickle Cell Warriors</CardTitle>
                      <CardDescription>Patient-led online community</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Sickle Cell Warriors is an online community created by and for people living with sickle cell
                        disease. The website and social media platforms provide forums for discussion, personal stories,
                        and practical advice for managing the condition.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="https://www.sicklecellwarriors.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="flex items-center">
                          Join Community
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>OneSCDVoice</CardTitle>
                      <CardDescription>Digital support community</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        OneSCDVoice is a digital platform that connects patients, caregivers, and healthcare providers.
                        It offers access to educational resources, community forums, and the latest research updates in
                        a secure environment.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="https://www.onescdvoice.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="flex items-center">
                          Join Community
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl mt-8">
                <h4 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">
                  Finding Local Support Groups
                </h4>
                <p className="mb-4">
                  In-person support groups can provide valuable face-to-face connections with others in your community
                  who understand the challenges of living with sickle cell disease. To find local support groups:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Contact your local chapter of the Sickle Cell Disease Association of America</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ask your healthcare provider or hospital's social work department</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Search online directories of support groups</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Contact your local community health center</span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="education" className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Educational Resources</h3>
              <p className="mb-6">
                Education is a powerful tool for managing sickle cell disease effectively. Understanding the condition,
                its complications, and treatment options can help patients and caregivers make informed decisions and
                advocate for appropriate care.
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <Card className="flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                      <Book className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                    </div>
                    <CardTitle>Patient Education Materials</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p>
                      Brochures, fact sheets, and guides designed specifically for patients and families to understand
                      sickle cell disease, its management, and coping strategies.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="https://www.cdc.gov/ncbddd/sicklecell/materials/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="flex items-center">
                        Access Materials
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                      <FileText className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                    </div>
                    <CardTitle>Clinical Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p>
                      Evidence-based guidelines for healthcare providers on the diagnosis, treatment, and management of
                      sickle cell disease and its complications.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="https://www.nhlbi.nih.gov/health-topics/evidence-based-management-sickle-cell-disease"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="flex items-center">
                        View Guidelines
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                    </div>
                    <CardTitle>Educational Webinars</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p>
                      Online presentations and workshops covering various aspects of sickle cell disease, from basic
                      information to the latest research developments.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="https://www.sicklecelldisease.org/education-resources/webinars/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="flex items-center">
                        Watch Webinars
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>

              <div className="relative mt-10 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Person reading educational materials about health"
                  width={1200}
                  height={600}
                  className="object-cover"
                />
              </div>

              <div className="space-y-6 mt-8">
                <h4 className="text-xl font-bold text-blue-700 dark:text-blue-300">Recommended Reading</h4>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Books for Patients and Families</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Book className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">
                              Hope and Destiny: The Patient and Parent's Guide to Sickle Cell Disease and Sickle Cell
                              Trait
                            </p>
                            <p className="text-sm text-muted-foreground">By Allan F. Platt, Jr. and Alan Sacerdote</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Book className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Living Well with Sickle Cell Disease</p>
                            <p className="text-sm text-muted-foreground">By Judy Gray Johnson</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Book className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Sickle Cell Disease (Genes & Disease)</p>
                            <p className="text-sm text-muted-foreground">By Lizabeth Hardman</p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Books for Children</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Book className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">My Friend Jen: A Little Different</p>
                            <p className="text-sm text-muted-foreground">By Jenica Leah</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Book className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Sickle Cell Disease: A Guide for Families</p>
                            <p className="text-sm text-muted-foreground">By Lewis L. Hsu and Silvia R. Brandalise</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Book className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">A Boy's Guide to Living with Sickle Cell Disease</p>
                            <p className="text-sm text-muted-foreground">By Yvonne Carroll</p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl mt-8">
                <h4 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">Educational Videos</h4>
                <p className="mb-4">
                  Visual learning resources can be particularly helpful for understanding complex medical concepts:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <h5 className="font-medium mb-2">Understanding Sickle Cell Disease</h5>
                    <p className="text-sm text-muted-foreground mb-3">
                      An animated explanation of how sickle cell disease affects the body
                    </p>
                    <Link href="https://www.youtube.com/watch?v=eGiLVYhQNrE" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                        Watch Video
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <h5 className="font-medium mb-2">Living with Sickle Cell Disease</h5>
                    <p className="text-sm text-muted-foreground mb-3">
                      Personal stories and practical advice from patients and healthcare providers
                    </p>
                    <Link href="https://www.youtube.com/watch?v=NjX4v3nJPSg" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                        Watch Video
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="assistance" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Person reviewing financial documents"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Financial Assistance</h3>
                  <p className="mb-4">
                    Managing sickle cell disease can involve significant financial challenges, from medication costs to
                    hospital stays and lost work time. Fortunately, various programs and resources are available to help
                    ease the financial burden.
                  </p>
                  <p>
                    These resources include government programs, nonprofit organizations, pharmaceutical assistance
                    programs, and specialized insurance options designed to support individuals with chronic health
                    conditions.
                  </p>
                </div>
              </div>

              <div className="space-y-6 mt-8">
                <h4 className="text-xl font-bold text-blue-700 dark:text-blue-300">Government Programs</h4>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Medicaid</CardTitle>
                      <CardDescription>Health coverage for eligible low-income adults and children</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Medicaid provides health coverage to millions of Americans, including eligible low-income
                        adults, children, pregnant women, elderly adults, and people with disabilities. Many individuals
                        with sickle cell disease qualify for Medicaid coverage.
                      </p>
                      <p>
                        Coverage and eligibility requirements vary by state, so it's important to check with your local
                        Medicaid office for specific information.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="https://www.medicaid.gov/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="flex items-center">
                          Learn More
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Social Security Disability Insurance (SSDI)</CardTitle>
                      <CardDescription>Benefits for people unable to work due to disability</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        SSDI pays benefits to people who cannot work because they have a medical condition that's
                        expected to last at least one year or result in death. Sickle cell disease may qualify as a
                        disability if it significantly impacts your ability to work.
                      </p>
                      <p>Eligibility is based on work history and the severity of your condition.</p>
                    </CardContent>
                    <CardFooter>
                      <Link href="https://www.ssa.gov/disability/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="flex items-center">
                          Learn More
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Supplemental Security Income (SSI)</CardTitle>
                      <CardDescription>Financial support for people with limited income and resources</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        SSI provides monthly payments to adults and children with a disability or blindness who have
                        limited income and resources. Many individuals with severe sickle cell disease may qualify for
                        SSI benefits.
                      </p>
                      <p>Unlike SSDI, SSI eligibility is not based on your work history but on financial need.</p>
                    </CardContent>
                    <CardFooter>
                      <Link href="https://www.ssa.gov/ssi/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="flex items-center">
                          Learn More
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Children's Health Insurance Program (CHIP)</CardTitle>
                      <CardDescription>
                        Health coverage for children in families that earn too much for Medicaid
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        CHIP provides low-cost health insurance coverage for children in families that earn too much
                        money to qualify for Medicaid but cannot afford private insurance. This program can be
                        particularly helpful for families with children who have sickle cell disease.
                      </p>
                      <p>
                        Like Medicaid, CHIP is administered by states according to federal requirements, and program
                        names and details vary by state.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="https://www.healthcare.gov/medicaid-chip/childrens-health-insurance-program/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="flex items-center">
                          Learn More
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              <div className="space-y-6 mt-8">
                <h4 className="text-xl font-bold text-blue-700 dark:text-blue-300">
                  Pharmaceutical Assistance Programs
                </h4>
                <p className="mb-4">
                  Many pharmaceutical companies offer patient assistance programs that provide medications at reduced or
                  no cost to eligible individuals:
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Medication-Specific Programs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Manufacturers of medications commonly used to treat sickle cell disease often offer assistance
                        programs for patients who cannot afford their prescriptions.
                      </p>
                      <p>
                        These programs typically require an application process and documentation of financial need.
                        Your healthcare provider or a hospital social worker can help you identify and apply for these
                        programs.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="https://www.needymeds.org/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="flex items-center">
                          Find Programs
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Patient Assistance Network Foundation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        The Patient Access Network (PAN) Foundation provides financial assistance to underinsured
                        patients for out-of-pocket costs associated with their prescribed medications.
                      </p>
                      <p>
                        They offer a specific program for individuals with sickle cell disease who meet certain
                        eligibility requirements.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="https://www.panfoundation.org/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="flex items-center">
                          Apply for Assistance
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl mt-8">
                <h4 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">
                  Additional Financial Resources
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Hospital Financial Assistance Programs</p>
                      <p className="text-sm text-muted-foreground">
                        Many hospitals offer financial assistance or charity care programs for patients who cannot
                        afford their medical bills. Ask to speak with a financial counselor or social worker at your
                        hospital.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Nonprofit Organizations</p>
                      <p className="text-sm text-muted-foreground">
                        Some nonprofit organizations provide financial assistance specifically for individuals with
                        sickle cell disease. These may cover medical expenses, transportation to appointments, or other
                        needs.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">State Health Insurance Programs</p>
                      <p className="text-sm text-muted-foreground">
                        Many states offer additional health insurance programs or assistance beyond Medicaid and CHIP.
                        Contact your state's department of health for information.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="providers" className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Finding Healthcare Providers</h3>
              <p className="mb-6">
                Receiving care from healthcare providers with expertise in sickle cell disease is essential for optimal
                management. Specialized care can help prevent complications, manage symptoms effectively, and improve
                quality of life.
              </p>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-4">Sickle Cell Centers</h4>
                  <p className="mb-4">
                    Comprehensive sickle cell centers provide specialized care from a multidisciplinary team of
                    healthcare professionals with expertise in managing sickle cell disease. These centers typically
                    offer:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Specialized hematologists with expertise in sickle cell disease</li>
                    <li>Coordinated care across multiple specialties</li>
                    <li>Access to the latest treatments and clinical trials</li>
                    <li>Support services including social work and mental health</li>
                    <li>Educational resources for patients and families</li>
                  </ul>
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1631815588090-d1bcbe9a8545?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                    alt="Medical team discussing patient care in hospital"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6 mt-8">
                <h4 className="text-xl font-bold text-blue-700 dark:text-blue-300">Finding Specialized Care</h4>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sickle Cell Disease Association of America Provider Directory</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        The SCDAA maintains a directory of healthcare providers and treatment centers specializing in
                        sickle cell disease across the United States. This resource can help you locate specialized care
                        in your area.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="https://www.sicklecelldisease.org/get-involved/scdaa-member-organizations/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="flex items-center">
                          Find Providers
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Comprehensive Sickle Cell Centers</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        The National Heart, Lung, and Blood Institute (NHLBI) supports comprehensive sickle cell centers
                        across the country. These centers provide specialized care and conduct research to improve
                        treatments for sickle cell disease.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="https://www.nhlbi.nih.gov/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="flex items-center">
                          Learn More
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl mt-8">
                <h4 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">
                  Building Your Healthcare Team
                </h4>
                <p className="mb-4">
                  Managing sickle cell disease often requires a team of healthcare professionals with different
                  specialties:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Hematologist</p>
                      <p className="text-sm text-muted-foreground">
                        A specialist in blood disorders who typically serves as the primary specialist for sickle cell
                        disease
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Primary Care Provider</p>
                      <p className="text-sm text-muted-foreground">
                        For routine healthcare needs and coordination of care
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Pain Management Specialist</p>
                      <p className="text-sm text-muted-foreground">
                        For developing comprehensive pain management strategies
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Other Specialists</p>
                      <p className="text-sm text-muted-foreground">
                        Depending on individual needs, may include cardiologists, pulmonologists, ophthalmologists, and
                        others
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Contact Us</h2>
            <p>
              Have questions or need personalized assistance finding resources? Our team is here to help. Fill out the
              form below, and we'll connect you with appropriate resources for your specific needs.
            </p>

            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email address" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Please describe what resources you're looking for..."
                  className="min-h-[120px]"
                />
              </div>

              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Emergency Resources</h2>
            <p className="mb-4">If you're experiencing a medical emergency related to sickle cell disease, please:</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-red-600 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Call 911 or your local emergency number immediately</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red-600 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Go to the nearest emergency room</span>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 text-red-600 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Bring your medical information, including your sickle cell disease treatment plan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <Link href="/research">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Explore Research & Clinical Trials
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

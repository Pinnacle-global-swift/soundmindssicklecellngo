import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Info, Stethoscope, Pill, HeartPulse, BookOpen, Activity, Users, Brain, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HeroCarousel } from "@/components/hero-carousel"
import { StatCounter } from "@/components/stat-counter"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="w-full">
        <HeroCarousel />
      </section>

      {/* Quick Info Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950 border-b-4 border-brand-green">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block p-2 bg-brand-green/10 rounded-full mb-4">
              <Activity className="h-10 w-10 text-brand-green" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-green dark:text-brand-green">
                What is Sickle Cell Disease?
              </h2>
              <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Sickle cell disease is a group of inherited red blood cell disorders. In someone who has SCD, the red
                blood cells become hard and sticky and look like a C-shaped farm tool called a "sickle". These cells can
                block blood flow, causing pain and other serious problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Information Cards */}
      <section className="w-full py-12 md:py-24 bg-brand-gray dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-brand-green dark:border-brand-green">
              <CardHeader className="border-b-2 border-brand-green/20">
                <div className="w-12 h-12 rounded-lg bg-brand-green/10 dark:bg-brand-green/20 flex items-center justify-center mb-4">
                  <Info className="h-6 w-6 text-brand-green dark:text-brand-green" />
                </div>
                <CardTitle className="text-brand-navy dark:text-brand-teal">Causes & Risk Factors</CardTitle>
                <CardDescription>Learn about the genetic factors behind sickle cell disease</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p>
                  Sickle cell disease is caused by a mutation in the gene that tells your body to make hemoglobin.
                  Hemoglobin is the protein in red blood cells that carries oxygen throughout the body.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/causes">
                  <Button
                    variant="outline"
                    className="w-full border-brand-green text-brand-green hover:bg-brand-green/10 dark:border-brand-green dark:text-brand-green dark:hover:bg-brand-green/10"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-brand-green dark:border-brand-green">
              <CardHeader className="border-b-2 border-brand-green/20">
                <div className="w-12 h-12 rounded-lg bg-brand-green/10 dark:bg-brand-green/20 flex items-center justify-center mb-4">
                  <Stethoscope className="h-6 w-6 text-brand-green dark:text-brand-green" />
                </div>
                <CardTitle className="text-brand-navy dark:text-brand-teal">Symptoms & Diagnosis</CardTitle>
                <CardDescription>Recognize the signs and understand diagnostic procedures</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p>
                  Symptoms of sickle cell disease can include painful episodes called crises, anemia, swelling in hands
                  and feet, frequent infections, and delayed growth or puberty in children.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/symptoms">
                  <Button
                    variant="outline"
                    className="w-full border-brand-green text-brand-green hover:bg-brand-green/10 dark:border-brand-green dark:text-brand-green dark:hover:bg-brand-green/10"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="border-brand-green dark:border-brand-green">
              <CardHeader className="border-b-2 border-brand-green/20">
                <div className="w-12 h-12 rounded-lg bg-brand-green/10 dark:bg-brand-green/20 flex items-center justify-center mb-4">
                  <Pill className="h-6 w-6 text-brand-green dark:text-brand-green" />
                </div>
                <CardTitle className="text-brand-navy dark:text-brand-teal">Treatment Options</CardTitle>
                <CardDescription>Explore available treatments and medications</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p>
                  Treatment for sickle cell disease aims to prevent complications, relieve symptoms, and improve quality
                  of life. Options include medications, blood transfusions, and stem cell transplants.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/treatment">
                  <Button
                    variant="outline"
                    className="w-full border-brand-green text-brand-green hover:bg-brand-green/10 dark:border-brand-green dark:text-brand-green dark:hover:bg-brand-green/10"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-brand-green dark:text-brand-green mb-4">
              Understanding Sickle Cell
            </h2>
            <p className="max-w-[800px] mx-auto text-gray-700 md:text-xl/relaxed dark:text-gray-400">
              Visual insights into sickle cell disease, its effects, and management approaches.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-40 md:h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Medical research laboratory"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-40 md:h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Blood sample analysis"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-40 md:h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Patient consultation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-40 md:h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="DNA structure"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Management Strategies */}
      <section className="w-full py-12 md:py-24 bg-brand-green/5 dark:bg-gray-900 border-y-4 border-brand-green/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mx-auto lg:mx-0 relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                alt="Person living with sickle cell disease"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/60 to-transparent"></div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-brand-green dark:text-brand-green">
                  Living With Sickle Cell Disease
                </h2>
                <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed dark:text-gray-400">
                  Managing sickle cell disease involves a comprehensive approach to prevent crises and maintain overall
                  health. Learn about strategies for daily living, pain management, and preventive care.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <HeartPulse className="h-5 w-5 text-brand-green dark:text-brand-green" />
                  <span className="font-medium">Regular medical care and monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartPulse className="h-5 w-5 text-brand-green dark:text-brand-green" />
                  <span className="font-medium">Staying hydrated and avoiding extreme temperatures</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartPulse className="h-5 w-5 text-brand-green dark:text-brand-green" />
                  <span className="font-medium">Balanced nutrition and appropriate exercise</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartPulse className="h-5 w-5 text-brand-green dark:text-brand-green" />
                  <span className="font-medium">Stress management techniques</span>
                </div>
              </div>
              <div>
                <Link href="/management">
                  <Button className="bg-brand-green hover:bg-brand-green/90 text-white">
                    Management Strategies
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Information Boxes */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-brand-navy dark:text-brand-teal mb-4">
              Key Aspects of Sickle Cell Disease
            </h2>
            <p className="max-w-[800px] mx-auto text-gray-700 md:text-xl/relaxed dark:text-gray-400">
              Essential information for patients, caregivers, and healthcare providers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-brand-green/5 p-6 rounded-xl border-l-4 border-brand-green">
              <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-navy dark:text-brand-teal">Support Networks</h3>
              <p className="text-gray-700 dark:text-gray-400">
                Connecting with others who understand the challenges of living with sickle cell disease can provide
                emotional support, practical advice, and a sense of community.
              </p>
              <div className="mt-4">
                <Link
                  href="/resources"
                  className="text-brand-green hover:underline font-medium inline-flex items-center"
                >
                  Find Support
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-brand-green/5 p-6 rounded-xl border-l-4 border-brand-green">
              <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-navy dark:text-brand-teal">Research Advances</h3>
              <p className="text-gray-700 dark:text-gray-400">
                Ongoing research is leading to new treatments and potential cures for sickle cell disease, including
                gene therapy, novel medications, and improved stem cell transplantation.
              </p>
              <div className="mt-4">
                <Link
                  href="/research"
                  className="text-brand-green hover:underline font-medium inline-flex items-center"
                >
                  Explore Research
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-brand-green/5 p-6 rounded-xl border-l-4 border-brand-green">
              <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-navy dark:text-brand-teal">Treatment Options</h3>
              <p className="text-gray-700 dark:text-gray-400">
                From medications like hydroxyurea to blood transfusions and emerging therapies, there are various
                approaches to managing sickle cell disease and its complications.
              </p>
              <div className="mt-4">
                <Link
                  href="/treatment"
                  className="text-brand-green hover:underline font-medium inline-flex items-center"
                >
                  Learn About Treatments
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="w-full py-12 md:py-24 bg-brand-green/10 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-brand-green dark:text-brand-green">
                Resources & Support
              </h2>
              <p className="text-gray-700 md:text-xl/relaxed dark:text-gray-400">
                Connect with organizations, support groups, and educational materials to help navigate life with sickle
                cell disease.
              </p>
              <div className="pt-4">
                <Link href="/resources">
                  <Button className="bg-brand-green hover:bg-brand-green/90 text-white">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Access Resources
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Support group meeting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 md:h-52 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Doctor discussing with patient"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Banner */}
      <section className="w-full py-12 md:py-16 bg-brand-green">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Support Our Mission</h2>
              <p className="text-white/90 md:text-xl/relaxed">
                Your donation helps fund critical research, education programs, and support services for those affected
                by sickle cell disease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/donate">
                  <Button className="bg-white text-brand-green hover:bg-white/90">
                    <Heart className="mr-2 h-4 w-4" />
                    Donate Now
                  </Button>
                </Link>
                <Link href="/impact">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    See Your Impact
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <StatCounter
                endValue={100}
                label="Research Projects"
                suffix="+"
                className="bg-white/10 p-4 rounded-lg text-center"
              />
              <StatCounter
                endValue={5000}
                label="Families Supported"
                suffix="+"
                className="bg-white/10 p-4 rounded-lg text-center"
              />
              <StatCounter
                endValue={20}
                label="Countries Reached"
                suffix="+"
                className="bg-white/10 p-4 rounded-lg text-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-16 bg-brand-navy dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Join Our Community</h2>
              <p className="max-w-[600px] text-brand-green md:text-xl/relaxed mx-auto">
                Connect with others affected by sickle cell disease and stay updated on the latest information.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Link href="/contact">
                <Button className="w-full bg-brand-green hover:bg-brand-green/90 text-white">Contact Us Today</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

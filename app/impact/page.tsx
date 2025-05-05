import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Users, Microscope, BookOpen, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export const metadata = {
  title: "Your Impact | Soundminds Sicklecell-Association",
  description: "See how your donations make a difference in the lives of those affected by sickle cell disease.",
}

export default function ImpactPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-green/10 mb-4">
            <Heart className="h-6 w-6 text-brand-green" />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-green">
            Your Donation Makes a Difference
          </h1>
          <p className="text-gray-600 md:text-xl max-w-3xl mx-auto">
            See how your support helps improve the lives of those affected by sickle cell disease through research,
            education, and support programs.
          </p>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Diverse group of people working together"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green/60 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="ml-8 md:ml-16 max-w-md">
              <h2 className="text-3xl font-bold text-white mb-4">Together, We're Making Progress</h2>
              <p className="text-white/90 mb-6">
                Thanks to generous donors like you, we're advancing research, providing support, and raising awareness
                about sickle cell disease.
              </p>
              <Link href="/donate">
                <Button className="bg-white text-brand-green hover:bg-white/90">
                  <Heart className="mr-2 h-4 w-4" />
                  Donate Today
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-brand-green text-center">Our Impact By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="border-brand-green/20 text-center">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-2">
                  <Microscope className="h-6 w-6 text-brand-green" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-brand-green">100+</p>
                <p className="text-gray-600">Research Projects Funded</p>
              </CardContent>
            </Card>
            <Card className="border-brand-green/20 text-center">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-brand-green" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-brand-green">5,000+</p>
                <p className="text-gray-600">Families Supported</p>
              </CardContent>
            </Card>
            <Card className="border-brand-green/20 text-center">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="h-6 w-6 text-brand-green" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-brand-green">50,000+</p>
                <p className="text-gray-600">Educational Materials Distributed</p>
              </CardContent>
            </Card>
            <Card className="border-brand-green/20 text-center">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-2">
                  <Award className="h-6 w-6 text-brand-green" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-brand-green">20+</p>
                <p className="text-gray-600">Countries Reached</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-brand-green text-center">How Your Donation Helps</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Scientific research equipment in laboratory"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/60 to-transparent"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-green mb-4">Advancing Research</h3>
              <p className="text-gray-600 mb-4">
                Your donations fund critical research projects aimed at developing new treatments and potential cures
                for sickle cell disease. Recent breakthroughs include:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Gene therapy clinical trials showing promising results</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Development of new medications to reduce pain crises</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Improved stem cell transplantation techniques</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-xl font-bold text-brand-green mb-4">Supporting Patients and Families</h3>
              <p className="text-gray-600 mb-4">
                We provide resources and support services to help patients and families navigate the challenges of
                living with sickle cell disease:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Support groups connecting those affected by sickle cell disease</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Financial assistance for medical expenses and treatments</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Counseling services for patients and family members</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg order-1 md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Support group meeting for emotional wellbeing"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/60 to-transparent"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Person reading educational materials about health"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/60 to-transparent"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-green mb-4">Education and Awareness</h3>
              <p className="text-gray-600 mb-4">
                We develop and distribute educational materials to increase awareness and understanding of sickle cell
                disease:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Educational resources for patients, families, and healthcare providers</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Awareness campaigns to reduce stigma and increase understanding</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Training programs for healthcare professionals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-brand-green/5 p-8 rounded-xl border border-brand-green/20">
          <h2 className="text-2xl font-bold text-brand-green text-center mb-6">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-brand-green mb-2">Research Breakthrough</h3>
              <p className="text-gray-600 mb-4">
                "Thanks to funding from donors like you, our research team was able to develop a new treatment approach
                that has reduced pain crises by 60% in clinical trials. This breakthrough could significantly improve
                quality of life for thousands of patients."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center mr-3">
                  <span className="text-brand-green font-bold">DR</span>
                </div>
                <div>
                  <p className="font-medium">Dr. Rebecca Johnson</p>
                  <p className="text-sm text-gray-500">Lead Researcher</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-brand-green mb-2">Family Support</h3>
              <p className="text-gray-600 mb-4">
                "When my son was diagnosed with sickle cell disease, I felt overwhelmed. The support group and
                educational resources provided by Soundminds Sicklecell-Association helped us understand the condition and connect with
                other families. It made all the difference in our journey."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center mr-3">
                  <span className="text-brand-green font-bold">MW</span>
                </div>
                <div>
                  <p className="font-medium">Maria Williams</p>
                  <p className="text-sm text-gray-500">Parent of Child with SCD</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-brand-green">Help Us Continue This Important Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your donation, no matter the size, makes a real difference in the lives of those affected by sickle cell
            disease. Together, we can work toward better treatments and ultimately a cure.
          </p>
          <div>
            <Link href="/donate">
              <Button className="bg-brand-green hover:bg-brand-green/90 text-white">
                <Heart className="mr-2 h-4 w-4" />
                Donate Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Users, Calendar, MapPin, Heart, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { fadeIn, staggerContainer } from "@/lib/animation"

// Volunteer opportunities data
const volunteerOpportunities = [
  {
    title: "Event Support",
    description: "Help organize and staff awareness events, fundraisers, and educational workshops.",
    commitment: "Flexible, event-based",
    skills: ["Organization", "Communication", "Customer service"],
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Community Outreach",
    description:
      "Spread awareness about sickle cell disease in your community through presentations and information sessions.",
    commitment: "4-8 hours per month",
    skills: ["Public speaking", "Knowledge of SCD", "Enthusiasm"],
    image:
      "https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
  },
  {
    title: "Support Group Facilitator",
    description: "Help facilitate support groups for patients and families affected by sickle cell disease.",
    commitment: "4 hours per month",
    skills: ["Empathy", "Active listening", "Group facilitation"],
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Administrative Support",
    description: "Assist with office tasks, data entry, correspondence, and other administrative duties.",
    commitment: "4-10 hours per week",
    skills: ["Organization", "Computer proficiency", "Attention to detail"],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Content Creation",
    description:
      "Create educational content, blog posts, social media updates, and newsletters about sickle cell disease.",
    commitment: "5-10 hours per month",
    skills: ["Writing", "Creativity", "Social media knowledge"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Fundraising",
    description: "Help plan and execute fundraising campaigns to support our programs and services.",
    commitment: "Varies by campaign",
    skills: ["Networking", "Sales", "Creativity"],
    image:
      "https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
]

// Upcoming volunteer events
const volunteerEvents = [
  {
    title: "Volunteer Orientation",
    date: "June 15, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "SickleCell Info Headquarters",
    description: "Introduction to our organization, volunteer opportunities, and training.",
  },
  {
    title: "Community Health Fair",
    date: "July 8, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "Central Park Community Center",
    description: "Help staff our information booth and conduct sickle cell awareness activities.",
  },
  {
    title: "Fundraising Gala Preparation",
    date: "August 20-22, 2025",
    time: "Various shifts available",
    location: "Grand Ballroom, Hilton Hotel",
    description: "Assist with setup, registration, and other tasks for our annual fundraising gala.",
  },
]

export default function VolunteerClientPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interests: "",
    availability: "",
    experience: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, availability: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your API
    console.log(formData)
    setFormSubmitted(true)
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <motion.div className="mx-auto max-w-5xl space-y-12" initial="hidden" animate="show" variants={staggerContainer}>
        <motion.div className="space-y-4 text-center" variants={fadeIn("up")}>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-green">
            Volunteer With Us
          </h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400 max-w-3xl mx-auto">
            Join our team of dedicated volunteers and help make a difference in the lives of those affected by sickle
            cell disease.
          </p>
        </motion.div>

        <motion.div className="relative aspect-video overflow-hidden rounded-xl shadow-xl" variants={fadeIn("up", 0.1)}>
          <Image
            src="https://images.unsplash.com/photo-1593113616828-6f22bca04804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Diverse group of volunteers working together"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green/60 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="ml-8 md:ml-16 max-w-md">
              <h2 className="text-3xl font-bold text-white mb-4">Make an Impact</h2>
              <p className="text-white/90 mb-6">
                Your time and talents can help improve the lives of those affected by sickle cell disease. Whether you
                have a few hours or a regular commitment, there's a place for you on our team.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-brand-green/5 p-8 rounded-xl border border-brand-green/20"
          variants={fadeIn("up", 0.2)}
        >
          <h2 className="text-2xl font-bold text-brand-green mb-6">Why Volunteer With Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">Make a Difference</h3>
              <p className="text-gray-600">
                Your contribution directly impacts the lives of individuals and families affected by sickle cell
                disease.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">Build Community</h3>
              <p className="text-gray-600">
                Connect with others who share your passion for making a difference in the sickle cell community.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Opportunities</h3>
              <p className="text-gray-600">
                We offer a variety of volunteer roles to match your skills, interests, and availability.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeIn("up", 0.3)}>
          <h2 className="text-2xl font-bold text-brand-green mb-6">Volunteer Opportunities</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.1 * index)}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full flex flex-col overflow-hidden border-brand-green/20">
                  <div className="relative h-48">
                    <Image
                      src={opportunity.image || "/placeholder.svg"}
                      alt={opportunity.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-brand-green">{opportunity.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-brand-green" />
                      {opportunity.commitment}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">{opportunity.description}</p>
                    <div>
                      <p className="font-medium mb-2">Skills Needed:</p>
                      <ul className="list-disc pl-5 text-sm text-gray-500">
                        {opportunity.skills.map((skill, i) => (
                          <li key={i}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-brand-green hover:bg-brand-green/90">Apply Now</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeIn("up", 0.4)}>
          <h2 className="text-2xl font-bold text-brand-green mb-6">Upcoming Volunteer Events</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {volunteerEvents.map((event, index) => (
              <Card key={index} className="border-brand-green/20">
                <CardHeader className="bg-brand-green/5">
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Date</p>
                      <p className="text-sm text-gray-500">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Time</p>
                      <p className="text-sm text-gray-500">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-gray-500">{event.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 border-t border-gray-100 pt-4 mt-4">{event.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-brand-green hover:bg-brand-green/90">Sign Up</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100" variants={fadeIn("up", 0.5)}>
          <h2 className="text-2xl font-bold text-brand-green mb-6">Volunteer Application</h2>

          {formSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">Thank You for Your Interest!</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                We've received your volunteer application and will contact you soon to discuss the next steps.
              </p>
              <Button onClick={() => setFormSubmitted(false)} className="bg-brand-green hover:bg-brand-green/90">
                Submit Another Application
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interests">Areas of Interest (select all that apply)</Label>
                <Textarea
                  id="interests"
                  name="interests"
                  placeholder="E.g., Event Support, Community Outreach, etc."
                  value={formData.interests}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Availability</Label>
                <RadioGroup value={formData.availability} onValueChange={handleRadioChange}>
                  <div className="grid gap-2 md:grid-cols-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="weekdays" id="weekdays" />
                      <Label htmlFor="weekdays">Weekdays</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="weekends" id="weekends" />
                      <Label htmlFor="weekends">Weekends</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="both" id="both" />
                      <Label htmlFor="both">Both</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Relevant Experience (optional)</Label>
                <Textarea
                  id="experience"
                  name="experience"
                  placeholder="Tell us about any relevant skills or experience you have"
                  value={formData.experience}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full md:w-auto bg-brand-green hover:bg-brand-green/90">
                Submit Application
              </Button>
            </form>
          )}
        </motion.div>

        <motion.div className="text-center space-y-6" variants={fadeIn("up", 0.6)}>
          <h2 className="text-2xl font-bold text-brand-green">Have Questions?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            If you have any questions about volunteering with us, please don't hesitate to reach out. Our volunteer
            coordinator is happy to provide more information.
          </p>
          <div>
            <Link href="/contact">
              <Button className="bg-brand-green hover:bg-brand-green/90">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

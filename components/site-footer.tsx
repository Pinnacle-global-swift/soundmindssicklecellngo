"use client"

import type React from "react"

import Link from "next/link"
import {
  Activity,
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
} from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { fadeIn, staggerContainer } from "@/lib/animation"
import { useState } from "react"

export function SiteFooter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      // In a real app, you would send this to your API
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="w-full bg-brand-navy text-white">
      {/* Newsletter Section */}
      <div className="bg-brand-green py-12">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Stay Updated</h3>
              <p className="text-white/80">
                Subscribe to our newsletter for the latest news, research updates, and events.
              </p>
            </div>
            <div>
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/10 p-4 rounded-lg text-center"
                >
                  <p className="font-medium">Thank you for subscribing!</p>
                  <p className="text-sm text-white/80 mt-1">We'll keep you updated with the latest news.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" className="bg-white text-brand-green hover:bg-white/90">
                    Subscribe
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-12 px-4 md:px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="space-y-4" variants={fadeIn("up", 0.1)}>
            <div className="flex items-center space-x-2">
              <div className="relative w-10 h-10 flex items-center justify-center bg-brand-green rounded-full">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl">Soundminds Sicklecell-Association</span>
            </div>
            <p className="text-sm text-white/70">
              Providing comprehensive information, support, and resources for those affected by sickle cell disease.
            </p>
            <div className="pt-4">
              <Link
                href="/donate"
                className="inline-flex items-center bg-brand-green hover:bg-brand-green/90 text-white px-4 py-2 rounded-md transition-colors"
              >
                <Heart className="mr-2 h-4 w-4" />
                Donate
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.2)}>
            <h3 className="font-bold text-lg mb-4 border-b border-brand-green/30 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About SCD" },
                { href: "/symptoms", label: "Symptoms" },
                { href: "/treatment", label: "Treatment" },
                { href: "/management", label: "Management" },
                { href: "/research", label: "Research" },
                { href: "/resources", label: "Resources" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-brand-green transition-colors flex items-center"
                  >
                    <span className="mr-2">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.3)}>
            <h3 className="font-bold text-lg mb-4 border-b border-brand-green/30 pb-2">Get Involved</h3>
            <ul className="space-y-2">
              {[
                { href: "/donate", label: "Donate" },
                { href: "/impact", label: "Your Impact" },
                { href: "/volunteer", label: "Volunteer" },
                { href: "/events", label: "Events" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-brand-green transition-colors flex items-center"
                  >
                    <span className="mr-2">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.4)}>
            <h3 className="font-bold text-lg mb-4 border-b border-brand-green/30 pb-2">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-white/70">
                  123 Health Avenue
                  <br />
                  Medical District
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-green mr-2 flex-shrink-0" />
                <span className="text-white/70">07067066599</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-green mr-2 flex-shrink-0" />
                <span className="text-white/70">soundmindssicklecellngo@gmail.com</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Youtube, label: "YouTube" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/50 mb-4 md:mb-0">
            © {new Date().getFullYear()} Soundminds Sicklecell-Association. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/privacy" className="text-sm text-white/50 hover:text-brand-green transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-white/50 hover:text-brand-green transition-colors">
              Terms of Use
            </Link>
            <Link href="/sitemap" className="text-sm text-white/50 hover:text-brand-green transition-colors">
              Sitemap
            </Link>
            <button
              onClick={scrollToTop}
              className="text-sm text-white/50 hover:text-brand-green transition-colors flex items-center"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4 mr-1" />
              Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Heart, Phone, Mail, Search } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { Input } from "@/components/ui/input"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {/* Top bar with contact info */}
      <div className="hidden lg:block w-full bg-brand-red text-white py-1.5">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:+1234567890" className="flex items-center text-sm hover:text-white/80 transition-colors">
              <Phone className="h-3.5 w-3.5 mr-1.5" />
              <span>07067066599</span>
            </a>
            <a
              href="mailto:soundmindssicklecellngo@gmail.com"
              className="flex items-center text-sm hover:text-white/80 transition-colors"
            >
              <Mail className="h-3.5 w-3.5 mr-1.5" />
              <span>soundmindssicklecellngo@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/events" className="text-sm hover:text-white/80 transition-colors">
              Upcoming Events
            </Link>
            <Link href="/volunteer" className="text-sm hover:text-white/80 transition-colors">
              Volunteer
            </Link>
            <Link href="/faq" className="text-sm hover:text-white/80 transition-colors">
              FAQs
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`fixed top-0 z-50 w-full ${
          scrolled ? "bg-white shadow-md py-2 border-b border-gray-100" : "bg-white/95 backdrop-blur-sm py-3 lg:mt-8"
        } transition-all duration-300`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 mr-8">
              <div className="relative w-10 h-10">
                <Image
                  src="/smickle-logo.png" // Make sure to add the logo file to the public folder
                  alt="SMICKLE Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl text-gray-900">SMICKLE</span>
            </Link>

            <div className="hidden lg:flex lg:items-center">
              <nav className="flex items-center space-x-1">
                {[
                  { href: "/about", label: "About SCD" },
                  { href: "/causes", label: "Causes" },
                  { href: "/symptoms", label: "Symptoms" },
                  { href: "/treatment", label: "Treatment" },
                  { href: "/management", label: "Management" },
                  { href: "/research", label: "Research" },
                  { href: "/resources", label: "Resources" },
                  { href: "/events", label: "Events" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-3 py-2 text-gray-700 hover:text-brand-red transition-colors group"
                  >
                    <span className="relative z-10 font-medium text-sm">{item.label}</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <AnimatePresence>
              {showSearch ? (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "200px", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative hidden md:block"
                >
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="pr-8 h-9 text-sm"
                    autoFocus
                    onBlur={() => setShowSearch(false)}
                  />
                  <Search className="absolute right-2.5 top-2 h-4 w-4 text-gray-500" />
                </motion.div>
              ) : (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="hidden md:flex items-center justify-center h-9 w-9 rounded-full hover:bg-gray-100 transition-colors"
                  onClick={() => setShowSearch(true)}
                >
                  <Search className="h-4 w-4 text-gray-700" />
                  <span className="sr-only">Search</span>
                </motion.button>
              )}
            </AnimatePresence>

            <Link href="/donate">
              <Button className="hidden md:flex bg-brand-red hover:bg-brand-red/90 text-white shadow-sm">
                <Heart className="mr-2 h-4 w-4" />
                Donate
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-brand-red hover:border-brand-red transition-colors"
              >
                Contact Us
              </Button>
            </Link>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-24"></div>
    </>
  )
}

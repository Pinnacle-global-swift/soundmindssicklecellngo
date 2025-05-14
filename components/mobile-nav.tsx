"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ChevronRight, Heart, Activity, Phone, Mail, Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About SCD" },
    { href: "/causes", label: "Causes" },
    { href: "/symptoms", label: "Symptoms" },
    { href: "/treatment", label: "Treatment" },
    { href: "/management", label: "Management" },
    { href: "/research", label: "Research" },
    { href: "/resources", label: "Resources" },
    { href: "/events", label: "Events" },
    { href: "/donate", label: "Donate", icon: Heart },
    { href: "/contact", label: "Contact", icon: Mail },
  ]

  const staggerMenuItems = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const menuItemVariant = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 400, damping: 25 } },
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="lg:hidden relative p-2 rounded-full" size="icon">
          <Menu className="h-5 w-5 text-gray-700" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0 w-full sm:w-80 border-l border-gray-200">
        <div className="flex flex-col h-full bg-white">
          {/* Header */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center space-x-2">
              <div className="relative w-8 h-8 flex items-center justify-center bg-brand-green rounded-full">
                <Activity className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-lg text-gray-900">Soundminds Sicklecell-Association</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-500 hover:bg-gray-100 rounded-full"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          {/* Search */}
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-8 text-sm"
              />
              <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-gray-500" />
            </div>
          </div>

          {/* Contact info */}
          <div className="p-4 border-b border-gray-100 space-y-2">
            <a
              href="tel:+1234567890"
              className="flex items-center text-sm text-gray-600 hover:text-brand-green transition-colors"
            >
              <Phone className="h-4 w-4 mr-2 text-brand-green" />
              <span>07067066599</span>
            </a>
            <a
              href="mailto:soundmindssicklecellngo@gmail.com"
              className="flex items-center text-sm text-gray-600 hover:text-brand-green transition-colors"
            >
              <Mail className="h-4 w-4 mr-2 text-brand-green" />
              <span>soundmindssicklecellngo@gmail.com</span>
            </a>
          </div>

          {/* Navigation */}
          <motion.div
            className="flex-1 overflow-auto py-4 px-2"
            variants={staggerMenuItems}
            initial="hidden"
            animate="show"
          >
            <nav className="flex flex-col space-y-1">
              <AnimatePresence>
                {menuItems.map((item) => (
                  <motion.div key={item.href} variants={menuItemVariant}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between p-3 rounded-lg text-gray-700 hover:text-brand-green hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center">
                        {item.icon && <item.icon className="h-4 w-4 mr-3 text-brand-green" />}
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </nav>
          </motion.div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-100">
            <Link href="/donate" onClick={() => setOpen(false)}>
              <Button className="w-full bg-brand-green hover:bg-brand-green/90 text-white shadow-sm">
                <Heart className="mr-2 h-4 w-4" />
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

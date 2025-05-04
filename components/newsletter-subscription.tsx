"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { fadeIn } from "@/lib/animation"

interface NewsletterSubscriptionProps {
  className?: string
  title?: string
  description?: string
  buttonText?: string
  successMessage?: string
}

export function NewsletterSubscription({
  className = "",
  title = "Subscribe to Our Newsletter",
  description = "Stay updated with the latest news, research, and events related to sickle cell disease.",
  buttonText = "Subscribe",
  successMessage = "Thank you for subscribing! You'll receive our next newsletter soon.",
}: NewsletterSubscriptionProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!email) {
      setError("Please enter your email address")
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubscribed(true)
      setEmail("")
    }, 1500)
  }

  return (
    <div className={`bg-brand-green/5 p-6 rounded-lg border border-brand-green/20 ${className}`}>
      {isSubscribed ? (
        <motion.div
          className="text-center py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CheckCircle className="h-12 w-12 text-brand-green mx-auto mb-4" />
          <p className="text-gray-700 font-medium">{successMessage}</p>
        </motion.div>
      ) : (
        <motion.div initial="hidden" animate="show" variants={fadeIn("up")}>
          <h3 className="text-xl font-bold text-brand-green mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={error ? "border-red-300 focus:border-red-500" : ""}
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

            <Button
              type="submit"
              className="w-full bg-brand-green hover:bg-brand-green/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Subscribing...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  {buttonText}
                </>
              )}
            </Button>
          </form>
        </motion.div>
      )}
    </div>
  )
}

"use client"

import type React from "react"
import { useState } from "react"
import { Heart, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { DonationConfirmation } from "@/components/donation-confirmation"
import { fadeIn, staggerContainer } from "@/lib/animation"

export function DonationForm() {
  const [donationAmount, setDonationAmount] = useState<string>("5000")
  const [customAmount, setCustomAmount] = useState<string>("")
  const [donationFrequency, setDonationFrequency] = useState<string>("one-time")
  const [paymentMethod, setPaymentMethod] = useState<string>("credit-card")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleAmountChange = (value: string) => {
    setDonationAmount(value)
    if (value !== "custom") {
      setCustomAmount("")
    }
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <DonationConfirmation
        amount={donationAmount === "custom" ? customAmount : donationAmount}
        frequency={donationFrequency}
      />
    )
  }

  return (
    <Card className="border-brand-green/20 overflow-hidden">
      <motion.form
        onSubmit={handleSubmit}
        className="p-6 space-y-6"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div className="space-y-4" variants={fadeIn("up", 0.1)}>
          <h2 className="text-xl font-bold text-brand-green">Select Donation Amount (in Naira)</h2>
          <RadioGroup
            value={donationAmount}
            onValueChange={handleAmountChange}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {[
              { value: "5000", label: "5,000" },
              { value: "10000", label: "10,000" },
              { value: "20000", label: "20,000" },
              { value: "50000", label: "50,000" },
              { value: "100000", label: "100,000" },
              { value: "custom", label: "Custom" },
            ].map((option) => (
              <div key={option.value}>
                <RadioGroupItem value={option.value} id={`amount-${option.value}`} className="peer sr-only" />
                <Label
                  htmlFor={`amount-${option.value}`}
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-brand-green [&:has([data-state=checked])]:border-brand-green transition-colors"
                >
                  <span className="mb-3 text-lg font-bold text-brand-green">₦</span>
                  <span className="text-xl font-bold">{option.label}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>

          {donationAmount === "custom" && (
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Label htmlFor="custom-amount">Enter Custom Amount (in Naira)</Label>
              <div className="relative mt-1">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 font-bold">₦</div>
                <Input
                  id="custom-amount"
                  type="number"
                  min="1000"
                  step="1000"
                  placeholder="Enter amount"
                  className="pl-10"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  required={donationAmount === "custom"}
                />
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div className="space-y-4" variants={fadeIn("up", 0.2)}>
          <h2 className="text-xl font-bold text-brand-green">Donation Frequency</h2>
          <RadioGroup value={donationFrequency} onValueChange={setDonationFrequency} className="grid grid-cols-2 gap-4">
            <div>
              <RadioGroupItem value="one-time" id="frequency-one-time" className="peer sr-only" />
              <Label
                htmlFor="frequency-one-time"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-brand-green [&:has([data-state=checked])]:border-brand-green transition-colors"
              >
                <Heart className="mb-3 h-6 w-6 text-brand-green" />
                <span className="text-lg font-bold">One-Time</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="monthly" id="frequency-monthly" className="peer sr-only" />
              <Label
                htmlFor="frequency-monthly"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-brand-green [&:has([data-state=checked])]:border-brand-green transition-colors"
              >
                <Calendar className="mb-3 h-6 w-6 text-brand-green" />
                <span className="text-lg font-bold">Monthly</span>
              </Label>
            </div>
          </RadioGroup>
        </motion.div>

        <motion.div className="space-y-4" variants={fadeIn("up", 0.3)}>
          <h2 className="text-xl font-bold text-brand-green">Payment Method (Bank Transfer Only)</h2>
          <div className="bg-brand-green/5 p-6 rounded-lg border border-brand-green/20">
            <p className="mb-4 font-medium">Please transfer your donation to one of the following bank accounts:</p>
            <div className="space-y-6">
              {[
                { bank: "United Bank For Africa", accountName: "SHEDRACK E ESELEMO", accountNumber: "2058910827" },
                { bank: "WAMA BANK", accountName: "SHEDRACK E ESELEMO", accountNumber: "0240088237" },
              ].map((account, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-white rounded-lg shadow-sm"
                  variants={fadeIn("up", 0.1 * index)}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3 className="font-bold text-brand-green mb-2">{account.bank}</h3>
                  <div className="space-y-1">
                    <p>
                      <span className="font-medium">Account Name:</span> {account.accountName}
                    </p>
                    <p>
                      <span className="font-medium">Account Number:</span> {account.accountNumber}
                    </p>
                    <p>
                      <span className="font-medium">Bank:</span> {account.bank}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-600">
              After making your transfer, please complete the form below so we can acknowledge your donation.
            </p>
          </div>
        </motion.div>

        <motion.div className="space-y-4" variants={fadeIn("up", 0.4)}>
          <h2 className="text-xl font-bold text-brand-green">Your Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" required />
            </div>
            <div className="col-span-2 md:col-span-1">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" required />
            </div>
            <div className="col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div className="col-span-2">
              <Label htmlFor="phone">Phone (Optional)</Label>
              <Input id="phone" type="tel" />
            </div>
            <div className="col-span-2">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="rounded border-gray-300 text-brand-green focus:ring-brand-green"
                />
                <Label htmlFor="newsletter" className="text-sm font-normal">
                  Sign up for our newsletter to stay informed about our work
                </Label>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="space-y-4" variants={fadeIn("up", 0.5)}>
          <h2 className="text-xl font-bold text-brand-green">Donation Message (Optional)</h2>
          <Textarea placeholder="Share why you're donating or leave a message of support" />
        </motion.div>

        <motion.div className="pt-4" variants={fadeIn("up", 0.6)}>
          <Button
            type="submit"
            className="w-full bg-brand-green hover:bg-brand-green/90 text-white h-12 text-lg"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                <Heart className="mr-2 h-5 w-5" />
                Complete Donation
              </>
            )}
          </Button>
          <p className="text-center text-sm text-gray-500 mt-4">
            Your donation is tax-deductible to the extent allowed by law.
          </p>
        </motion.div>
      </motion.form>
    </Card>
  )
}

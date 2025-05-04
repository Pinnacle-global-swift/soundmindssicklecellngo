"use client"

import Link from "next/link"
import { CheckCircle, ArrowRight, Copy } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { fadeIn, staggerContainer } from "@/lib/animation"
import { useState } from "react"

interface DonationConfirmationProps {
  amount: string
  frequency: string
}

export function DonationConfirmation({ amount, frequency }: DonationConfirmationProps) {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null)

  // Format the amount to include the Naira symbol and commas for thousands
  const formattedAmount = amount.startsWith("₦") ? amount : `₦${Number.parseInt(amount).toLocaleString("en-NG")}`
  const formattedFrequency = frequency === "monthly" ? "monthly" : "one-time"

  const copyToClipboard = (text: string, accountType: string) => {
    navigator.clipboard.writeText(text)
    setCopiedAccount(accountType)
    setTimeout(() => setCopiedAccount(null), 2000)
  }

  return (
    <motion.div
      className="bg-white p-8 rounded-xl border border-brand-green/20 text-center space-y-6"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="w-20 h-20 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto"
        variants={fadeIn("down", 0.1)}
      >
        <CheckCircle className="h-10 w-10 text-brand-green" />
      </motion.div>

      <motion.div variants={fadeIn("up", 0.2)}>
        <h2 className="text-2xl font-bold text-brand-green">Thank You for Your Donation!</h2>
        <p className="text-gray-600 mt-2">
          Your {formattedFrequency} donation of {formattedAmount} has been registered.
        </p>
      </motion.div>

      <motion.div className="bg-brand-green/5 p-6 rounded-lg" variants={fadeIn("up", 0.3)}>
        <p className="text-gray-600 mb-4">
          Please complete your donation by transferring {formattedAmount} to one of our bank accounts:
        </p>
        <div className="space-y-4 text-left">
          {[
            { bank: "First Bank Nigeria", account: "2031567890" },
            { bank: "Guaranty Trust Bank", account: "0124567890" },
            { bank: "Zenith Bank", account: "1056789012" },
          ].map((bank, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white rounded border border-gray-200 flex justify-between items-center"
              variants={fadeIn("up", 0.1 * index)}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
            >
              <div>
                <p className="font-medium">{bank.bank}</p>
                <p className="text-sm">Account: {bank.account}</p>
              </div>
              <button
                onClick={() => copyToClipboard(bank.account, bank.bank)}
                className="text-brand-green hover:text-brand-green/80 transition-colors p-2"
                aria-label={`Copy ${bank.bank} account number`}
              >
                {copiedAccount === bank.bank ? (
                  <span className="text-xs font-medium">Copied!</span>
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200" variants={fadeIn("up", 0.4)}>
        <p className="text-yellow-800">
          After making your transfer, please send your payment confirmation to{" "}
          <span className="font-medium">donations@sicklecellinfo.org</span> for proper acknowledgment.
        </p>
      </motion.div>

      <motion.div className="pt-4 space-y-4" variants={fadeIn("up", 0.5)}>
        <Link href="/">
          <Button className="bg-brand-green hover:bg-brand-green/90 text-white">Return to Homepage</Button>
        </Link>

        <div>
          <Link href="/impact" className="text-brand-green hover:underline inline-flex items-center">
            See the impact of your donation
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animation"

interface StatCounterProps {
  endValue: number
  label: string
  suffix?: string
  className?: string
  duration?: number
  decimals?: number
}

export function StatCounter({
  endValue,
  label,
  suffix = "",
  className = "",
  duration = 2.5,
  decimals = 0,
}: StatCounterProps) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [inView, hasAnimated])

  // Format large numbers (e.g., 5000 to 5K)
  const formatValue = (value: number) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(decimals)}M`
    }
    if (value >= 1000) {
      return `${(value / 1000).toFixed(decimals)}K`
    }
    return value.toString()
  }

  return (
    <motion.div
      ref={ref}
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      <div className="relative">
        <h3 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center">
          {inView ? (
            <CountUp
              start={0}
              end={endValue}
              duration={duration}
              separator=","
              decimals={decimals}
              formattingFn={(value) => formatValue(value)}
            />
          ) : (
            "0"
          )}
          <span className="ml-1">{suffix}</span>
        </h3>
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full"></div>
      </div>
      <p className="text-white/80 text-sm mt-3 font-medium">{label}</p>
    </motion.div>
  )
}

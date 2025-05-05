"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  image?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "The information and resources provided by Soundminds Sicklecell-Association have been invaluable in helping me understand and manage my condition. I feel empowered to take control of my health.",
    author: "Sarah Johnson",
    role: "Living with Sickle Cell Disease",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    quote:
      "As a healthcare provider, I regularly refer my patients to Soundminds Sicklecell-Association for reliable, up-to-date information. The resources are comprehensive and presented in an accessible way.",
    author: "Dr. Michael Chen",
    role: "Hematologist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    quote:
      "The support groups connected me with others who understand what it's like to parent a child with sickle cell disease. I've found both practical advice and emotional support through this community.",
    author: "James Wilson",
    role: "Parent of Child with SCD",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    quote:
      "Volunteering with Soundminds Sicklecell-Association has been a rewarding experience. I've seen firsthand how education and awareness can make a real difference in people's lives.",
    author: "Maria Rodriguez",
    role: "Volunteer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
  },
]

interface TestimonialSliderProps {
  autoplay?: boolean
  interval?: number
  className?: string
}

export function TestimonialSlider({ autoplay = true, interval = 5000, className = "" }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("right")

  useEffect(() => {
    if (!autoplay) return

    const timer = setInterval(() => {
      setDirection("right")
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoplay, interval])

  const handlePrevious = () => {
    setDirection("left")
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setDirection("right")
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  const slideVariants = {
    hiddenRight: { x: 300, opacity: 0 },
    hiddenLeft: { x: -300, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute top-0 left-0 w-16 h-16 bg-brand-green/10 rounded-br-3xl z-10">
        <Quote className="h-8 w-8 text-brand-green absolute top-4 left-4" />
      </div>

      <div className="px-4 py-12 md:py-16 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial.id}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className="flex flex-col items-center text-center"
          >
            <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6">
              {currentTestimonial.image ? (
                <Image
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.author}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-brand-green/20 flex items-center justify-center">
                  <span className="text-brand-green font-bold text-xl">{currentTestimonial.author.charAt(0)}</span>
                </div>
              )}
            </div>

            <blockquote className="text-xl md:text-2xl font-medium text-gray-700 mb-6 max-w-3xl">
              "{currentTestimonial.quote}"
            </blockquote>

            <div>
              <p className="font-bold text-brand-green">{currentTestimonial.author}</p>
              <p className="text-gray-500">{currentTestimonial.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-brand-green w-4" : "bg-gray-300"
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? "right" : "left")
              setCurrentIndex(index)
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={handlePrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-brand-green hover:bg-brand-green/5 transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-brand-green hover:bg-brand-green/5 transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}

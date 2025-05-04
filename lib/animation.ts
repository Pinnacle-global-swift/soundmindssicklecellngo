"use client"

import type { Variants } from "framer-motion"

// Fade in animation
export const fadeIn = (direction: "up" | "down" | "left" | "right" = "up", delay = 0): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        delay,
      },
    },
  }
}

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Scale animation
export const scaleIn = (delay = 0): Variants => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        delay,
      },
    },
  }
}

// Slide in animation
export const slideIn = (direction: "up" | "down" | "left" | "right", delay = 0, duration = 0.5): Variants => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay,
        duration,
      },
    },
  }
}

// Pulse animation
export const pulse: Variants = {
  hidden: { scale: 1 },
  show: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
    },
  },
}

// Rotate animation
export const rotate: Variants = {
  hidden: { rotate: 0 },
  show: {
    rotate: 360,
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Number.POSITIVE_INFINITY,
    },
  },
}

// Bounce animation
export const bounce: Variants = {
  hidden: { y: 0 },
  show: {
    y: [0, -10, 0],
    transition: {
      duration: 1.5,
      repeat: Number.POSITIVE_INFINITY,
    },
  },
}

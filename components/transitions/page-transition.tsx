"use client"

import { ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

interface PageTransitionProps {
  children: ReactNode
  variant?: "fade" | "slide" | "scale"
}

const variants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slide: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
}

/**
 * PageTransition - Smooth page transitions
 * Wraps page content with transition animations
 */
export function PageTransition({ children, variant = "fade" }: PageTransitionProps) {
  const pathname = usePathname()
  const variantConfig = variants[variant]

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={variantConfig.initial}
        animate={variantConfig.animate}
        exit={variantConfig.exit}
        transition={{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}


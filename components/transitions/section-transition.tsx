"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface SectionTransitionProps {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: boolean
}

/**
 * SectionTransition - Animated section wrapper
 * Wraps sections with smooth entrance animations
 */
export function SectionTransition({
  children,
  className,
  delay = 0,
  stagger = false,
}: SectionTransitionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.section>
  )
}


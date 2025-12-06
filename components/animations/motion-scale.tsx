"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MotionScaleProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  scale?: number
  hover?: boolean
}

/**
 * MotionScale - Framer Motion scale animation
 * Scales element in on view, with optional hover effect
 */
export function MotionScale({
  children,
  className,
  delay = 0,
  duration = 0.5,
  scale = 0.95,
  hover = false,
}: MotionScaleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={hover ? { scale: 1.05 } : undefined}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}


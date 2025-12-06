"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PulseProps {
  children: ReactNode
  className?: string
  duration?: number
  scale?: number
}

/**
 * Pulse - Pulsing animation effect
 * Creates a subtle pulsing animation for attention
 */
export function Pulse({
  children,
  className,
  duration = 2,
  scale = 1.05,
}: PulseProps) {
  return (
    <motion.div
      animate={{
        scale: [1, scale, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}


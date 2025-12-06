"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MotionSlideInProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "left" | "right" | "up" | "down"
  distance?: number
}

/**
 * MotionSlideIn - Framer Motion slide-in animation
 * Smooth slide-in from specified direction
 */
export function MotionSlideIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "left",
  distance = 50,
}: MotionSlideInProps) {
  const directionMap = {
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
  }

  return (
    <motion.div
      initial={directionMap[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
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


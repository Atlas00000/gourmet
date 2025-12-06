"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MotionFadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
}

const directionMap = {
  up: { y: 20, x: 0 },
  down: { y: -20, x: 0 },
  left: { x: 20, y: 0 },
  right: { x: -20, y: 0 },
  none: { x: 0, y: 0 },
}

/**
 * MotionFadeIn - Framer Motion fade-in animation
 * Smooth fade-in with optional directional movement
 */
export function MotionFadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 20,
}: MotionFadeInProps) {
  const initial = directionMap[direction]
  const multiplier = direction === "up" || direction === "left" ? 1 : -1

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initial.x * (distance / 20),
        y: initial.y * (distance / 20),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
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


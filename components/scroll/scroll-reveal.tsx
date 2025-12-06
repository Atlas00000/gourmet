"use client"

import { ReactNode } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
  distance?: number
  once?: boolean
}

const directionMap = {
  up: { y: 50, x: 0 },
  down: { y: -50, x: 0 },
  left: { x: 50, y: 0 },
  right: { x: -50, y: 0 },
  fade: { x: 0, y: 0 },
}

/**
 * ScrollReveal - Reveals content on scroll
 * Smooth reveal animation when element enters viewport
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 50,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once,
    margin: "-100px",
  })

  const initial = directionMap[direction]
  const multiplier = direction === "up" || direction === "left" ? 1 : -1

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: initial.x * (distance / 50),
        y: initial.y * (distance / 50),
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
            }
          : {
              opacity: 0,
              x: initial.x * (distance / 50),
              y: initial.y * (distance / 50),
            }
      }
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


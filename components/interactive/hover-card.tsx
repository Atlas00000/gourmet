"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HoverCardProps {
  children: ReactNode
  className?: string
  hoverScale?: number
  hoverShadow?: boolean
  glow?: boolean
}

/**
 * HoverCard - Interactive card with hover effects
 * Lifts and glows on hover for premium feel
 */
export function HoverCard({
  children,
  className,
  hoverScale = 1.02,
  hoverShadow = true,
  glow = false,
}: HoverCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: hoverScale,
        y: -8,
      }}
      transition={{
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={cn(
        "rounded-xl transition-all duration-300",
        hoverShadow && "hover:shadow-xl hover:shadow-primary/20",
        glow && "hover:ring-2 hover:ring-primary/30",
        className
      )}
    >
      {children}
    </motion.div>
  )
}


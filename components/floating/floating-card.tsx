"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingCardProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

/**
 * FloatingCard - Card with floating animation
 * Gentle up-and-down floating motion
 */
export function FloatingCard({
  children,
  className,
  delay = 0,
  y = 10,
}: FloatingCardProps) {
  return (
    <motion.div
      animate={{
        y: [0, -y, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}


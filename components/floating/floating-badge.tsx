"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface FloatingBadgeProps {
  children: ReactNode
  className?: string
  variant?: "default" | "primary" | "secondary"
  pulse?: boolean
}

/**
 * FloatingBadge - Animated badge with floating effect
 * Badge with optional pulse animation
 */
export function FloatingBadge({
  children,
  className,
  variant = "default",
  pulse = false,
}: FloatingBadgeProps) {
  return (
    <motion.div
      animate={pulse ? { scale: [1, 1.1, 1] } : {}}
      transition={{
        duration: 2,
        repeat: pulse ? Infinity : 0,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.1, y: -2 }}
      className={cn("inline-block", className)}
    >
      <Badge
        className={cn(
          variant === "primary" && "bg-primary text-primary-foreground",
          variant === "secondary" && "bg-secondary text-secondary-foreground",
          "shadow-md"
        )}
      >
        {children}
      </Badge>
    </motion.div>
  )
}


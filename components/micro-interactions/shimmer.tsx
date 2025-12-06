"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ShimmerProps {
  children: ReactNode
  className?: string
  direction?: "left" | "right"
}

/**
 * Shimmer - Shimmer loading effect
 * Animated shimmer overlay for loading states
 */
export function Shimmer({ children, className, direction = "right" }: ShimmerProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {children}
      <div
        className={cn(
          "absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r",
          "from-transparent via-white/20 to-transparent",
          direction === "left" && "translate-x-full"
        )}
        style={{
          animation: "shimmer 2s infinite",
        }}
      />
    </div>
  )
}


"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { cn } from "@/lib/utils"

interface ScrollProgressProps {
  className?: string
  color?: "primary" | "secondary"
  height?: number
  position?: "top" | "bottom"
}

/**
 * ScrollProgress - Scroll progress indicator
 * Shows reading progress at top or bottom of page
 */
export function ScrollProgress({
  className,
  color = "primary",
  height = 3,
  position = "top",
}: ScrollProgressProps) {
  const [progress, setProgress] = useState(0)

  // Use optimized smooth scroll hook with requestAnimationFrame
  useSmoothScroll(
    (scrollY, scrollProgress) => {
      setProgress(scrollProgress)
    },
    {
      throttle: 16, // ~60fps
      passive: true,
    }
  )

  const colorClass =
    color === "primary"
      ? "bg-gradient-to-r from-primary to-secondary"
      : "bg-gradient-to-r from-secondary to-primary"

  return (
    <div
      className={cn(
        "fixed left-0 right-0 z-50",
        position === "top" ? "top-0" : "bottom-0",
        className
      )}
      style={{ height: `${height}px` }}
    >
      <motion.div
        className={cn("h-full origin-left", colorClass)}
        style={{
          width: "100%",
        }}
        animate={{
          scaleX: progress / 100,
        }}
        transition={{
          duration: 0.1,
          ease: "linear",
        }}
      />
    </div>
  )
}


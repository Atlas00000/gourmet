"use client"

import { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface SlideInProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "left" | "right" | "up" | "down"
  distance?: number
}

/**
 * SlideIn component - Slides element in from specified direction on scroll
 */
export function SlideIn({
  children,
  className,
  delay = 0,
  duration = 600,
  direction = "left",
  distance = 50,
}: SlideInProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  const directionMap = {
    left: `translateX(-${distance}px)`,
    right: `translateX(${distance}px)`,
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
  }

  return (
    <div
      ref={ref}
      className={cn("transition-all", className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : directionMap[direction],
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </div>
  )
}


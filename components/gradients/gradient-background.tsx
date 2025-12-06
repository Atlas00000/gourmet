"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GradientBackgroundProps {
  children: ReactNode
  className?: string
  variant?: "primary" | "hero" | "card" | "overlay" | "custom"
  customGradient?: string
  animated?: boolean
}

const gradientMap = {
  primary: "bg-gradient-to-br from-primary/10 via-background to-secondary/5",
  hero: "bg-gradient-to-br from-primary/10 via-background to-secondary/5",
  card: "bg-gradient-to-br from-primary/5 via-card to-secondary/5",
  overlay: "bg-gradient-to-t from-black/30 via-transparent to-transparent",
  custom: "",
}

/**
 * GradientBackground - Container with gradient background
 * Optional animated gradient for dynamic effects
 */
export function GradientBackground({
  children,
  className,
  variant = "primary",
  customGradient,
  animated = false,
}: GradientBackgroundProps) {
  const gradientClass =
    variant === "custom" && customGradient
      ? customGradient
      : gradientMap[variant]

  return (
    <div
      className={cn(
        gradientClass,
        animated && "animate-gradient",
        className
      )}
    >
      {children}
    </div>
  )
}


"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: ReactNode
  className?: string
  gradient?: "primary" | "secondary" | "custom"
  customGradient?: string
}

const gradientMap = {
  primary: "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
  secondary: "bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent",
  custom: "",
}

/**
 * GradientText - Text with gradient effect
 * Applies gradient to text using bg-clip-text
 */
export function GradientText({
  children,
  className,
  gradient = "primary",
  customGradient,
}: GradientTextProps) {
  const gradientClass =
    gradient === "custom" && customGradient
      ? `bg-gradient-to-r ${customGradient} bg-clip-text text-transparent`
      : gradientMap[gradient]

  return <span className={cn("font-bold", gradientClass, className)}>{children}</span>
}


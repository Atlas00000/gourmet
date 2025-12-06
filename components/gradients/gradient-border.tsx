"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GradientBorderProps {
  children: ReactNode
  className?: string
  variant?: "primary" | "secondary" | "custom"
  customGradient?: string
  width?: number
}

const gradientMap = {
  primary: "from-primary via-secondary to-primary",
  secondary: "from-secondary via-primary to-secondary",
  custom: "",
}

/**
 * GradientBorder - Element with gradient border
 * Creates a gradient border effect using pseudo-elements
 */
export function GradientBorder({
  children,
  className,
  variant = "primary",
  customGradient,
  width = 2,
}: GradientBorderProps) {
  const gradientClass =
    variant === "custom" && customGradient
      ? customGradient
      : `bg-gradient-to-r ${gradientMap[variant]}`

  return (
    <div
      className={cn("relative rounded-xl p-[2px]", className)}
      style={{
        background: variant === "custom" && customGradient
          ? customGradient
          : `linear-gradient(to right, var(--primary), var(--secondary), var(--primary))`,
      }}
    >
      <div className="bg-background rounded-xl h-full w-full">{children}</div>
    </div>
  )
}


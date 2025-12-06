"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassContainerProps {
  children: ReactNode
  className?: string
  variant?: "light" | "dark"
  blur?: "sm" | "md" | "lg"
}

const blurMap = {
  sm: "backdrop-blur-sm",
  md: "backdrop-blur-md",
  lg: "backdrop-blur-lg",
}

/**
 * GlassContainer - Glassmorphism container component
 * Container with backdrop blur and transparency
 */
export function GlassContainer({
  children,
  className,
  variant = "light",
  blur = "md",
}: GlassContainerProps) {
  const baseStyles =
    variant === "light"
      ? "bg-white/10 backdrop-blur-md border border-white/20"
      : "bg-gray-900/10 backdrop-blur-md border border-white/10"

  return (
    <div className={cn("rounded-xl shadow-lg", baseStyles, blurMap[blur], className)}>
      {children}
    </div>
  )
}


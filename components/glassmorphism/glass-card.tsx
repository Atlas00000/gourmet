"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: ReactNode
  className?: string
  variant?: "light" | "dark"
  hover?: boolean
}

/**
 * GlassCard - Glassmorphism card component
 * Semi-transparent card with backdrop blur effect
 */
export function GlassCard({
  children,
  className,
  variant = "light",
  hover = true,
}: GlassCardProps) {
  const baseStyles =
    variant === "light"
      ? "bg-white/70 backdrop-blur-md border border-white/20"
      : "bg-gray-900/70 backdrop-blur-md border border-white/10"

  return (
    <div
      className={cn(
        "rounded-xl shadow-lg transition-all duration-300",
        baseStyles,
        hover && "hover:bg-white/80 hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  )
}


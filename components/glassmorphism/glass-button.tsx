"use client"

import { ReactNode, ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "light" | "dark"
  size?: "sm" | "md" | "lg"
}

const sizeMap = {
  sm: "h-8 px-4 text-sm",
  md: "h-10 px-6",
  lg: "h-12 px-8 text-lg",
}

/**
 * GlassButton - Glassmorphism button component
 * Semi-transparent button with backdrop blur
 */
export function GlassButton({
  children,
  className,
  variant = "light",
  size = "md",
  ...props
}: GlassButtonProps) {
  const baseStyles =
    variant === "light"
      ? "bg-white/10 backdrop-blur-md border border-white/20 text-foreground"
      : "bg-gray-900/10 backdrop-blur-md border border-white/10 text-foreground"

  return (
    <button
      className={cn(
        "rounded-lg font-medium transition-all duration-300",
        "hover:bg-white/20 hover:shadow-lg hover:scale-105 active:scale-95",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
        baseStyles,
        sizeMap[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}


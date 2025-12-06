"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  className?: string
  size?: "sm" | "md" | "lg"
  color?: "primary" | "secondary" | "white"
}

const sizeMap = {
  sm: "w-4 h-4",
  md: "w-8 h-8",
  lg: "w-12 h-12",
}

const colorMap = {
  primary: "border-primary",
  secondary: "border-secondary",
  white: "border-white",
}

/**
 * LoadingSpinner - Animated loading spinner
 * Smooth rotating spinner with customizable size and color
 */
export function LoadingSpinner({
  className,
  size = "md",
  color = "primary",
}: LoadingSpinnerProps) {
  return (
    <motion.div
      className={cn(
        "rounded-full border-2 border-t-transparent",
        sizeMap[size],
        colorMap[color],
        className
      )}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  )
}


"use client"

import { ReactNode, ButtonHTMLAttributes } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left"
  offset?: number
}

const positionMap = {
  "bottom-right": "bottom-6 right-6",
  "bottom-left": "bottom-6 left-6",
  "top-right": "top-6 right-6",
  "top-left": "top-6 left-6",
}

/**
 * FloatingButton - Floating action button
 * Elevated button that floats above content with smooth animations
 */
export function FloatingButton({
  children,
  className,
  position = "bottom-right",
  offset = 24,
  ...props
}: FloatingButtonProps) {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={cn(
        "fixed z-50 rounded-full shadow-2xl",
        "bg-primary text-primary-foreground",
        "hover:shadow-primary/40",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
        positionMap[position],
        className
      )}
      style={{
        width: 56,
        height: 56,
      }}
      {...props}
    >
      {children}
    </motion.button>
  )
}


"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface StoriesLayoutProps {
  children: ReactNode
  className?: string
  variant?: "grid" | "masonry" | "flow"
}

/**
 * StoriesLayout - Fluid, non-boxed layout for success stories
 * Dynamic grid that adapts and flows naturally
 */
export function StoriesLayout({
  children,
  className,
  variant = "grid",
}: StoriesLayoutProps) {
  if (variant === "masonry") {
    return (
      <div className={cn("columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8", className)}>
        {children}
      </div>
    )
  }

  if (variant === "flow") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10",
          "auto-rows-fr",
          className
        )}
      >
        {children}
      </motion.div>
    )
  }

  // Default: Dynamic Grid
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10",
        "auto-rows-fr",
        className
      )}
    >
      {children}
    </motion.div>
  )
}


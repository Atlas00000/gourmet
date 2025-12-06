"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ShowcaseLayoutProps {
  children: ReactNode
  className?: string
  variant?: "grid" | "masonry" | "carousel"
}

/**
 * ShowcaseLayout - Fluid, non-boxed layout for products
 * Dynamic grid that adapts and flows naturally
 */
export function ShowcaseLayout({
  children,
  className,
  variant = "grid",
}: ShowcaseLayoutProps) {
  if (variant === "masonry") {
    return (
      <div className={cn("columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8", className)}>
        {children}
      </div>
    )
  }

  if (variant === "carousel") {
    return (
      <div className={cn("flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory", className)}>
        {children}
      </div>
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
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12",
        "auto-rows-fr",
        className
      )}
    >
      {children}
    </motion.div>
  )
}


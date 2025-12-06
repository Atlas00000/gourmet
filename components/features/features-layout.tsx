"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FeaturesLayoutProps {
  children: ReactNode
  className?: string
  variant?: "grid" | "masonry" | "flow"
  columns?: 2 | 3 | 4
}

/**
 * FeaturesLayout - Fluid, non-boxed layout for features
 * Dynamic grid that adapts and flows naturally
 */
export function FeaturesLayout({
  children,
  className,
  variant = "grid",
  columns = 4,
}: FeaturesLayoutProps) {
  if (variant === "masonry") {
    return (
      <div className={cn("columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8", className)}>
        {children}
      </div>
    )
  }

  if (variant === "flow") {
    const gridCols = {
      2: "md:grid-cols-2",
      3: "md:grid-cols-2 lg:grid-cols-3",
      4: "md:grid-cols-2 lg:grid-cols-4",
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "grid grid-cols-1 gap-8 lg:gap-12",
          gridCols[columns],
          "auto-rows-fr",
          "relative",
          className
        )}
      >
        {children}
      </motion.div>
    )
  }

  // Default: Dynamic Grid with Fluid Layout
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "grid grid-cols-1 gap-8 lg:gap-12",
        gridCols[columns],
        "auto-rows-fr",
        "relative",
        className
      )}
    >
      {/* Subtle connecting lines for fluid feel */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: "calc(100% / ${columns}) calc(100% / 2)",
        }}
      />
      
      {children}
    </motion.div>
  )
}


"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TestimonialsLayoutProps {
  children: ReactNode
  className?: string
  variant?: "grid" | "masonry" | "flow"
}

/**
 * TestimonialsLayout - Fluid, non-boxed layout for testimonials
 * Dynamic grid that adapts and flows naturally
 */
export function TestimonialsLayout({
  children,
  className,
  variant = "grid",
}: TestimonialsLayoutProps) {
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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12",
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12",
        "auto-rows-fr",
        "relative",
        className
      )}
    >
      {/* Subtle connecting lines for fluid feel */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: "calc(100% / 3) calc(100% / 2)",
        }}
      />
      
      {children}
    </motion.div>
  )
}


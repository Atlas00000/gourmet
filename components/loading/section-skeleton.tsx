"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionSkeletonProps {
  className?: string
  variant?: "default" | "minimal"
}

/**
 * SectionSkeleton - Loading skeleton for lazy-loaded sections
 * Matches app theme with glassmorphism and subtle animations
 */
export function SectionSkeleton({ className, variant = "default" }: SectionSkeletonProps) {
  if (variant === "minimal") {
    return (
      <div className={cn("relative py-24 overflow-hidden", className)}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl w-3/4 mx-auto" />
            <div className="h-6 bg-muted/50 rounded-lg w-1/2 mx-auto" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("relative py-24 lg:py-32 overflow-hidden", className)}>
      {/* Subtle Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="text-center mb-16 space-y-6">
          <motion.div
            className="h-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl w-2/3 mx-auto"
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="h-6 bg-muted/50 rounded-lg w-1/2 mx-auto" />
        </div>

        {/* Content Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={cn(
                "relative h-96 rounded-3xl overflow-hidden",
                "bg-gradient-to-br from-background/80 via-background/70 to-background/80",
                "backdrop-blur-xl",
                "border border-white/10"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: [0.5, 0.8, 0.5],
                y: 0,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            >
              {/* Image Skeleton */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10" />
              
              {/* Content Skeleton */}
              <div className="p-6 space-y-4">
                <div className="h-6 bg-muted/50 rounded-lg w-3/4" />
                <div className="h-4 bg-muted/30 rounded-lg w-full" />
                <div className="h-4 bg-muted/30 rounded-lg w-5/6" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


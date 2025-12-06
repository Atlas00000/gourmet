"use client"

import { motion } from "framer-motion"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"
import { cn } from "@/lib/utils"

interface LoadingProgressProps {
  progress: number
  className?: string
}

/**
 * LoadingProgress - Ultra-animated progress indicator
 * Features gradient effects, smooth transitions, and stunning visual feedback
 */
export function LoadingProgress({ progress, className }: LoadingProgressProps) {
  return (
    <motion.div
      className={cn("w-full max-w-md mx-auto space-y-4", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      {/* Progress Bar Container */}
      <div className="relative w-full h-3 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />

        {/* Progress Fill - Using scaleX to prevent layout thrash */}
        <motion.div
          className="relative h-full rounded-full overflow-hidden origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          style={{
            width: "100%",
          }}
        >
          {/* Main Gradient Fill */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary"
            animate={{
              backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 100%",
            }}
          />

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: "50%",
              height: "100%",
              transform: "skewX(-20deg)",
            }}
          />

          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 blur-sm"
            animate={{
              opacity: [0.5, 1, 0.5],
              boxShadow: [
                "0 0 10px rgba(var(--primary-rgb), 0.5)",
                "0 0 20px rgba(var(--primary-rgb), 0.8)",
                "0 0 10px rgba(var(--primary-rgb), 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: "linear-gradient(to right, var(--primary), var(--secondary))",
            }}
          />
        </motion.div>

        {/* Progress Percentage */}
        <motion.div
          className="absolute -top-8 right-0 text-sm font-bold"
          animate={{
            color: [
              "rgba(var(--primary-rgb), 1)",
              "rgba(var(--secondary-rgb), 1)",
              "rgba(var(--primary-rgb), 1)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {Math.round(progress)}%
        </motion.div>
      </div>

      {/* Progress Text */}
      <motion.p
        className="text-center text-sm text-muted-foreground"
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {progress < 30 && "Preparing your experience..."}
        {progress >= 30 && progress < 60 && "Loading ingredients..."}
        {progress >= 60 && progress < 90 && "Setting up your kitchen..."}
        {progress >= 90 && "Almost ready..."}
      </motion.p>
    </motion.div>
  )
}


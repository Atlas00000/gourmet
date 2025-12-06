"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HeroDynamicShapesProps {
  className?: string
}

/**
 * HeroDynamicShapes - Dynamic animated shapes for visual interest
 * Creates organic, non-boxed visual elements
 */
export function HeroDynamicShapes({ className }: HeroDynamicShapesProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Floating Blobs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`blob-${i}`}
          className="absolute rounded-full blur-2xl opacity-20"
          style={{
            width: `${150 + i * 50}px`,
            height: `${150 + i * 50}px`,
            background: i % 2 === 0
              ? "radial-gradient(circle, var(--primary), transparent)"
              : "radial-gradient(circle, var(--secondary), transparent)",
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.3, 0.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated Lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute"
          style={{
            width: "2px",
            height: "200px",
            background: `linear-gradient(to bottom, var(--primary), transparent)`,
            left: `${30 + i * 20}%`,
            top: `${10 + i * 30}%`,
            transformOrigin: "top",
          }}
          animate={{
            rotate: [0, 360],
            scaleY: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Geometric Shapes */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute"
          style={{
            width: "80px",
            height: "80px",
            border: "2px solid var(--primary)",
            borderRadius: i % 2 === 0 ? "50%" : "20%",
            opacity: 0.1,
            right: `${10 + i * 15}%`,
            bottom: `${15 + (i % 2) * 20}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}


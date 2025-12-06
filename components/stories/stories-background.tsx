"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface StoriesBackgroundProps {
  className?: string
}

/**
 * StoriesBackground - Dynamic background for success stories
 * Creates depth with animated gradients, particles, and flowing effects
 */
export function StoriesBackground({ className }: StoriesBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Animated Gradient Layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-2xl opacity-10"
          style={{
            width: `${150 + i * 50}px`,
            height: `${150 + i * 50}px`,
            background: i % 3 === 0
              ? "radial-gradient(circle, var(--secondary), transparent)"
              : i % 3 === 1
              ? "radial-gradient(circle, var(--primary), transparent)"
              : "radial-gradient(circle, var(--accent), transparent)",
            left: `${5 + (i * 12) % 90}%`,
            top: `${10 + (i * 15) % 80}%`,
          }}
          animate={{
            x: [0, 100, -80, 0],
            y: [0, -120, 90, 0],
            scale: [1, 1.5, 0.8, 1],
            opacity: [0.1, 0.2, 0.15, 0.1],
          }}
          transition={{
            duration: 30 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Flowing Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.5" />
            <stop offset="50%" stopColor="var(--secondary)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {[...Array(5)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${i * 20}% 0 Q ${50 + i * 10}% 50% ${i * 20}% 100%`}
            stroke="url(#flowGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </svg>

      {/* Mesh Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(var(--primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />
    </div>
  )
}


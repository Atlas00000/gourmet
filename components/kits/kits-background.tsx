"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface KitsBackgroundProps {
  className?: string
}

/**
 * KitsBackground - Dynamic background for cooking kits
 * Creates depth with animated gradients, particles, and flowing effects
 */
export function KitsBackground({ className }: KitsBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Animated Gradient Layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/7 via-transparent to-secondary/7"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-2xl opacity-9"
          style={{
            width: `${125 + i * 40}px`,
            height: `${125 + i * 40}px`,
            background: i % 3 === 0
              ? "radial-gradient(circle, var(--secondary), transparent)"
              : i % 3 === 1
              ? "radial-gradient(circle, var(--primary), transparent)"
              : "radial-gradient(circle, var(--accent), transparent)",
            left: `${(i * 9) % 91}%`,
            top: `${(i * 12) % 87}%`,
          }}
          animate={{
            x: [0, 115, -95, 0],
            y: [0, -135, 105, 0],
            scale: [1, 1.5, 0.75, 1],
            opacity: [0.09, 0.18, 0.13, 0.09],
          }}
          transition={{
            duration: 31 + i * 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Flowing Wave Patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-3">
        <defs>
          <linearGradient id="kitsWaveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.32" />
            <stop offset="50%" stopColor="var(--secondary)" stopOpacity="0.32" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.32" />
          </linearGradient>
        </defs>
        {[...Array(4)].map((_, i) => (
          <motion.path
            key={i}
            d={`M 0 ${22 + i * 28}% Q 50% ${17 + i * 28}% 100% ${22 + i * 28}%`}
            stroke="url(#kitsWaveGradient)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.21, 0],
            }}
            transition={{
              duration: 12 + i * 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2.8,
            }}
          />
        ))}
      </svg>

      {/* Subtle Mesh Pattern */}
      <div
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `
            linear-gradient(var(--primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: "108px 108px",
        }}
      />
    </div>
  )
}


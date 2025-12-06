"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GiftBackgroundProps {
  className?: string
}

/**
 * GiftBackground - Dynamic background for gift options
 * Creates depth with animated gradients, particles, and flowing effects
 */
export function GiftBackground({ className }: GiftBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Animated Gradient Layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-secondary/6"
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
      {[...Array(9)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-2xl opacity-8"
          style={{
            width: `${130 + i * 45}px`,
            height: `${130 + i * 45}px`,
            background: i % 3 === 0
              ? "radial-gradient(circle, var(--secondary), transparent)"
              : i % 3 === 1
              ? "radial-gradient(circle, var(--primary), transparent)"
              : "radial-gradient(circle, var(--accent), transparent)",
            left: `${(i * 10) % 90}%`,
            top: `${(i * 13) % 85}%`,
          }}
          animate={{
            x: [0, 110, -90, 0],
            y: [0, -130, 100, 0],
            scale: [1, 1.5, 0.75, 1],
            opacity: [0.08, 0.18, 0.12, 0.08],
          }}
          transition={{
            duration: 32 + i * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Flowing Wave Patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-3">
        <defs>
          <linearGradient id="giftWaveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
            <stop offset="50%" stopColor="var(--secondary)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        {[...Array(4)].map((_, i) => (
          <motion.path
            key={i}
            d={`M 0 ${20 + i * 30}% Q 50% ${15 + i * 30}% 100% ${20 + i * 30}%`}
            stroke="url(#giftWaveGradient)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: 11 + i * 2.5,
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
          backgroundSize: "110px 110px",
        }}
      />
    </div>
  )
}


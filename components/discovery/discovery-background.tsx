"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface DiscoveryBackgroundProps {
  className?: string
}

/**
 * DiscoveryBackground - Dynamic background for recipe discovery
 * Creates depth with animated gradients, particles, and flowing effects
 */
export function DiscoveryBackground({ className }: DiscoveryBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Animated Gradient Layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-secondary/8 via-transparent to-primary/8"
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
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-2xl opacity-10"
          style={{
            width: `${120 + i * 40}px`,
            height: `${120 + i * 40}px`,
            background: i % 3 === 0
              ? "radial-gradient(circle, var(--primary), transparent)"
              : i % 3 === 1
              ? "radial-gradient(circle, var(--secondary), transparent)"
              : "radial-gradient(circle, var(--accent), transparent)",
            left: `${(i * 9) % 92}%`,
            top: `${(i * 11) % 88}%`,
          }}
          animate={{
            x: [0, 100, -80, 0],
            y: [0, -120, 90, 0],
            scale: [1, 1.4, 0.8, 1],
            opacity: [0.1, 0.2, 0.15, 0.1],
          }}
          transition={{
            duration: 28 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Flowing Curves */}
      <svg className="absolute inset-0 w-full h-full opacity-4">
        <defs>
          <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
            <stop offset="50%" stopColor="var(--secondary)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {[...Array(3)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${i * 33}% 0 Q ${50 + i * 5}% 50% ${i * 33}% 100%`}
            stroke="url(#curveGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.25, 0],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 4,
            }}
          />
        ))}
      </svg>

      {/* Subtle Mesh Pattern */}
      <div
        className="absolute inset-0 opacity-[0.012]"
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


"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface NotFoundBackgroundProps {
  className?: string
}

/**
 * NotFoundBackground - Dynamic background for 404 page
 * Shares the same visual language as hero/loading (gradients, particles, waves)
 */
export function NotFoundBackground({ className }: NotFoundBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Gradient Mesh */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{
          background: `
            radial-gradient(circle at 15% 25%, var(--primary) 0%, transparent 55%),
            radial-gradient(circle at 85% 75%, var(--secondary) 0%, transparent 55%),
            radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 55%)
          `,
          backgroundSize: "220% 220%",
          opacity: 0.18,
        }}
      />

      {/* Floating Orbs */}
      {[...Array(14)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${120 + i * 30}px`,
            height: `${120 + i * 30}px`,
            background:
              i % 3 === 0
                ? "radial-gradient(circle, var(--primary), transparent)"
                : i % 3 === 1
                ? "radial-gradient(circle, var(--secondary), transparent)"
                : "radial-gradient(circle, var(--accent), transparent)",
            left: `${(i * 7.3) % 95}%`,
            top: `${(i * 9.1) % 90}%`,
          }}
          animate={{
            x: [0, 110, -90, 0],
            y: [0, -120, 95, 0],
            scale: [1, 1.4, 0.85, 1],
            opacity: [0.08, 0.22, 0.12, 0.08],
          }}
          transition={{ duration: 30 + i * 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Subtle Wave Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <defs>
          <linearGradient id="nfWave" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
            <stop offset="50%" stopColor="var(--secondary)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {[...Array(5)].map((_, i) => (
          <motion.path
            key={i}
            d={`M 0 ${20 + i * 15}% Q 50% ${10 + i * 20}% 100% ${20 + i * 15}%`}
            stroke="url(#nfWave)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{ duration: 14 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
          />
        ))}
      </svg>

      {/* Light Grid */}
      <motion.div
        className="absolute inset-0"
        animate={{ backgroundPosition: ["0px 0px", "100px 100px", "0px 0px"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            linear-gradient(var(--primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
          opacity: 0.03,
        }}
      />
    </div>
  )
}


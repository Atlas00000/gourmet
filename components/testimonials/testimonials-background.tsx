"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TestimonialsBackgroundProps {
  className?: string
}

/**
 * TestimonialsBackground - Ultra-dynamic background for testimonials section
 * Creates stunning depth with animated mesh gradients, enhanced particles, and flowing wave effects
 */
export function TestimonialsBackground({ className }: TestimonialsBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Multi-Layer Animated Gradient Mesh */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: `
            radial-gradient(circle at 18% 28%, var(--primary) 0%, transparent 55%),
            radial-gradient(circle at 82% 72%, var(--secondary) 0%, transparent 55%),
            radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 55%),
            radial-gradient(circle at 25% 75%, var(--primary) 0%, transparent 50%)
          `,
          backgroundSize: "220% 220%",
          opacity: 0.12,
        }}
      />

      {/* Enhanced Floating Particles with Physics */}
      {[...Array(16)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${110 + i * 35}px`,
            height: `${110 + i * 35}px`,
            background: i % 5 === 0
              ? "radial-gradient(circle, var(--secondary), transparent)"
              : i % 5 === 1
              ? "radial-gradient(circle, var(--primary), transparent)"
              : i % 5 === 2
              ? "radial-gradient(circle, var(--accent), transparent)"
              : i % 5 === 3
              ? "radial-gradient(circle, var(--primary), transparent)"
              : "radial-gradient(circle, var(--secondary), transparent)",
            left: `${(i * 6.5) % 94}%`,
            top: `${(i * 9.2) % 91}%`,
          }}
          animate={{
            x: [0, 115, -95, 0],
            y: [0, -135, 105, 0],
            scale: [1, 1.55, 0.75, 1],
            opacity: [0.08, 0.2, 0.13, 0.08],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 38 + i * 3.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.65,
          }}
        />
      ))}

      {/* Enhanced Flowing Wave Patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-4">
        <defs>
          <linearGradient id="testimonialsWaveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
            <stop offset="50%" stopColor="var(--secondary)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="testimonialsWaveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.35" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <motion.path
            key={i}
            d={`M 0 ${20 + i * 20}% Q 50% ${15 + i * 20}% 100% ${20 + i * 20}%`}
            stroke={i % 2 === 0 ? "url(#testimonialsWaveGradient1)" : "url(#testimonialsWaveGradient2)"}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.25, 0],
              d: [
                `M 0 ${20 + i * 20}% Q 50% ${15 + i * 20}% 100% ${20 + i * 20}%`,
                `M 0 ${22 + i * 20}% Q 52% ${17 + i * 20}% 100% ${22 + i * 20}%`,
                `M 0 ${20 + i * 20}% Q 50% ${15 + i * 20}% 100% ${20 + i * 20}%`,
              ],
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

      {/* Animated Mesh Grid Pattern */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0px 0px", "115px 115px", "0px 0px"],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            linear-gradient(var(--primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: "125px 125px",
          opacity: 0.025,
        }}
      />

      {/* Rotating Orbital Rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary/9"
          style={{
            width: `${380 + i * 280}px`,
            height: `${380 + i * 280}px`,
            left: `${22 + i * 18}%`,
            top: `${12 + i * 16}%`,
            borderStyle: "dashed",
            borderWidth: "1.5px",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.18, 1],
            opacity: [0.05, 0.14, 0.05],
          }}
          transition={{
            duration: 32 + i * 14,
            repeat: Infinity,
            ease: "linear",
            delay: i * 4.5,
          }}
        />
      ))}

      {/* Pulsing Glow Spots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${190 + i * 95}px`,
            height: `${190 + i * 95}px`,
            background: i % 3 === 0
              ? "radial-gradient(circle, var(--primary), transparent)"
              : i % 3 === 1
              ? "radial-gradient(circle, var(--secondary), transparent)"
              : "radial-gradient(circle, var(--accent), transparent)",
            left: `${(i * 17) % 83}%`,
            top: `${(i * 20) % 80}%`,
          }}
          animate={{
            scale: [1, 1.75, 1],
            opacity: [0.06, 0.18, 0.06],
          }}
          transition={{
            duration: 9.5 + i * 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.6,
          }}
        />
      ))}
    </div>
  )
}


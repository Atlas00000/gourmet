"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FeaturesBackgroundProps {
  className?: string
}

/**
 * FeaturesBackground - Ultra-dynamic background for features section
 * Creates stunning depth with animated mesh gradients, enhanced particles, and flowing wave effects
 */
export function FeaturesBackground({ className }: FeaturesBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Multi-Layer Animated Gradient Mesh */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: `
            radial-gradient(circle at 20% 30%, var(--primary) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, var(--secondary) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 50%)
          `,
          backgroundSize: "200% 200%",
          opacity: 0.12,
        }}
      />

      {/* Enhanced Floating Particles with Physics */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${120 + i * 40}px`,
            height: `${120 + i * 40}px`,
            background: i % 5 === 0
              ? "radial-gradient(circle, var(--secondary), transparent)"
              : i % 5 === 1
              ? "radial-gradient(circle, var(--primary), transparent)"
              : i % 5 === 2
              ? "radial-gradient(circle, var(--accent), transparent)"
              : i % 5 === 3
              ? "radial-gradient(circle, var(--primary), transparent)"
              : "radial-gradient(circle, var(--secondary), transparent)",
            left: `${(i * 7.2) % 95}%`,
            top: `${(i * 9.5) % 90}%`,
          }}
          animate={{
            x: [0, 120, -100, 0],
            y: [0, -140, 110, 0],
            scale: [1, 1.6, 0.7, 1],
            opacity: [0.08, 0.22, 0.15, 0.08],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 35 + i * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Flowing Wave Patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <defs>
          <linearGradient id="featuresWaveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
            <stop offset="50%" stopColor="var(--secondary)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="featuresWaveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.4" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {[...Array(7)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${i * 15}% 0 Q ${45 + i * 6}% 50% ${i * 15}% 100%`}
            stroke={i % 2 === 0 ? "url(#featuresWaveGradient1)" : "url(#featuresWaveGradient2)"}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.3, 0],
              d: [
                `M ${i * 15}% 0 Q ${45 + i * 6}% 50% ${i * 15}% 100%`,
                `M ${i * 15 + 5}% 0 Q ${50 + i * 6}% 50% ${i * 15 + 5}% 100%`,
                `M ${i * 15}% 0 Q ${45 + i * 6}% 50% ${i * 15}% 100%`,
              ],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2.5,
            }}
          />
        ))}
      </svg>

      {/* Animated Mesh Grid Pattern */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0px 0px", "100px 100px", "0px 0px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            linear-gradient(var(--primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
          opacity: 0.03,
        }}
      />

      {/* Rotating Orbital Rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary/10"
          style={{
            width: `${300 + i * 200}px`,
            height: `${300 + i * 200}px`,
            left: `${30 + i * 20}%`,
            top: `${20 + i * 15}%`,
            borderStyle: "dashed",
            borderWidth: "1px",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 25 + i * 10,
            repeat: Infinity,
            ease: "linear",
            delay: i * 3,
          }}
        />
      ))}

      {/* Pulsing Glow Spots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            background: i % 2 === 0
              ? "radial-gradient(circle, var(--primary), transparent)"
              : "radial-gradient(circle, var(--secondary), transparent)",
            left: `${(i * 18) % 85}%`,
            top: `${(i * 22) % 80}%`,
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.06, 0.18, 0.06],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
        />
      ))}
    </div>
  )
}


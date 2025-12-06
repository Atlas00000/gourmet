"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LoadingBackgroundProps {
  className?: string
}

/**
 * LoadingBackground - Ultra-dynamic background for loading screen
 * Creates stunning depth with animated mesh gradients, enhanced particles, and flowing wave effects
 */
export function LoadingBackground({ className }: LoadingBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Multi-Layer Animated Gradient Mesh */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: `
            radial-gradient(circle at 25% 35%, var(--primary) 0%, transparent 55%),
            radial-gradient(circle at 75% 65%, var(--secondary) 0%, transparent 55%),
            radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 55%),
            radial-gradient(circle at 20% 80%, var(--primary) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, var(--secondary) 0%, transparent 50%)
          `,
          backgroundSize: "200% 200%",
          opacity: 0.2,
        }}
      />

      {/* Enhanced Floating Particles with Physics */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${80 + i * 25}px`,
            height: `${80 + i * 25}px`,
            background: i % 7 === 0
              ? "radial-gradient(circle, var(--secondary), transparent)"
              : i % 7 === 1
              ? "radial-gradient(circle, var(--primary), transparent)"
              : i % 7 === 2
              ? "radial-gradient(circle, var(--accent), transparent)"
              : i % 7 === 3
              ? "radial-gradient(circle, var(--primary), transparent)"
              : i % 7 === 4
              ? "radial-gradient(circle, var(--secondary), transparent)"
              : i % 7 === 5
              ? "radial-gradient(circle, var(--accent), transparent)"
              : "radial-gradient(circle, var(--primary), transparent)",
            left: `${(i * 4.2) % 98}%`,
            top: `${(i * 6.5) % 96}%`,
          }}
          animate={{
            x: [0, 100, -80, 0],
            y: [0, -120, 90, 0],
            scale: [1, 1.4, 0.8, 1],
            opacity: [0.1, 0.25, 0.15, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25 + i * 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Flowing Wave Patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-6">
        <defs>
          <linearGradient id="loadingWaveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
            <stop offset="50%" stopColor="var(--secondary)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="loadingWaveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.4" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {[...Array(10)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${i * 10}% 0 Q ${50 + i * 3}% 50% ${i * 10}% 100%`}
            stroke={i % 2 === 0 ? "url(#loadingWaveGradient1)" : "url(#loadingWaveGradient2)"}
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.3, 0],
              d: [
                `M ${i * 10}% 0 Q ${50 + i * 3}% 50% ${i * 10}% 100%`,
                `M ${i * 10 + 2}% 0 Q ${52 + i * 3}% 50% ${i * 10 + 2}% 100%`,
                `M ${i * 10}% 0 Q ${50 + i * 3}% 50% ${i * 10}% 100%`,
              ],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
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
          backgroundSize: "100px 100px",
          opacity: 0.04,
        }}
      />

      {/* Rotating Orbital Rings */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary/12"
          style={{
            width: `${300 + i * 200}px`,
            height: `${300 + i * 200}px`,
            left: `${30 + i * 12}%`,
            top: `${25 + i * 10}%`,
            borderStyle: "dashed",
            borderWidth: "1.5px",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.15, 1],
            opacity: [0.06, 0.18, 0.06],
          }}
          transition={{
            duration: 20 + i * 8,
            repeat: Infinity,
            ease: "linear",
            delay: i * 3,
          }}
        />
      ))}

      {/* Pulsing Glow Spots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${150 + i * 80}px`,
            height: `${150 + i * 80}px`,
            background: i % 4 === 0
              ? "radial-gradient(circle, var(--primary), transparent)"
              : i % 4 === 1
              ? "radial-gradient(circle, var(--secondary), transparent)"
              : i % 4 === 2
              ? "radial-gradient(circle, var(--accent), transparent)"
              : "radial-gradient(circle, var(--primary), transparent)",
            left: `${(i * 12) % 88}%`,
            top: `${(i * 15) % 85}%`,
          }}
          animate={{
            scale: [1, 1.9, 1],
            opacity: [0.08, 0.22, 0.08],
          }}
          transition={{
            duration: 8 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.2,
          }}
        />
      ))}

      {/* Flowing Light Beams */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`beam-${i}`}
          className="absolute w-1 h-full opacity-12"
          style={{
            background: `linear-gradient(to bottom, transparent, var(--primary), transparent)`,
            left: `${20 + i * 12}%`,
            transform: "rotate(12deg)",
          }}
          animate={{
            y: ["-100%", "200%"],
            opacity: [0, 0.15, 0],
          }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.5,
          }}
        />
      ))}
    </div>
  )
}


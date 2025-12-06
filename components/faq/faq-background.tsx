"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FaqBackgroundProps {
  className?: string
}

/**
 * FaqBackground - Ultra-dynamic background for FAQ section
 * Creates stunning depth with animated mesh gradients, enhanced particles, and flowing wave effects
 */
export function FaqBackground({ className }: FaqBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Multi-Layer Animated Gradient Mesh */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: `
            radial-gradient(circle at 15% 25%, var(--primary) 0%, transparent 50%),
            radial-gradient(circle at 85% 75%, var(--secondary) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 50%)
          `,
          backgroundSize: "200% 200%",
          opacity: 0.1,
        }}
      />

      {/* Enhanced Floating Particles with Physics */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${100 + i * 35}px`,
            height: `${100 + i * 35}px`,
            background: i % 5 === 0
              ? "radial-gradient(circle, var(--secondary), transparent)"
              : i % 5 === 1
              ? "radial-gradient(circle, var(--primary), transparent)"
              : i % 5 === 2
              ? "radial-gradient(circle, var(--accent), transparent)"
              : i % 5 === 3
              ? "radial-gradient(circle, var(--primary), transparent)"
              : "radial-gradient(circle, var(--secondary), transparent)",
            left: `${(i * 6.8) % 94}%`,
            top: `${(i * 8.2) % 92}%`,
          }}
          animate={{
            x: [0, 110, -90, 0],
            y: [0, -130, 100, 0],
            scale: [1, 1.5, 0.75, 1],
            opacity: [0.07, 0.2, 0.12, 0.07],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 38 + i * 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7,
          }}
        />
      ))}

      {/* Flowing Wave Patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-4">
        <defs>
          <linearGradient id="faqWaveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
            <stop offset="50%" stopColor="var(--secondary)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="faqWaveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.35" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${i * 17}% 0 Q ${48 + i * 5}% 50% ${i * 17}% 100%`}
            stroke={i % 2 === 0 ? "url(#faqWaveGradient1)" : "url(#faqWaveGradient2)"}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.25, 0],
              d: [
                `M ${i * 17}% 0 Q ${48 + i * 5}% 50% ${i * 17}% 100%`,
                `M ${i * 17 + 4}% 0 Q ${52 + i * 5}% 50% ${i * 17 + 4}% 100%`,
                `M ${i * 17}% 0 Q ${48 + i * 5}% 50% ${i * 17}% 100%`,
              ],
            }}
            transition={{
              duration: 18 + i * 2.5,
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
          backgroundPosition: ["0px 0px", "110px 110px", "0px 0px"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            linear-gradient(var(--primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: "130px 130px",
          opacity: 0.025,
        }}
      />

      {/* Rotating Orbital Rings */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary/8"
          style={{
            width: `${350 + i * 250}px`,
            height: `${350 + i * 250}px`,
            left: `${25 + i * 25}%`,
            top: `${15 + i * 20}%`,
            borderStyle: "dashed",
            borderWidth: "1px",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.15, 1],
            opacity: [0.04, 0.12, 0.04],
          }}
          transition={{
            duration: 30 + i * 12,
            repeat: Infinity,
            ease: "linear",
            delay: i * 4,
          }}
        />
      ))}

      {/* Pulsing Glow Spots */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${180 + i * 90}px`,
            height: `${180 + i * 90}px`,
            background: i % 2 === 0
              ? "radial-gradient(circle, var(--primary), transparent)"
              : "radial-gradient(circle, var(--secondary), transparent)",
            left: `${(i * 20) % 80}%`,
            top: `${(i * 25) % 75}%`,
          }}
          animate={{
            scale: [1, 1.7, 1],
            opacity: [0.05, 0.16, 0.05],
          }}
          transition={{
            duration: 9 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.8,
          }}
        />
      ))}
    </div>
  )
}


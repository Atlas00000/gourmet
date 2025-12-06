"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CtaBackgroundProps {
  className?: string
}

/**
 * CtaBackground - Ultra-dynamic background for Footer CTA section
 * Creates stunning depth with animated mesh gradients, enhanced particles, and flowing wave effects
 */
export function CtaBackground({ className }: CtaBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Multi-Layer Animated Gradient Mesh */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: `
            radial-gradient(circle at 20% 30%, var(--primary) 0%, transparent 60%),
            radial-gradient(circle at 80% 70%, var(--secondary) 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 60%),
            radial-gradient(circle at 30% 80%, var(--primary) 0%, transparent 50%)
          `,
          backgroundSize: "250% 250%",
          opacity: 0.15,
        }}
      />

      {/* Enhanced Floating Particles with Physics */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${90 + i * 30}px`,
            height: `${90 + i * 30}px`,
            background: i % 6 === 0
              ? "radial-gradient(circle, var(--secondary), transparent)"
              : i % 6 === 1
              ? "radial-gradient(circle, var(--primary), transparent)"
              : i % 6 === 2
              ? "radial-gradient(circle, var(--accent), transparent)"
              : i % 6 === 3
              ? "radial-gradient(circle, var(--primary), transparent)"
              : i % 6 === 4
              ? "radial-gradient(circle, var(--secondary), transparent)"
              : "radial-gradient(circle, var(--accent), transparent)",
            left: `${(i * 5.2) % 96}%`,
            top: `${(i * 7.8) % 94}%`,
          }}
          animate={{
            x: [0, 120, -100, 0],
            y: [0, -140, 110, 0],
            scale: [1, 1.6, 0.7, 1],
            opacity: [0.08, 0.22, 0.14, 0.08],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 40 + i * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6,
          }}
        />
      ))}

      {/* Flowing Wave Patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <defs>
          <linearGradient id="ctaWaveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
            <stop offset="50%" stopColor="var(--secondary)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="ctaWaveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.4" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${i * 12.5}% 0 Q ${45 + i * 4}% 50% ${i * 12.5}% 100%`}
            stroke={i % 2 === 0 ? "url(#ctaWaveGradient1)" : "url(#ctaWaveGradient2)"}
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.3, 0],
              d: [
                `M ${i * 12.5}% 0 Q ${45 + i * 4}% 50% ${i * 12.5}% 100%`,
                `M ${i * 12.5 + 3}% 0 Q ${48 + i * 4}% 50% ${i * 12.5 + 3}% 100%`,
                `M ${i * 12.5}% 0 Q ${45 + i * 4}% 50% ${i * 12.5}% 100%`,
              ],
            }}
            transition={{
              duration: 20 + i * 3,
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
          backgroundPosition: ["0px 0px", "120px 120px", "0px 0px"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            linear-gradient(var(--primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: "140px 140px",
          opacity: 0.03,
        }}
      />

      {/* Rotating Orbital Rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary/10"
          style={{
            width: `${400 + i * 300}px`,
            height: `${400 + i * 300}px`,
            left: `${20 + i * 15}%`,
            top: `${10 + i * 18}%`,
            borderStyle: "dashed",
            borderWidth: "1.5px",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 35 + i * 15,
            repeat: Infinity,
            ease: "linear",
            delay: i * 5,
          }}
        />
      ))}

      {/* Pulsing Glow Spots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            background: i % 3 === 0
              ? "radial-gradient(circle, var(--primary), transparent)"
              : i % 3 === 1
              ? "radial-gradient(circle, var(--secondary), transparent)"
              : "radial-gradient(circle, var(--accent), transparent)",
            left: `${(i * 15) % 85}%`,
            top: `${(i * 18) % 82}%`,
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.06, 0.2, 0.06],
          }}
          transition={{
            duration: 10 + i * 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
        />
      ))}

      {/* Flowing Light Beams */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`beam-${i}`}
          className="absolute w-1 h-full opacity-10"
          style={{
            background: `linear-gradient(to bottom, transparent, var(--primary), transparent)`,
            left: `${25 + i * 15}%`,
            transform: "rotate(15deg)",
          }}
          animate={{
            y: ["-100%", "200%"],
            opacity: [0, 0.15, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  )
}


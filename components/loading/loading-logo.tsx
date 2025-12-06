"use client"

import { motion } from "framer-motion"
import { ChefHat } from "lucide-react"
import { cn } from "@/lib/utils"

interface LoadingLogoProps {
  className?: string
}

/**
 * LoadingLogo - Ultra-animated logo for loading screen
 * Features 3D transforms, pulse effects, and stunning glow animations
 */
export function LoadingLogo({ className }: LoadingLogoProps) {
  return (
    <motion.div
      className={cn("relative flex flex-col items-center space-y-6", className)}
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
        type: "spring",
        stiffness: 100,
      }}
    >
      {/* Main Logo Container */}
      <motion.div
        className="relative"
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 15, -15, 0],
        }}
        transition={{
          rotateY: {
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          },
          rotateX: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Outer Glow Ring */}
        <motion.div
          className="absolute inset-0 rounded-full blur-3xl opacity-60"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: "radial-gradient(circle, var(--primary), transparent)",
            width: "200px",
            height: "200px",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Middle Glow Ring */}
        <motion.div
          className="absolute inset-0 rounded-full blur-2xl opacity-50"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
          style={{
            background: "radial-gradient(circle, var(--secondary), transparent)",
            width: "160px",
            height: "160px",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Icon Container */}
        <motion.div
          className={cn(
            "relative w-24 h-24 lg:w-28 lg:h-28 rounded-3xl flex items-center justify-center",
            "bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10",
            "backdrop-blur-xl",
            "border-2 border-primary/40",
            "shadow-2xl shadow-primary/40",
            "text-primary"
          )}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Inner Glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl blur-xl opacity-70 bg-primary/40"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Rotating Rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-3xl border-2"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                rotate: {
                  duration: 4 + i * 1.5,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 2 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 2 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                delay: i * 0.4,
              }}
              style={{
                borderStyle: i === 0 ? "solid" : "dashed",
                borderWidth: `${1.5 + i * 0.5}px`,
                borderColor: i === 0
                  ? "rgba(var(--primary-rgb), 0.5)"
                  : i === 1
                  ? "rgba(var(--secondary-rgb), 0.4)"
                  : "rgba(var(--accent-rgb), 0.3)",
              }}
            />
          ))}

          {/* Icon */}
          <motion.div
            className="relative z-10"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChefHat className="w-12 h-12 lg:w-14 lg:h-14" />
          </motion.div>

          {/* Pulsing Inner Glow */}
          <motion.div
            className="absolute inset-2 rounded-2xl bg-primary/20"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Brand Text */}
      <motion.div
        className="text-center space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.h1
          className="text-4xl lg:text-5xl font-black text-foreground"
          animate={{
            background: [
              "linear-gradient(90deg, var(--primary), var(--secondary), var(--primary))",
              "linear-gradient(90deg, var(--secondary), var(--primary), var(--secondary))",
              "linear-gradient(90deg, var(--primary), var(--secondary), var(--primary))",
            ],
            backgroundSize: "200% auto",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          Gourmet Fusion
        </motion.h1>
        <motion.p
          className="text-lg lg:text-xl text-muted-foreground font-medium"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Family Cooking
        </motion.p>
      </motion.div>
    </motion.div>
  )
}


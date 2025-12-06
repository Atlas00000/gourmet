"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChefHat, Utensils, Users, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

interface LoadingTextProps {
  currentIcon: number
  className?: string
}

const icons = [
  { icon: ChefHat, color: "text-primary", label: "Preparing Kitchen" },
  { icon: Utensils, color: "text-secondary", label: "Gathering Ingredients" },
  { icon: Users, color: "text-primary", label: "Setting Family Table" },
  { icon: Heart, color: "text-secondary", label: "Ready to Cook" },
]

/**
 * LoadingText - Animated loading text with icon transitions
 * Features smooth icon animations and text reveals
 */
export function LoadingText({ currentIcon, className }: LoadingTextProps) {
  const current = icons[currentIcon]
  const IconComponent = current.icon

  return (
    <motion.div
      className={cn("flex flex-col items-center space-y-6", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
    >
      {/* Animated Icon Container */}
      <motion.div
        key={currentIcon}
        className="relative"
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1],
          type: "spring",
          stiffness: 200,
        }}
      >
        {/* Icon Glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl blur-2xl opacity-50"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: current.color.includes('primary')
              ? "radial-gradient(circle, var(--primary), transparent)"
              : "radial-gradient(circle, var(--secondary), transparent)",
          }}
        />

        {/* Icon Container */}
        <motion.div
          className={cn(
            "relative w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center",
            "bg-gradient-to-br from-background/90 via-background/80 to-background/90",
            "backdrop-blur-xl",
            "border-2 border-white/20",
            "shadow-2xl",
            current.color
          )}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Rotating Rings */}
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-2xl border-2"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                rotate: {
                  duration: 3 + i * 1.5,
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
                delay: i * 0.3,
              }}
              style={{
                borderStyle: "dashed",
                borderWidth: `${1 + i * 0.5}px`,
                borderColor: current.color.includes('primary')
                  ? "hsl(var(--primary))"
                  : "hsl(var(--secondary))",
                  opacity: 0.4,
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
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <IconComponent className="w-10 h-10 lg:w-12 lg:h-12" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated Label Text */}
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIcon}
          className={cn(
            "text-base lg:text-lg font-medium",
            current.color
          )}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          {current.label}...
        </motion.p>
      </AnimatePresence>
    </motion.div>
  )
}


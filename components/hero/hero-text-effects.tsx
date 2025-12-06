"use client"

import { motion } from "framer-motion"
import { GradientText } from "@/components/gradients/gradient-text"
import { cn } from "@/lib/utils"

interface HeroTextEffectsProps {
  title: string
  subtitle?: string
  className?: string
}

/**
 * HeroTextEffects - Animated text with gradient and typewriter effects
 * Creates stunning, dynamic text animations
 */
export function HeroTextEffects({ title, subtitle, className }: HeroTextEffectsProps) {
  const titleWords = title.split(" ")

  return (
    <div className={cn("space-y-6", className)}>
      {/* Animated Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="relative"
      >
        <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tight">
          <span className="block">
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="inline-block mr-4"
              >
                <GradientText className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-text">
                  {word}
                </GradientText>
              </motion.span>
            ))}
          </span>
        </h1>
        
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 blur-3xl opacity-30"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <GradientText className="text-6xl lg:text-8xl xl:text-9xl font-black">
            {title}
          </GradientText>
        </motion.div>
      </motion.div>

      {/* Animated Subtitle */}
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="relative"
        >
          <p className="text-2xl lg:text-4xl xl:text-5xl font-light text-muted-foreground leading-relaxed">
            {subtitle.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.6 + index * 0.05,
                }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </motion.div>
      )}
    </div>
  )
}


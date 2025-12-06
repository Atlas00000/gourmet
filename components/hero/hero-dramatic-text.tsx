"use client"

import { motion } from "framer-motion"
import { GradientText } from "@/components/gradients/gradient-text"
import { cn } from "@/lib/utils"

interface HeroDramaticTextProps {
  title: string
  subtitle?: string
  className?: string
}

/**
 * HeroDramaticText - Dramatic typography with split text and 3D effects
 * Creates stunning, non-generic text presentation
 */
export function HeroDramaticText({ title, subtitle, className }: HeroDramaticTextProps) {
  const titleWords = title.split(" ")

  return (
    <div className={cn("space-y-8", className)}>
      {/* Main Title with Split Animation */}
      <div className="relative">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-7xl lg:text-9xl xl:text-[12rem] font-black leading-[0.85] tracking-tight"
          style={{
            fontFamily: "var(--font-geist-sans)",
          }}
        >
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                y: 100,
                rotateX: -90,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotateX: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="inline-block mr-4 relative"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <GradientText className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-text drop-shadow-2xl">
                {word}
              </GradientText>
              
              {/* Text Shadow/Glow Effect */}
              <motion.span
                className="absolute inset-0 blur-2xl opacity-50 -z-10"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <GradientText>{word}</GradientText>
              </motion.span>
            </motion.span>
          ))}
        </motion.h1>

        {/* Decorative Underline - Using scaleX to prevent layout thrash */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="h-2 w-full origin-center bg-gradient-to-r from-transparent via-primary to-transparent mt-4 rounded-full"
        />
      </div>

      {/* Subtitle with Typewriter-like Effect */}
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative"
        >
          <p className="text-3xl lg:text-5xl xl:text-6xl font-light text-muted-foreground leading-relaxed">
            {subtitle.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 1.2 + index * 0.1,
                  ease: "easeOut",
                }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </p>

          {/* Animated Accent Line - Using scaleX to prevent layout thrash */}
          <motion.div
            className="absolute -bottom-4 left-0 h-1 w-[60%] origin-left bg-gradient-to-r from-primary to-secondary rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.8, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </div>
  )
}


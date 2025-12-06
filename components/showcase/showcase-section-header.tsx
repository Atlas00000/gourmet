"use client"

import { motion } from "framer-motion"
import { GradientText } from "@/components/gradients/gradient-text"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ShowcaseSectionHeaderProps {
  badge?: React.ReactNode
  title: string
  description?: string
  className?: string
}

/**
 * ShowcaseSectionHeader - Dramatic section header
 * Animated header with gradient text and effects
 */
export function ShowcaseSectionHeader({
  badge,
  title,
  description,
  className,
}: ShowcaseSectionHeaderProps) {
  const titleWords = title.split(" ")

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={cn("text-center space-y-6", className)}
    >
      {/* Badge */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-block"
        >
          {badge}
        </motion.div>
      )}

      {/* Animated Title */}
      <div className="relative">
        <h2 className="text-5xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight">
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="inline-block mr-4"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <GradientText className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-text">
                {word}
              </GradientText>
            </motion.span>
          ))}
        </h2>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 blur-3xl opacity-30 -z-10"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <GradientText className="text-5xl lg:text-7xl xl:text-8xl font-black">
            {title}
          </GradientText>
        </motion.div>
      </div>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
        >
          {description}
        </motion.p>
      )}

      {/* Decorative Line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "60%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"
      />
    </motion.div>
  )
}


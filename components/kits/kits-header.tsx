"use client"

import { motion } from "framer-motion"
import { GradientText } from "@/components/gradients/gradient-text"
import { Badge } from "@/components/ui/badge"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface KitsHeaderProps {
  badge?: React.ReactNode
  title: string
  description?: string
  icon?: LucideIcon
  className?: string
}

/**
 * KitsHeader - Dramatic section header for cooking kits
 * Animated header with gradient text and effects
 */
export function KitsHeader({
  badge,
  title,
  description,
  icon: Icon,
  className,
}: KitsHeaderProps) {
  const titleWords = title.split(" ")

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
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

      {/* Icon (if provided) */}
      {Icon && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200 }}
          className="inline-block mb-4"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <Icon className="w-8 h-8" />
          </div>
        </motion.div>
      )}

      {/* Animated Title */}
      <div className="relative">
        <h2 className="text-4xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 60, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="inline-block mr-3 lg:mr-4"
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
          className="absolute inset-0 blur-3xl opacity-20 -z-10"
          animate={{
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <GradientText className="text-4xl lg:text-6xl xl:text-7xl font-black">
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
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
        >
          {description}
        </motion.p>
      )}

      {/* Decorative Line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "50%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"
      />
    </motion.div>
  )
}


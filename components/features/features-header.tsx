"use client"

import { motion } from "framer-motion"
import { GradientText } from "@/components/gradients/gradient-text"
import { Badge } from "@/components/ui/badge"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeaturesHeaderProps {
  badge?: React.ReactNode
  title: string
  description?: string
  icon?: LucideIcon
  className?: string
}

/**
 * FeaturesHeader - Dramatic section header for features
 * Animated header with gradient text and effects
 */
export function FeaturesHeader({
  badge,
  title,
  description,
  icon: Icon,
  className,
}: FeaturesHeaderProps) {
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

      {/* Ultra-Animated Title */}
      <div className="relative">
        <h2 className="text-4xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 80, rotateX: -90, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1],
                type: "spring",
                stiffness: 100,
              }}
              className="inline-block mr-3 lg:mr-4"
              style={{
                transformStyle: "preserve-3d",
              }}
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                transition: { duration: 0.3 },
              }}
            >
              <GradientText className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-text drop-shadow-2xl">
                {word}
              </GradientText>
            </motion.span>
          ))}
        </h2>

        {/* Multi-Layer Glow Effects */}
        <motion.div
          className="absolute inset-0 blur-3xl opacity-25 -z-10"
          animate={{
            opacity: [0.2, 0.35, 0.2],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <GradientText className="text-4xl lg:text-6xl xl:text-7xl font-black">
            {title}
          </GradientText>
        </motion.div>
        <motion.div
          className="absolute inset-0 blur-2xl opacity-15 -z-10"
          animate={{
            opacity: [0.1, 0.25, 0.1],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <GradientText className="text-4xl lg:text-6xl xl:text-7xl font-black">
            {title}
          </GradientText>
        </motion.div>

        {/* Animated Underline Effect */}
        <motion.div
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "60%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          animate={{
            boxShadow: [
              "0 0 10px rgba(var(--primary-rgb), 0.5)",
              "0 0 30px rgba(var(--primary-rgb), 0.8)",
              "0 0 10px rgba(var(--primary-rgb), 0.5)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
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

      {/* Enhanced Decorative Elements */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "50%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
        className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"
        animate={{
          boxShadow: [
            "0 0 10px rgba(var(--primary-rgb), 0.3)",
            "0 0 20px rgba(var(--primary-rgb), 0.6)",
            "0 0 10px rgba(var(--primary-rgb), 0.3)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Floating Decorative Orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-xl opacity-20"
          style={{
            width: `${80 + i * 40}px`,
            height: `${80 + i * 40}px`,
            background: i % 2 === 0
              ? "radial-gradient(circle, var(--primary), transparent)"
              : "radial-gradient(circle, var(--secondary), transparent)",
            left: `${20 + i * 30}%`,
            top: `${-10 + i * 5}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 1.2 + i * 0.2,
            ease: "easeOut",
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  )
}


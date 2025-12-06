"use client"

import { motion } from "framer-motion"
import { GradientText } from "@/components/gradients/gradient-text"
import { Badge } from "@/components/ui/badge"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface CtaHeaderProps {
  badge?: React.ReactNode
  title: string
  description?: string
  icon?: LucideIcon
  className?: string
}

/**
 * CtaHeader - Ultra-dramatic section header for Footer CTA
 * Animated header with gradient text and stunning visual effects
 */
export function CtaHeader({
  badge,
  title,
  description,
  icon: Icon,
  className,
}: CtaHeaderProps) {
  const titleWords = title.split(" ")

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      className={cn("text-center space-y-8", className)}
    >
      {/* Badge */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 200 }}
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
          transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 200 }}
          className="inline-block mb-4"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <Icon className="w-10 h-10" />
          </div>
        </motion.div>
      )}

      {/* Ultra-Animated Title */}
      <div className="relative">
        <h2 className="text-4xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -90, scale: 0.7 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: index * 0.18,
                ease: [0.4, 0, 0.2, 1],
                type: "spring",
                stiffness: 100,
              }}
              className="inline-block mr-3 lg:mr-4"
              style={{
                transformStyle: "preserve-3d",
              }}
              whileHover={{
                scale: 1.15,
                rotateY: 15,
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
          className="absolute inset-0 blur-3xl opacity-30 -z-10"
          animate={{
            opacity: [0.25, 0.4, 0.25],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <GradientText className="text-4xl lg:text-6xl xl:text-7xl font-black">
            {title}
          </GradientText>
        </motion.div>
        <motion.div
          className="absolute inset-0 blur-2xl opacity-20 -z-10"
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
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
          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "70%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
          animate={{
            boxShadow: [
              "0 0 15px rgba(var(--primary-rgb), 0.6)",
              "0 0 40px rgba(var(--primary-rgb), 0.9)",
              "0 0 15px rgba(var(--primary-rgb), 0.6)",
            ],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
        >
          {description}
        </motion.p>
      )}

      {/* Enhanced Decorative Elements */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "60%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
        className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"
        animate={{
          boxShadow: [
            "0 0 10px rgba(var(--primary-rgb), 0.4)",
            "0 0 25px rgba(var(--primary-rgb), 0.7)",
            "0 0 10px rgba(var(--primary-rgb), 0.4)",
          ],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Floating Decorative Orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-2xl opacity-25"
          style={{
            width: `${100 + i * 50}px`,
            height: `${100 + i * 50}px`,
            background: i % 3 === 0
              ? "radial-gradient(circle, var(--primary), transparent)"
              : i % 3 === 1
              ? "radial-gradient(circle, var(--secondary), transparent)"
              : "radial-gradient(circle, var(--accent), transparent)",
            left: `${15 + i * 22}%`,
            top: `${-5 + i * 8}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.25, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 1.4 + i * 0.25,
            ease: "easeOut",
          }}
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  )
}


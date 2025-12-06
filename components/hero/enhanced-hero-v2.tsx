"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { HeroBackground } from "./hero-background"
import { HeroFloatingElements } from "./hero-floating-elements"
import { HeroTextEffects } from "./hero-text-effects"
import { HeroCTAMagnetic } from "./hero-cta-magnetic"
import { HeroCursorFollower } from "./hero-cursor-follower"
import { ArrowRight, Play } from "lucide-react"
import { cn } from "@/lib/utils"

interface EnhancedHeroV2Props {
  badge?: ReactNode
  title: string
  subtitle?: string
  description?: string
  primaryCTA?: {
    label: string
    onClick?: () => void
    href?: string
  }
  secondaryCTA?: {
    label: string
    onClick?: () => void
    href?: string
  }
  className?: string
}

/**
 * EnhancedHeroV2 - Completely revamped hero section
 * Visual marvel with stunning animations and interactive elements
 */
export function EnhancedHeroV2({
  badge,
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  className,
}: EnhancedHeroV2Props) {
  return (
    <section
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden",
        "bg-background",
        className
      )}
    >
      {/* Cursor Follower */}
      <HeroCursorFollower />

      {/* Dynamic Background */}
      <HeroBackground />

      {/* Floating Elements */}
      <HeroFloatingElements />

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Asymmetric Layout */}
          <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              className="lg:col-span-7 space-y-8 lg:space-y-12"
            >
              {/* Badge */}
              {badge && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block"
                >
                  {badge}
                </motion.div>
              )}

              {/* Animated Text */}
              <HeroTextEffects title={title} subtitle={subtitle} />

              {/* Description */}
              {description && (
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
                >
                  {description}
                </motion.p>
              )}

              {/* CTAs */}
              {(primaryCTA || secondaryCTA) && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-6 pt-4"
                >
                  {primaryCTA && (
                    <HeroCTAMagnetic
                      label={primaryCTA.label}
                      variant="primary"
                      icon={<ArrowRight className="w-5 h-5" />}
                      onClick={primaryCTA.onClick}
                      href={primaryCTA.href}
                    />
                  )}
                  {secondaryCTA && (
                    <HeroCTAMagnetic
                      label={secondaryCTA.label}
                      variant="secondary"
                      icon={<Play className="w-5 h-5" />}
                      onClick={secondaryCTA.onClick}
                      href={secondaryCTA.href}
                    />
                  )}
                </motion.div>
              )}
            </motion.div>

            {/* Right Column - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="lg:col-span-5 relative"
            >
              {/* Decorative Visual Element */}
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Animated Circle */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-primary/30"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute inset-4 rounded-full border-4 border-secondary/30"
                  animate={{
                    scale: [1, 0.9, 1],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      className="text-6xl"
                      animate={{
                        rotate: [0, -360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      🍳
                    </motion.div>
                  </motion.div>
                </div>

                {/* Floating Particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-primary rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 2) * 40}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      delay: i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}


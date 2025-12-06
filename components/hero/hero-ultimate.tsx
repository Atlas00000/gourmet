"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { HeroMeshBackground } from "./hero-mesh-background"
import { HeroInteractiveGrid } from "./hero-interactive-grid"
import { HeroDramaticText } from "./hero-dramatic-text"
import { HeroPremiumCTA } from "./hero-premium-cta"
import { HeroDynamicShapes } from "./hero-dynamic-shapes"
import { HeroFloatingElements } from "./hero-floating-elements"
import { HeroCursorFollower } from "./hero-cursor-follower"
import { ArrowRight, Play } from "lucide-react"
import { cn } from "@/lib/utils"

interface HeroUltimateProps {
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
 * HeroUltimate - Ultimate hero section overhaul
 * Visual marvel with stunning animations, interactive elements, and dynamic layout
 */
export function HeroUltimate({
  badge,
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  className,
}: HeroUltimateProps) {
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

      {/* Advanced Background Layers */}
      <HeroMeshBackground />
      <HeroInteractiveGrid rows={12} cols={16} />

      {/* Dynamic Shapes */}
      <HeroDynamicShapes />

      {/* Floating Elements */}
      <HeroFloatingElements />

      {/* Content Container - Fluid, Non-Boxed Layout */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-8xl mx-auto">
          {/* Fluid Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-16 items-center min-h-[85vh] py-20">
            {/* Left Content - Takes 7 columns, offset for dynamic feel */}
            <motion.div
              initial={{ opacity: 0, x: -150, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              className="lg:col-span-7 lg:col-start-1 space-y-10 lg:space-y-14 relative"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Badge with Animation */}
              {badge && (
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-block"
                >
                  {badge}
                </motion.div>
              )}

              {/* Dramatic Text */}
              <HeroDramaticText title={title} subtitle={subtitle} />

              {/* Description with Stagger */}
              {description && (
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="text-xl lg:text-2xl xl:text-3xl text-muted-foreground leading-relaxed max-w-2xl font-light"
                >
                  {description}
                </motion.p>
              )}

              {/* Premium CTAs */}
              {(primaryCTA || secondaryCTA) && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="flex flex-col sm:flex-row gap-6 pt-6"
                >
                  {primaryCTA && (
                    <HeroPremiumCTA
                      label={primaryCTA.label}
                      variant="primary"
                      icon={<ArrowRight className="w-6 h-6" />}
                      onClick={primaryCTA.onClick}
                      href={primaryCTA.href}
                    />
                  )}
                  {secondaryCTA && (
                    <HeroPremiumCTA
                      label={secondaryCTA.label}
                      variant="secondary"
                      icon={<Play className="w-6 h-6" />}
                      onClick={secondaryCTA.onClick}
                      href={secondaryCTA.href}
                    />
                  )}
                </motion.div>
              )}
            </motion.div>

            {/* Right Visual - Takes 5 columns, creates asymmetry */}
            <motion.div
              initial={{ opacity: 0, x: 150, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="lg:col-span-5 lg:col-start-8 relative"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Dynamic Visual Element - Non-Boxed Design */}
              <div className="relative aspect-square max-w-2xl mx-auto">
                {/* Outer Rotating Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-primary/40"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                    scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  }}
                />

                {/* Middle Ring */}
                <motion.div
                  className="absolute inset-8 rounded-full border-4 border-secondary/40"
                  animate={{
                    rotate: [360, 0],
                    scale: [1, 0.85, 1],
                  }}
                  transition={{
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                    scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  }}
                />

                {/* Inner Core */}
                <div className="absolute inset-16 flex items-center justify-center">
                  <motion.div
                    className="w-40 h-40 bg-gradient-to-br from-primary via-secondary to-primary rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
                    animate={{
                      scale: [1, 1.15, 0.95, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Inner Glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Center Glow Effect - No Icon */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/40 to-primary/40 rounded-full blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 0.9, 0.6],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </div>

                {/* Floating Particles Around Visual */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-primary rounded-full"
                    style={{
                      left: `${25 + (i % 4) * 25}%`,
                      top: `${20 + Math.floor(i / 4) * 60}%`,
                    }}
                    animate={{
                      y: [0, -40, 0],
                      x: [0, Math.sin(i) * 30, 0],
                      opacity: [0.4, 1, 0.4],
                      scale: [1, 1.8, 1],
                    }}
                    transition={{
                      duration: 4 + i * 0.5,
                      delay: i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                {/* Decorative Lines */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`line-${i}`}
                    className="absolute w-1 h-20 bg-gradient-to-b from-primary to-transparent rounded-full"
                    style={{
                      left: "50%",
                      top: "50%",
                      transformOrigin: "top center",
                      transform: `rotate(${i * 60}deg) translateY(-50%)`,
                    }}
                    animate={{
                      scaleY: [1, 1.5, 1],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.2,
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

    </section>
  )
}


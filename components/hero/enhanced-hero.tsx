"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { GradientText } from "@/components/gradients/gradient-text"
import { GradientBackground } from "@/components/gradients/gradient-background"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"
import { cn } from "@/lib/utils"

interface EnhancedHeroProps {
  badge?: ReactNode
  title: string | ReactNode
  subtitle?: string | ReactNode
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
  background?: ReactNode
  className?: string
}

/**
 * EnhancedHero - Premium hero section with animations
 * Stunning hero with gradient effects, animations, and CTAs
 */
export function EnhancedHero({
  badge,
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  background,
  className,
}: EnhancedHeroProps) {
  return (
    <GradientBackground variant="hero" className={cn("relative min-h-screen flex items-center justify-center overflow-hidden", className)}>
      {/* Background Elements */}
      {background && (
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          {background}
        </motion.div>
      )}

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {badge}
            </motion.div>
          )}

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            {typeof title === "string" ? (
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black leading-tight">
                <GradientText>{title}</GradientText>
              </h1>
            ) : (
              title
            )}
            {subtitle && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-2xl lg:text-4xl text-muted-foreground font-normal"
              >
                {subtitle}
              </motion.div>
            )}
          </motion.div>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            >
              {description}
            </motion.p>
          )}

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              {primaryCTA && (
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl hover:shadow-primary/30 transform hover:scale-105 transition-all duration-300"
                  onClick={primaryCTA.onClick}
                  href={primaryCTA.href}
                >
                  {primaryCTA.label}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-6 text-lg rounded-lg bg-transparent shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  onClick={secondaryCTA.onClick}
                  href={secondaryCTA.href}
                >
                  <Play className="w-5 h-5 mr-2" />
                  {secondaryCTA.label}
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </GradientBackground>
  )
}


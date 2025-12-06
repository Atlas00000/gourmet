"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { cn } from "@/lib/utils"

interface MagneticCTAProps {
  label: string
  variant?: "primary" | "secondary"
  icon?: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
}

/**
 * HeroCTAMagnetic - Magnetic CTA button with interactive hover effects
 * Follows cursor movement for premium feel
 */
export function HeroCTAMagnetic({
  label,
  variant = "primary",
  icon,
  onClick,
  href,
  className,
}: MagneticCTAProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, {
    stiffness: 500,
    damping: 100,
  })
  const mouseYSpring = useSpring(y, {
    stiffness: 500,
    damping: 100,
  })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  const isPrimary = variant === "primary"

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <Button
        ref={ref}
        onMouseMove={handleMouseMove}
        size="lg"
        asChild={!!href}
        className={cn(
          "relative px-10 py-7 text-lg rounded-2xl overflow-hidden group",
          "transform-gpu perspective-1000",
          isPrimary
            ? "bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground shadow-2xl shadow-primary/50"
            : "bg-transparent border-2 border-secondary/50 text-secondary backdrop-blur-sm hover:bg-secondary/10",
          "hover:scale-105 hover:shadow-2xl transition-all duration-300",
          className
        )}
        {...(href ? {} : { onClick })}
      >
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="contents">
            {/* Animated Background Gradient */}
            {isPrimary && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-secondary opacity-0 group-hover:opacity-100"
                animate={{
                  backgroundPosition: isHovered ? ["0%", "100%"] : "0%",
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundSize: "200% 100%",
                }}
              />
            )}

            {/* Content */}
            <span className="relative z-10 flex items-center gap-3">
              {icon && <span className="group-hover:scale-110 transition-transform duration-300">{icon}</span>}
              <span className="font-semibold">{label}</span>
              {isPrimary && (
                <motion.span
                  animate={{
                    x: isHovered ? [0, 5, 0] : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              )}
            </span>

            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{
                x: isHovered ? ["100%", "200%"] : "-100%",
              }}
              transition={{
                duration: 0.8,
                repeat: isHovered ? Infinity : 0,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
            />
          </a>
        ) : (
          <>
            {/* Animated Background Gradient */}
            {isPrimary && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-secondary opacity-0 group-hover:opacity-100"
                animate={{
                  backgroundPosition: isHovered ? ["0%", "100%"] : "0%",
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundSize: "200% 100%",
                }}
              />
            )}

            {/* Content */}
            <span className="relative z-10 flex items-center gap-3">
              {icon && <span className="group-hover:scale-110 transition-transform duration-300">{icon}</span>}
              <span className="font-semibold">{label}</span>
              {isPrimary && (
                <motion.span
                  animate={{
                    x: isHovered ? [0, 5, 0] : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              )}
            </span>

            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{
                x: isHovered ? ["100%", "200%"] : "-100%",
              }}
              transition={{
                duration: 0.8,
                repeat: isHovered ? Infinity : 0,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
            />
          </>
        )}
      </Button>
    </motion.div>
  )
}


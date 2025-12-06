"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { cn } from "@/lib/utils"

interface PremiumCTAProps {
  label: string
  variant?: "primary" | "secondary"
  icon?: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
}

/**
 * HeroPremiumCTA - Premium CTA with advanced interactions
 * 3D tilt, magnetic effect, and sophisticated animations
 */
export function HeroPremiumCTA({
  label,
  variant = "primary",
  icon,
  onClick,
  href,
  className,
}: PremiumCTAProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setRipples((prev) => [
      ...prev,
      { x, y, id: Date.now() },
    ])

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.slice(1))
    }, 600)

    onClick?.()
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
      className="relative"
    >
      <Button
        ref={ref}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        size="lg"
        asChild={!!href}
        className={cn(
          "relative px-12 py-8 text-xl rounded-3xl overflow-hidden group",
          "transform-gpu perspective-1000",
          isPrimary
            ? "bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground shadow-2xl shadow-primary/50"
            : "bg-transparent border-2 border-secondary/60 text-secondary backdrop-blur-md hover:bg-secondary/10 hover:border-secondary",
          "hover:scale-110 hover:shadow-2xl transition-all duration-500",
          className
        )}
        {...(href ? {} : {})}
      >
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="contents">
            {/* Animated Background Layers */}
            {isPrimary && (
              <>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-secondary opacity-0 group-hover:opacity-100"
                  animate={{
                    backgroundPosition: isHovered ? ["0%", "100%"] : "0%",
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </>
        )}

            {/* Content */}
            <span className="relative z-10 flex items-center gap-4 font-bold">
              {icon && (
                <motion.span
                  animate={{
                    rotate: isHovered ? [0, -10, 10, 0] : 0,
                    scale: isHovered ? 1.2 : 1,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  {icon}
                </motion.span>
              )}
              <span>{label}</span>
              {isPrimary && (
                <motion.span
                  animate={{
                    x: isHovered ? [0, 8, 0] : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.span>
              )}
            </span>

            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              animate={{
                x: isHovered ? ["100%", "200%"] : "-100%",
              }}
              transition={{
                duration: 1,
                repeat: isHovered ? Infinity : 0,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
            />

            {/* Ripple Effects */}
            {ripples.map((ripple) => (
              <motion.div
                key={ripple.id}
                className="absolute rounded-full bg-white/40"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  width: 0,
                  height: 0,
                }}
                animate={{
                  width: 300,
                  height: 300,
                  x: -150,
                  y: -150,
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              />
            ))}
          </a>
        ) : (
          <>
            {/* Animated Background Layers */}
            {isPrimary && (
              <>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-secondary opacity-0 group-hover:opacity-100"
                  animate={{
                    backgroundPosition: isHovered ? ["0%", "100%"] : "0%",
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </>
            )}

            {/* Content */}
            <span className="relative z-10 flex items-center gap-4 font-bold">
              {icon && (
                <motion.span
                  animate={{
                    rotate: isHovered ? [0, -10, 10, 0] : 0,
                    scale: isHovered ? 1.2 : 1,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  {icon}
                </motion.span>
              )}
              <span>{label}</span>
              {isPrimary && (
                <motion.span
                  animate={{
                    x: isHovered ? [0, 8, 0] : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.span>
              )}
            </span>

            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              animate={{
                x: isHovered ? ["100%", "200%"] : "-100%",
              }}
              transition={{
                duration: 1,
                repeat: isHovered ? Infinity : 0,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
            />

            {/* Ripple Effects */}
            {ripples.map((ripple) => (
              <motion.div
                key={ripple.id}
                className="absolute rounded-full bg-white/40"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  width: 0,
                  height: 0,
                }}
                animate={{
                  width: 300,
                  height: 300,
                  x: -150,
                  y: -150,
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              />
            ))}
          </>
        )}
      </Button>
    </motion.div>
  )
}


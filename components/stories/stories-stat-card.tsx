"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StoriesStatCardProps {
  metric: string
  description: string
  icon: LucideIcon
  color: "primary" | "secondary" | "accent"
  index: number
}

/**
 * StoriesStatCard - Premium stat card with dramatic 3D effects
 * Non-boxed, fluid design with stunning visual interactions
 */
export function StoriesStatCard({
  metric,
  description,
  icon: Icon,
  color,
  index,
}: StoriesStatCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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

  const colorConfig = {
    primary: {
      gradient: "from-primary/20 via-primary/10 to-transparent",
      gradientHover: "from-primary/40 via-primary/20 to-transparent",
      text: "text-primary",
      iconBg: "bg-gradient-to-br from-primary/20 to-primary/5",
      border: "border-primary/30",
      glow: "shadow-[0_0_60px_rgba(var(--primary-rgb),0.3)]",
      particles: "bg-primary/40",
    },
    secondary: {
      gradient: "from-secondary/20 via-secondary/10 to-transparent",
      gradientHover: "from-secondary/40 via-secondary/20 to-transparent",
      text: "text-secondary",
      iconBg: "bg-gradient-to-br from-secondary/20 to-secondary/5",
      border: "border-secondary/30",
      glow: "shadow-[0_0_60px_rgba(var(--secondary-rgb),0.3)]",
      particles: "bg-secondary/40",
    },
    accent: {
      gradient: "from-accent/20 via-accent/10 to-transparent",
      gradientHover: "from-accent/40 via-accent/20 to-transparent",
      text: "text-accent",
      iconBg: "bg-gradient-to-br from-accent/20 to-accent/5",
      border: "border-accent/30",
      glow: "shadow-[0_0_60px_rgba(var(--accent-rgb),0.3)]",
      particles: "bg-accent/40",
    },
  }

  const colors = colorConfig[color]

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 100, rotateX: -25, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 1,
        delay: index * 0.2,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="relative h-full perspective-1000"
    >
      {/* Main Card Container - Non-boxed, fluid design */}
      <div
        className={cn(
          "relative h-full rounded-3xl overflow-hidden",
          "bg-gradient-to-br",
          colors.gradient,
          "backdrop-blur-xl",
          "border border-white/10",
          "transition-all duration-700",
          isHovered && colors.gradientHover,
          isHovered && "scale-[1.02]",
          isHovered && colors.glow
        )}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-50",
            colors.gradient
          )}
          animate={{
            backgroundPosition: isHovered ? ["0% 0%", "100% 100%", "0% 0%"] : "0% 0%",
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />

        {/* Floating Particles */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, x: "50%", y: "50%" }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    x: `${50 + (Math.random() - 0.5) * 100}%`,
                    y: `${50 + (Math.random() - 0.5) * 100}%`,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className={cn(
                    "absolute w-2 h-2 rounded-full blur-sm",
                    colors.particles
                  )}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 p-10 lg:p-12 h-full flex flex-col items-center justify-center text-center">
          {/* Icon Container - Dramatic 3D Effect */}
          <motion.div
            className={cn(
              "relative w-24 h-24 lg:w-28 lg:h-28 rounded-3xl flex items-center justify-center mb-8",
              colors.iconBg,
              "backdrop-blur-md",
              "border border-white/20",
              "shadow-2xl"
            )}
            animate={{
              scale: isHovered ? [1, 1.15, 1.1] : 1,
              rotate: isHovered ? [0, 5, -5, 0] : 0,
              y: isHovered ? [0, -10, 0] : 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Icon Glow */}
            <motion.div
              className={cn(
                "absolute inset-0 rounded-3xl blur-xl opacity-50",
                colors.gradient
              )}
              animate={{
                scale: isHovered ? [1, 1.5, 1] : 1,
                opacity: isHovered ? [0.5, 0.8, 0.5] : 0.5,
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
              }}
            />

            {/* Icon */}
            <motion.div
              className={cn("relative z-10", colors.text)}
              animate={{
                scale: isHovered ? [1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <Icon className="w-12 h-12 lg:w-14 lg:h-14" />
            </motion.div>

            {/* Rotating Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={cn(
                  "absolute inset-0 rounded-3xl border-2",
                  colors.border
                )}
                animate={{
                  rotate: isHovered ? 360 : 0,
                  scale: isHovered ? [1, 1.3, 1] : 1,
                  opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3,
                }}
                transition={{
                  duration: 3 + i,
                  repeat: isHovered ? Infinity : 0,
                  ease: "linear",
                  delay: i * 0.5,
                }}
                style={{
                  borderStyle: "dashed",
                  borderWidth: `${1 + i * 0.5}px`,
                }}
              />
            ))}
          </motion.div>

          {/* Metric - Dramatic Typography */}
          <motion.div
            className={cn(
              "relative mb-6",
              colors.text
            )}
            animate={{
              scale: isHovered ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <motion.h3
              className="text-6xl lg:text-7xl xl:text-8xl font-black leading-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2 + 0.3,
              }}
            >
              {metric}
            </motion.h3>

            {/* Text Glow Effect */}
            <motion.div
              className={cn(
                "absolute inset-0 blur-2xl opacity-30 -z-10",
                colors.text
              )}
              animate={{
                opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3,
                scale: isHovered ? [1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
              }}
            >
              <span className="text-6xl lg:text-7xl xl:text-8xl font-black">
                {metric}
              </span>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg lg:text-xl text-muted-foreground/90 leading-relaxed max-w-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.2 + 0.5,
            }}
            animate={{
              color: isHovered ? "var(--foreground)" : "var(--muted-foreground)",
            }}
          >
            {description}
          </motion.p>

          {/* Decorative Corner Elements */}
          <div className="absolute top-4 right-4 w-16 h-16">
            <motion.div
              className={cn(
                "absolute top-0 right-0 w-8 h-8 rounded-full",
                colors.particles
              )}
              animate={{
                scale: isHovered ? [1, 1.5, 1] : 1,
                opacity: isHovered ? [0.3, 0.7, 0.3] : 0.3,
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className={cn(
                "absolute top-2 right-2 w-4 h-4 rounded-full",
                colors.particles
              )}
              animate={{
                scale: isHovered ? [1, 1.3, 1] : 1,
                opacity: isHovered ? [0.5, 0.9, 0.5] : 0.5,
              }}
              transition={{
                duration: 1.5,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
                delay: 0.3,
              }}
            />
          </div>

          <div className="absolute bottom-4 left-4 w-16 h-16">
            <motion.div
              className={cn(
                "absolute bottom-0 left-0 w-8 h-8 rounded-full",
                colors.particles
              )}
              animate={{
                scale: isHovered ? [1, 1.5, 1] : 1,
                opacity: isHovered ? [0.3, 0.7, 0.3] : 0.3,
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
                delay: 0.6,
              }}
            />
            <motion.div
              className={cn(
                "absolute bottom-2 left-2 w-4 h-4 rounded-full",
                colors.particles
              )}
              animate={{
                scale: isHovered ? [1, 1.3, 1] : 1,
                opacity: isHovered ? [0.5, 0.9, 0.5] : 0.5,
              }}
              transition={{
                duration: 1.5,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
                delay: 0.9,
              }}
            />
          </div>
        </div>

        {/* Animated Border Glow */}
        <motion.div
          className={cn(
            "absolute inset-0 rounded-3xl opacity-0",
            colors.border,
            "pointer-events-none"
          )}
          animate={{
            opacity: isHovered ? [0, 0.5, 0] : 0,
            boxShadow: isHovered
              ? [
                  "0 0 0px rgba(var(--primary-rgb), 0)",
                  "0 0 40px rgba(var(--primary-rgb), 0.5)",
                  "0 0 0px rgba(var(--primary-rgb), 0)",
                ]
              : "0 0 0px rgba(var(--primary-rgb), 0)",
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
          }}
          style={{
            borderWidth: "2px",
          }}
        />
      </div>
    </motion.div>
  )
}

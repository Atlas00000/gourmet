"use client"

import { useState, useRef, ReactNode } from "react"
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface FeaturesCardProps {
  icon: ReactNode
  title: string
  description: string
  index: number
}

/**
 * FeaturesCard - Premium feature card with 3D effects
 * Non-boxed, fluid design with stunning visual interactions
 */
export function FeaturesCard({
  icon,
  title,
  description,
  index,
}: FeaturesCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])
  
  // Enhanced magnetic effect with distance calculation
  const distance = useTransform(
    [mouseXSpring, mouseYSpring],
    ([x, y]) => Math.sqrt(x * x + y * y) * 100
  )
  
  const scale = useTransform(distance, [0, 50], [1, 1.05])

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

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 100, rotateX: -20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 1,
        delay: index * 0.15,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="relative h-full perspective-1000"
    >
      {/* Main Card Container - Non-boxed, fluid design */}
      <div
        className={cn(
          "relative h-full rounded-3xl overflow-hidden",
          "bg-gradient-to-br from-background/90 via-background/85 to-background/90",
          "backdrop-blur-2xl",
          "border-2 border-white/10 hover:border-primary/30",
          "transition-all duration-700",
          isHovered && "scale-[1.02]",
          isHovered && "shadow-xl shadow-primary/15"
        )}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8 opacity-0"
          animate={{
            backgroundPosition: isHovered ? ["0% 0%", "100% 100%", "0% 0%"] : "0% 0%",
            opacity: isHovered ? 0.5 : 0,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />

        {/* Enhanced Floating Particles on Hover */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, x: "50%", y: "50%" }}
                  animate={{
                    opacity: [0, 0.7, 0],
                    scale: [0, 1.5, 0],
                    x: `${50 + (Math.random() - 0.5) * 80}%`,
                    y: `${50 + (Math.random() - 0.5) * 80}%`,
                    rotate: [0, 360],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 3 + i * 0.2,
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute w-2 h-2 rounded-full bg-primary/50 blur-sm"
                  style={{
                    background: i % 3 === 0
                      ? "radial-gradient(circle, var(--primary), transparent)"
                      : i % 3 === 1
                      ? "radial-gradient(circle, var(--secondary), transparent)"
                      : "radial-gradient(circle, var(--accent), transparent)",
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Animated Light Rays */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={{
                opacity: [0, 0.3, 0],
                rotate: 360,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0"
              style={{
                background: `conic-gradient(from 0deg, transparent 0deg, var(--primary) 30deg, transparent 60deg, var(--secondary) 90deg, transparent 120deg)`,
                mask: "radial-gradient(circle at center, transparent 40%, black 60%)",
                WebkitMask: "radial-gradient(circle at center, transparent 40%, black 60%)",
              }}
            />
          )}
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col items-center text-center">
          {/* Icon Container - Ultra-Dramatic 3D Effect */}
          <motion.div
            className={cn(
              "relative w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center mb-6",
              "bg-gradient-to-br from-primary/25 via-primary/15 to-primary/5",
              "backdrop-blur-xl",
              "border-2 border-primary/40",
              "shadow-2xl shadow-primary/30",
              "text-primary"
            )}
            animate={{
              scale: isHovered ? [1, 1.2, 1.15] : 1,
              rotate: isHovered ? [0, 8, -8, 0] : 0,
              y: isHovered ? [0, -12, 0] : 0,
              boxShadow: isHovered
                ? [
                    "0 10px 40px rgba(var(--primary-rgb), 0.3)",
                    "0 20px 60px rgba(var(--primary-rgb), 0.5)",
                    "0 10px 40px rgba(var(--primary-rgb), 0.3)",
                  ]
                : "0 10px 40px rgba(var(--primary-rgb), 0.3)",
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Multi-Layer Icon Glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl blur-2xl opacity-60 bg-primary/40"
              animate={{
                scale: isHovered ? [1, 1.8, 1] : 1,
                opacity: isHovered ? [0.6, 1, 0.6] : 0.6,
              }}
              transition={{
                duration: 2.5,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-2xl blur-xl opacity-40 bg-secondary/30"
              animate={{
                scale: isHovered ? [1, 1.5, 1] : 1,
                opacity: isHovered ? [0.4, 0.7, 0.4] : 0.4,
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
                delay: 0.3,
              }}
            />

            {/* Icon with Enhanced Animation */}
            <motion.div
              className="relative z-10"
              animate={{
                scale: isHovered ? [1, 1.3, 1.15] : 1,
                rotate: isHovered ? [0, 15, -15, 0] : 0,
                filter: isHovered ? "brightness(1.3)" : "brightness(1)",
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              {icon}
            </motion.div>

            {/* Enhanced Rotating Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-2xl border-2"
                animate={{
                  rotate: isHovered ? 360 : 0,
                  scale: isHovered ? [1, 1.4, 1] : 1,
                  opacity: isHovered ? [0.3, 0.7, 0.3] : 0.3,
                }}
                transition={{
                  duration: 4 + i * 1.5,
                  repeat: isHovered ? Infinity : 0,
                  ease: "linear",
                  delay: i * 0.4,
                }}
                style={{
                  borderStyle: i === 0 ? "solid" : "dashed",
                  borderWidth: `${1.5 + i * 0.5}px`,
                  borderColor: i === 0
                    ? "rgba(var(--primary-rgb), 0.4)"
                    : i === 1
                    ? "rgba(var(--secondary-rgb), 0.3)"
                    : "rgba(var(--accent-rgb), 0.2)",
                }}
              />
            ))}

            {/* Pulsing Inner Glow */}
            <motion.div
              className="absolute inset-2 rounded-xl bg-primary/10"
              animate={{
                scale: isHovered ? [1, 1.2, 1] : 1,
                opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3,
              }}
              transition={{
                duration: 1.5,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-xl lg:text-2xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15 + 0.3,
            }}
            animate={{
              color: isHovered ? "var(--primary)" : "var(--foreground)",
            }}
            transition={{
              duration: 0.3,
            }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-muted-foreground leading-relaxed flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15 + 0.4,
            }}
            animate={{
              color: isHovered ? "var(--foreground)" : "var(--muted-foreground)",
            }}
            transition={{
              duration: 0.3,
            }}
          >
            {description}
          </motion.p>

          {/* Decorative Corner Elements */}
          <div className="absolute top-4 right-4 w-10 h-10">
            <motion.div
              className="absolute top-0 right-0 w-5 h-5 rounded-full bg-primary/20"
              animate={{
                scale: isHovered ? [1, 1.4, 1] : 1,
                opacity: isHovered ? [0.3, 0.7, 0.3] : 0.3,
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="absolute bottom-4 left-4 w-10 h-10">
            <motion.div
              className="absolute bottom-0 left-0 w-5 h-5 rounded-full bg-secondary/20"
              animate={{
                scale: isHovered ? [1, 1.4, 1] : 1,
                opacity: isHovered ? [0.3, 0.7, 0.3] : 0.3,
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>

          {/* Enhanced Animated Border Glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-0 border-2 border-primary/40 pointer-events-none"
            animate={{
              opacity: isHovered ? [0, 0.8, 0] : 0,
              boxShadow: isHovered
                ? [
                    "0 0 0px rgba(var(--primary-rgb), 0)",
                    "0 0 60px rgba(var(--primary-rgb), 0.6)",
                    "0 0 0px rgba(var(--primary-rgb), 0)",
                  ]
                : "0 0 0px rgba(var(--primary-rgb), 0)",
            }}
            transition={{
              duration: 3,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-0 border border-secondary/30 pointer-events-none"
            animate={{
              opacity: isHovered ? [0, 0.5, 0] : 0,
            }}
            transition={{
              duration: 2.5,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-0 pointer-events-none overflow-hidden"
            animate={{
              opacity: isHovered ? [0, 0.3, 0] : 0,
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: isHovered ? ["-100%", "200%"] : "-100%",
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                ease: "linear",
              }}
              style={{
                width: "50%",
                height: "100%",
                transform: "skewX(-20deg)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}


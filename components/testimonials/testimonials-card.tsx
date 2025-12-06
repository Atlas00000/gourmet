"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

interface TestimonialsCardProps {
  name: string
  role: string
  review: string
  rating: number
  image?: string
  family: string
  index: number
}

/**
 * TestimonialsCard - Premium testimonial card with 3D effects
 * Non-boxed, fluid design with stunning visual interactions
 */
export function TestimonialsCard({
  name,
  role,
  review,
  rating,
  image,
  family,
  index,
}: TestimonialsCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 350, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 350, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["18deg", "-18deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-18deg", "18deg"])
  
  // Enhanced magnetic effect with distance calculation
  const distance = useTransform(
    [mouseXSpring, mouseYSpring],
    ([x, y]) => Math.sqrt(x * x + y * y) * 100
  )
  
  const scale = useTransform(distance, [0, 50], [1, 1.06])

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
      initial={{ opacity: 0, y: 120, rotateX: -20, scale: 0.95 }}
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
          "bg-gradient-to-br from-background/90 via-background/80 to-background/90",
          "backdrop-blur-2xl",
          "border border-white/10",
          "transition-all duration-700",
          isHovered && "scale-[1.02]",
          isHovered && "shadow-[0_20px_80px_rgba(var(--primary-rgb),0.15)]"
        )}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 opacity-50"
          animate={{
            backgroundPosition: isHovered ? ["0% 0%", "100% 100%", "0% 0%"] : "0% 0%",
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
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, x: "50%", y: "50%" }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    scale: [0, 1.5, 0],
                    x: `${50 + (Math.random() - 0.5) * 90}%`,
                    y: `${50 + (Math.random() - 0.5) * 90}%`,
                    rotate: [0, 360],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 3 + i * 0.2,
                    delay: i * 0.12,
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
                opacity: [0, 0.35, 0],
                rotate: 360,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0"
              style={{
                background: `conic-gradient(from 0deg, transparent 0deg, var(--primary) 35deg, transparent 70deg, var(--secondary) 105deg, transparent 140deg)`,
                mask: "radial-gradient(circle at center, transparent 45%, black 65%)",
                WebkitMask: "radial-gradient(circle at center, transparent 45%, black 65%)",
              }}
            />
          )}
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col">
          {/* Enhanced Quote Icon */}
          <motion.div
            className="absolute top-6 right-6 text-primary/25"
            animate={{
              scale: isHovered ? [1, 1.3, 1.15] : 1,
              rotate: isHovered ? [0, 15, -15, 0] : 0,
              y: isHovered ? [0, -5, 0] : 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >
            <Quote className="w-12 h-12 lg:w-16 lg:h-16" />
            {/* Quote Glow */}
            <motion.div
              className="absolute inset-0 blur-2xl opacity-50 bg-primary/30"
              animate={{
                scale: isHovered ? [1, 1.6, 1] : 1,
                opacity: isHovered ? [0.5, 0.8, 0.5] : 0.5,
              }}
              transition={{
                duration: 2.5,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Review Text */}
          <motion.div
            className="flex-1 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.2 + 0.3,
            }}
          >
            <motion.p
              className="text-lg lg:text-xl text-foreground/90 leading-relaxed font-medium italic relative z-10"
              animate={{
                color: isHovered ? "var(--foreground)" : "var(--foreground)",
              }}
            >
              "{review}"
            </motion.p>
          </motion.div>

          {/* Rating Stars */}
          <motion.div
            className="flex items-center gap-1 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2 + 0.5,
            }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: isHovered && i < rating ? [1, 1.3, 1] : 1,
                  rotate: isHovered && i < rating ? [0, 15, -15, 0] : 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
              >
                <Star
                  className={cn(
                    "w-5 h-5 lg:w-6 lg:h-6 transition-colors",
                    i < rating
                      ? "text-secondary fill-current"
                      : "text-muted-foreground/30"
                  )}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* User Info Section */}
          <div className="flex items-center gap-4">
            {/* Avatar with Parallax Effect */}
            <motion.div
              className="relative flex-shrink-0"
              animate={{
                scale: isHovered ? [1, 1.1, 1] : 1,
                y: isHovered ? [0, -5, 0] : 0,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg">
                <motion.img
                  src={image || "/placeholder.svg"}
                  alt={name}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                />
                {/* Avatar Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0"
                  animate={{
                    opacity: isHovered ? [0, 0.5, 0] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Decorative Ring */}
              <motion.div
                className="absolute -inset-1 rounded-2xl border-2 border-primary/20"
                animate={{
                  scale: isHovered ? [1, 1.2, 1] : 1,
                  opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3,
                }}
                transition={{
                  duration: 2,
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* User Details */}
            <div className="flex-1 min-w-0">
              <motion.h4
                className="font-bold text-foreground text-lg lg:text-xl mb-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2 + 0.6,
                }}
                animate={{
                  color: isHovered ? "var(--primary)" : "var(--foreground)",
                }}
              >
                {name}
              </motion.h4>
              <motion.p
                className="text-sm text-muted-foreground mb-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2 + 0.7,
                }}
              >
                {role}
              </motion.p>
              <motion.p
                className="text-xs text-secondary font-medium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2 + 0.8,
                }}
              >
                {family}
              </motion.p>
            </div>
          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute top-4 left-4 w-12 h-12">
            <motion.div
              className="absolute top-0 left-0 w-6 h-6 rounded-full bg-primary/20"
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
            <motion.div
              className="absolute top-1 left-1 w-3 h-3 rounded-full bg-secondary/30"
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

          {/* Enhanced Animated Border Glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-0 border-2 border-primary/40 pointer-events-none"
            animate={{
              opacity: isHovered ? [0, 0.8, 0] : 0,
              boxShadow: isHovered
                ? [
                    "0 0 0px rgba(var(--primary-rgb), 0)",
                    "0 0 70px rgba(var(--primary-rgb), 0.6)",
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
              opacity: isHovered ? [0, 0.6, 0] : 0,
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
              opacity: isHovered ? [0, 0.35, 0] : 0,
            }}
            transition={{
              duration: 2.2,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              animate={{
                x: isHovered ? ["-100%", "200%"] : "-100%",
              }}
              transition={{
                duration: 2.2,
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


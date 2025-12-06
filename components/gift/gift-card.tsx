"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface GiftCardProps {
  title: string
  price: string
  originalPrice?: string
  duration: string
  features: string[]
  popular?: boolean
  index: number
}

/**
 * GiftCard - Premium subscription/pricing card with 3D effects
 * Non-boxed, fluid design with stunning visual interactions
 */
export function GiftCard({
  title,
  price,
  originalPrice,
  duration,
  features,
  popular = false,
  index,
}: GiftCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"])

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
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 100, rotateX: -20, scale: 0.95 }}
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
          "bg-gradient-to-br from-background/90 via-background/85 to-background/90",
          "backdrop-blur-2xl",
          "border-2 transition-all duration-700",
          popular
            ? "border-primary shadow-[0_0_60px_rgba(var(--primary-rgb),0.25)]"
            : "border-white/10 hover:border-primary/30",
          isHovered && "scale-[1.02]",
          isHovered && popular && "shadow-[0_0_80px_rgba(var(--primary-rgb),0.35)]",
          isHovered && !popular && "shadow-xl shadow-primary/15"
        )}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Popular Badge */}
        <AnimatePresence>
          {popular && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <Badge className="bg-primary text-primary-foreground px-6 py-2 text-sm font-bold shadow-2xl">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Most Popular
                </Badge>
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-primary/50 blur-xl -z-10"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animated Background Gradient */}
        <motion.div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500",
            popular
              ? "from-primary/15 via-primary/8 to-secondary/15"
              : "from-primary/8 via-transparent to-secondary/8"
          )}
          animate={{
            backgroundPosition: isHovered || popular ? ["0% 0%", "100% 100%", "0% 0%"] : "0% 0%",
            opacity: isHovered || popular ? (popular ? 1 : 0.5) : 0,
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

        {/* Floating Particles on Hover */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, x: "50%", y: "50%" }}
                  animate={{
                    opacity: [0, 0.5, 0],
                    scale: [0, 1.2, 0],
                    x: `${50 + (Math.random() - 0.5) * 70}%`,
                    y: `${50 + (Math.random() - 0.5) * 70}%`,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.15,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className={cn(
                    "absolute w-1.5 h-1.5 rounded-full blur-sm",
                    popular ? "bg-primary/50" : "bg-primary/40"
                  )}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.h3
              className="text-2xl lg:text-3xl font-bold mb-4 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2 + 0.2,
              }}
              animate={{
                color: isHovered && popular ? "var(--primary)" : "var(--foreground)",
              }}
            >
              {title}
            </motion.h3>

            {/* Pricing */}
            <motion.div
              className="flex items-center justify-center gap-3 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2 + 0.3,
              }}
            >
              <motion.span
                className="text-4xl lg:text-5xl font-black text-primary"
                animate={{
                  scale: isHovered ? [1, 1.05, 1] : 1,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                {price}
              </motion.span>
              {originalPrice && (
                <motion.span
                  className="text-xl text-muted-foreground line-through"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2 + 0.4,
                  }}
                >
                  {originalPrice}
                </motion.span>
              )}
            </motion.div>

            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2 + 0.5,
              }}
            >
              {duration}
            </motion.p>
          </div>

          {/* Features List */}
          <div className="flex-1 space-y-4 mb-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.6 + i * 0.1,
                }}
              >
                <motion.div
                  className={cn(
                    "flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center",
                    popular
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/20 text-primary"
                  )}
                  animate={{
                    scale: isHovered ? [1, 1.2, 1] : 1,
                    rotate: isHovered ? [0, 10, -10, 0] : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <Check className="w-4 h-4" />
                </motion.div>
                <motion.span
                  className="text-muted-foreground"
                  animate={{
                    color: isHovered ? "var(--foreground)" : "var(--muted-foreground)",
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  {feature}
                </motion.span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            animate={{
              y: isHovered ? -4 : 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <Button
              className={cn(
                "w-full text-lg py-6 shadow-lg transition-all duration-300",
                popular
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-xl hover:shadow-primary/40"
                  : "bg-secondary hover:bg-secondary/90 text-secondary-foreground hover:shadow-xl hover:shadow-secondary/30"
              )}
              size="lg"
            >
              {popular ? "Start Family Adventure" : "Choose This Plan"}
            </Button>
          </motion.div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-4 right-4 w-12 h-12">
          <motion.div
            className={cn(
              "absolute top-0 right-0 w-6 h-6 rounded-full",
              popular ? "bg-primary/30" : "bg-primary/20"
            )}
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

        <div className="absolute bottom-4 left-4 w-12 h-12">
          <motion.div
            className={cn(
              "absolute bottom-0 left-0 w-6 h-6 rounded-full",
              popular ? "bg-secondary/30" : "bg-secondary/20"
            )}
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

        {/* Animated Border Glow */}
        <motion.div
          className={cn(
            "absolute inset-0 rounded-3xl opacity-0 border-2 pointer-events-none",
            popular ? "border-primary/40" : "border-primary/30"
          )}
          animate={{
            opacity: isHovered ? [0, 0.6, 0] : 0,
            boxShadow: isHovered
              ? [
                  "0 0 0px rgba(var(--primary-rgb), 0)",
                  "0 0 50px rgba(var(--primary-rgb), 0.4)",
                  "0 0 0px rgba(var(--primary-rgb), 0)",
                ]
              : "0 0 0px rgba(var(--primary-rgb), 0)",
          }}
          transition={{
            duration: 2.5,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  )
}


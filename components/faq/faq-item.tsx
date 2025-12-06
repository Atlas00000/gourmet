"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useFAQTracking } from "@/hooks/use-ga4-tracking"

interface FaqItemProps {
  question: string
  answer: string
  index: number
}

/**
 * FaqItem - Premium FAQ accordion item with 3D effects
 * Non-boxed, fluid design with stunning visual interactions
 */
export function FaqItem({ question, answer, index }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const { trackFAQExpand } = useFAQTracking()

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"])

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
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="relative perspective-1000"
    >
      {/* Main Card Container - Non-boxed, fluid design */}
      <div
        className={cn(
          "relative rounded-3xl overflow-hidden",
          "bg-gradient-to-br from-background/90 via-background/85 to-background/90",
          "backdrop-blur-2xl",
          "border-2 border-white/10 hover:border-primary/30",
          "transition-all duration-700",
          isHovered && "scale-[1.01]",
          isHovered && "shadow-xl shadow-primary/15",
          isOpen && "border-primary/40"
        )}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8 opacity-0"
          animate={{
            backgroundPosition: isHovered || isOpen ? ["0% 0%", "100% 100%", "0% 0%"] : "0% 0%",
            opacity: isHovered || isOpen ? 0.5 : 0,
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

        {/* Floating Particles on Hover/Open */}
        <AnimatePresence>
          {(isHovered || isOpen) && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, x: "50%", y: "50%" }}
                  animate={{
                    opacity: [0, 0.6, 0],
                    scale: [0, 1.3, 0],
                    x: `${50 + (Math.random() - 0.5) * 70}%`,
                    y: `${50 + (Math.random() - 0.5) * 70}%`,
                    rotate: [0, 360],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 3 + i * 0.2,
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute w-1.5 h-1.5 rounded-full bg-primary/50 blur-sm"
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

        {/* Content */}
        <div className="relative z-10">
          {/* Question Header - Clickable */}
          <button
            onClick={() => {
              if (!isOpen) {
                trackFAQExpand(question)
              }
              setIsOpen(!isOpen)
            }}
            className="w-full p-6 lg:p-8 flex items-center justify-between gap-4 text-left group"
          >
            <div className="flex items-start gap-4 flex-1">
              {/* Help Icon */}
              <motion.div
                className={cn(
                  "relative flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center",
                  "bg-gradient-to-br from-primary/20 to-primary/5",
                  "backdrop-blur-md",
                  "border border-primary/30",
                  "shadow-lg",
                  "text-primary"
                )}
                animate={{
                  scale: isOpen ? [1, 1.15, 1.1] : isHovered ? [1, 1.1, 1] : 1,
                  rotate: isOpen ? [0, 10, -10, 0] : isHovered ? [0, 5, -5, 0] : 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                {/* Icon Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-50 bg-primary/30"
                  animate={{
                    scale: isOpen || isHovered ? [1, 1.5, 1] : 1,
                    opacity: isOpen || isHovered ? [0.5, 0.8, 0.5] : 0.5,
                  }}
                  transition={{
                    duration: 2,
                    repeat: isOpen || isHovered ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                />
                <HelpCircle className="relative z-10 w-6 h-6 lg:w-7 lg:h-7" />
              </motion.div>

              {/* Question Text */}
              <motion.h3
                className={cn(
                  "text-lg lg:text-xl font-bold text-foreground flex-1",
                  "group-hover:text-primary transition-colors duration-300"
                )}
                animate={{
                  color: isOpen ? "var(--primary)" : isHovered ? "var(--primary)" : "var(--foreground)",
                }}
              >
                {question}
              </motion.h3>
            </div>

            {/* Chevron Icon */}
            <motion.div
              animate={{
                rotate: isOpen ? 180 : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="flex-shrink-0"
            >
              <ChevronDown className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
            </motion.div>
          </button>

          {/* Answer Content - Animated Accordion */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="overflow-hidden"
              >
                <motion.div
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  exit={{ y: -20 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1,
                  }}
                  className="px-6 lg:px-8 pb-6 lg:pb-8"
                >
                  <div className="pl-16 lg:pl-18">
                    <motion.p
                      className="text-muted-foreground leading-relaxed text-base lg:text-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.2,
                      }}
                    >
                      {answer}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-4 right-4 w-10 h-10">
          <motion.div
            className="absolute top-0 right-0 w-5 h-5 rounded-full bg-primary/20"
            animate={{
              scale: isOpen || isHovered ? [1, 1.4, 1] : 1,
              opacity: isOpen || isHovered ? [0.3, 0.7, 0.3] : 0.3,
            }}
            transition={{
              duration: 2,
              repeat: isOpen || isHovered ? Infinity : 0,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Animated Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 border-2 border-primary/30 pointer-events-none"
          animate={{
            opacity: isOpen || isHovered ? [0, 0.7, 0] : 0,
            boxShadow: isOpen || isHovered
              ? [
                  "0 0 0px rgba(var(--primary-rgb), 0)",
                  "0 0 60px rgba(var(--primary-rgb), 0.5)",
                  "0 0 0px rgba(var(--primary-rgb), 0)",
                ]
              : "0 0 0px rgba(var(--primary-rgb), 0)",
          }}
          transition={{
            duration: 3,
            repeat: isOpen || isHovered ? Infinity : 0,
            ease: "easeInOut",
          }}
        />

        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 pointer-events-none overflow-hidden"
          animate={{
            opacity: isOpen || isHovered ? [0, 0.3, 0] : 0,
          }}
          transition={{
            duration: 2,
            repeat: isOpen || isHovered ? Infinity : 0,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: isOpen || isHovered ? ["-100%", "200%"] : "-100%",
            }}
            transition={{
              duration: 2,
              repeat: isOpen || isHovered ? Infinity : 0,
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
    </motion.div>
  )
}


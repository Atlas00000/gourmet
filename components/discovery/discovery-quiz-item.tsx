"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface DiscoveryQuizItemProps {
  question: string
  index: number
  isSelected?: boolean
  onSelect?: () => void
}

/**
 * DiscoveryQuizItem - Premium interactive quiz question card
 * Non-boxed, fluid design with stunning visual interactions
 */
export function DiscoveryQuizItem({
  question,
  index,
  isSelected = false,
  onSelect,
}: DiscoveryQuizItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      className="relative cursor-pointer"
    >
      {/* Main Card Container - Non-boxed, fluid design */}
      <div
        className={cn(
          "relative rounded-2xl overflow-hidden",
          "bg-gradient-to-br from-background/90 via-background/85 to-background/90",
          "backdrop-blur-xl",
          "border-2 transition-all duration-500",
          isSelected
            ? "border-primary shadow-[0_0_40px_rgba(var(--primary-rgb),0.3)]"
            : "border-white/10 hover:border-primary/30",
          isHovered && !isSelected && "shadow-xl shadow-primary/10"
        )}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500",
            isSelected
              ? "from-primary/20 via-primary/10 to-primary/20 opacity-100"
              : "from-primary/10 via-transparent to-secondary/10"
          )}
          animate={{
            backgroundPosition: isHovered || isSelected ? ["0% 0%", "100% 100%", "0% 0%"] : "0% 0%",
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

        {/* Content */}
        <div className="relative z-10 p-6 lg:p-8 flex items-center gap-4">
          {/* Number Badge */}
          <motion.div
            className={cn(
              "flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center font-black text-lg lg:text-xl transition-all duration-500",
              isSelected
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                : "bg-primary/10 text-primary"
            )}
            animate={{
              scale: isSelected ? [1, 1.1, 1] : isHovered ? 1.05 : 1,
              rotate: isSelected ? [0, 5, -5, 0] : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            {index + 1}
          </motion.div>

          {/* Question Text */}
          <motion.p
            className={cn(
              "flex-1 text-base lg:text-lg font-medium transition-colors duration-300",
              isSelected ? "text-foreground" : "text-foreground/90"
            )}
            animate={{
              x: isHovered ? 4 : 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            {question}
          </motion.p>

          {/* Check Icon - Animated */}
          <AnimatePresence>
            {isSelected && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="flex-shrink-0"
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <Check className="w-5 h-5 lg:w-6 lg:h-6 text-primary-foreground" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Selection Indicator Bar - Using scaleX to prevent layout thrash */}
        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r from-primary via-secondary to-primary"
            />
          )}
        </AnimatePresence>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
          animate={{
            opacity: isHovered && !isSelected ? [0, 0.3, 0] : 0,
            boxShadow: isHovered && !isSelected
              ? [
                  "0 0 0px rgba(var(--primary-rgb), 0)",
                  "0 0 30px rgba(var(--primary-rgb), 0.3)",
                  "0 0 0px rgba(var(--primary-rgb), 0)",
                ]
              : "0 0 0px rgba(var(--primary-rgb), 0)",
          }}
          transition={{
            duration: 2,
            repeat: isHovered && !isSelected ? Infinity : 0,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  )
}


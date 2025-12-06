"use client"

import { motion } from "framer-motion"
import { ChefHat, Utensils, Sparkles, Heart, Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface FloatingElement {
  icon: React.ReactNode
  initialX: number
  initialY: number
  duration: number
  delay: number
  size: number
  color: string
}

const floatingElements: FloatingElement[] = [
  {
    icon: <ChefHat className="w-full h-full" />,
    initialX: 10,
    initialY: 20,
    duration: 15,
    delay: 0,
    size: 60,
    color: "text-primary",
  },
  {
    icon: <Utensils className="w-full h-full" />,
    initialX: 80,
    initialY: 30,
    duration: 18,
    delay: 2,
    size: 50,
    color: "text-secondary",
  },
  {
    icon: <Sparkles className="w-full h-full" />,
    initialX: 20,
    initialY: 70,
    duration: 20,
    delay: 4,
    size: 45,
    color: "text-primary",
  },
  {
    icon: <Heart className="w-full h-full" />,
    initialX: 70,
    initialY: 60,
    duration: 16,
    delay: 1,
    size: 55,
    color: "text-secondary",
  },
  {
    icon: <Star className="w-full h-full" />,
    initialX: 50,
    initialY: 15,
    duration: 22,
    delay: 3,
    size: 40,
    color: "text-primary",
  },
  {
    icon: <ChefHat className="w-full h-full" />,
    initialX: 90,
    initialY: 80,
    duration: 19,
    delay: 5,
    size: 50,
    color: "text-secondary",
  },
]

/**
 * HeroFloatingElements - Floating ingredient icons with physics-based animations
 * Creates dynamic, organic movement patterns
 */
export function HeroFloatingElements({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={cn(
            "absolute opacity-20 hover:opacity-40 transition-opacity duration-300",
            element.color
          )}
          style={{
            width: element.size,
            height: element.size,
            left: `${element.initialX}%`,
            top: `${element.initialY}%`,
          }}
          animate={{
            y: [
              element.initialY,
              element.initialY + Math.sin(index) * 30,
              element.initialY - Math.cos(index) * 20,
              element.initialY,
            ],
            x: [
              element.initialX,
              element.initialX + Math.cos(index) * 25,
              element.initialX - Math.sin(index) * 15,
              element.initialX,
            ],
            rotate: [0, 360],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {element.icon}
        </motion.div>
      ))}
    </div>
  )
}


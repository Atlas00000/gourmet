"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MotionStaggerProps {
  children: ReactNode[]
  className?: string
  itemClassName?: string
  delay?: number
  staggerDelay?: number
  direction?: "up" | "down" | "left" | "right"
}

/**
 * MotionStagger - Framer Motion staggered animation
 * Animates children sequentially with smooth transitions
 */
export function MotionStagger({
  children,
  className,
  itemClassName,
  delay = 0,
  staggerDelay = 0.1,
  direction = "up",
}: MotionStaggerProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  }

  const directionMap = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      ...directionMap[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn(className)}
    >
      {children.map((child, index) => (
        <motion.div key={index} variants={itemVariants} className={cn(itemClassName)}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}


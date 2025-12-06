"use client"

import { motion, MotionProps } from "framer-motion"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"
import { getReducedMotionVariants } from "@/lib/animation-utils"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface LayoutSafeMotionProps extends Omit<MotionProps, "variants"> {
  children: ReactNode
  variants?: MotionProps["variants"]
  className?: string
  /**
   * Will-change hint for performance optimization
   * Only use for elements that will be animated frequently
   */
  willChange?: boolean
}

/**
 * LayoutSafeMotion - Motion component that prevents layout thrash
 * Automatically respects prefers-reduced-motion
 * Only uses transform/opacity for animations
 */
export function LayoutSafeMotion({
  children,
  variants,
  className,
  willChange = false,
  ...props
}: LayoutSafeMotionProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const safeVariants = variants
    ? getReducedMotionVariants(variants, prefersReducedMotion)
    : undefined

  return (
    <motion.div
      variants={safeVariants}
      className={cn(willChange && "will-change-transform", className)}
      style={{
        ...props.style,
        // Ensure we use GPU acceleration
        ...(willChange && { willChange: "transform, opacity" }),
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}


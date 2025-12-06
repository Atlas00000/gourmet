"use client"

import { Variants, Transition } from "framer-motion"

/**
 * Animation utilities to prevent layout thrash
 * All animations use transform/opacity only, never layout properties
 */

/**
 * Safe animation variants that only use transform/opacity
 */
export const safeVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
} as const

/**
 * Safe transition presets
 */
export const safeTransitions: Record<string, Transition> = {
  smooth: {
    duration: 0.5,
    ease: [0.4, 0, 0.2, 1],
  },
  spring: {
    type: "spring",
    stiffness: 100,
    damping: 15,
  },
  quick: {
    duration: 0.3,
    ease: "easeOut",
  },
  slow: {
    duration: 0.8,
    ease: "easeInOut",
  },
}

/**
 * Get reduced motion variants (simplified animations)
 */
export function getReducedMotionVariants(
  variants: Variants,
  prefersReducedMotion: boolean
): Variants {
  if (!prefersReducedMotion) return variants

  // Return simplified variants that only use opacity
  const reduced: Variants = {}
  Object.keys(variants).forEach((key) => {
    reduced[key] = {
      opacity: variants[key]?.opacity ?? 1,
      // Remove all transform properties
    }
  })
  return reduced
}

/**
 * Create width animation using scaleX instead of width (prevents layout thrash)
 */
export function createWidthAnimation(
  from: number,
  to: number,
  prefersReducedMotion = false
) {
  if (prefersReducedMotion) {
    return { opacity: to > 0 ? 1 : 0 }
  }
  
  return {
    scaleX: [from, to],
    transformOrigin: "left",
  }
}

/**
 * Create height animation using scaleY instead of height (prevents layout thrash)
 */
export function createHeightAnimation(
  from: number,
  to: number,
  prefersReducedMotion = false
) {
  if (prefersReducedMotion) {
    return { opacity: to > 0 ? 1 : 0 }
  }
  
  return {
    scaleY: [from, to],
    transformOrigin: "top",
  }
}


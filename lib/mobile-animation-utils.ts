"use client"

import { useMobileViewport } from "@/hooks/use-mobile-viewport"
import { Variants } from "framer-motion"

/**
 * Mobile animation utilities - Reduces animation density for mobile
 * Improves performance and battery life on mobile devices
 */

/**
 * Get reduced particle count for mobile
 */
export function getParticleCount(baseCount: number, isMobile: boolean): number {
  if (isMobile) {
    // Reduce particles by 60% on mobile
    return Math.max(1, Math.floor(baseCount * 0.4))
  }
  return baseCount
}

/**
 * Get reduced animation duration for mobile (faster, less intensive)
 */
export function getAnimationDuration(baseDuration: number, isMobile: boolean): number {
  if (isMobile) {
    // Reduce duration by 30% on mobile
    return baseDuration * 0.7
  }
  return baseDuration
}

/**
 * Get simplified animation variants for mobile
 */
export function getMobileOptimizedVariants(
  variants: Variants,
  isMobile: boolean
): Variants {
  if (!isMobile) return variants

  // Simplify variants for mobile - reduce distance and complexity
  const mobileVariants: Variants = {}
  
  Object.keys(variants).forEach((key) => {
    const variant = variants[key]
    if (typeof variant === "object" && variant !== null) {
      mobileVariants[key] = {
        ...variant,
        // Reduce transform distances
        x: typeof variant.x === "number" ? variant.x * 0.5 : variant.x,
        y: typeof variant.y === "number" ? variant.y * 0.5 : variant.y,
        // Reduce scale changes
        scale: typeof variant.scale === "number" && variant.scale !== 1
          ? 1 + (variant.scale - 1) * 0.5
          : variant.scale,
        // Keep opacity as-is (it's performant)
        opacity: variant.opacity,
      }
    } else {
      mobileVariants[key] = variant
    }
  })

  return mobileVariants
}

/**
 * Hook to get mobile-optimized animation props
 */
export function useMobileAnimation() {
  const { isMobile } = useMobileViewport()

  return {
    isMobile,
    getParticleCount: (baseCount: number) => getParticleCount(baseCount, isMobile),
    getAnimationDuration: (baseDuration: number) =>
      getAnimationDuration(baseDuration, isMobile),
    getOptimizedVariants: (variants: Variants) =>
      getMobileOptimizedVariants(variants, isMobile),
  }
}


"use client"

import { useState, useEffect } from "react"
import { useScrollAnimation } from "./use-scroll-animation"

interface UseStaggerAnimationOptions {
  delay?: number
  staggerDelay?: number
  count: number
}

/**
 * Hook for staggered animations (for lists/grids)
 * Delays animation start for each item sequentially
 */
export function useStaggerAnimation(options: UseStaggerAnimationOptions) {
  const { delay = 0, staggerDelay = 100, count } = options
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set())

  useEffect(() => {
    if (!isVisible) return

    const indices = new Set<number>()
    let currentIndex = 0

    const interval = setInterval(() => {
      if (currentIndex < count) {
        indices.add(currentIndex)
        setVisibleIndices(new Set(indices))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, staggerDelay)

    return () => clearInterval(interval)
  }, [isVisible, count, staggerDelay])

  const isItemVisible = (index: number) => {
    return visibleIndices.has(index)
  }

  return {
    ref,
    isVisible,
    isItemVisible,
  }
}


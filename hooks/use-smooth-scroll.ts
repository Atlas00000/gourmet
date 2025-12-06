"use client"

import { useCallback, useEffect, useRef } from "react"

/**
 * useSmoothScroll - Hook for optimized smooth scrolling
 * Provides throttled scroll handling with passive listeners
 */
export function useSmoothScroll(
  callback: (scrollY: number, scrollProgress: number) => void,
  options?: {
    throttle?: number
    passive?: boolean
  }
) {
  const { throttle = 16, passive = true } = options || {}
  const rafId = useRef<number | null>(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        rafId.current = requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight
          const scrollableHeight = documentHeight - windowHeight
          const scrollProgress = scrollableHeight > 0
            ? (scrollY / scrollableHeight) * 100
            : 0

          callback(scrollY, Math.min(100, Math.max(0, scrollProgress)))
          lastScrollY.current = scrollY
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [callback, throttle, passive])
}


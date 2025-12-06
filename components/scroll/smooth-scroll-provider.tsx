"use client"

import { useEffect, ReactNode } from "react"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

interface SmoothScrollProviderProps {
  children: ReactNode
  enabled?: boolean
}

/**
 * SmoothScrollProvider - Provides smooth scroll behavior
 * Respects prefers-reduced-motion and applies CSS smooth scrolling
 */
export function SmoothScrollProvider({
  children,
  enabled = true,
}: SmoothScrollProviderProps) {
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (!enabled || prefersReducedMotion) {
      document.documentElement.style.scrollBehavior = "auto"
      return
    }

    // Apply smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [enabled, prefersReducedMotion])

  return <>{children}</>
}


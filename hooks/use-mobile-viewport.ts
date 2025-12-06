"use client"

import { useState, useEffect } from "react"

interface ViewportInfo {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  width: number
  height: number
  orientation: "portrait" | "landscape"
}

/**
 * useMobileViewport - Enhanced hook for mobile/tablet/desktop detection
 * Provides detailed viewport information for responsive layouts
 */
export function useMobileViewport(): ViewportInfo {
  const [viewport, setViewport] = useState<ViewportInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    width: 1920,
    height: 1080,
    orientation: "landscape",
  })

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      setViewport({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
        width,
        height,
        orientation: width > height ? "landscape" : "portrait",
      })
    }

    // Initial call
    updateViewport()

    // Listen for resize events
    window.addEventListener("resize", updateViewport, { passive: true })
    window.addEventListener("orientationchange", updateViewport, { passive: true })

    return () => {
      window.removeEventListener("resize", updateViewport)
      window.removeEventListener("orientationchange", updateViewport)
    }
  }, [])

  return viewport
}

/**
 * useIsMobile - Simple mobile detection hook
 */
export function useIsMobile(): boolean {
  const { isMobile } = useMobileViewport()
  return isMobile
}

/**
 * useIsTablet - Tablet detection hook
 */
export function useIsTablet(): boolean {
  const { isTablet } = useMobileViewport()
  return isTablet
}


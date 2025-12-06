"use client"

import { useEffect } from "react"

interface AssetPreloaderProps {
  /**
   * Critical images to preload
   */
  images?: string[]
  /**
   * Critical fonts to preload
   */
  fonts?: Array<{
    href: string
    type: string
    crossOrigin?: string
  }>
  /**
   * Priority level for preloading
   */
  priority?: "high" | "low"
}

/**
 * AssetPreloader - Preloads critical assets for better performance
 * Improves perceived performance by loading critical resources early
 */
export function AssetPreloader({
  images = [],
  fonts = [],
  priority = "high",
}: AssetPreloaderProps) {
  useEffect(() => {
    // Preload critical images
    images.forEach((src) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.as = "image"
      link.href = src
      if (priority === "high") {
        link.setAttribute("fetchpriority", "high")
      }
      document.head.appendChild(link)
    })

    // Preload critical fonts
    fonts.forEach((font) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.as = "font"
      link.type = font.type
      link.href = font.href
      if (font.crossOrigin) {
        link.crossOrigin = font.crossOrigin
      }
      document.head.appendChild(link)
    })

    // Cleanup function (optional, but good practice)
    return () => {
      // Note: Preload links are typically not removed as they're one-time operations
    }
  }, [images, fonts, priority])

  return null
}


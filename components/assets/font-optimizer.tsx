"use client"

import { useEffect } from "react"

interface FontOptimizerProps {
  /**
   * Font families to optimize
   */
  fonts?: Array<{
    family: string
    weights?: number[]
    display?: "auto" | "block" | "swap" | "fallback" | "optional"
  }>
}

/**
 * FontOptimizer - Optimizes font loading for better performance
 * Applies font-display strategies and preloads critical fonts
 */
export function FontOptimizer({ fonts = [] }: FontOptimizerProps) {
  useEffect(() => {
    if (fonts.length === 0) return

    // Inject font-display CSS for better performance
    const style = document.createElement("style")
    style.textContent = fonts
      .map((font) => {
        const display = font.display || "swap"
        return `
          @font-face {
            font-family: '${font.family}';
            font-display: ${display};
          }
        `
      })
      .join("\n")

    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [fonts])

  return null
}


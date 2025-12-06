"use client"

import { useState, useEffect, useRef, RefObject } from "react"

interface UseParallaxOptions {
  speed?: number
  direction?: "up" | "down"
  offset?: number
}

/**
 * Hook for parallax scrolling effects
 * Creates smooth parallax movement based on scroll position
 */
export function useParallax(options: UseParallaxOptions = {}) {
  const { speed = 0.5, direction = "up", offset = 0 } = options
  const [transform, setTransform] = useState(0)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const scrollY = window.scrollY + rect.top
      const windowHeight = window.innerHeight
      const elementTop = scrollY - window.scrollY
      const elementCenter = elementTop + rect.height / 2
      const windowCenter = windowHeight / 2

      const distance = elementCenter - windowCenter
      const parallaxValue = distance * speed * (direction === "up" ? -1 : 1) + offset

      setTransform(parallaxValue)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed, direction, offset])

  return {
    ref: ref as RefObject<HTMLElement>,
    transform: `translateY(${transform}px)`,
  }
}


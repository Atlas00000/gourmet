"use client"

/**
 * Scroll utilities for smooth scrolling and performance
 */

/**
 * Smooth scroll to element with offset for fixed header
 */
export function scrollToSection(
  elementId: string,
  options?: {
    offset?: number
    behavior?: ScrollBehavior
    duration?: number
  }
) {
  const { offset = 80, behavior = "smooth" } = options || {}
  const element = document.getElementById(elementId)

  if (!element) {
    console.warn(`Element with id "${elementId}" not found`)
    return
  }

  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.scrollY - offset

  if (behavior === "smooth") {
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  } else {
    window.scrollTo({
      top: offsetPosition,
      behavior: "auto",
    })
  }
}

/**
 * Throttle function for scroll events
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Debounce function for scroll events
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  return function (this: any, ...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

/**
 * Get scroll progress (0-100)
 */
export function getScrollProgress(): number {
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  const scrollTop = window.scrollY
  const scrollableHeight = documentHeight - windowHeight

  if (scrollableHeight <= 0) return 0
  return Math.min(100, Math.max(0, (scrollTop / scrollableHeight) * 100))
}

/**
 * Check if element is in viewport
 */
export function isInViewport(
  element: HTMLElement,
  threshold: number = 0
): boolean {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= -threshold &&
    rect.left >= -threshold &&
    rect.bottom <= window.innerHeight + threshold &&
    rect.right <= window.innerWidth + threshold
  )
}

/**
 * Get scroll direction
 */
export function getScrollDirection(
  currentScroll: number,
  previousScroll: number
): "up" | "down" | null {
  if (currentScroll > previousScroll) return "down"
  if (currentScroll < previousScroll) return "up"
  return null
}


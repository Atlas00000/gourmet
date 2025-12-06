"use client"

import { ReactNode } from "react"
import { useMobileViewport } from "@/hooks/use-mobile-viewport"
import { cn } from "@/lib/utils"

interface MobileLayoutProps {
  children: ReactNode
  className?: string
  /**
   * Enable mobile-specific optimizations
   */
  optimizeForMobile?: boolean
}

/**
 * MobileLayout - Optimized layout for mobile devices
 * Reduces motion density, optimizes spacing, and improves touch interactions
 */
export function MobileLayout({
  children,
  className,
  optimizeForMobile = true,
}: MobileLayoutProps) {
  const { isMobile, isTablet } = useMobileViewport()

  if (!isMobile && !isTablet) {
    // Desktop view - return children as-is
    return <>{children}</>
  }

  return (
    <div
      className={cn(
        "mobile-layout",
        // Mobile-specific optimizations
        optimizeForMobile && "mobile-optimized",
        // Reduced motion for better performance
        "reduced-motion-density",
        className
      )}
      style={{
        // Mobile-specific CSS variables
        "--mobile-spacing": "1rem",
        "--mobile-font-scale": "0.9",
      } as React.CSSProperties}
    >
      {children}
    </div>
  )
}


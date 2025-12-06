"use client"

import { ReactNode } from "react"
import { useMobileViewport } from "@/hooks/use-mobile-viewport"
import { MobileLayout } from "./mobile-layout"
import { cn } from "@/lib/utils"

interface ResponsiveLayoutProps {
  children: ReactNode
  /**
   * Mobile-specific content (optional)
   */
  mobileContent?: ReactNode
  /**
   * Desktop-specific content (optional)
   */
  desktopContent?: ReactNode
  className?: string
  /**
   * Enable mobile optimizations
   */
  optimizeForMobile?: boolean
}

/**
 * ResponsiveLayout - Smart layout that adapts to viewport
 * Automatically switches between mobile and desktop layouts
 */
export function ResponsiveLayout({
  children,
  mobileContent,
  desktopContent,
  className,
  optimizeForMobile = true,
}: ResponsiveLayoutProps) {
  const { isMobile, isTablet } = useMobileViewport()

  // If specific mobile/desktop content provided, use that
  if (mobileContent && (isMobile || isTablet)) {
    return (
      <MobileLayout className={className} optimizeForMobile={optimizeForMobile}>
        {mobileContent}
      </MobileLayout>
    )
  }

  if (desktopContent && !isMobile && !isTablet) {
    return <div className={cn("desktop-layout", className)}>{desktopContent}</div>
  }

  // Default: wrap children with responsive layout
  return (
    <MobileLayout className={className} optimizeForMobile={optimizeForMobile}>
      {children}
    </MobileLayout>
  )
}


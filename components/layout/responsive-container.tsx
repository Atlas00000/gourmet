"use client"

import { ReactNode } from "react"
import { useMobileViewport } from "@/hooks/use-mobile-viewport"
import { cn } from "@/lib/utils"

interface ResponsiveContainerProps {
  children: ReactNode
  className?: string
  /**
   * Mobile-specific className
   */
  mobileClassName?: string
  /**
   * Desktop-specific className
   */
  desktopClassName?: string
  /**
   * Custom max-width for container
   */
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
}

const maxWidthClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  full: "max-w-full",
}

/**
 * ResponsiveContainer - Container that adapts to viewport
 * Provides optimized spacing and layout for mobile/desktop
 */
export function ResponsiveContainer({
  children,
  className,
  mobileClassName,
  desktopClassName,
  maxWidth = "2xl",
}: ResponsiveContainerProps) {
  const { isMobile, isTablet } = useMobileViewport()

  return (
    <div
      className={cn(
        "container mx-auto px-4 sm:px-6 lg:px-8",
        maxWidthClasses[maxWidth],
        isMobile || isTablet ? mobileClassName : desktopClassName,
        className
      )}
    >
      {children}
    </div>
  )
}


"use client"

import { ComponentType, Suspense } from "react"
import { SectionSkeleton } from "@/components/loading/section-skeleton"
import { cn } from "@/lib/utils"

interface LazySectionProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  skeletonVariant?: "default" | "minimal"
  className?: string
}

/**
 * LazySection - Wrapper for lazy-loaded sections with loading states
 * Provides consistent loading experience across the app
 */
export function LazySection({
  children,
  fallback,
  skeletonVariant = "default",
  className,
}: LazySectionProps) {
  return (
    <Suspense
      fallback={
        fallback || <SectionSkeleton variant={skeletonVariant} className={className} />
      }
    >
      {children}
    </Suspense>
  )
}


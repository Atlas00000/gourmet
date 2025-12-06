"use client"

import dynamic from "next/dynamic"
import { ComponentType } from "react"
import { SectionSkeleton } from "@/components/loading/section-skeleton"

/**
 * createLazyComponent - Utility for creating lazy-loaded components with consistent loading states
 * Provides code splitting with themed loading skeletons
 */
export function createLazyComponent<P = {}>(
  importFn: () => Promise<{ default: ComponentType<P> }>,
  options?: {
    skeletonVariant?: "default" | "minimal"
    ssr?: boolean
  }
) {
  return dynamic(importFn, {
    loading: () => <SectionSkeleton variant={options?.skeletonVariant || "default"} />,
    ssr: options?.ssr !== false, // Default to SSR for SEO, but allow override
  })
}


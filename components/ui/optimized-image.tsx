"use client"

import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

/**
 * OptimizedImage - thin wrapper around next/image with sane defaults.
 * Keeps layout responsive and consistent with the design system.
 */
export interface OptimizedImageProps extends Omit<ImageProps, "fill"> {
  className?: string
}

export function OptimizedImage({ className, alt, ...props }: OptimizedImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        alt={alt}
        // Let caller control sizes; default to responsive behavior
        sizes={props.sizes ?? "(min-width: 1024px) 800px, 100vw"}
        {...props}
      />
    </div>
  )
}



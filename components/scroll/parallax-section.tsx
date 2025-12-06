"use client"

import { ReactNode } from "react"
import { useParallax } from "@/hooks/use-parallax"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down"
  background?: ReactNode
}

/**
 * ParallaxSection - Section with parallax scrolling effect
 * Creates depth with parallax background and content
 */
export function ParallaxSection({
  children,
  className,
  speed = 0.5,
  direction = "up",
  background,
}: ParallaxSectionProps) {
  const { ref: contentRef, transform: contentTransform } = useParallax({
    speed: speed,
    direction,
  })

  const { ref: bgRef, transform: bgTransform } = useParallax({
    speed: speed * 0.5,
    direction,
  })

  return (
    <section className={cn("relative overflow-hidden", className)}>
      {background && (
        <div
          ref={bgRef}
          className="absolute inset-0 z-0"
          style={{
            transform: bgTransform,
          }}
        >
          {background}
        </div>
      )}
      <div
        ref={contentRef}
        className="relative z-10"
        style={{
          transform: contentTransform,
        }}
      >
        {children}
      </div>
    </section>
  )
}


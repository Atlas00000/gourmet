"use client"

import { ReactNode } from "react"
import { useStaggerAnimation } from "@/hooks/use-stagger-animation"
import { cn } from "@/lib/utils"

interface StaggerProps {
  children: ReactNode[]
  className?: string
  itemClassName?: string
  delay?: number
  staggerDelay?: number
}

/**
 * Stagger component - Animates children sequentially on scroll
 */
export function Stagger({
  children,
  className,
  itemClassName,
  delay = 0,
  staggerDelay = 100,
}: StaggerProps) {
  const { ref, isItemVisible } = useStaggerAnimation({
    count: children.length,
    delay,
    staggerDelay,
  })

  return (
    <div ref={ref} className={cn(className)}>
      {children.map((child, index) => (
        <div
          key={index}
          className={cn(
            "transition-all",
            itemClassName,
            isItemVisible(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{
            transitionDuration: "600ms",
            transitionDelay: `${index * staggerDelay}ms`,
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}


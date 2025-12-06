"use client"

import { ReactNode, useRef, MouseEvent, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface RippleProps {
  children: ReactNode
  className?: string
  color?: string
}

/**
 * Ripple - Material Design ripple effect
 * Creates ripple animation on click
 */
export function Ripple({ children, className, color = "rgba(255, 255, 255, 0.5)" }: RippleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newRipple = {
      x,
      y,
      id: Date.now(),
    }

    setRipples((prev) => [...prev, newRipple])

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
    }, 600)
  }

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={cn("relative overflow-hidden", className)}
    >
      {children}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            backgroundColor: color,
          }}
          initial={{ width: 0, height: 0, opacity: 0.5 }}
          animate={{ width: 300, height: 300, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </div>
  )
}


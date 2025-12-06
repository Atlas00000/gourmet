"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface InteractiveGridProps {
  className?: string
  rows?: number
  cols?: number
}

/**
 * HeroInteractiveGrid - Interactive grid background with hover effects
 * Creates dynamic, responsive grid that reacts to mouse movement
 */
export function HeroInteractiveGrid({ className, rows = 15, cols = 20 }: InteractiveGridProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredCell, setHoveredCell] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const cellWidth = 100 / cols
  const cellHeight = 100 / rows

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0", className)}
      style={{
        backgroundImage: `
          linear-gradient(var(--primary) 1px, transparent 1px),
          linear-gradient(90deg, var(--primary) 1px, transparent 1px)
        `,
        backgroundSize: `${cellWidth}% ${cellHeight}%`,
        opacity: 0.1,
      }}
    >
      {/* Interactive Cells */}
      {Array.from({ length: rows * cols }).map((_, index) => {
        const row = Math.floor(index / cols)
        const col = index % cols
        const cellX = col * cellWidth
        const cellY = row * cellHeight
        const cellCenterX = cellX + cellWidth / 2
        const cellCenterY = cellY + cellHeight / 2

        const distance = Math.sqrt(
          Math.pow(mousePosition.x / (window.innerWidth / 100) - cellCenterX, 2) +
          Math.pow(mousePosition.y / (window.innerHeight / 100) - cellCenterY, 2)
        )

        const intensity = Math.max(0, 1 - distance / 30)
        const isHovered = hoveredCell === index

        return (
          <motion.div
            key={index}
            className="absolute rounded-lg"
            style={{
              left: `${cellX}%`,
              top: `${cellY}%`,
              width: `${cellWidth}%`,
              height: `${cellHeight}%`,
              background: isHovered
                ? "radial-gradient(circle, var(--primary), transparent)"
                : "transparent",
            }}
            animate={{
              opacity: isHovered ? 0.3 : intensity * 0.1,
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            onMouseEnter={() => setHoveredCell(index)}
            onMouseLeave={() => setHoveredCell(null)}
          />
        )
      })}

      {/* Cursor Glow Effect */}
      <motion.div
        className="absolute rounded-full blur-2xl pointer-events-none"
        style={{
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle, var(--primary), transparent)",
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}


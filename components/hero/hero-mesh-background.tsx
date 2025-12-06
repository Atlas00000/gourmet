"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HeroMeshBackgroundProps {
  className?: string
}

/**
 * HeroMeshBackground - Advanced mesh gradient background
 * Multiple animated layers creating depth and movement
 */
export function HeroMeshBackground({ className }: HeroMeshBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrame: number
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const animate = (currentTime: number) => {
      time = currentTime * 0.001

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create multiple gradient layers
      for (let i = 0; i < 3; i++) {
        const offset = i * Math.PI * 0.6
        const x = canvas.width * (0.3 + Math.sin(time + offset) * 0.2)
        const y = canvas.height * (0.3 + Math.cos(time + offset) * 0.2)

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, canvas.width * 0.8)
        const hue = (time * 20 + i * 60) % 360
        gradient.addColorStop(0, `hsla(${hue}, 70%, 60%, 0.15)`)
        gradient.addColorStop(0.5, `hsla(${(hue + 60) % 360}, 70%, 50%, 0.1)`)
        gradient.addColorStop(1, "transparent")

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div ref={containerRef} className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Animated Canvas Mesh */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "multiply" }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />

      {/* Animated Orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl opacity-20"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            background: i % 2 === 0
              ? "radial-gradient(circle, var(--primary), transparent)"
              : "radial-gradient(circle, var(--secondary), transparent)",
            left: `${20 + i * 20}%`,
            top: `${20 + i * 15}%`,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--primary) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  )
}


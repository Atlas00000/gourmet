"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HeroBackgroundProps {
  className?: string
}

/**
 * HeroBackground - Dynamic animated background with mesh gradients
 * Creates a stunning, fluid background effect
 */
export function HeroBackground({ className }: HeroBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create animated gradient mesh (optimized)
    let animationFrame: number
    let time = 0
    let lastTime = performance.now()

    const animate = (currentTime: number) => {
      const delta = currentTime - lastTime
      lastTime = currentTime
      
      // Throttle animation for performance
      if (delta < 16) {
        animationFrame = requestAnimationFrame(animate)
        return
      }

      time += 0.003
      
      // Create gradient
      const gradient1 = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient1.addColorStop(0, `hsl(${(time * 30) % 360}, 60%, 70%)`)
      gradient1.addColorStop(0.5, `hsl(${(time * 30 + 120) % 360}, 60%, 60%)`)
      gradient1.addColorStop(1, `hsl(${(time * 30 + 240) % 360}, 60%, 70%)`)

      ctx.fillStyle = gradient1
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add mesh overlay (simplified for performance)
      const centerX = canvas.width * (0.5 + Math.sin(time) * 0.2)
      const centerY = canvas.height * (0.5 + Math.cos(time) * 0.2)
      const gradient2 = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        canvas.width * 0.6
      )
      gradient2.addColorStop(0, "rgba(229, 185, 199, 0.2)")
      gradient2.addColorStop(0.5, "rgba(212, 168, 90, 0.15)")
      gradient2.addColorStop(1, "transparent")

      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
        style={{ mixBlendMode: "multiply" }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
      
      {/* Animated Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}


"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface DiscoveryImageSectionProps {
  image: string
  alt: string
  className?: string
}

/**
 * DiscoveryImageSection - Premium image section with parallax and 3D effects
 * Interactive image with depth and hover effects
 */
export function DiscoveryImageSection({
  image,
  alt,
  className,
}: DiscoveryImageSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, x: 50, rotateY: 15 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={cn("relative", className)}
    >
      {/* Image Container */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        {/* Image with Parallax */}
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="relative"
        >
          <img
            src={image || "/placeholder.svg"}
            alt={alt}
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"
            animate={{
              opacity: isHovered ? 0.4 : 0.6,
            }}
            transition={{
              duration: 0.3,
            }}
          />

          {/* Hover Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"
            animate={{
              opacity: isHovered ? [0.3, 0.6, 0.3] : 0,
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Decorative Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-primary/20 pointer-events-none"
          animate={{
            opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3,
            boxShadow: isHovered
              ? [
                  "0 0 0px rgba(var(--primary-rgb), 0)",
                  "0 0 40px rgba(var(--primary-rgb), 0.4)",
                  "0 0 0px rgba(var(--primary-rgb), 0)",
                ]
              : "0 0 0px rgba(var(--primary-rgb), 0)",
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/20 blur-2xl"
        animate={{
          scale: isHovered ? [1, 1.3, 1] : 1,
          opacity: isHovered ? [0.3, 0.5, 0.3] : 0.3,
        }}
        transition={{
          duration: 3,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-secondary/20 blur-xl"
        animate={{
          scale: isHovered ? [1, 1.4, 1] : 1,
          opacity: isHovered ? [0.3, 0.5, 0.3] : 0.3,
        }}
        transition={{
          duration: 2.5,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </motion.div>
  )
}


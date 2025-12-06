"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  LoadingBackground,
  LoadingLogo,
  LoadingProgress,
  LoadingText,
} from "@/components/loading"

/**
 * LoadingScreen - Ultra-revamped loading screen
 * Features stunning visuals, 3D animations, and interactive elements
 */
export default function LoadingScreen() {
  const [currentIcon, setCurrentIcon] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Icon rotation interval
    const iconInterval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % 4)
    }, 1000)

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        // Smooth progress with some randomness
        const increment = Math.random() * 12 + 6
        return Math.min(prev + increment, 100)
      })
    }, 250)

    return () => {
      clearInterval(iconInterval)
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <LoadingBackground />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 flex flex-col items-center space-y-12">
        {/* Animated Logo */}
        <LoadingLogo />

        {/* Animated Loading Text with Icons */}
        <LoadingText currentIcon={currentIcon} />

        {/* Progress Indicator */}
        <LoadingProgress progress={progress} />

        {/* Additional Loading Message */}
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <motion.p
            className="text-sm lg:text-base text-foreground font-medium"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Preparing your family cooking experience
          </motion.p>
          <motion.p
            className="text-xs lg:text-sm text-muted-foreground"
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            Just a few more moments...
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, ChefHat, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GradientText } from "@/components/gradients/gradient-text"
import { cn } from "@/lib/utils"

interface NotFoundContentProps {
  className?: string
}

/**
 * NotFoundContent - Main interactive 404 content
 * Glassmorphism card, animated 404, and clear CTAs
 */
export function NotFoundContent({ className }: NotFoundContentProps) {
  return (
    <motion.div
      className={cn("w-full max-w-3xl mx-auto", className)}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div
        className={cn(
          "relative overflow-hidden rounded-3xl",
          "bg-gradient-to-br from-background/80 via-background/70 to-background/80",
          "backdrop-blur-2xl",
          "border border-white/10",
          "shadow-[0_24px_80px_rgba(15,23,42,0.45)]",
          "px-8 py-10 lg:px-12 lg:py-14"
        )}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Accent gradient blob */}
        <motion.div
          className="pointer-events-none absolute -inset-24 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 0% 0%, rgba(129, 140, 248, 0.5), transparent 60%)," +
              "radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.4), transparent 55%)",
          }}
          animate={{
            opacity: [0.25, 0.5, 0.25],
            rotate: [0, 15, -10, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center">
          {/* Left: 404 + message */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <motion.div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ChefHat className="w-4 h-4" />
              Lost in the kitchen
            </motion.div>

            <div className="space-y-3">
              <motion.h1
                className="text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <GradientText>404</GradientText>
              </motion.h1>

              <motion.h2
                className="text-2xl lg:text-3xl font-semibold text-foreground/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
              >
                Recipe not found – but your next favorite meal is
              </motion.h2>

              <motion.p
                className="text-base lg:text-lg text-muted-foreground max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
              >
                The page you&apos;re looking for has simmered away, but Gourmet Fusion still has
                everything you need to create magical family moments in the kitchen.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              <Button
                asChild
                size="lg"
                className={cn(
                  "px-7 py-6 text-base lg:text-lg font-semibold",
                  "bg-primary hover:bg-primary/90 text-primary-foreground",
                  "shadow-lg shadow-primary/40",
                  "transition-transform duration-300",
                  "hover:scale-[1.03] active:scale-[0.98]"
                )}
              >
                <Link href="/">
                  <Home className="w-5 h-5 mr-2" />
                  Back to home
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className={cn(
                  "px-7 py-6 text-base lg:text-lg font-semibold",
                  "border-primary/40 text-primary hover:bg-primary/10",
                  "backdrop-blur-md",
                  "transition-transform duration-300",
                  "hover:scale-[1.03] active:scale-[0.98]"
                )}
              >
                <Link href="#recipes">
                  Browse recipes
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right: Decorative illustration-style block */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.div
              className={cn(
                "relative w-full max-w-sm aspect-[4/3] rounded-3xl overflow-hidden",
                "bg-gradient-to-br from-primary/15 via-background to-secondary/15",
                "border border-white/10 backdrop-blur-xl"
              )}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Floating elements inside card */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-2xl bg-primary/15"
                  style={{
                    inset:
                      i === 0
                        ? "18% 45% auto 10%"
                        : i === 1
                        ? "45% 12% auto 35%"
                        : "65% 28% auto 12%",
                  }}
                  animate={{
                    y: [0, -8, 0],
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}

              {/* Center icon */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ y: [0, -6, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-20 h-20 rounded-3xl bg-background/80 border border-primary/40 flex items-center justify-center shadow-xl">
                  <ChefHat className="w-10 h-10 text-primary" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}


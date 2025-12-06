"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface FeatureCardProps {
  icon?: ReactNode
  title: string
  description: string
  className?: string
  delay?: number
  hover?: boolean
}

/**
 * FeatureCard - Premium feature card with icon, title, and description
 * Enhanced with animations and hover effects
 */
export function FeatureCard({
  icon,
  title,
  description,
  className,
  delay = 0,
  hover = true,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.02,
            }
          : undefined
      }
      className={cn(className)}
    >
      <Card
        variant="elevated"
        className={cn(
          "h-full transition-all duration-300",
          hover && "hover:shadow-xl hover:shadow-primary/20"
        )}
      >
        <CardHeader>
          {icon && (
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4"
            >
              {icon}
            </motion.div>
          )}
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}


"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Clock, Users, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  title: string
  price: string
  originalPrice?: string
  image?: string
  ingredients: string[]
  rating: number
  difficulty: string
  time: string
  serves: string
  index: number
}

/**
 * ShowcaseProductCard - Premium product card with 3D effects
 * Interactive card with magnetic hover and depth
 */
export function ShowcaseProductCard({
  title,
  price,
  originalPrice,
  image,
  ingredients,
  rating,
  difficulty,
  time,
  serves,
  index,
}: ProductCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 50 })
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 50 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"])

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
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="h-full"
    >
      <Card className="bg-background/80 backdrop-blur-sm border-border/50 h-full overflow-hidden group hover:border-primary/50 transition-all duration-500 relative">
          {/* Image Container with Parallax Effect */}
          <div className="relative overflow-hidden h-64">
            <motion.div
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

            {/* Price Badges */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <Badge className="bg-secondary text-secondary-foreground shadow-lg text-base px-4 py-2">
                {price}
              </Badge>
              {originalPrice && (
                <Badge
                  variant="outline"
                  className="bg-background/90 text-muted-foreground line-through text-sm"
                >
                  {originalPrice}
                </Badge>
              )}
            </div>

            {/* Difficulty Badge */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-primary text-primary-foreground shadow-lg">
                {difficulty}
              </Badge>
            </div>

            {/* Hover Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"
              animate={{
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <CardContent className="p-6 space-y-4">
            {/* Rating and Meta Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4 transition-colors",
                      i < Math.floor(rating)
                        ? "text-secondary fill-current"
                        : "text-muted-foreground"
                    )}
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-2">({rating})</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {time}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {serves}
                </div>
              </div>
            </div>

            {/* Title */}
            <motion.h3
              className="text-2xl font-bold text-foreground"
              animate={{
                color: isHovered ? "var(--primary)" : "var(--foreground)",
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>

            {/* Ingredients List */}
            <div className="space-y-2">
              {ingredients.map((ingredient, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15 + i * 0.1,
                  }}
                >
                  <motion.div
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{
                      scale: isHovered ? [1, 1.5, 1] : 1,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.1,
                      repeat: isHovered ? Infinity : 0,
                      repeatDelay: 1,
                    }}
                  />
                  {ingredient}
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              animate={{
                y: isHovered ? -4 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                size="lg"
              >
                <Heart className="w-4 h-4 mr-2" />
                Add to Family Cart
              </Button>
            </motion.div>
          </CardContent>
        </Card>
    </motion.div>
  )
}


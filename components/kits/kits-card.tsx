"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

interface KitsCardProps {
  title: string
  price: string
  originalPrice?: string
  image: string
  ingredients: string[]
  rating: number
  difficulty: string
  time: string
  serves: string
  index: number
}

/**
 * KitsCard - Premium cooking kit card with 3D effects
 * Non-boxed, fluid design with stunning visual interactions
 */
export function KitsCard({
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
}: KitsCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 })

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
      initial={{ opacity: 0, y: 120, rotateX: -20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 1,
        delay: index * 0.2,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="relative h-full perspective-1000"
    >
      {/* Main Card Container - Non-boxed, fluid design */}
      <div
        className={cn(
          "relative h-full rounded-3xl overflow-hidden",
          "bg-gradient-to-br from-background/90 via-background/85 to-background/90",
          "backdrop-blur-2xl",
          "border-2 border-white/10 hover:border-primary/30",
          "transition-all duration-700",
          isHovered && "scale-[1.02]",
          isHovered && "shadow-xl shadow-primary/15"
        )}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8 opacity-0"
          animate={{
            backgroundPosition: isHovered ? ["0% 0%", "100% 100%", "0% 0%"] : "0% 0%",
            opacity: isHovered ? 0.5 : 0,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />

        {/* Floating Particles on Hover */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, x: "50%", y: "50%" }}
                  animate={{
                    opacity: [0, 0.5, 0],
                    scale: [0, 1.2, 0],
                    x: `${50 + (Math.random() - 0.5) * 70}%`,
                    y: `${50 + (Math.random() - 0.5) * 70}%`,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.15,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute w-1.5 h-1.5 rounded-full bg-primary/40 blur-sm"
                />
              ))}
            </>
          )}
        </AnimatePresence>

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

        {/* Content */}
        <div className="relative z-10 p-6 lg:p-8 space-y-4">
          {/* Rating and Meta Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: isHovered && i < Math.floor(rating) ? [1, 1.3, 1] : 1,
                    rotate: isHovered && i < Math.floor(rating) ? [0, 15, -15, 0] : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <Star
                    className={cn(
                      "w-4 h-4 transition-colors",
                      i < Math.floor(rating)
                        ? "text-secondary fill-current"
                        : "text-muted-foreground/30"
                    )}
                  />
                </motion.div>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2 + 0.2,
            }}
            animate={{
              color: isHovered ? "var(--primary)" : "var(--foreground)",
            }}
            transition={{
              duration: 0.3,
            }}
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
                  delay: index * 0.2 + i * 0.1,
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
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-4 right-4 w-12 h-12">
          <motion.div
            className="absolute top-0 right-0 w-6 h-6 rounded-full bg-primary/20"
            animate={{
              scale: isHovered ? [1, 1.4, 1] : 1,
              opacity: isHovered ? [0.3, 0.7, 0.3] : 0.3,
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="absolute bottom-4 left-4 w-12 h-12">
          <motion.div
            className="absolute bottom-0 left-0 w-6 h-6 rounded-full bg-secondary/20"
            animate={{
              scale: isHovered ? [1, 1.4, 1] : 1,
              opacity: isHovered ? [0.3, 0.7, 0.3] : 0.3,
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>

        {/* Animated Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 border-2 border-primary/30 pointer-events-none"
          animate={{
            opacity: isHovered ? [0, 0.6, 0] : 0,
            boxShadow: isHovered
              ? [
                  "0 0 0px rgba(var(--primary-rgb), 0)",
                  "0 0 50px rgba(var(--primary-rgb), 0.4)",
                  "0 0 0px rgba(var(--primary-rgb), 0)",
                ]
              : "0 0 0px rgba(var(--primary-rgb), 0)",
          }}
          transition={{
            duration: 2.5,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  )
}


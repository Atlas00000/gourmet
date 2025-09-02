"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Star, Clock, Award } from "lucide-react"

const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    value: 50000,
    suffix: "+",
    label: "Happy Families",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: <Star className="w-6 h-6" />,
    value: 4.9,
    suffix: "★",
    label: "Family Rating",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    value: 15,
    suffix: "min",
    label: "Avg Cook Time",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: 200,
    suffix: "+",
    label: "Easy Recipes",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {value === 4.9 ? count.toFixed(1) : count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function InteractiveStats() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className={`bg-card border-border hover:shadow-lg transition-all duration-300 cursor-pointer transform ${
            hoveredIndex === index ? "scale-105" : "scale-100"
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <CardContent className="p-6 text-center">
            <div
              className={`w-12 h-12 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 ${stat.color}`}
            >
              {stat.icon}
            </div>
            <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

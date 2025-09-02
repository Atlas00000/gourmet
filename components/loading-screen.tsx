"use client"

import { useState, useEffect } from "react"
import { ChefHat, Heart, Utensils, Users } from "lucide-react"

export default function LoadingScreen() {
  const [currentIcon, setCurrentIcon] = useState(0)
  const [progress, setProgress] = useState(0)

  const icons = [
    { icon: "ChefHat", color: "text-primary", label: "Preparing Kitchen" },
    { icon: "Utensils", color: "text-secondary", label: "Gathering Ingredients" },
    { icon: "Users", color: "text-primary", label: "Setting Family Table" },
    { icon: "Heart", color: "text-secondary", label: "Ready to Cook" },
  ]

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "ChefHat":
        return <ChefHat />
      case "Utensils":
        return <Utensils />
      case "Users":
        return <Users />
      case "Heart":
        return <Heart />
      default:
        return <ChefHat />
    }
  }

  useEffect(() => {
    const iconInterval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length)
    }, 800)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 200)

    return () => {
      clearInterval(iconInterval)
      clearInterval(progressInterval)
    }
  }, [icons.length])

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-primary/10 via-background to-secondary/5 flex items-center justify-center">
      <div className="text-center space-y-8 max-w-md mx-auto px-6">
        {/* Logo */}
        <div className="space-y-4">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <ChefHat className="w-12 h-12 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Gourmet Fusion</h1>
            <p className="text-muted-foreground">Family Cooking</p>
          </div>
        </div>

        {/* Animated Icon */}
        <div className="space-y-4">
          <div className="w-16 h-16 bg-card border border-border rounded-2xl flex items-center justify-center mx-auto shadow-lg">
            <div className={`w-8 h-8 ${icons[currentIcon].color} animate-bounce`}>
              {getIconComponent(icons[currentIcon].icon)}
            </div>
          </div>
          <p className="text-sm text-muted-foreground animate-pulse">
            {icons[currentIcon].label}...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-3">
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            {Math.round(progress)}% Complete
          </p>
        </div>

        {/* Loading Message */}
        <div className="space-y-2">
          <p className="text-sm text-foreground font-medium">
            Preparing your family cooking experience
          </p>
          <p className="text-xs text-muted-foreground">
            Just a few more moments...
          </p>
        </div>
      </div>
    </div>
  )
}

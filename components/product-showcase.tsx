"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star, Clock, Users, ArrowRight } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    title: "Asian Family Fusion Kit",
    subtitle: "Sweet & Savory Adventures",
    description:
      "Introduce your family to the perfect balance of Asian flavors with kid-friendly ingredients and easy techniques.",
    image: "/asian-fusion-ingredients-soy-sauce-ginger.png",
    price: "$49",
    originalPrice: "$65",
    rating: 4.9,
    reviews: 234,
    time: "30 min",
    serves: "Family of 4",
    difficulty: "Easy",
    features: ["Premium soy sauce", "Fresh ginger", "Kid-friendly spice levels", "Step-by-step video guide"],
  },
  {
    id: 2,
    title: "Mediterranean Family Feast",
    subtitle: "Healthy & Delicious",
    description:
      "Bring the warmth of the Mediterranean to your family table with fresh herbs, olive oil, and wholesome ingredients.",
    image: "/mediterranean-ingredients-olive-oil-herbs.png",
    price: "$45",
    originalPrice: "$60",
    rating: 4.8,
    reviews: 189,
    time: "25 min",
    serves: "Family of 4",
    difficulty: "Easy",
    features: ["Extra virgin olive oil", "Fresh herb blend", "Heart-healthy recipes", "Family portion sizes"],
  },
  {
    id: 3,
    title: "Latin Comfort Collection",
    subtitle: "Mild Spices, Big Flavors",
    description:
      "Explore Latin cuisine with gentle spices that kids love while adults enjoy the authentic taste experience.",
    image: "/latin-spices-chili-peppers-colorful.png",
    price: "$52",
    originalPrice: "$68",
    rating: 5.0,
    reviews: 156,
    time: "40 min",
    serves: "Family of 6",
    difficulty: "Medium",
    features: ["Mild chili peppers", "Fresh lime & herbs", "Family-sized portions", "Cultural cooking stories"],
  },
]

export default function ProductShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProducts.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length)
    setIsAutoPlaying(false)
  }

  const currentProduct = featuredProducts[currentSlide]

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
        {/* Content */}
        <div className="space-y-6 order-2 lg:order-1">
          <div className="space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20">Featured Family Kit</Badge>
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">{currentProduct.title}</h3>
              <p className="text-xl text-secondary font-medium mb-4">{currentProduct.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed">{currentProduct.description}</p>
            </div>
          </div>

          {/* Product Stats */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(currentProduct.rating) ? "text-secondary fill-current" : "text-muted"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {currentProduct.rating} ({currentProduct.reviews} reviews)
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {currentProduct.time}
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {currentProduct.serves}
              </div>
              <Badge variant="outline" className="border-secondary text-secondary">
                {currentProduct.difficulty}
              </Badge>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">What's Included:</h4>
            <div className="grid grid-cols-2 gap-2">
              {currentProduct.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-foreground">{currentProduct.price}</span>
              <span className="text-lg text-muted-foreground line-through">{currentProduct.originalPrice}</span>
              <Badge className="bg-secondary/10 text-secondary">Save 25%</Badge>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
              Add to Cart
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={currentProduct.image || "/placeholder.svg"}
              alt={currentProduct.title}
              className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-background/80 hover:bg-background"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <div className="flex gap-2">
          {featuredProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index)
                setIsAutoPlaying(false)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-primary w-6" : "bg-muted"
              }`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-background/80 hover:bg-background"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

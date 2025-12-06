"use client"

import { SectionTransition } from "@/components/transitions"
import { Section } from "@/components/layout"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import {
  ShowcaseBackground,
  ShowcaseProductCard,
  ShowcaseSectionHeader,
  ShowcaseLayout,
} from "@/components/showcase"

const featuredProducts = [
  {
    id: 1,
    title: "Asian Family Fusion Kit",
    price: "$49",
    originalPrice: "$65",
    image: "/asian-fusion-ingredients-soy-sauce-ginger.png",
    ingredients: [
      "Premium soy sauce",
      "Fresh ginger",
      "Kid-friendly spice levels",
      "Step-by-step video guide",
    ],
    rating: 4.9,
    difficulty: "Easy",
    time: "30 min",
    serves: "Family of 4",
  },
  {
    id: 2,
    title: "Mediterranean Family Feast",
    price: "$45",
    originalPrice: "$60",
    image: "/mediterranean-ingredients-olive-oil-herbs.png",
    ingredients: [
      "Extra virgin olive oil",
      "Fresh herb blend",
      "Heart-healthy recipes",
      "Family portion sizes",
    ],
    rating: 4.8,
    difficulty: "Easy",
    time: "25 min",
    serves: "Family of 4",
  },
  {
    id: 3,
    title: "Latin Comfort Collection",
    price: "$52",
    originalPrice: "$68",
    image: "/latin-spices-chili-peppers-colorful.png",
    ingredients: [
      "Mild chili peppers",
      "Fresh lime & herbs",
      "Family-sized portions",
      "Cultural cooking stories",
    ],
    rating: 5.0,
    difficulty: "Medium",
    time: "40 min",
    serves: "Family of 6",
  },
  {
    id: 4,
    title: "Italian Family Classics",
    price: "$48",
    originalPrice: "$62",
    image: "/placeholder.svg",
    ingredients: [
      "Premium pasta",
      "Fresh basil",
      "Authentic recipes",
      "Family cooking guide",
    ],
    rating: 4.7,
    difficulty: "Easy",
    time: "35 min",
    serves: "Family of 4",
  },
  {
    id: 5,
    title: "French Bistro Collection",
    price: "$55",
    originalPrice: "$70",
    image: "/placeholder.svg",
    ingredients: [
      "Fine herbs",
      "Premium butter",
      "Classic techniques",
      "Video tutorials",
    ],
    rating: 4.9,
    difficulty: "Medium",
    time: "45 min",
    serves: "Family of 4",
  },
  {
    id: 6,
    title: "American Comfort Fusion",
    price: "$42",
    originalPrice: "$58",
    image: "/placeholder.svg",
    ingredients: [
      "Quality ingredients",
      "Family favorites",
      "Quick prep",
      "Kid-approved recipes",
    ],
    rating: 4.6,
    difficulty: "Easy",
    time: "20 min",
    serves: "Family of 5",
  },
]

/**
 * ProductShowcase - Completely revamped showcase section
 * Features stunning visuals, 3D cards, and interactive elements
 */
export default function ProductShowcase() {
  return (
    <SectionTransition>
      <Section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Dynamic Background */}
        <ShowcaseBackground />

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ShowcaseSectionHeader
            badge={
              <Badge className="bg-primary/90 backdrop-blur-md text-primary-foreground border-0 px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:scale-110">
                <Sparkles className="w-5 h-5 mr-2" />
                Premium Family Kits
              </Badge>
            }
            title="Featured Collections"
            description="Discover our curated selection of premium fusion kits designed to bring families together through the joy of cooking. Each kit includes everything you need for a memorable culinary adventure."
            className="mb-20"
          />

          {/* Product Grid */}
          <ShowcaseLayout variant="grid">
            {featuredProducts.map((product, index) => (
              <ShowcaseProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                ingredients={product.ingredients}
                rating={product.rating}
                difficulty={product.difficulty}
                time={product.time}
                serves={product.serves}
                index={index}
            />
          ))}
          </ShowcaseLayout>
        </div>
      </Section>
    </SectionTransition>
  )
}

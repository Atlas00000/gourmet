"use client"

import { SectionTransition } from "@/components/transitions"
import { Section } from "@/components/layout"
import { Utensils } from "lucide-react"
import {
  KitsBackground,
  KitsCard,
  KitsHeader,
  KitsLayout,
} from "@/components/kits"

const cookingKits = [
  {
    title: "Asian Family Favorites",
    price: "$49",
    originalPrice: "$65",
    image: "/asian-fusion-ingredients-soy-sauce-ginger.png",
    ingredients: ["Premium Soy Sauce", "Fresh Ginger", "Sesame Oil", "Rice Vinegar"],
    rating: 4.9,
    difficulty: "Easy",
    time: "30 min",
    serves: "Family of 4",
  },
  {
    title: "Mediterranean Memories",
    price: "$45",
    originalPrice: "$60",
    image: "/mediterranean-ingredients-olive-oil-herbs.png",
    ingredients: ["Extra Virgin Olive Oil", "Fresh Herbs", "Sea Salt", "Lemon Zest"],
    rating: 4.8,
    difficulty: "Easy",
    time: "25 min",
    serves: "Family of 4",
  },
  {
    title: "Cozy Latin Comfort",
    price: "$52",
    originalPrice: "$68",
    image: "/latin-spices-chili-peppers-colorful.png",
    ingredients: ["Mild Chili Peppers", "Fresh Lime", "Cumin", "Paprika"],
    rating: 5.0,
    difficulty: "Medium",
    time: "40 min",
    serves: "Family of 6",
  },
]

/**
 * CuratedCookingKits - Completely revamped cooking kits section
 * Features stunning visuals, 3D cards, and interactive elements
 */
export default function CuratedCookingKits() {
  return (
    <SectionTransition>
      <Section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Dynamic Background */}
        <KitsBackground />

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <KitsHeader
            title="Family Cooking Kits"
            description="Carefully curated ingredients and step-by-step guides that make gourmet cooking accessible and fun for the whole family. Each kit includes everything you need for a memorable culinary adventure."
            className="mb-20"
          />

          {/* Kits Grid */}
          <KitsLayout variant="grid">
            {cookingKits.map((kit, index) => (
              <KitsCard
                key={index}
                title={kit.title}
                price={kit.price}
                originalPrice={kit.originalPrice}
                image={kit.image}
                ingredients={kit.ingredients}
                rating={kit.rating}
                difficulty={kit.difficulty}
                time={kit.time}
                serves={kit.serves}
                index={index}
              />
            ))}
          </KitsLayout>
        </div>
      </Section>
    </SectionTransition>
  )
}


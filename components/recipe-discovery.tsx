"use client"

import { useState } from "react"
import { SectionTransition } from "@/components/transitions"
import { Section } from "@/components/layout"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"
import {
  DiscoveryBackground,
  DiscoveryQuizItem,
  DiscoveryImageSection,
  DiscoveryHeader,
} from "@/components/discovery"

const quizQuestions = [
  "What's your family's spice tolerance?",
  "Any dietary restrictions or preferences?",
  "How much time do you have for cooking?",
  "What cuisines interest your family most?",
]

/**
 * RecipeDiscovery - Completely revamped recipe discovery section
 * Features stunning visuals, interactive quiz, and 3D effects
 */
export default function RecipeDiscovery() {
  const [selectedQuestions, setSelectedQuestions] = useState<number[]>([])

  const handleQuestionSelect = (index: number) => {
    setSelectedQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <SectionTransition>
      <Section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Dynamic Background */}
        <DiscoveryBackground />

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <DiscoveryHeader
            badge={
              <Badge className="bg-primary/90 backdrop-blur-md text-primary-foreground border-0 px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:scale-110">
                <Sparkles className="w-5 h-5 mr-2" />
                Recipe Discovery
              </Badge>
            }
            title="Find Your Family's Perfect Match"
            description="Answer a few questions and we'll recommend recipes that match your family's taste preferences and dietary needs. Discover your perfect culinary adventure!"
            className="mb-16"
          />

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Quiz Section */}
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Quick Family Quiz
              </h3>
              <div className="space-y-4">
                {quizQuestions.map((question, index) => (
                  <DiscoveryQuizItem
                    key={index}
                    question={question}
                    index={index}
                    isSelected={selectedQuestions.includes(index)}
                    onSelect={() => handleQuestionSelect(index)}
                  />
                ))}
              </div>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 text-lg py-6"
                size="lg"
              >
                Get My Recipe Recommendations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Image Section */}
            <DiscoveryImageSection
              image="/professional-chef-cooking-fusion-cuisine-modern-ki.png"
              alt="Family cooking quiz"
            />
          </div>
        </div>
      </Section>
    </SectionTransition>
  )
}


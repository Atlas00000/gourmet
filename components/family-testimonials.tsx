"use client"

import { SectionTransition } from "@/components/transitions"
import { Section } from "@/components/layout"
import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"
import {
  TestimonialsBackground,
  TestimonialsCard,
  TestimonialsHeader,
  TestimonialsLayout,
} from "@/components/testimonials"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Mom of 3",
    review:
      "My kids actually ask to help in the kitchen now! The recipes are so easy to follow and the ingredients are always fresh.",
    rating: 5,
    image: "/asian-woman-chef-smiling.png",
    family: "Family of 5",
  },
  {
    name: "Marcus Johnson",
    role: "Dad & Food Lover",
    review:
      "Finally found a way to introduce my family to new flavors without the fuss. These kits are a game-changer!",
    rating: 5,
    image: "/black-man-food-blogger.png",
    family: "Family of 4",
  },
  {
    name: "Elena Rossi",
    role: "Busy Working Mom",
    review:
      "Weeknight dinners went from stressful to special. My teenagers actually put their phones down to cook with me!",
    rating: 5,
    image: "/italian-woman-cooking-student.png",
    family: "Family of 4",
  },
]

/**
 * FamilyTestimonials - Completely revamped testimonials section
 * Features stunning visuals, 3D cards, and interactive elements
 */
export default function FamilyTestimonials() {
  return (
    <SectionTransition>
      <Section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Dynamic Background */}
        <TestimonialsBackground />

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <TestimonialsHeader
            badge={
              <Badge className="bg-primary/90 backdrop-blur-md text-primary-foreground border-0 px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:scale-110">
                <Heart className="w-5 h-5 mr-2" />
                Family Stories
              </Badge>
            }
            title="Real Families, Real Joy"
            description="Hear from families who've transformed their dinner time into magical moments together. Discover how Gourmet Fusion brings families closer, one recipe at a time."
            className="mb-20"
          />

          {/* Testimonials Grid */}
          <TestimonialsLayout variant="grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialsCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                review={testimonial.review}
                rating={testimonial.rating}
                image={testimonial.image}
                family={testimonial.family}
                index={index}
              />
            ))}
          </TestimonialsLayout>
        </div>
      </Section>
    </SectionTransition>
  )
}


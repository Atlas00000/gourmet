"use client"

import { SectionTransition } from "@/components/transitions"
import { Section } from "@/components/layout"
import { Badge } from "@/components/ui/badge"
import { Shield, Clock, Users, Award, Heart } from "lucide-react"
import {
  FeaturesBackground,
  FeaturesCard,
  FeaturesHeader,
  FeaturesLayout,
} from "@/components/features"

const features = [
  {
    icon: <Shield className="w-8 h-8 lg:w-10 lg:h-10" />,
    title: "Premium Quality",
    description: "Hand-selected ingredients from trusted suppliers, delivered fresh to your door",
  },
  {
    icon: <Clock className="w-8 h-8 lg:w-10 lg:h-10" />,
    title: "Quick & Easy",
    description: "Most recipes ready in 30 minutes or less, perfect for busy weeknights",
  },
  {
    icon: <Users className="w-8 h-8 lg:w-10 lg:h-10" />,
    title: "Family-Friendly",
    description: "Recipes designed for all ages and skill levels, from toddlers to grandparents",
  },
  {
    icon: <Award className="w-8 h-8 lg:w-10 lg:h-10" />,
    title: "Chef-Approved",
    description: "Every recipe tested by professional chefs and real families",
  },
]

/**
 * WhyFamiliesLove - Ultra-revamped features section
 * Features stunning visuals, advanced 3D cards, magnetic interactions, and dynamic backgrounds
 */
export default function WhyFamiliesLove() {
  return (
    <SectionTransition>
      <Section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Enhanced Dynamic Background */}
        <FeaturesBackground />

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Section Header with Badge */}
          <FeaturesHeader
            badge={
              <Badge className="bg-primary/90 backdrop-blur-md text-primary-foreground border-0 px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:scale-110">
                <Heart className="w-5 h-5 mr-2" />
                Trusted by Families
              </Badge>
            }
            title="Why Families Love Gourmet Fusion"
            description="We make gourmet cooking accessible, fun, and stress-free for busy families. Discover what sets us apart and why thousands of families trust us for their culinary adventures."
            className="mb-20"
          />

          {/* Enhanced Features Grid with Fluid Layout */}
          <FeaturesLayout variant="grid" columns={4}>
            {features.map((feature, index) => (
              <FeaturesCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </FeaturesLayout>
        </div>
      </Section>
    </SectionTransition>
  )
}


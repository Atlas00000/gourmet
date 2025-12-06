"use client"

import { SectionTransition } from "@/components/transitions"
import { Section } from "@/components/layout"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Heart, MessageCircle } from "lucide-react"
import {
  StoriesBackground,
  StoriesStatCard,
  StoriesHeader,
  StoriesLayout,
} from "@/components/stories"

const successStats = [
  {
    metric: "87%",
    description: "of families report eating together more often",
    icon: Users,
    color: "primary" as const,
  },
  {
    metric: "92%",
    description: "of kids now help with cooking regularly",
    icon: Heart,
    color: "secondary" as const,
  },
  {
    metric: "78%",
    description: "say family conversations improved at dinner",
    icon: MessageCircle,
    color: "primary" as const,
  },
]

/**
 * SuccessStories - Completely revamped success stories section
 * Features stunning visuals, 3D cards, and interactive elements
 */
export default function SuccessStories() {
  return (
    <SectionTransition>
      <Section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Dynamic Background */}
        <StoriesBackground />

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <StoriesHeader
            badge={
              <Badge className="bg-secondary/90 backdrop-blur-md text-secondary-foreground border-0 px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-secondary/50 transition-all duration-500 hover:scale-110">
                <TrendingUp className="w-5 h-5 mr-2" />
                Success Stories
              </Badge>
            }
            title="Real Families, Real Results"
            description="See how Gourmet Fusion has transformed family dinners from stressful to spectacular. Join thousands of families creating magical moments together."
            className="mb-20"
          />

          {/* Stats Grid */}
          <StoriesLayout variant="grid">
            {successStats.map((stat, index) => (
              <StoriesStatCard
                key={index}
                metric={stat.metric}
                description={stat.description}
                icon={stat.icon}
                color={stat.color}
                index={index}
              />
            ))}
          </StoriesLayout>
        </div>
      </Section>
    </SectionTransition>
  )
}


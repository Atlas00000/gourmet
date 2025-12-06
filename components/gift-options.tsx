"use client"

import { SectionTransition } from "@/components/transitions"
import { Section } from "@/components/layout"
import { Badge } from "@/components/ui/badge"
import { Gift } from "lucide-react"
import {
  GiftBackground,
  GiftCard,
  GiftHeader,
  GiftLayout,
} from "@/components/gift"

const giftPlans = [
  {
    title: "Family Starter Pack",
    price: "$89",
    originalPrice: "$120",
    duration: "One-time kit",
    features: [
      "3 family-friendly recipes",
      "All premium ingredients",
      "Step-by-step guides",
      "Family cooking tips",
    ],
    popular: false,
  },
  {
    title: "Monthly Family Adventure",
    price: "$79",
    originalPrice: "$99",
    duration: "Per month",
    features: [
      "4 new recipes monthly",
      "Seasonal ingredients",
      "Video cooking guides",
      "Family challenges",
      "Priority support",
    ],
    popular: true,
  },
  {
    title: "Annual Family Journey",
    price: "$69",
    originalPrice: "$89",
    duration: "Per month (billed annually)",
    features: [
      "4 recipes monthly",
      "Exclusive seasonal kits",
      "Family cookbook",
      "Chef video calls",
      "Free shipping",
    ],
    popular: false,
  },
]

/**
 * GiftOptions - Completely revamped gift & subscription options section
 * Features stunning visuals, 3D cards, and interactive elements
 */
export default function GiftOptions() {
  return (
    <SectionTransition>
      <Section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Dynamic Background */}
        <GiftBackground />

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <GiftHeader
            badge={
              <Badge className="bg-secondary/90 backdrop-blur-md text-secondary-foreground border-0 px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-secondary/50 transition-all duration-500 hover:scale-110">
                <Gift className="w-5 h-5 mr-2" />
                Perfect Gifts
              </Badge>
            }
            title="Give the Gift of Family Time"
            description="Surprise a family you love with the joy of cooking together. Choose the perfect plan that fits their lifestyle and watch them create magical moments in the kitchen."
            className="mb-20"
          />

          {/* Gift Plans Grid */}
          <GiftLayout variant="grid">
            {giftPlans.map((plan, index) => (
              <GiftCard
                key={index}
                title={plan.title}
                price={plan.price}
                originalPrice={plan.originalPrice}
                duration={plan.duration}
                features={plan.features}
                popular={plan.popular}
                index={index}
              />
            ))}
          </GiftLayout>
        </div>
      </Section>
    </SectionTransition>
  )
}


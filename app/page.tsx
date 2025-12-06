"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductShowcase from "@/components/product-showcase"
import { createLazyComponent } from "@/lib/dynamic-imports"
import { useScrollTracking } from "@/hooks/use-ga4-tracking"

// Code-split heavy sections below the fold
const SuccessStories = createLazyComponent(() => import("@/components/success-stories"))
const RecipeDiscovery = createLazyComponent(() => import("@/components/recipe-discovery"))
const FamilyTestimonials = createLazyComponent(() => import("@/components/family-testimonials"))
const GiftOptions = createLazyComponent(() => import("@/components/gift-options"))
const WhyFamiliesLove = createLazyComponent(() => import("@/components/why-families-love"))
const CuratedCookingKits = createLazyComponent(() => import("@/components/curated-cooking-kits"))
import InteractiveStats from "@/components/interactive-stats"
import LoadingScreen from "@/components/loading-screen"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollProgress, SmoothScrollProvider } from "@/components/scroll"
import { ScrollReveal } from "@/components/scroll"
import { SectionTransition } from "@/components/transitions"
import { HeroUltimate } from "@/components/hero"
import { HoverCard } from "@/components/interactive"
import { GlassCard } from "@/components/glassmorphism"
import { GradientText } from "@/components/gradients"
import { ResponsiveLayout } from "@/components/layout"
import {
  Star,
  ChefHat,
  Heart,
  ArrowRight,
  Users,
  Clock,
  Award,
  Truck,
  Shield,
  Utensils,
  BookOpen,
  Play,
  Sparkles,
  Gift,
  MessageCircle,
  TrendingUp,
} from "lucide-react"

export default function GourmetFusionPage() {
  const [isLoading, setIsLoading] = useState(true)
  
  // Track scroll depth automatically
  useScrollTracking()

  useEffect(() => {
    // Simulate loading time and then hide the loading screen
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // Show loading screen for 3 seconds

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <SmoothScrollProvider>
      <ResponsiveLayout optimizeForMobile={true}>
        <div className="min-h-screen bg-background text-foreground">
          <ScrollProgress />
          <Header />

      {/* Hero Ultimate - Complete Visual Overhaul */}
      <HeroUltimate
        badge={
          <Badge className="bg-primary/90 backdrop-blur-md text-primary-foreground border-0 px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:scale-110">
            <Heart className="w-6 h-6 mr-2" />
            Family Cooking Made Special
          </Badge>
        }
        title="Gourmet Fusion"
        subtitle="Where families create magic together"
        description="Discover the joy of cooking together with premium ingredients and easy-to-follow fusion recipes that bring families closer, one delicious meal at a time."
        className="pt-16"
      />

      {/* Product Showcase - Completely Revamped */}
      <ProductShowcase />

      {/* Success Stories - Completely Revamped */}
      <SuccessStories />

      {/* Recipe Discovery - Completely Revamped (anchor for #recipes) */}
      <section id="recipes">
        <RecipeDiscovery />
      </section>

      {/* Gift & Subscription Options - Completely Revamped */}
      <GiftOptions />

      {/* Why Families Love - Completely Revamped (anchor for #about) */}
      <section id="about">
        <WhyFamiliesLove />
      </section>

      {/* Curated Cooking Kits - Completely Revamped (anchor for #kits) */}
      <section id="kits">
        <CuratedCookingKits />
      </section>

      <SectionTransition className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                <GradientText>How It Works</GradientText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From selection to your family table in just three simple steps
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Choose Your Adventure",
                description:
                  "Browse our family-friendly recipes and select the perfect kit for your taste preferences and dietary needs.",
                icon: <BookOpen className="w-8 h-8" />,
              },
              {
                step: "02",
                title: "Fresh Ingredients Delivered",
                description:
                  "Receive pre-portioned, premium ingredients with easy-to-follow recipe cards right to your doorstep.",
                icon: <Truck className="w-8 h-8" />,
              },
              {
                step: "03",
                title: "Cook & Create Together",
                description:
                  "Follow our step-by-step guides and create delicious memories with your family in 30 minutes or less.",
                icon: <Utensils className="w-8 h-8" />,
              },
            ].map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.2} direction="up">
                <div className="text-center relative">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary relative group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">{step.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-full w-12 h-0.5 bg-primary/20 transform -translate-y-1/2" />
                )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionTransition>

      {/* Chef's Recommendations */}
      <SectionTransition className="py-24 bg-card" id="reviews">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                <GradientText>Family Chef Favorites</GradientText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Tried and tested recipes from family chefs who understand the joy of cooking together
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  chef: "Chef Maria Santos",
                  dish: "Sweet & Savory Miso Salmon",
                  description: "A gentle introduction to Japanese flavors that kids and adults both love",
                  difficulty: "Family-Friendly",
                  time: "20 min",
                },
                {
                  chef: "Chef Kenji Nakamura",
                  dish: "Creamy Parmesan Ramen Bowl",
                  description: "Comfort food fusion that brings the family together around the dinner table",
                  difficulty: "Easy",
                  time: "15 min",
                },
                {
                  chef: "Chef Isabella Rodriguez",
                  dish: "Mild Spice Lamb Soft Tacos",
                  description: "Kid-approved spices with grown-up flavors for the perfect family meal",
                  difficulty: "Easy",
                  time: "25 min",
                },
              ].map((rec, index) => (
                <ScrollReveal key={index} delay={index * 0.1} direction="left">
                  <GlassCard className="bg-background border-border hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <ChefHat className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">{rec.chef}</h4>
                          <div className="flex gap-2 mt-1">
                            <Badge variant="outline" className="border-secondary text-secondary text-xs">
                              {rec.difficulty}
                            </Badge>
                            <Badge variant="outline" className="border-muted text-muted-foreground text-xs">
                              {rec.time}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">{rec.dish}</h3>
                    <p className="text-muted-foreground leading-relaxed">{rec.description}</p>
                    </CardContent>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/professional-chef-cooking-fusion-cuisine-modern-ki.png"
                  alt="Family cooking together"
                  className="w-full rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* Family Testimonials - Completely Revamped */}
      <FamilyTestimonials />

      <SectionTransition className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                <GradientText>Frequently Asked Questions</GradientText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Everything you need to know about cooking with Gourmet Fusion
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Are the recipes really suitable for kids?",
                answer:
                  "All our recipes are tested with families and designed to be engaging for children while teaching them valuable cooking skills. We include kid-friendly tasks and modifications for different ages.",
              },
              {
                question: "How fresh are the ingredients when they arrive?",
                answer:
                  "We work directly with local suppliers and use temperature-controlled packaging to ensure ingredients arrive at peak freshness. Most produce is harvested within 48 hours of delivery.",
              },
              {
                question: "Can I customize recipes for dietary restrictions?",
                answer:
                  "Yes! We offer vegetarian, vegan, gluten-free, and dairy-free options. You can filter recipes by dietary needs and we provide substitution guides for common allergens.",
              },
              {
                question: "What if my family doesn't like a recipe?",
                answer:
                  "We offer a 100% satisfaction guarantee. If you're not happy with any kit, we'll provide a full refund or send you a replacement kit of your choice.",
              },
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <GlassCard className="bg-background border-border hover:shadow-md transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-foreground">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionTransition>

      {/* Footer CTA */}
      <SectionTransition className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                <GradientText>Ready to Create Family Memories?</GradientText>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join thousands of families who've discovered that the best conversations happen in the kitchen. Start your
                gourmet fusion journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg rounded-lg transform hover:scale-105 transition-all duration-200"
                >
                  Start Your Family Journey
                  <Heart className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-12 py-6 text-lg rounded-lg bg-transparent transform hover:scale-105 transition-all duration-200"
                >
                  Browse Recipe Library
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionTransition>

      <Footer />
        </div>
      </ResponsiveLayout>
    </SmoothScrollProvider>
  )
}

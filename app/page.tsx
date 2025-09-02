"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductShowcase from "@/components/product-showcase"
import InteractiveStats from "@/components/interactive-stats"
import LoadingScreen from "@/components/loading-screen"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/5 pt-16">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Hero Content */}
            <div className="text-center space-y-8 mb-16">
              <div className="space-y-6">
                <Badge className="bg-primary text-primary-foreground border-0 px-4 py-2 text-sm font-medium animate-pulse">
                  <Heart className="w-4 h-4 mr-2" />
                  Family Cooking Made Special
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  Gourmet Fusion
                  <span className="block text-3xl lg:text-4xl text-muted-foreground font-normal mt-4">
                    Where families create magic together
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Discover the joy of cooking together with premium ingredients and easy-to-follow fusion recipes that
                  bring families closer, one delicious meal at a time.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-lg transform hover:scale-105 transition-all duration-200"
                >
                  Start Cooking Together
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-6 text-lg rounded-lg bg-transparent transform hover:scale-105 transition-all duration-200"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Family Stories
                </Button>
              </div>
            </div>

            {/* Interactive Stats */}
            <InteractiveStats />

            {/* Product Showcase */}
            <div className="mt-16">
              <ProductShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* Family Success Stories */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">Real Families, Real Results</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See how Gourmet Fusion has transformed family dinners from stressful to spectacular
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "87%",
                description: "of families report eating together more often",
                icon: <Users className="w-8 h-8" />,
                color: "text-primary",
              },
              {
                metric: "92%",
                description: "of kids now help with cooking regularly",
                icon: <Heart className="w-8 h-8" />,
                color: "text-secondary",
              },
              {
                metric: "78%",
                description: "say family conversations improved at dinner",
                icon: <MessageCircle className="w-8 h-8" />,
                color: "text-primary",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="bg-background border-border hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>
                  <div className={`text-4xl font-bold mb-4 ${stat.color}`}>{stat.metric}</div>
                  <p className="text-muted-foreground leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Recipe Discovery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Recipe Discovery
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">Find Your Family's Perfect Match</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Answer a few questions and we'll recommend recipes that match your family's taste preferences and dietary
              needs
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 via-card to-secondary/5 border-border">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-foreground">Quick Family Quiz</h3>
                    <div className="space-y-4">
                      {[
                        "What's your family's spice tolerance?",
                        "Any dietary restrictions or preferences?",
                        "How much time do you have for cooking?",
                        "What cuisines interest your family most?",
                      ].map((question, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-background/50 rounded-lg hover:bg-background/80 transition-colors cursor-pointer"
                        >
                          <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-sm font-bold">
                            {index + 1}
                          </div>
                          <span className="text-foreground">{question}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Get My Recipe Recommendations
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  <div className="relative">
                    <img
                      src="/professional-chef-cooking-fusion-cuisine-modern-ki.png"
                      alt="Family cooking quiz"
                      className="w-full rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-xl" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gift & Subscription Options */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
              <Gift className="w-4 h-4 mr-2" />
              Perfect Gifts
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">Give the Gift of Family Time</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Surprise a family you love with the joy of cooking together
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((plan, index) => (
              <Card
                key={index}
                className={`bg-background border-border hover:shadow-lg transition-all duration-300 relative ${plan.popular ? "ring-2 ring-primary" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.title}</h3>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-primary">{plan.price}</span>
                      <span className="text-lg text-muted-foreground line-through">{plan.originalPrice}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.duration}</p>
                  </div>
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"}`}
                  >
                    {plan.popular ? "Start Family Adventure" : "Choose This Plan"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">Why Families Love Gourmet Fusion</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We make gourmet cooking accessible, fun, and stress-free for busy families
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Premium Quality",
                description: "Hand-selected ingredients from trusted suppliers, delivered fresh to your door",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Quick & Easy",
                description: "Most recipes ready in 30 minutes or less, perfect for busy weeknights",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Family-Friendly",
                description: "Recipes designed for all ages and skill levels, from toddlers to grandparents",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Chef-Approved",
                description: "Every recipe tested by professional chefs and real families",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-lg transition-all duration-300 text-center group"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Cooking Kits Section */}
      <section className="py-24 bg-card" id="kits">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">Family Cooking Kits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Carefully curated ingredients and step-by-step guides that make gourmet cooking accessible and fun for the
              whole family
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((kit, index) => (
              <Card
                key={index}
                className="bg-background border-border hover:shadow-lg transition-all duration-300 group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={kit.image || "/placeholder.svg"}
                    alt={kit.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge className="bg-secondary text-secondary-foreground">{kit.price}</Badge>
                    {kit.originalPrice && (
                      <Badge variant="outline" className="bg-background/80 text-muted-foreground line-through">
                        {kit.originalPrice}
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">{kit.difficulty}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(kit.rating) ? "text-secondary fill-current" : "text-muted"}`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">({kit.rating})</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {kit.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {kit.serves}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{kit.title}</h3>
                  <div className="space-y-2 mb-6">
                    {kit.ingredients.map((ingredient, i) => (
                      <div key={i} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {ingredient}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Add to Family Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From selection to your family table in just three simple steps
            </p>
          </div>

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
              <div key={index} className="text-center relative">
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
            ))}
          </div>
        </div>
      </section>

      {/* Chef's Recommendations */}
      <section className="py-24 bg-card" id="reviews">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">Family Chef Favorites</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tried and tested recipes from family chefs who understand the joy of cooking together
            </p>
          </div>

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
                <Card key={index} className="bg-background border-border hover:shadow-md transition-all duration-300">
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
                </Card>
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
      </section>

      {/* Customer Reviews */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">What Families Are Saying</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real stories from real families who've discovered the joy of cooking together
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((review, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-foreground">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.role}</p>
                      <p className="text-xs text-secondary">{review.family}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">"{review.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about cooking with Gourmet Fusion
            </p>
          </div>

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
              <Card key={index} className="bg-background border-border hover:shadow-md transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-foreground">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Ready to Create Family Memories?</h2>
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
        </div>
      </section>

      <Footer />
    </div>
  )
}

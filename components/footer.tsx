"use client"

import { Button } from "@/components/ui/button"
import { ChefHat, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Gourmet Fusion</h3>
                <p className="text-sm text-muted-foreground">Family Cooking</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Bringing families together through the joy of cooking with premium ingredients and easy-to-follow fusion
              recipes.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#kits" className="text-muted-foreground hover:text-primary transition-colors">
                Cooking Kits
              </a>
              <a href="#recipes" className="text-muted-foreground hover:text-primary transition-colors">
                Recipe Library
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">
                Customer Reviews
              </a>
              <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">
                Family Blog
              </a>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">Support</h4>
            <nav className="flex flex-col gap-2">
              <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </a>
              <a href="#shipping" className="text-muted-foreground hover:text-primary transition-colors">
                Shipping Info
              </a>
              <a href="#returns" className="text-muted-foreground hover:text-primary transition-colors">
                Returns
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </a>
              <a href="#help" className="text-muted-foreground hover:text-primary transition-colors">
                Help Center
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">hello@gourmetfusion.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">1-800-FUSION-1</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
            <div className="pt-2">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 Gourmet Fusion. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

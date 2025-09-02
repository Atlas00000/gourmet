import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ChefHat } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center space-y-8 px-6">
        <div className="space-y-4">
          <ChefHat className="w-24 h-24 mx-auto text-primary" />
          <h1 className="text-6xl font-bold text-foreground">404</h1>
          <h2 className="text-2xl font-semibold text-muted-foreground">
            Recipe Not Found
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Looks like this recipe page got lost in the kitchen. Let's get you back to cooking!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/">
              <ChefHat className="w-5 h-5 mr-2" />
              Start Cooking
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

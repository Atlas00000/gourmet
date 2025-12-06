import { NotFoundBackground, NotFoundContent } from "@/components/not-found"

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Dynamic 404 Background */}
      <NotFoundBackground />

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-16">
        <NotFoundContent />
      </div>
    </div>
  )
}


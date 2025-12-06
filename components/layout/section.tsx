import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: ReactNode
  className?: string
  padding?: "none" | "sm" | "md" | "lg" | "xl"
  background?: "default" | "card" | "gradient" | "transparent"
}

const paddingMap = {
  none: "",
  sm: "py-12",
  md: "py-16 lg:py-24",
  lg: "py-20 lg:py-32",
  xl: "py-24 lg:py-40",
}

const backgroundMap = {
  default: "bg-background",
  card: "bg-card",
  gradient: "bg-gradient-to-br from-primary/10 via-background to-secondary/5",
  transparent: "bg-transparent",
}

/**
 * Section component - Wraps page sections with consistent spacing
 */
export function Section({
  children,
  className,
  padding = "md",
  background = "default",
}: SectionProps) {
  return (
    <section className={cn(paddingMap[padding], backgroundMap[background], className)}>
      {children}
    </section>
  )
}


import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface StackProps {
  children: ReactNode
  className?: string
  direction?: "row" | "col"
  spacing?: "none" | "sm" | "md" | "lg" | "xl"
  align?: "start" | "center" | "end" | "stretch"
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"
}

const spacingMap = {
  none: "",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6 lg:gap-8",
  xl: "gap-8 lg:gap-12",
}

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
}

const justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
}

/**
 * Stack component - Flexible layout with consistent spacing
 */
export function Stack({
  children,
  className,
  direction = "col",
  spacing = "md",
  align = "start",
  justify = "start",
}: StackProps) {
  return (
    <div
      className={cn(
        direction === "col" ? "flex flex-col" : "flex flex-row",
        spacingMap[spacing],
        alignMap[align],
        justifyMap[justify],
        className
      )}
    >
      {children}
    </div>
  )
}


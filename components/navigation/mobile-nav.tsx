"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useMobileViewport } from "@/hooks/use-mobile-viewport"
import { cn } from "@/lib/utils"
import { scrollToSection } from "@/lib/scroll-utils"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  links: Array<{
    href: string
    label: string
  }>
  className?: string
}

/**
 * MobileNav - Optimized mobile navigation
 * Touch-friendly, smooth animations, and reduced motion for mobile
 */
export function MobileNav({ isOpen, onClose, links, className }: MobileNavProps) {
  const { isMobile } = useMobileViewport()

  if (!isMobile) return null

  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      scrollToSection(href.slice(1), {
        offset: 80,
        behavior: "smooth",
      })
    }
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Mobile Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
            className={cn(
              "fixed top-0 right-0 bottom-0 w-80 bg-background border-l border-border z-50",
              "shadow-2xl",
              "overflow-y-auto",
              className
            )}
          >
            <nav className="flex flex-col p-6 space-y-2">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(link.href)
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                  }}
                  className={cn(
                    "px-4 py-3 rounded-lg",
                    "text-foreground hover:text-primary",
                    "hover:bg-primary/10",
                    "transition-colors duration-200",
                    "text-lg font-medium",
                    "touch-target" // Ensures 44px+ touch target
                  )}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}


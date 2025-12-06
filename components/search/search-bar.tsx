"use client";

/**
 * SearchBar Component
 * 
 * Premium search input with autocomplete and visual effects.
 * Integrates with Typesense for real-time search suggestions.
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch?: (query: string) => void;
  placeholder?: string;
  isLoading?: boolean;
  className?: string;
  showClearButton?: boolean;
}

export function SearchBar({
  value,
  onChange,
  onSearch,
  placeholder = "Search recipes, cooking kits, ingredients...",
  isLoading = false,
  className,
  showClearButton = true,
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    onChange("");
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className={cn("relative w-full", className)}>
      {/* Search Input Container */}
      <motion.div
        className={cn(
          "relative flex items-center gap-3",
          "bg-background/80 backdrop-blur-xl",
          "border-2 rounded-2xl",
          "transition-all duration-300",
          isFocused
            ? "border-primary shadow-lg shadow-primary/20"
            : "border-border hover:border-primary/50"
        )}
        animate={{
          scale: isFocused ? 1.02 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Search Icon */}
        <div className="absolute left-4 flex items-center justify-center">
          <motion.div
            animate={{
              rotate: isLoading ? 360 : 0,
              scale: isFocused ? 1.1 : 1,
            }}
            transition={{
              rotate: { duration: 1, repeat: isLoading ? Infinity : 0, ease: "linear" },
              scale: { duration: 0.2 },
            }}
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 text-primary" />
            ) : (
              <Search className="w-5 h-5 text-muted-foreground" />
            )}
          </motion.div>
        </div>

        {/* Input Field */}
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={cn(
            "w-full pl-12 pr-12 py-4",
            "bg-transparent",
            "text-foreground text-lg",
            "placeholder:text-muted-foreground",
            "focus:outline-none",
            "transition-all duration-300"
          )}
        />

        {/* Clear Button */}
        <AnimatePresence>
          {showClearButton && value && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={handleClear}
              className={cn(
                "absolute right-4",
                "p-1.5 rounded-lg",
                "text-muted-foreground hover:text-foreground",
                "hover:bg-muted",
                "transition-colors duration-200"
              )}
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Focus Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
          animate={{
            opacity: isFocused ? 0.1 : 0,
          }}
          style={{
            background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Search Suggestions (can be extended with autocomplete) */}
      <AnimatePresence>
        {isFocused && value && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={cn(
              "absolute top-full left-0 right-0 mt-2 z-50",
              "bg-background/95 backdrop-blur-xl",
              "border border-border rounded-xl",
              "shadow-2xl",
              "overflow-hidden"
            )}
          >
            {/* Autocomplete suggestions can be added here */}
            <div className="p-4 text-sm text-muted-foreground text-center">
              Press Enter to search
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


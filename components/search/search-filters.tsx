"use client";

/**
 * SearchFilters Component
 * 
 * Filter panel for search results with facets (cuisine, difficulty, ingredients, etc.)
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SearchFilters as SearchFiltersType } from "@/lib/search";

interface SearchFiltersProps {
  filters: SearchFiltersType;
  onFiltersChange: (filters: SearchFiltersType) => void;
  facets?: {
    cuisine?: string[];
    difficulty?: string[];
    ingredients?: string[];
  };
  className?: string;
}

const DIFFICULTY_OPTIONS = ["Easy", "Medium", "Hard"];
const CUISINE_OPTIONS = [
  "Asian",
  "Mediterranean",
  "Latin",
  "Italian",
  "French",
  "American",
  "Mexican",
  "Indian",
];

export function SearchFilters({
  filters,
  onFiltersChange,
  facets,
  className,
}: SearchFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const updateFilter = (
    key: keyof SearchFiltersType,
    value: string | string[] | number | undefined
  ) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  const toggleFilter = (key: "cuisine" | "difficulty" | "ingredients", value: string) => {
    const current = filters[key] || [];
    const newValue = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    updateFilter(key, newValue.length > 0 ? newValue : undefined);
  };

  const clearFilters = () => {
    onFiltersChange({});
  };

  const activeFilterCount =
    (filters.cuisine?.length || 0) +
    (filters.difficulty?.length || 0) +
    (filters.ingredients?.length || 0) +
    (filters.minRating ? 1 : 0) +
    (filters.maxPrice ? 1 : 0);

  return (
    <div className={cn("relative", className)}>
      {/* Filter Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        className={cn(
          "w-full sm:w-auto",
          "flex items-center gap-2",
          activeFilterCount > 0 && "border-primary bg-primary/10"
        )}
      >
        <Filter className="w-4 h-4" />
        Filters
        {activeFilterCount > 0 && (
          <Badge variant="secondary" className="ml-1">
            {activeFilterCount}
          </Badge>
        )}
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </Button>

      {/* Filter Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            className={cn(
              "absolute top-full left-0 right-0 sm:right-auto sm:w-80 mt-2 z-50",
              "bg-background/95 backdrop-blur-xl",
              "border border-border rounded-xl",
              "shadow-2xl",
              "overflow-hidden"
            )}
          >
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Filter Results</h3>
                {activeFilterCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-xs"
                  >
                    Clear all
                  </Button>
                )}
              </div>

              {/* Difficulty Filter */}
              <div>
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "difficulty" ? null : "difficulty"
                    )
                  }
                  className="w-full flex items-center justify-between text-sm font-medium mb-2"
                >
                  Difficulty
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      expandedSection === "difficulty" && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {expandedSection === "difficulty" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="flex flex-wrap gap-2"
                    >
                      {DIFFICULTY_OPTIONS.map((difficulty) => (
                        <Badge
                          key={difficulty}
                          variant={
                            filters.difficulty?.includes(difficulty)
                              ? "default"
                              : "outline"
                          }
                          className="cursor-pointer hover:bg-primary/20"
                          onClick={() => toggleFilter("difficulty", difficulty)}
                        >
                          {difficulty}
                        </Badge>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Cuisine Filter */}
              <div>
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "cuisine" ? null : "cuisine"
                    )
                  }
                  className="w-full flex items-center justify-between text-sm font-medium mb-2"
                >
                  Cuisine
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      expandedSection === "cuisine" && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {expandedSection === "cuisine" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="flex flex-wrap gap-2"
                    >
                      {CUISINE_OPTIONS.map((cuisine) => (
                        <Badge
                          key={cuisine}
                          variant={
                            filters.cuisine?.includes(cuisine)
                              ? "default"
                              : "outline"
                          }
                          className="cursor-pointer hover:bg-primary/20"
                          onClick={() => toggleFilter("cuisine", cuisine)}
                        >
                          {cuisine}
                        </Badge>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Active Filters */}
              {activeFilterCount > 0 && (
                <div className="pt-4 border-t">
                  <div className="flex flex-wrap gap-2">
                    {filters.difficulty?.map((d) => (
                      <Badge
                        key={d}
                        variant="secondary"
                        className="gap-1"
                      >
                        {d}
                        <X
                          className="w-3 h-3 cursor-pointer"
                          onClick={() => toggleFilter("difficulty", d)}
                        />
                      </Badge>
                    ))}
                    {filters.cuisine?.map((c) => (
                      <Badge
                        key={c}
                        variant="secondary"
                        className="gap-1"
                      >
                        {c}
                        <X
                          className="w-3 h-3 cursor-pointer"
                          onClick={() => toggleFilter("cuisine", c)}
                        />
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


"use client";

/**
 * SearchResults Component
 * 
 * Displays search results with highlighting and animations.
 * Shows recipes and cooking kits in a grid layout.
 */

import { motion } from "framer-motion";
import { Clock, Users, Star, ChefHat } from "lucide-react";
import { SearchResponse } from "@/lib/search";
import { formatSearchResult } from "@/lib/search/search-utils";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface SearchResultsProps {
  recipes: SearchResponse | null;
  cookingKits: SearchResponse | null;
  isLoading?: boolean;
  onLoadMore?: () => void;
  hasMore?: boolean;
  className?: string;
}

export function SearchResults({
  recipes,
  cookingKits,
  isLoading = false,
  onLoadMore,
  hasMore = false,
  className,
}: SearchResultsProps) {
  const allResults = [
    ...(recipes?.hits.map((hit) => ({
      ...formatSearchResult(hit),
      type: "recipe" as const,
    })) || []),
    ...(cookingKits?.hits.map((hit) => ({
      ...formatSearchResult(hit),
      type: "cooking_kit" as const,
    })) || []),
  ];

  const totalFound = (recipes?.found || 0) + (cookingKits?.found || 0);

  if (isLoading && allResults.length === 0) {
    return (
      <div className={cn("flex items-center justify-center py-20", className)}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Searching...</p>
        </div>
      </div>
    );
  }

  if (allResults.length === 0 && !isLoading) {
    return (
      <div className={cn("text-center py-20", className)}>
        <ChefHat className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
        <h3 className="text-xl font-semibold mb-2">No results found</h3>
        <p className="text-muted-foreground">
          Try adjusting your search or filters
        </p>
      </div>
    );
  }

  return (
    <div className={cn("space-y-8", className)}>
      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Found {totalFound} result{totalFound !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allResults.map((result, index) => (
          <SearchResultCard
            key={`${result.type}-${result.id}`}
            result={result}
            index={index}
          />
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && onLoadMore && (
        <div className="flex justify-center pt-8">
          <motion.button
            onClick={onLoadMore}
            disabled={isLoading}
            className={cn(
              "px-6 py-3 rounded-lg",
              "bg-primary text-primary-foreground",
              "hover:bg-primary/90",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "transition-colors duration-200"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLoading ? "Loading..." : "Load More"}
          </motion.button>
        </div>
      )}
    </div>
  );
}

interface SearchResultCardProps {
  result: ReturnType<typeof formatSearchResult> & { type: "recipe" | "cooking_kit" };
  index: number;
}

function SearchResultCard({ result, index }: SearchResultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={cn(
        "group relative",
        "bg-background/80 backdrop-blur-xl",
        "border border-border rounded-2xl",
        "overflow-hidden",
        "hover:border-primary/50 hover:shadow-lg",
        "transition-all duration-300"
      )}
    >
      {/* Image */}
      {result.image && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={result.image}
            alt={result.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title with Highlight */}
        <h3
          className="text-xl font-bold"
          dangerouslySetInnerHTML={{
            __html: result.highlight?.title || result.title,
          }}
        />

        {/* Description with Highlight */}
        {result.description && (
          <p
            className="text-sm text-muted-foreground line-clamp-2"
            dangerouslySetInnerHTML={{
              __html: result.highlight?.description || result.description,
            }}
          />
        )}

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {result.difficulty && (
            <div className="flex items-center gap-1">
              <ChefHat className="w-4 h-4" />
              <span>{result.difficulty}</span>
            </div>
          )}
          {result.time && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{result.time}</span>
            </div>
          )}
          {result.serves && (
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{result.serves}</span>
            </div>
          )}
          {result.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{result.rating.toFixed(1)}</span>
            </div>
          )}
        </div>

        {/* Price */}
        {result.price && (
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">
              ${result.price}
            </span>
            {result.originalPrice && result.originalPrice > result.price && (
              <span className="text-sm text-muted-foreground line-through">
                ${result.originalPrice}
              </span>
            )}
          </div>
        )}

        {/* Ingredients Preview */}
        {result.ingredients && result.ingredients.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {result.ingredients.slice(0, 3).map((ingredient, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 bg-muted rounded-full"
              >
                {ingredient}
              </span>
            ))}
            {result.ingredients.length > 3 && (
              <span className="text-xs px-2 py-1 text-muted-foreground">
                +{result.ingredients.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}


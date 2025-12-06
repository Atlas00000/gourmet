"use client";

/**
 * SearchPage Component
 * 
 * Main search page that integrates all search components.
 * Provides a complete search experience with filters and results.
 */

import { useState } from "react";
import { Section } from "@/components/layout";
import { SearchBar } from "./search-bar";
import { SearchFilters } from "./search-filters";
import { SearchResults } from "./search-results";
import { useSearch } from "@/hooks/use-search";
import { SearchSortBy } from "@/lib/search";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles } from "lucide-react";

interface SearchPageProps {
  initialQuery?: string;
  collection?: "recipes" | "cooking_kits" | "all";
  className?: string;
}

export function SearchPage({
  initialQuery = "",
  collection = "all",
  className,
}: SearchPageProps) {
  const {
    query,
    setQuery,
    filters,
    setFilters,
    sortBy,
    setSortBy,
    recipes,
    cookingKits,
    isLoading,
    error,
    search,
    clearSearch,
    loadMore,
    hasMore,
  } = useSearch({
    collection,
    initialQuery,
    perPage: 12,
  });

  const handleSortChange = (value: string) => {
    setSortBy(value as SearchSortBy);
  };

  return (
    <Section className={className}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <h1 className="text-4xl lg:text-5xl font-bold">Search Recipes & Kits</h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover your perfect family cooking experience with our advanced search
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <SearchBar
            value={query}
            onChange={setQuery}
            onSearch={search}
            isLoading={isLoading}
          />
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <SearchFilters
            filters={filters}
            onFiltersChange={setFilters}
            facets={extractFacets(recipes, cookingKits)}
          />

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Select value={sortBy} onValueChange={handleSortChange}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating:desc">Highest Rated</SelectItem>
                <SelectItem value="rating:asc">Lowest Rated</SelectItem>
                <SelectItem value="price:asc">Price: Low to High</SelectItem>
                <SelectItem value="price:desc">Price: High to Low</SelectItem>
                <SelectItem value="title:asc">Title: A-Z</SelectItem>
                <SelectItem value="title:desc">Title: Z-A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-destructive/10 text-destructive p-4 rounded-lg mb-8">
            <p>Search error: {error.message}</p>
          </div>
        )}

        {/* Search Results */}
        <SearchResults
          recipes={recipes}
          cookingKits={cookingKits}
          isLoading={isLoading}
          onLoadMore={loadMore}
          hasMore={hasMore}
        />
      </div>
    </Section>
  );
}

/**
 * Extract facets from search responses
 */
function extractFacets(
  recipes: any,
  cookingKits: any
): {
  cuisine?: string[];
  difficulty?: string[];
  ingredients?: string[];
} {
  const facets: {
    cuisine?: string[];
    difficulty?: string[];
    ingredients?: string[];
  } = {};

  // Extract from recipes
  if (recipes?.facet_counts) {
    recipes.facet_counts.forEach((facet: any) => {
      if (!facets[facet.field_name as keyof typeof facets]) {
        facets[facet.field_name as keyof typeof facets] = [];
      }
      facets[facet.field_name as keyof typeof facets]?.push(
        ...facet.counts.map((c: any) => c.value)
      );
    });
  }

  // Extract from cooking kits
  if (cookingKits?.facet_counts) {
    cookingKits.facet_counts.forEach((facet: any) => {
      if (!facets[facet.field_name as keyof typeof facets]) {
        facets[facet.field_name as keyof typeof facets] = [];
      }
      facets[facet.field_name as keyof typeof facets]?.push(
        ...facet.counts.map((c: any) => c.value)
      );
    });
  }

  return facets;
}


"use client";

/**
 * useSearch Hook
 * 
 * Custom React hook for Typesense search functionality.
 * Provides search state management and search execution.
 */

import { useState, useCallback, useEffect } from "react";
import {
  searchRecipes,
  searchCookingKits,
  searchAll,
  SearchOptions,
  SearchResponse,
  SearchFilters,
  SearchSortBy,
} from "@/lib/search";

interface UseSearchOptions {
  collection?: "recipes" | "cooking_kits" | "all";
  initialQuery?: string;
  initialFilters?: SearchFilters;
  initialSortBy?: SearchSortBy;
  perPage?: number;
  debounceMs?: number;
}

interface UseSearchReturn {
  // Search state
  query: string;
  setQuery: (query: string) => void;
  filters: SearchFilters;
  setFilters: (filters: SearchFilters) => void;
  sortBy: SearchSortBy;
  setSortBy: (sortBy: SearchSortBy) => void;
  
  // Results
  recipes: SearchResponse | null;
  cookingKits: SearchResponse | null;
  isLoading: boolean;
  error: Error | null;
  
  // Actions
  search: (query?: string) => Promise<void>;
  clearSearch: () => void;
  loadMore: () => Promise<void>;
  
  // Pagination
  page: number;
  hasMore: boolean;
}

export function useSearch(options: UseSearchOptions = {}): UseSearchReturn {
  const {
    collection = "all",
    initialQuery = "",
    initialFilters = {},
    initialSortBy = "rating:desc",
    perPage = 12,
    debounceMs = 300,
  } = options;

  // Search state
  const [query, setQuery] = useState(initialQuery);
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [sortBy, setSortBy] = useState<SearchSortBy>(initialSortBy);
  const [page, setPage] = useState(1);

  // Results state
  const [recipes, setRecipes] = useState<SearchResponse | null>(null);
  const [cookingKits, setCookingKits] = useState<SearchResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Debounced search function
  const performSearch = useCallback(
    async (searchQuery: string, searchPage: number = 1) => {
      if (!searchQuery.trim() && Object.keys(filters).length === 0) {
        setRecipes(null);
        setCookingKits(null);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const searchOptions: SearchOptions = {
          query: searchQuery,
          collection,
          filters,
          sortBy,
          perPage,
          page: searchPage,
        };

        let recipesResult: SearchResponse | null = null;
        let cookingKitsResult: SearchResponse | null = null;

        if (collection === "recipes") {
          recipesResult = await searchRecipes(searchOptions);
        } else if (collection === "cooking_kits") {
          cookingKitsResult = await searchCookingKits(searchOptions);
        } else {
          const results = await searchAll(searchOptions);
          recipesResult = results.recipes;
          cookingKitsResult = results.cookingKits;
        }

        if (searchPage === 1) {
          setRecipes(recipesResult);
          setCookingKits(cookingKitsResult);
        } else {
          // Append results for pagination
          if (recipesResult) {
            setRecipes((prev) => ({
              ...recipesResult!,
              hits: [...(prev?.hits || []), ...recipesResult!.hits],
            }));
          }
          if (cookingKitsResult) {
            setCookingKits((prev) => ({
              ...cookingKitsResult!,
              hits: [...(prev?.hits || []), ...cookingKitsResult!.hits],
            }));
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Search failed"));
        console.error("[useSearch] Error:", err);
      } finally {
        setIsLoading(false);
      }
    },
    [collection, filters, sortBy, perPage]
  );

  // Debounce effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(1);
      performSearch(query, 1);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [query, filters, sortBy, debounceMs]);

  // Manual search function
  const search = useCallback(
    async (searchQuery?: string) => {
      const queryToUse = searchQuery !== undefined ? searchQuery : query;
      setPage(1);
      await performSearch(queryToUse, 1);
    },
    [query, performSearch]
  );

  // Clear search
  const clearSearch = useCallback(() => {
    setQuery("");
    setFilters({});
    setSortBy("rating:desc");
    setPage(1);
    setRecipes(null);
    setCookingKits(null);
    setError(null);
  }, []);

  // Load more (pagination)
  const loadMore = useCallback(async () => {
    if (isLoading) return;
    const nextPage = page + 1;
    setPage(nextPage);
    await performSearch(query, nextPage);
  }, [query, page, isLoading, performSearch]);

  // Calculate hasMore
  const hasMore =
    (recipes && recipes.hits.length < recipes.found) ||
    (cookingKits && cookingKits.hits.length < cookingKits.found);

  return {
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
    page,
    hasMore,
  };
}


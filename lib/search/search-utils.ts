/**
 * Typesense Search Utilities
 * 
 * This file contains utility functions for performing searches,
 * building filters, and formatting search results.
 */

import { getTypesenseClient } from "./typesense-client";
import { TYPESENSE_CONFIG } from "./typesense-config";
import {
  SearchOptions,
  SearchResponse,
  SearchFilters,
  SearchSortBy,
  SearchResult,
} from "./search-types";

/**
 * Build filter string from SearchFilters object
 */
export function buildFilterString(filters?: SearchFilters): string {
  if (!filters) return "";

  const filterParts: string[] = [];

  if (filters.cuisine && filters.cuisine.length > 0) {
    filterParts.push(`cuisine:=[${filters.cuisine.join(",")}]`);
  }

  if (filters.difficulty && filters.difficulty.length > 0) {
    filterParts.push(`difficulty:=[${filters.difficulty.join(",")}]`);
  }

  if (filters.ingredients && filters.ingredients.length > 0) {
    filterParts.push(`ingredients:=[${filters.ingredients.join(",")}]`);
  }

  if (filters.minRating !== undefined) {
    filterParts.push(`rating:>=${filters.minRating}`);
  }

  if (filters.minPrice !== undefined) {
    filterParts.push(`price:>=${filters.minPrice}`);
  }

  if (filters.maxPrice !== undefined) {
    filterParts.push(`price:<=${filters.maxPrice}`);
  }

  if (filters.serves && filters.serves.length > 0) {
    filterParts.push(`serves:=[${filters.serves.join(",")}]`);
  }

  return filterParts.join(" && ");
}

/**
 * Search recipes
 */
export async function searchRecipes(
  options: SearchOptions
): Promise<SearchResponse | null> {
  const client = getTypesenseClient();
  if (!client) {
    console.warn("[Typesense] Client not available. Search disabled.");
    return null;
  }

  try {
    const filterBy = buildFilterString(options.filters);
    const queryBy = "title,description,ingredients";
    const facetBy = "cuisine,difficulty,ingredients";

    const searchParams = {
      q: options.query,
      query_by: queryBy,
      filter_by: filterBy,
      sort_by: options.sortBy || "rating:desc",
      facet_by: facetBy,
      per_page: options.perPage || 12,
      page: options.page || 1,
      highlight_fields: "title,description,ingredients",
      highlight_affix_num_tokens: 4,
    };

    const results = await client
      .collections(TYPESENSE_CONFIG.collections.recipes)
      .documents()
      .search(searchParams);

    return results as unknown as SearchResponse;
  } catch (error) {
    console.error("[Typesense] Search error:", error);
    return null;
  }
}

/**
 * Search cooking kits
 */
export async function searchCookingKits(
  options: SearchOptions
): Promise<SearchResponse | null> {
  const client = getTypesenseClient();
  if (!client) {
    console.warn("[Typesense] Client not available. Search disabled.");
    return null;
  }

  try {
    const filterBy = buildFilterString(options.filters);
    const queryBy = "title,description,ingredients";
    const facetBy = "cuisine,difficulty,ingredients";

    const searchParams = {
      q: options.query,
      query_by: queryBy,
      filter_by: filterBy,
      sort_by: options.sortBy || "rating:desc",
      facet_by: facetBy,
      per_page: options.perPage || 12,
      page: options.page || 1,
      highlight_fields: "title,description,ingredients",
      highlight_affix_num_tokens: 4,
    };

    const results = await client
      .collections(TYPESENSE_CONFIG.collections.cookingKits)
      .documents()
      .search(searchParams);

    return results as unknown as SearchResponse;
  } catch (error) {
    console.error("[Typesense] Search error:", error);
    return null;
  }
}

/**
 * Search all collections (recipes and cooking kits)
 */
export async function searchAll(
  options: SearchOptions
): Promise<{
  recipes: SearchResponse | null;
  cookingKits: SearchResponse | null;
}> {
  const [recipes, cookingKits] = await Promise.all([
    searchRecipes(options),
    searchCookingKits(options),
  ]);

  return { recipes, cookingKits };
}

/**
 * Format search result with highlights
 */
export function formatSearchResult(hit: any): SearchResult {
  const result: SearchResult = {
    id: hit.document.id,
    title: hit.document.title,
    description: hit.document.description,
    cuisine: hit.document.cuisine,
    difficulty: hit.document.difficulty,
    time: hit.document.time,
    serves: hit.document.serves,
    ingredients: hit.document.ingredients,
    rating: hit.document.rating,
    price: hit.document.price,
    originalPrice: hit.document.originalPrice,
    image: hit.document.image,
  };

  // Add highlights if available
  if (hit.highlights) {
    result.highlight = {
      title: hit.highlights.find((h: any) => h.field === "title")?.snippet,
      description: hit.highlights.find((h: any) => h.field === "description")?.snippet,
      ingredients: hit.highlights
        .filter((h: any) => h.field === "ingredients")
        .map((h: any) => h.snippet),
    };
  }

  return result;
}

/**
 * Extract facets from search response
 */
export function extractFacets(response: SearchResponse | null) {
  if (!response?.facet_counts) return {};

  const facets: Record<string, string[]> = {};

  response.facet_counts.forEach((facet) => {
    facets[facet.field_name] = facet.counts.map((count) => count.value);
  });

  return facets;
}


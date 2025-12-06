/**
 * Typesense Search Types
 * 
 * This file contains TypeScript types and interfaces for search functionality.
 */

/**
 * Search result item (recipe or cooking kit)
 */
export interface SearchResult {
  id: string;
  title: string;
  description?: string;
  cuisine?: string;
  difficulty: string;
  time?: string;
  serves?: string;
  ingredients?: string[];
  rating?: number;
  price?: number;
  originalPrice?: number;
  image?: string;
  highlight?: {
    title?: string;
    description?: string;
    ingredients?: string[];
  };
}

/**
 * Search filters
 */
export interface SearchFilters {
  cuisine?: string[];
  difficulty?: string[];
  ingredients?: string[];
  minRating?: number;
  maxPrice?: number;
  minPrice?: number;
  serves?: string[];
}

/**
 * Search sort options
 */
export type SearchSortBy =
  | "rating:desc"
  | "rating:asc"
  | "price:asc"
  | "price:desc"
  | "title:asc"
  | "title:desc"
  | "_text_match:desc";

/**
 * Search parameters
 */
export interface SearchParams {
  q: string;
  query_by?: string;
  filter_by?: string;
  sort_by?: SearchSortBy;
  facet_by?: string;
  per_page?: number;
  page?: number;
}

/**
 * Search response from Typesense
 */
export interface SearchResponse {
  hits: SearchResult[];
  found: number;
  page: number;
  search_time_ms: number;
  facet_counts?: FacetCount[];
  request_params?: SearchParams;
}

/**
 * Facet count (for filters)
 */
export interface FacetCount {
  field_name: string;
  counts: Array<{
    count: number;
    highlighted: string;
    value: string;
  }>;
}

/**
 * Search options
 */
export interface SearchOptions {
  query: string;
  collection: "recipes" | "cooking_kits" | "all";
  filters?: SearchFilters;
  sortBy?: SearchSortBy;
  perPage?: number;
  page?: number;
}


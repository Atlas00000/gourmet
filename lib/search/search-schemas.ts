/**
 * Typesense Search Schemas
 * 
 * This file defines the search schemas for recipes and cooking kits.
 * These schemas define how data is indexed and searched in Typesense.
 */

import { CollectionCreateSchema } from "typesense/lib/Typesense/Collections";

/**
 * Recipe search schema
 * 
 * Fields:
 * - id: Unique identifier
 * - title: Recipe name (searchable, sortable)
 * - description: Recipe description (searchable)
 * - cuisine: Cuisine type (facet, filterable)
 * - difficulty: Difficulty level (facet, filterable)
 * - time: Cooking time (sortable, filterable)
 * - serves: Number of servings (filterable)
 * - ingredients: List of ingredients (searchable, facet)
 * - rating: Rating score (sortable)
 * - price: Price (sortable, filterable)
 * - image: Image URL
 */
export const recipeSchema: CollectionCreateSchema = {
  name: "recipes",
  fields: [
    {
      name: "id",
      type: "string",
    },
    {
      name: "title",
      type: "string",
      facet: false,
    },
    {
      name: "description",
      type: "string",
      optional: true,
    },
    {
      name: "cuisine",
      type: "string",
      facet: true,
      optional: true,
    },
    {
      name: "difficulty",
      type: "string",
      facet: true,
    },
    {
      name: "time",
      type: "string",
      facet: false,
      optional: true,
    },
    {
      name: "serves",
      type: "string",
      facet: false,
      optional: true,
    },
    {
      name: "ingredients",
      type: "string[]",
      facet: true,
      optional: true,
    },
    {
      name: "rating",
      type: "float",
      facet: false,
      optional: true,
    },
    {
      name: "price",
      type: "float",
      facet: false,
      optional: true,
    },
    {
      name: "image",
      type: "string",
      optional: true,
    },
  ],
  default_sorting_field: "rating",
};

/**
 * Cooking Kit search schema
 * 
 * Fields:
 * - id: Unique identifier
 * - title: Kit name (searchable, sortable)
 * - description: Kit description (searchable)
 * - cuisine: Cuisine type (facet, filterable)
 * - difficulty: Difficulty level (facet, filterable)
 * - time: Cooking time (sortable, filterable)
 * - serves: Number of servings (filterable)
 * - ingredients: List of ingredients (searchable, facet)
 * - rating: Rating score (sortable)
 * - price: Price (sortable, filterable)
 * - originalPrice: Original price (for discounts)
 * - image: Image URL
 */
export const cookingKitSchema: CollectionCreateSchema = {
  name: "cooking_kits",
  fields: [
    {
      name: "id",
      type: "string",
    },
    {
      name: "title",
      type: "string",
      facet: false,
    },
    {
      name: "description",
      type: "string",
      optional: true,
    },
    {
      name: "cuisine",
      type: "string",
      facet: true,
      optional: true,
    },
    {
      name: "difficulty",
      type: "string",
      facet: true,
    },
    {
      name: "time",
      type: "string",
      facet: false,
      optional: true,
    },
    {
      name: "serves",
      type: "string",
      facet: false,
      optional: true,
    },
    {
      name: "ingredients",
      type: "string[]",
      facet: true,
      optional: true,
    },
    {
      name: "rating",
      type: "float",
      facet: false,
      optional: true,
    },
    {
      name: "price",
      type: "float",
      facet: false,
      optional: true,
    },
    {
      name: "originalPrice",
      type: "float",
      facet: false,
      optional: true,
    },
    {
      name: "image",
      type: "string",
      optional: true,
    },
  ],
  default_sorting_field: "rating",
};

/**
 * Get schema by collection name
 */
export function getSchema(collectionName: string): CollectionCreateSchema | null {
  switch (collectionName) {
    case "recipes":
      return recipeSchema;
    case "cooking_kits":
      return cookingKitSchema;
    default:
      return null;
  }
}


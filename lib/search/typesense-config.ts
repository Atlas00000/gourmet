/**
 * Typesense Configuration
 * 
 * This file contains the configuration for Typesense search integration.
 * Typesense can be self-hosted (free) or use Typesense Cloud (free tier available).
 * 
 * For self-hosted setup:
 * 1. Install Typesense server: https://typesense.org/docs/guide/install-typesense.html
 * 2. Or use Docker: docker run -p 8108:8108 -v/tmp/data:/data typesense/typesense:0.25.2
 * 
 * For Typesense Cloud:
 * 1. Sign up at https://cloud.typesense.org
 * 2. Get your API key and host from the dashboard
 */

export const TYPESENSE_CONFIG = {
  /**
   * Typesense server nodes
   * For self-hosted: http://localhost:8108
   * For Typesense Cloud: https://xxx.a1.typesense.net
   */
  nodes: [
    {
      host: process.env.NEXT_PUBLIC_TYPESENSE_HOST || "localhost",
      port: parseInt(process.env.NEXT_PUBLIC_TYPESENSE_PORT || "8108", 10),
      protocol: process.env.NEXT_PUBLIC_TYPESENSE_PROTOCOL || "http",
    },
  ],

  /**
   * API Key for Typesense
   * For self-hosted: Use the API key from your Typesense server
   * For Typesense Cloud: Use the API key from your dashboard
   */
  apiKey: process.env.NEXT_PUBLIC_TYPESENSE_API_KEY || "",

  /**
   * Connection timeout in seconds
   */
  connectionTimeoutSeconds: 2,

  /**
   * Enable/disable Typesense
   */
  enabled: !!(
    process.env.NEXT_PUBLIC_TYPESENSE_HOST &&
    process.env.NEXT_PUBLIC_TYPESENSE_API_KEY
  ),

  /**
   * Collection names
   */
  collections: {
    recipes: "recipes",
    cookingKits: "cooking_kits",
  },
} as const;

/**
 * Check if Typesense is properly configured
 */
export function isTypesenseConfigured(): boolean {
  return TYPESENSE_CONFIG.enabled && !!TYPESENSE_CONFIG.apiKey;
}

/**
 * Get Typesense configuration
 */
export function getTypesenseConfig() {
  return TYPESENSE_CONFIG;
}


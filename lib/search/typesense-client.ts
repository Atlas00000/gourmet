/**
 * Typesense Client
 * 
 * This file creates and exports the Typesense client instance.
 * The client is only created if Typesense is properly configured.
 */

import Typesense from "typesense";
import { TYPESENSE_CONFIG, isTypesenseConfigured } from "./typesense-config";

let typesenseClient: Typesense.Client | null = null;

/**
 * Get or create Typesense client instance
 */
export function getTypesenseClient(): Typesense.Client | null {
  if (!isTypesenseConfigured()) {
    return null;
  }

  if (!typesenseClient) {
    typesenseClient = new Typesense.Client({
      nodes: TYPESENSE_CONFIG.nodes,
      apiKey: TYPESENSE_CONFIG.apiKey,
      connectionTimeoutSeconds: TYPESENSE_CONFIG.connectionTimeoutSeconds,
    });
  }

  return typesenseClient;
}

/**
 * Check if Typesense client is available
 */
export function isClientAvailable(): boolean {
  return isTypesenseConfigured() && typesenseClient !== null;
}


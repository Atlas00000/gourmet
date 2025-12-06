/**
 * Google Analytics 4 (GA4) Configuration
 * 
 * This file contains the configuration for GA4 integration.
 * Set the NEXT_PUBLIC_GA4_MEASUREMENT_ID environment variable
 * to enable GA4 tracking.
 */

export const GA4_CONFIG = {
  /**
   * GA4 Measurement ID (format: G-XXXXXXXXXX)
   * Get this from your Google Analytics 4 property settings
   */
  measurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "",

  /**
   * Enable GA4 tracking (only in production or when debug mode is enabled in development)
   */
  enabled: (process.env.NODE_ENV === "production" || process.env.NEXT_PUBLIC_GA4_DEBUG === "true") && !!process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID,

  /**
   * Enable debug mode (logs events to console in development)
   */
  debug: process.env.NODE_ENV === "development" && process.env.NEXT_PUBLIC_GA4_DEBUG === "true",

  /**
   * Sample rate for events (0.0 to 1.0)
   * 1.0 = 100% of events are sent
   */
  sampleRate: 1.0,

  /**
   * Cookie domain (auto-detected if not set)
   */
  cookieDomain: process.env.NEXT_PUBLIC_GA4_COOKIE_DOMAIN || "auto",

  /**
   * Cookie expiration (in seconds)
   * Default: 2 years (63072000 seconds)
   */
  cookieExpiration: 63072000,

  /**
   * Anonymize IP addresses (GDPR compliance)
   */
  anonymizeIp: true,
} as const;

/**
 * Check if GA4 is properly configured
 */
export function isGA4Configured(): boolean {
  return !!GA4_CONFIG.measurementId && GA4_CONFIG.enabled;
}

/**
 * Check if GA4 is in debug mode
 */
export function isGA4DebugMode(): boolean {
  return GA4_CONFIG.debug;
}

/**
 * Get GA4 Measurement ID
 */
export function getGA4MeasurementId(): string {
  return GA4_CONFIG.measurementId;
}



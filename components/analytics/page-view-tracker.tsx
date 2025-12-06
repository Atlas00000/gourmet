"use client";

/**
 * Page View Tracker Component
 * 
 * Automatically tracks page views when the route changes.
 * This should be included in the root layout.
 */

import { usePageView } from "@/hooks/use-ga4-tracking";

export function PageViewTracker() {
  usePageView();
  return null;
}


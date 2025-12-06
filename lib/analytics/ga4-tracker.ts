/**
 * Google Analytics 4 Tracker Utilities
 * 
 * This file contains utility functions for tracking events with GA4.
 * All functions are type-safe and follow GA4 best practices.
 */

import { GA4_CONFIG, isGA4Configured } from "./ga4-config";
import {
  GA4_EVENTS,
  GA4EventParams,
  TrackPageViewParams,
  TrackClickParams,
  TrackRecipeViewParams,
  TrackCookingKitViewParams,
  TrackSubscriptionViewParams,
  TrackCTAClickParams,
} from "./ga4-events";

/**
 * Declare gtag function for TypeScript
 */
declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: GA4EventParams
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Check if gtag is available
 */
function isGtagAvailable(): boolean {
  return typeof window !== "undefined" && typeof window.gtag === "function";
}

/**
 * Log debug information (only in development)
 */
function debugLog(eventName: string, params?: GA4EventParams): void {
  if (GA4_CONFIG.debug) {
    console.log("[GA4 Debug]", eventName, params);
  }
}

/**
 * Track a custom event
 */
export function trackEvent(
  eventName: string,
  params?: GA4EventParams
): void {
  if (!isGA4Configured() || !isGtagAvailable()) {
    debugLog(eventName, params);
    return;
  }

  try {
    window.gtag?.("event", eventName, {
      ...params,
      // Add default parameters
      send_to: GA4_CONFIG.measurementId,
    });
    
    debugLog(eventName, params);
  } catch (error) {
    if (GA4_CONFIG.debug) {
      console.error("[GA4 Error]", error);
    }
  }
}

/**
 * Track page view
 */
export function trackPageView(params?: TrackPageViewParams): void {
  const pageParams: GA4EventParams = {
    page_title: params?.page_title || document.title,
    page_location: params?.page_location || window.location.href,
    page_path: params?.page_path || window.location.pathname,
  };

  trackEvent(GA4_EVENTS.PAGE_VIEW, pageParams);
}

/**
 * Track click event
 */
export function trackClick(params: TrackClickParams): void {
  trackEvent(GA4_EVENTS.CLICK, {
    button_text: params.button_text,
    button_location: params.button_location,
    section: params.section,
    ...params,
  });
}

/**
 * Track recipe view
 */
export function trackRecipeView(params: TrackRecipeViewParams): void {
  trackEvent(GA4_EVENTS.VIEW_RECIPE, {
    item_id: params.recipe_id,
    item_name: params.recipe_name,
    item_category: "recipe",
    recipe_type: params.recipe_type,
    ...params,
  });
}

/**
 * Track cooking kit view
 */
export function trackCookingKitView(params: TrackCookingKitViewParams): void {
  trackEvent(GA4_EVENTS.VIEW_COOKING_KIT, {
    item_id: params.kit_id,
    item_name: params.kit_name,
    item_category: "cooking_kit",
    price: params.price,
    currency: params.currency || "USD",
    ...params,
  });
}

/**
 * Track subscription plan view
 */
export function trackSubscriptionView(params: TrackSubscriptionViewParams): void {
  trackEvent(GA4_EVENTS.VIEW_SUBSCRIPTION_PLAN, {
    plan_name: params.plan_name,
    price: params.plan_price,
    currency: params.currency || "USD",
    billing_period: params.billing_period,
    ...params,
  });
}

/**
 * Track CTA button click
 */
export function trackCTAClick(params: TrackCTAClickParams): void {
  trackEvent(GA4_EVENTS.CLICK_CTA, {
    button_text: params.button_text,
    button_location: params.button_location,
    section: params.section,
    ...params,
  });
}

/**
 * Track recipe discovery start
 */
export function trackRecipeDiscoveryStart(): void {
  trackEvent(GA4_EVENTS.START_RECIPE_DISCOVERY);
}

/**
 * Track recipe discovery completion
 */
export function trackRecipeDiscoveryComplete(selectedRecipe?: string): void {
  trackEvent(GA4_EVENTS.COMPLETE_RECIPE_DISCOVERY, {
    selected_recipe: selectedRecipe,
  });
}

/**
 * Track FAQ expansion
 */
export function trackFAQExpand(question: string): void {
  trackEvent(GA4_EVENTS.EXPAND_FAQ, {
    faq_question: question,
  });
}

/**
 * Track testimonial click
 */
export function trackTestimonialClick(testimonialId: string, authorName?: string): void {
  trackEvent(GA4_EVENTS.CLICK_TESTIMONIAL, {
    testimonial_id: testimonialId,
    author_name: authorName,
  });
}

/**
 * Track social link click
 */
export function trackSocialLinkClick(platform: string, url: string): void {
  trackEvent(GA4_EVENTS.CLICK_SOCIAL_LINK, {
    social_platform: platform,
    link_url: url,
  });
}

/**
 * Track newsletter subscription
 */
export function trackNewsletterSubscribe(email?: string): void {
  trackEvent(GA4_EVENTS.SUBSCRIBE_NEWSLETTER, {
    email: email ? "provided" : "not_provided", // Don't send actual email for privacy
  });
}

/**
 * Track contact form submission
 */
export function trackContactFormSubmit(formName?: string): void {
  trackEvent(GA4_EVENTS.CONTACT_FORM_SUBMIT, {
    form_name: formName,
  });
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(depth: number): void {
  trackEvent(GA4_EVENTS.SCROLL, {
    scroll_depth: depth,
  });
}



/**
 * Google Analytics 4 Event Definitions
 * 
 * This file contains type-safe event definitions for GA4 tracking.
 * All events follow GA4's recommended event naming conventions.
 */

/**
 * Standard GA4 event names
 */
export const GA4_EVENTS = {
  // Page tracking
  PAGE_VIEW: "page_view",
  
  // Engagement events
  CLICK: "click",
  SCROLL: "scroll",
  VIDEO_START: "video_start",
  VIDEO_PROGRESS: "video_progress",
  VIDEO_COMPLETE: "video_complete",
  
  // E-commerce events
  VIEW_ITEM: "view_item",
  ADD_TO_CART: "add_to_cart",
  REMOVE_FROM_CART: "remove_from_cart",
  BEGIN_CHECKOUT: "begin_checkout",
  PURCHASE: "purchase",
  REFUND: "refund",
  
  // Custom events for Gourmet Fusion
  VIEW_RECIPE: "view_recipe",
  VIEW_COOKING_KIT: "view_cooking_kit",
  START_RECIPE_DISCOVERY: "start_recipe_discovery",
  COMPLETE_RECIPE_DISCOVERY: "complete_recipe_discovery",
  VIEW_SUBSCRIPTION_PLAN: "view_subscription_plan",
  CLICK_CTA: "click_cta",
  CLICK_TESTIMONIAL: "click_testimonial",
  EXPAND_FAQ: "expand_faq",
  CLICK_SOCIAL_LINK: "click_social_link",
  SUBSCRIBE_NEWSLETTER: "subscribe_newsletter",
  CONTACT_FORM_SUBMIT: "contact_form_submit",
} as const;

/**
 * Event parameters interface
 */
export interface GA4EventParams {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Standard event parameter names
 */
export const GA4_PARAMS = {
  // Item parameters
  ITEM_ID: "item_id",
  ITEM_NAME: "item_name",
  ITEM_CATEGORY: "item_category",
  ITEM_VARIANT: "item_variant",
  PRICE: "price",
  CURRENCY: "currency",
  QUANTITY: "quantity",
  
  // User engagement
  ENGAGEMENT_TIME_MSEC: "engagement_time_msec",
  SCROLL_DEPTH: "scroll_depth",
  
  // Custom parameters
  SECTION: "section",
  BUTTON_TEXT: "button_text",
  BUTTON_LOCATION: "button_location",
  RECIPE_TYPE: "recipe_type",
  KIT_NAME: "kit_name",
  PLAN_NAME: "plan_name",
  FAQ_QUESTION: "faq_question",
  SOCIAL_PLATFORM: "social_platform",
} as const;

/**
 * Type-safe event tracking function parameters
 */
export interface TrackPageViewParams {
  page_title?: string;
  page_location?: string;
  page_path?: string;
}

export interface TrackClickParams {
  button_text?: string;
  button_location?: string;
  section?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface TrackRecipeViewParams {
  recipe_id: string;
  recipe_name: string;
  recipe_type?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface TrackCookingKitViewParams {
  kit_id: string;
  kit_name: string;
  price?: number;
  currency?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface TrackSubscriptionViewParams {
  plan_name: string;
  plan_price?: number;
  currency?: string;
  billing_period?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface TrackCTAClickParams {
  button_text: string;
  button_location: string;
  section?: string;
  [key: string]: string | number | boolean | undefined;
}



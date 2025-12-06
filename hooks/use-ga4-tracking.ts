"use client";

/**
 * Custom React Hooks for GA4 Tracking
 * 
 * These hooks provide easy-to-use tracking functions for components.
 */

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  trackPageView,
  trackClick,
  trackRecipeView,
  trackCookingKitView,
  trackSubscriptionView,
  trackCTAClick,
  trackRecipeDiscoveryStart,
  trackRecipeDiscoveryComplete,
  trackFAQExpand,
  trackTestimonialClick,
  trackSocialLinkClick,
  trackNewsletterSubscribe,
  trackContactFormSubmit,
  trackScrollDepth,
  TrackClickParams,
  TrackRecipeViewParams,
  TrackCookingKitViewParams,
  TrackSubscriptionViewParams,
  TrackCTAClickParams,
} from "@/lib/analytics";

/**
 * Hook to automatically track page views on route changes
 */
export function usePageView(): void {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    
    trackPageView({
      page_path: url,
    });
  }, [pathname, searchParams]);
}

/**
 * Hook to track click events
 */
export function useClickTracking() {
  return {
    trackClick: (params: TrackClickParams) => {
      trackClick(params);
    },
  };
}

/**
 * Hook to track recipe-related events
 */
export function useRecipeTracking() {
  return {
    trackRecipeView: (params: TrackRecipeViewParams) => {
      trackRecipeView(params);
    },
    trackRecipeDiscoveryStart: () => {
      trackRecipeDiscoveryStart();
    },
    trackRecipeDiscoveryComplete: (selectedRecipe?: string) => {
      trackRecipeDiscoveryComplete(selectedRecipe);
    },
  };
}

/**
 * Hook to track cooking kit events
 */
export function useCookingKitTracking() {
  return {
    trackCookingKitView: (params: TrackCookingKitViewParams) => {
      trackCookingKitView(params);
    },
  };
}

/**
 * Hook to track subscription events
 */
export function useSubscriptionTracking() {
  return {
    trackSubscriptionView: (params: TrackSubscriptionViewParams) => {
      trackSubscriptionView(params);
    },
  };
}

/**
 * Hook to track CTA button clicks
 */
export function useCTATracking() {
  return {
    trackCTAClick: (params: TrackCTAClickParams) => {
      trackCTAClick(params);
    },
  };
}

/**
 * Hook to track FAQ interactions
 */
export function useFAQTracking() {
  return {
    trackFAQExpand: (question: string) => {
      trackFAQExpand(question);
    },
  };
}

/**
 * Hook to track testimonial interactions
 */
export function useTestimonialTracking() {
  return {
    trackTestimonialClick: (testimonialId: string, authorName?: string) => {
      trackTestimonialClick(testimonialId, authorName);
    },
  };
}

/**
 * Hook to track social link clicks
 */
export function useSocialTracking() {
  return {
    trackSocialLinkClick: (platform: string, url: string) => {
      trackSocialLinkClick(platform, url);
    },
  };
}

/**
 * Hook to track newsletter subscriptions
 */
export function useNewsletterTracking() {
  return {
    trackNewsletterSubscribe: (email?: string) => {
      trackNewsletterSubscribe(email);
    },
  };
}

/**
 * Hook to track contact form submissions
 */
export function useContactFormTracking() {
  return {
    trackContactFormSubmit: (formName?: string) => {
      trackContactFormSubmit(formName);
    },
  };
}

/**
 * Hook to track scroll depth
 */
export function useScrollTracking() {
  useEffect(() => {
    let lastScrollDepth = 0;
    const scrollThresholds = [25, 50, 75, 90, 100]; // Track at these percentages

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      const scrollPercentage = Math.round(
        ((scrollTop + windowHeight) / documentHeight) * 100
      );

      // Track when user reaches a new threshold
      for (const threshold of scrollThresholds) {
        if (scrollPercentage >= threshold && lastScrollDepth < threshold) {
          trackScrollDepth(threshold);
          lastScrollDepth = threshold;
          break;
        }
      }
    };

    // Throttle scroll events
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);
}


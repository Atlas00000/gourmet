"use client";

/**
 * Google Analytics 4 Provider Component
 * 
 * This component initializes GA4 using Next.js third-parties integration.
 * It only loads GA4 in production when the measurement ID is configured.
 */

import { GoogleAnalytics } from "@next/third-parties/google";
import { GA4_CONFIG, isGA4Configured } from "@/lib/analytics/ga4-config";

interface GA4ProviderProps {
  children?: React.ReactNode;
}

export function GA4Provider({ children }: GA4ProviderProps) {
  // Only render GA4 if configured and enabled
  if (!isGA4Configured()) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      <GoogleAnalytics gaId={GA4_CONFIG.measurementId} />
    </>
  );
}



"use client";

/**
 * Search Page
 * 
 * Main search page route for the application.
 */

import { Suspense } from "react";
import { SearchPage } from "@/components/search";
import { SectionSkeleton } from "@/components/loading";

export default function SearchRoute() {
  return (
    <Suspense fallback={<SectionSkeleton variant="default" />}>
      <SearchPage />
    </Suspense>
  );
}


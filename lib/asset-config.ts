/**
 * Asset Configuration - Centralized configuration for static assets
 * Provides consistent asset paths, formats, and optimization settings
 */

export const assetConfig = {
  images: {
    // Image formats to use (WebP preferred, fallback to original)
    formats: ["image/webp", "image/avif"] as const,
    // Default image sizes for responsive images
    sizes: {
      thumbnail: "(max-width: 640px) 100vw, 200px",
      small: "(max-width: 768px) 100vw, 400px",
      medium: "(max-width: 1024px) 100vw, 800px",
      large: "(max-width: 1280px) 100vw, 1200px",
      full: "100vw",
    },
    // Quality settings
    quality: {
      low: 75,
      medium: 85,
      high: 95,
    },
  },
  fonts: {
    // Critical fonts to preload
    critical: ["GeistSans", "GeistMono"] as const,
    // Font display strategy
    display: "swap" as const,
  },
  // Static asset paths
  paths: {
    images: "/",
    fonts: "/fonts",
    icons: "/icons",
  },
} as const

/**
 * Get optimized image src with proper path
 */
export function getImageSrc(path: string): string {
  if (path.startsWith("http") || path.startsWith("/")) {
    return path
  }
  return `${assetConfig.paths.images}${path.startsWith("/") ? "" : "/"}${path}`
}

/**
 * Get image sizes string for responsive images
 */
export function getImageSizes(size: keyof typeof assetConfig.images.sizes): string {
  return assetConfig.images.sizes[size]
}


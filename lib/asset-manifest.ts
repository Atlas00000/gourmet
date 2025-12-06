/**
 * Asset Manifest - Tracks static assets for cache management
 * Helps with cache invalidation and asset versioning
 */

export interface AssetManifest {
  version: string
  assets: {
    images: string[]
    fonts: string[]
    scripts: string[]
    styles: string[]
  }
  lastUpdated: string
}

/**
 * Generate asset manifest for cache management
 */
export function generateAssetManifest(): AssetManifest {
  return {
    version: process.env.NEXT_PUBLIC_BUILD_ID || Date.now().toString(),
    assets: {
      images: [
        "/asian-fusion-ingredients-soy-sauce-ginger.png",
        "/asian-woman-chef-smiling.png",
        "/black-man-food-blogger.png",
        "/italian-woman-cooking-student.png",
        "/latin-spices-chili-peppers-colorful.png",
        "/mediterranean-ingredients-olive-oil-herbs.png",
        "/professional-chef-cooking-fusion-cuisine-modern-ki.png",
      ],
      fonts: [],
      scripts: [],
      styles: [],
    },
    lastUpdated: new Date().toISOString(),
  }
}

/**
 * Get cache key for asset (for cache busting)
 */
export function getAssetCacheKey(path: string, version?: string): string {
  const v = version || process.env.NEXT_PUBLIC_BUILD_ID || ""
  if (!v) return path
  const separator = path.includes("?") ? "&" : "?"
  return `${path}${separator}v=${v}`
}

/**
 * Check if asset should be cached
 */
export function shouldCacheAsset(path: string): boolean {
  // Cache static assets, but not dynamic API responses
  const cacheableExtensions = [".png", ".jpg", ".jpeg", ".webp", ".svg", ".avif", ".woff", ".woff2", ".ttf", ".eot"]
  return cacheableExtensions.some((ext) => path.toLowerCase().endsWith(ext))
}


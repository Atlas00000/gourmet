/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Enable Next.js image optimization
    formats: ["image/avif", "image/webp"],
    // Image quality (1-100, default 75)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Allow images from same origin (public folder)
    remotePatterns: [],
    // Minimum cache TTL in seconds
    minimumCacheTTL: 60,
  },
  // Explicit compiler configuration
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error", "warn"],
    } : false,
  },
  // Ensure proper JSX handling
  reactStrictMode: true,
  // Experimental features
  experimental: {
    // Optimize package imports for better performance
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

export default nextConfig

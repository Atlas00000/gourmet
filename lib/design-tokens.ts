/**
 * Design Tokens System
 * Centralized design system tokens for Gourmet Fusion
 * Following the UI Philosophy document
 */

// Color Palette
export const colors = {
  // Primary - Soft Rose (#e5b9c7)
  primary: {
    50: '#fef7f9',
    100: '#fceef2',
    200: '#f9dce5',
    300: '#f5c9d7',
    400: '#e5b9c7',
    500: '#d4a8b6',
    600: '#c397a5',
    700: '#b28694',
    800: '#a17583',
    900: '#906472',
  },
  // Secondary - Golden Amber (#d4a85a)
  secondary: {
    50: '#fef9f0',
    100: '#fdf3e1',
    200: '#fbe7c3',
    300: '#f9dba5',
    400: '#d4a85a',
    500: '#c2974f',
    600: '#b08644',
    700: '#9e7539',
    800: '#8c642e',
    900: '#7a5323',
  },
  // Neutral Grays
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  // Background
  background: {
    light: '#fefcf7',
    dark: '#1f2937',
    card: '#faf8f3',
    cardDark: '#374151',
  },
} as const

// Spacing System (4px base unit)
export const spacing = {
  0: '0',
  1: '0.25rem', // 4px
  2: '0.5rem', // 8px
  3: '0.75rem', // 12px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  8: '2rem', // 32px
  10: '2.5rem', // 40px
  12: '3rem', // 48px
  16: '4rem', // 64px
  20: '5rem', // 80px
  24: '6rem', // 96px
  32: '8rem', // 128px
} as const

// Typography Scale
export const typography = {
  fontFamily: {
    sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
    mono: ['var(--font-geist-mono)', 'monospace'],
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.05em' }], // 12px
    sm: ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.025em' }], // 14px
    base: ['1rem', { lineHeight: '1.6', letterSpacing: '0' }], // 16px
    lg: ['1.125rem', { lineHeight: '1.6', letterSpacing: '0' }], // 18px
    xl: ['1.25rem', { lineHeight: '1.6', letterSpacing: '-0.025em' }], // 20px
    '2xl': ['1.5rem', { lineHeight: '1.5', letterSpacing: '-0.025em' }], // 24px
    '3xl': ['1.875rem', { lineHeight: '1.4', letterSpacing: '-0.05em' }], // 30px
    '4xl': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.05em' }], // 36px
    '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.05em' }], // 48px
    '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.05em' }], // 60px
    '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.05em' }], // 72px
    '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.05em' }], // 96px
    '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.05em' }], // 128px
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
} as const

// Border Radius
export const borderRadius = {
  none: '0',
  sm: '0.25rem', // 4px
  base: '0.5rem', // 8px
  md: '0.75rem', // 12px
  lg: '1rem', // 16px
  xl: '1.5rem', // 24px
  '2xl': '2rem', // 32px
  full: '9999px',
} as const

// Shadow System
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  // Colored shadows for brand elements
  primary: '0 10px 15px -3px rgba(229, 185, 199, 0.3), 0 4px 6px -4px rgba(229, 185, 199, 0.2)',
  secondary: '0 10px 15px -3px rgba(212, 168, 90, 0.3), 0 4px 6px -4px rgba(212, 168, 90, 0.2)',
  // Inner shadows
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
} as const

// Transition & Animation
export const transitions = {
  duration: {
    fast: '150ms',
    base: '300ms',
    slow: '500ms',
    slower: '800ms',
  },
  easing: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const

// Z-Index Scale
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

// Glassmorphism Presets
export const glassmorphism = {
  light: {
    background: 'rgba(255, 255, 255, 0.7)',
    backdrop: 'blur(12px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
  dark: {
    background: 'rgba(31, 41, 55, 0.7)',
    backdrop: 'blur(12px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
} as const

// Gradient Presets
export const gradients = {
  primary: 'linear-gradient(135deg, #e5b9c7 0%, #d4a85a 100%)',
  primarySoft: 'linear-gradient(135deg, rgba(229, 185, 199, 0.1) 0%, rgba(212, 168, 90, 0.1) 100%)',
  hero: 'linear-gradient(135deg, rgba(229, 185, 199, 0.1) 0%, rgba(254, 252, 247, 1) 50%, rgba(212, 168, 90, 0.05) 100%)',
  card: 'linear-gradient(135deg, rgba(250, 248, 243, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)',
  overlay: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
} as const

// Export all tokens
export const designTokens = {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
  transitions,
  zIndex,
  breakpoints,
  glassmorphism,
  gradients,
} as const

export type DesignTokens = typeof designTokens


<div align="center">

# 🍳 Gourmet Fusion

**Premium Fusion Cooking Kits for Families**

*Elevate your culinary journey with premium ingredients and innovative fusion cooking kits that blend tradition with modern gastronomy.*

[![Next.js](https://img.shields.io/badge/Next.js-16.0.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Performance](#-performance-optimizations) • [Mobile](#-mobile-optimizations) • [Development](#-development)

</div>

---

## ✨ Features

### 🎨 Visual Excellence
- **Stunning Hero Section** - Interactive, animated hero with mesh gradients and dynamic shapes
- **Glassmorphism Effects** - Modern glass-like UI components with backdrop blur
- **Gradient Animations** - Beautiful gradient text, borders, and backgrounds
- **3D Transforms** - Depth and dimension with CSS 3D transforms
- **Particle Effects** - Animated particles and floating elements

### 🎭 Interactive Components
- **Magnetic Buttons** - Buttons that follow cursor movement
- **Hover Cards** - Interactive cards with 3D transforms and hover effects
- **Scroll Animations** - Smooth scroll-triggered animations and reveals
- **Parallax Effects** - Multi-layer parallax scrolling
- **Interactive Grids** - Dynamic, responsive grid layouts

### 📱 Mobile Optimized
- **Responsive Layouts** - Dedicated mobile and desktop layouts
- **Touch-Friendly** - Optimized touch targets and gestures
- **Reduced Motion** - Performance-optimized animations for mobile
- **Adaptive UI** - Components that adapt to viewport size

### ⚡ Performance
- **Code Splitting** - Lazy-loaded sections for faster initial load
- **Image Optimization** - Next.js automatic image optimization (WebP/AVIF)
- **Layout Thrash Prevention** - Transform/opacity-only animations
- **Smooth Scrolling** - Optimized scroll handlers with requestAnimationFrame
- **Static Generation** - Pre-rendered static pages for instant loading

### 🎯 User Experience
- **Loading Screen** - Beautiful animated loading experience
- **404 Page** - Themed, interactive error page
- **Smooth Transitions** - Page and section transitions
- **Accessibility** - Prefers-reduced-motion support
- **SEO Optimized** - Proper meta tags and semantic HTML

---

## 🛠 Tech Stack

### Core Framework
- **[Next.js 16.0.5](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety

### Styling & Design
- **[Tailwind CSS 4.1](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion 12.23](https://www.framer.com/motion/)** - Animation library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Icon library

### Utilities & Tools
- **[Geist Font](https://vercel.com/font)** - Modern typeface
- **[Zod](https://zod.dev/)** - Schema validation
- **[React Hook Form](https://react-hook-form.com/)** - Form management
- **[Vercel Analytics](https://vercel.com/analytics)** - Analytics

### Development
- **pnpm** - Fast, disk-efficient package manager
- **Turbopack** - Next-generation bundler
- **ESLint** - Code linting
- **PostCSS** - CSS processing

---

## 🚀 Installation

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd gourmet

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Environment Setup

Create a `.env.local` file (if needed):

```env
NEXT_PUBLIC_BUILD_ID=your-build-id
```

---

## 📁 Project Structure

```
gourmet/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout
│   ├── page.tsx             # Homepage
│   ├── not-found.tsx        # 404 page
│   └── globals.css          # Global styles
│
├── components/               # React components
│   ├── animations/          # Animation components
│   ├── assets/              # Asset preloaders
│   ├── cta/                 # Call-to-action sections
│   ├── discovery/           # Recipe discovery
│   ├── features/             # Feature cards
│   ├── floating/            # Floating elements
│   ├── glassmorphism/       # Glass effects
│   ├── gradients/           # Gradient components
│   ├── hero/                # Hero section
│   ├── layout/              # Layout components
│   ├── loading/             # Loading components
│   ├── navigation/         # Navigation components
│   ├── scroll/              # Scroll components
│   ├── showcase/            # Product showcase
│   ├── stories/             # Success stories
│   ├── testimonials/       # Customer reviews
│   └── ui/                  # UI primitives
│
├── hooks/                   # Custom React hooks
│   ├── use-mobile-viewport.ts
│   ├── use-smooth-scroll.ts
│   ├── use-prefers-reduced-motion.ts
│   └── ...
│
├── lib/                     # Utility libraries
│   ├── animation-utils.ts
│   ├── asset-config.ts
│   ├── mobile-animation-utils.ts
│   ├── scroll-utils.ts
│   └── ...
│
├── public/                  # Static assets
│   └── *.png                # Images
│
└── scripts/                 # Build scripts
    └── analyze-imports.js
```

---

## ⚡ Performance Optimizations

### Code Splitting
- **Lazy Loading** - Heavy sections loaded on-demand
- **Dynamic Imports** - `next/dynamic` for component code splitting
- **Route-based Splitting** - Automatic code splitting per route

### Animation Performance
- **Layout Thrash Prevention** - Transform/opacity-only animations
- **GPU Acceleration** - Hardware-accelerated transforms
- **RequestAnimationFrame** - Optimized scroll handlers
- **Reduced Motion** - Respects user preferences

### Image Optimization
- **Next.js Image** - Automatic WebP/AVIF conversion
- **Responsive Images** - Proper srcset and sizes
- **Lazy Loading** - Images load as needed
- **Blur Placeholders** - Better perceived performance

### Static Assets
- **Asset Preloading** - Critical assets preloaded
- **Font Optimization** - Font-display strategies
- **Cache Management** - Asset manifest for versioning

---

## 📱 Mobile Optimizations

### Responsive Design
- **Viewport Detection** - Smart mobile/tablet/desktop detection
- **Adaptive Layouts** - Different layouts for different devices
- **Touch Optimization** - 44px+ touch targets

### Performance
- **Reduced Animations** - 60% fewer particles on mobile
- **Shorter Durations** - 30% faster animations
- **Simplified Variants** - Reduced transform distances

### User Experience
- **Mobile Navigation** - Slide-in menu with backdrop
- **Smooth Scrolling** - Optimized for touch devices
- **Reduced Motion Density** - Better battery life

---

## 🎨 Design System

### Color Palette
```css
Primary:   #e5b9c7 (Soft Pink)
Secondary: #d4a85a (Warm Gold)
Background: #fefcf7 (Warm White)
Foreground: #475569 (Slate Gray)
```

### Typography
- **Font Family**: Geist Sans (Primary), Geist Mono (Code)
- **Scale**: Responsive typography scale
- **Weights**: 300, 400, 500, 600, 700

### Spacing
- **Base Unit**: 4px
- **Scale**: 0.25rem increments
- **Responsive**: Mobile-optimized spacing

---

## 🧩 Component Architecture

### Modular Design
All components follow a modular approach:
- **Single Responsibility** - Each component has one purpose
- **Composable** - Components can be combined
- **Reusable** - Shared across the application
- **Type-Safe** - Full TypeScript support

### Component Categories

#### Layout Components
- `Container` - Responsive container
- `Section` - Section wrapper
- `Grid` - Responsive grid
- `Stack` - Vertical/horizontal stack
- `MobileLayout` - Mobile-optimized layout
- `ResponsiveLayout` - Adaptive layout

#### Animation Components
- `FadeIn` - Fade-in animation
- `SlideIn` - Slide animations
- `Stagger` - Staggered animations
- `LayoutSafeMotion` - Layout-thrash-free motion

#### Interactive Components
- `HoverCard` - Interactive hover card
- `InteractiveCard` - 3D interactive card
- `MagneticButton` - Cursor-following button

#### UI Components
- `Button` - Enhanced button with variants
- `Card` - Glassmorphism card
- `Input` - Floating label input
- And 50+ more UI primitives

---

## 🔧 Development

### Scripts

```bash
# Development
pnpm dev          # Start dev server (localhost:3000)
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Analysis
node scripts/analyze-imports.js  # Analyze third-party usage
```

### Code Style
- **TypeScript** - Strict type checking
- **ESLint** - Code quality
- **Prettier** - Code formatting (if configured)
- **Conventional Commits** - Commit message format

### Best Practices
1. **Component Modularity** - Split into separate files
2. **Type Safety** - Use TypeScript types
3. **Performance** - Use layout-safe animations
4. **Accessibility** - Support reduced motion
5. **Mobile First** - Design for mobile, enhance for desktop

---

## 🎯 Key Features Breakdown

### Hero Section
- **Mesh Gradient Background** - Animated gradient mesh
- **Interactive Grid** - Dynamic grid background
- **Floating Elements** - Animated ingredient icons
- **Dramatic Text** - Word-by-word reveal animations
- **Premium CTAs** - Magnetic buttons with effects

### Product Showcase
- **3D Cards** - Depth and dimension
- **Hover Effects** - Interactive card transforms
- **Animated Backgrounds** - Multi-layer effects
- **Responsive Grid** - Adaptive layout

### Recipe Discovery
- **Interactive Quiz** - Step-by-step discovery
- **Image Sections** - Optimized image loading
- **Smooth Transitions** - Section transitions

### Success Stories
- **Stat Cards** - Animated statistics
- **Testimonials** - Customer reviews with 3D effects
- **Background Effects** - Particles and gradients

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker
```bash
# Build image
docker build -t gourmet-fusion .

# Run container
docker run -p 3000:3000 gourmet-fusion

# Or use docker-compose
docker-compose up
```

### Static Export
```bash
# Build static export
pnpm build

# Output in .next directory
# Deploy to any static hosting (Netlify, Cloudflare Pages, etc.)
```

---

## 🔍 Browser Support

- **Chrome/Edge** - Latest 2 versions ✅
- **Firefox** - Latest 2 versions ✅
- **Safari** - Latest 2 versions ✅
- **Mobile Safari** - iOS 14+ ✅
- **Chrome Mobile** - Latest ✅

---

## 📊 Performance Metrics

### Lighthouse Scores (Target)
- **Performance**: 95+ ⚡
- **Accessibility**: 100 ♿
- **Best Practices**: 100 ✅
- **SEO**: 100 🔍

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Optimizations Applied
- ✅ Code splitting for heavy sections
- ✅ Image optimization (WebP/AVIF)
- ✅ Layout thrash prevention
- ✅ Smooth scroll optimization
- ✅ Mobile-specific optimizations
- ✅ Static asset optimization
- ✅ Reduced motion support

---

## 🎓 Learning Resources

### Key Concepts Used
- **Next.js App Router** - Modern routing
- **Server Components** - React Server Components
- **Framer Motion** - Advanced animations
- **Tailwind CSS** - Utility-first styling
- **TypeScript** - Type safety

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Radix UI Docs](https://www.radix-ui.com/docs)

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Commandments
- ✅ Keep solutions simple and straightforward
- ✅ Stay within scope
- ✅ Write modular, reusable code
- ✅ Use pnpm over npm
- ✅ Follow the component/modularity approach
- ✅ Test thoroughly before committing

---

## 📝 License

This project is private and proprietary.

---

## 🙏 Acknowledgments

- **Next.js Team** - Amazing framework
- **Vercel** - Hosting and deployment
- **Framer** - Animation library
- **Radix UI** - Accessible components
- **Tailwind Labs** - CSS framework
- **Lucide** - Beautiful icons

---

## 📧 Contact

For questions or support, please reach out:

- **Website**: [Your Website]
- **Email**: [Your Email]
- **Twitter**: [@YourHandle]

---

## 🗺️ Roadmap

### Completed ✅
- [x] Enhanced hero section with stunning animations
- [x] Success stories section with 3D effects
- [x] Interactive recipe discovery
- [x] Gift & subscription options
- [x] Curated cooking kits showcase
- [x] Customer testimonials with animations
- [x] FAQ section with interactive accordion
- [x] Footer CTA section
- [x] Loading screen with animations
- [x] 404 page with theme
- [x] Code splitting for performance
- [x] Layout thrash prevention
- [x] Mobile-optimized layouts
- [x] Static asset optimization

### Upcoming 🚀
- [ ] User authentication
- [ ] Shopping cart functionality
- [ ] Recipe detail pages
- [ ] Cooking kit customization
- [ ] User dashboard
- [ ] Order tracking
- [ ] Blog section
- [ ] Recipe search and filters
- [ ] Video tutorials
- [ ] Community features

---

## 📈 Changelog

### Version 0.1.0 (Current)
- Initial release
- Complete homepage with all sections
- Mobile-optimized layouts
- Performance optimizations
- Loading screen and 404 page
- Code splitting implementation
- Static asset optimization

---

<div align="center">

**Built with ❤️ using Next.js, React, and Framer Motion**

⭐ Star this repo if you find it useful!

[Back to Top](#-gourmet-fusion)

</div>
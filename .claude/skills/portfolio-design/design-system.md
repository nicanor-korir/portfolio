# Design System Specification

## Color System

### Primary Palette

```json
{
  "colors": {
    "background": {
      "primary": "#0A192F",
      "secondary": "#112240",
      "elevated": "#1A2F4A"
    },
    "accent": {
      "cyan": "#64FFDA",
      "blue": "#00D9FF",
      "amber": "#F76C6C"
    },
    "text": {
      "primary": "#E6F1FF",
      "secondary": "#CCD6F6",
      "tertiary": "#8892B0"
    },
    "ui": {
      "border": "#233554",
      "grid": "#1A2840",
      "success": "#00FF88",
      "warning": "#FFB800"
    }
  }
}
```

### Usage Guidelines

**Backgrounds:**
- `#0A192F` - Main page background
- `#112240` - Cards, elevated surfaces
- `#1A2F4A` - Hover states, active elements

**Accents:**
- `#64FFDA` (Cyan) - Primary CTA, links, highlights
- `#00D9FF` (Blue) - Interactive states, detection boxes
- `#F76C6C` (Amber) - Alma-specific branding, warm touches

**Text Hierarchy:**
- `#E6F1FF` - Headings, high-emphasis
- `#CCD6F6` - Body text, medium-emphasis
- `#8892B0` - Secondary text, low-emphasis

**UI Elements:**
- `#233554` - Borders, dividers
- `#1A2840` - SLAM grid overlay
- `#00FF88` - Success states, "detected" indicators
- `#FFB800` - Warning states, attention

### Accessibility

All color combinations meet WCAG 2.1 AA standards:
- `#E6F1FF` on `#0A192F` = 14.2:1 (AAA)
- `#CCD6F6` on `#0A192F` = 11.8:1 (AAA)
- `#8892B0` on `#0A192F` = 5.1:1 (AA)
- `#64FFDA` on `#0A192F` = 10.3:1 (AAA)

---

## Typography

### Font Families

```css
--font-heading: 'Space Grotesk', sans-serif;
--font-body: 'Inter', sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

### Type Scale

```json
{
  "typography": {
    "scale": {
      "h1": {
        "desktop": "72px",
        "tablet": "56px",
        "mobile": "48px",
        "lineHeight": "1.1",
        "fontWeight": "700",
        "fontFamily": "Space Grotesk"
      },
      "h2": {
        "desktop": "48px",
        "tablet": "40px",
        "mobile": "36px",
        "lineHeight": "1.2",
        "fontWeight": "700",
        "fontFamily": "Space Grotesk"
      },
      "h3": {
        "desktop": "32px",
        "tablet": "28px",
        "mobile": "24px",
        "lineHeight": "1.3",
        "fontWeight": "600",
        "fontFamily": "Space Grotesk"
      },
      "body-large": {
        "size": "20px",
        "lineHeight": "1.7",
        "fontWeight": "400",
        "fontFamily": "Inter"
      },
      "body": {
        "size": "18px",
        "lineHeight": "1.7",
        "fontWeight": "400",
        "fontFamily": "Inter"
      },
      "body-small": {
        "size": "16px",
        "lineHeight": "1.6",
        "fontWeight": "400",
        "fontFamily": "Inter"
      },
      "code": {
        "size": "16px",
        "lineHeight": "1.5",
        "fontWeight": "400",
        "fontFamily": "JetBrains Mono"
      }
    }
  }
}
```

### Font Loading

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

## Spacing System

### Base Unit: 8px

```json
{
  "spacing": {
    "xs": "8px",
    "sm": "16px",
    "md": "24px",
    "lg": "32px",
    "xl": "48px",
    "2xl": "64px",
    "3xl": "96px",
    "4xl": "128px"
  }
}
```

### Section Spacing

```css
--section-padding-desktop: 128px;
--section-padding-tablet: 96px;
--section-padding-mobile: 64px;

--container-max-width: 1200px;
--content-max-width: 800px;
--narrow-content-width: 600px;
```

### Component Spacing

```css
--card-padding: 32px;
--card-gap: 24px;
--button-padding-x: 32px;
--button-padding-y: 16px;
--input-padding: 16px;
```

---

## Layout Grid

### Desktop (1200px container)

```
12-column grid
Column width: 74px
Gutter: 24px
Margin: 48px
```

### Tablet (768px)

```
8-column grid
Column width: 68px
Gutter: 24px
Margin: 32px
```

### Mobile (375px)

```
4-column grid
Column width: 69px
Gutter: 16px
Margin: 16px
```

---

## Elevation / Z-index

```css
--z-base: 0;
--z-dropdown: 100;
--z-sticky: 200;
--z-fixed: 300;
--z-modal-backdrop: 400;
--z-modal: 500;
--z-popover: 600;
--z-tooltip: 700;
```

### Shadow System

```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.15);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.2);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.3);
--shadow-glow: 0 0 20px rgba(100, 255, 218, 0.3);
```

---

## Border Radius

```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;
```

---

## Breakpoints

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

---

## Animation Timing

### Duration

```css
--duration-instant: 100ms;
--duration-fast: 200ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-slower: 800ms;
```

### Easing

```css
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

---

## Icon System

### Size Scale

```css
--icon-xs: 16px;
--icon-sm: 20px;
--icon-md: 24px;
--icon-lg: 32px;
--icon-xl: 48px;
```

### Social Icons

Use: Lucide React or React Icons

```
GitHub: <Github size={24} />
LinkedIn: <Linkedin size={24} />
Twitter: <Twitter size={24} />
Email: <Mail size={24} />
```

---

## Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A192F',
          light: '#112240',
          lighter: '#1A2F4A',
        },
        accent: {
          cyan: '#64FFDA',
          blue: '#00D9FF',
          amber: '#F76C6C',
        },
        text: {
          primary: '#E6F1FF',
          secondary: '#CCD6F6',
          tertiary: '#8892B0',
        },
        ui: {
          border: '#233554',
          grid: '#1A2840',
          success: '#00FF88',
          warning: '#FFB800',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
        128: '32rem',
      },
      boxShadow: {
        glow: '0 0 20px rgba(100, 255, 218, 0.3)',
        'glow-lg': '0 0 40px rgba(100, 255, 218, 0.4)',
      },
    },
  },
  plugins: [],
}
```

---

## Responsive Design Principles

### Mobile First

Always write CSS mobile-first, then enhance for larger screens:

```css
/* Mobile (default) */
.section {
  padding: 64px 16px;
}

/* Tablet and up */
@media (min-width: 768px) {
  .section {
    padding: 96px 32px;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .section {
    padding: 128px 48px;
  }
}
```

### Touch Targets

Minimum size for interactive elements: **44x44px**

```css
.button,
.link {
  min-height: 44px;
  min-width: 44px;
  padding: 16px 32px;
}
```

---

## Performance Guidelines

### Image Optimization

```html
<!-- Use Next.js Image component -->
<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  quality={85}
  loading="lazy"
  placeholder="blur"
/>
```

### Font Loading Strategy

```css
/* Use font-display: swap */
@font-face {
  font-family: 'Space Grotesk';
  src: url('/fonts/space-grotesk.woff2') format('woff2');
  font-display: swap;
  font-weight: 700;
}
```

### Code Splitting

```javascript
// Lazy load heavy components
const VisionSystem3D = dynamic(() => import('@/components/3d/VisionSystem'), {
  ssr: false,
  loading: () => <LoadingPlaceholder />,
});
```

---

## Accessibility

### Focus States

```css
*:focus-visible {
  outline: 2px solid var(--accent-cyan);
  outline-offset: 4px;
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Skip Links

```html
<a href="#main-content" class="skip-link">
  Skip to main content
</a>
```

---

## Component Conventions

### Naming

- **Components:** PascalCase (`ProjectCard`, `VisionSystem`)
- **Utilities:** camelCase (`formatDate`, `calculateOpacity`)
- **CSS Classes:** kebab-case (`project-card`, `vision-system`)

### File Organization

```
components/
├── sections/          # Page sections
├── ui/               # Reusable UI components
├── 3d/               # Three.js components
└── layout/           # Layout components
```

### TypeScript Types

Always define props:

```typescript
interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  link?: string;
}
```

---

**This design system is the source of truth for all visual and interaction decisions. Refer to this document before implementing any new components or features.**

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Nicanor Korir's technical portfolio website - a bold, interactive portfolio showcasing expertise in AI research, robotics engineering, and product building. The site features a 3D Vision System hero element with particle fields, detection frames, and scan line effects.

## Tech Stack

- **Framework**: Next.js 16 (App Router) with TypeScript
- **Styling**: TailwindCSS 4.x with custom `@theme` design tokens
- **3D Graphics**: Three.js via React Three Fiber + @react-three/drei
- **Animation**: GSAP (planned), CSS keyframes for base animations
- **Icons**: Lucide React
- **Deployment**: Vercel

## Build Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Design System

Design tokens are defined in `src/app/globals.css` using Tailwind v4 `@theme` syntax.

**Color Palette:**
- `--color-primary`: #0A192F (main background)
- `--color-primary-light`: #112240 (cards, elevated surfaces)
- `--color-accent-cyan`: #64FFDA (primary CTA, highlights)
- `--color-accent-blue`: #00D9FF (interactive states, detection boxes)
- `--color-accent-amber`: #F76C6C (warm accent, Alma branding)
- `--color-text-primary`: #E6F1FF (headings)
- `--color-text-secondary`: #CCD6F6 (body text)
- `--color-text-tertiary`: #8892B0 (muted text)

**Typography (loaded via next/font/google):**
- Headings: Space Grotesk (500, 700)
- Body: Inter (400, 500, 600)
- Code/Technical: JetBrains Mono (400, 500)

## Architecture

Single-page architecture with these sections:

1. **Hero** - 3D Vision System with particles, grid, scan line, detection frame
2. **About** - Bio with photo placeholder and animated stats
3. **Work Products** - Project cards (Alma, Eneza, ShambaMedCare, etc.)
4. **Work Experience** - Timeline of professional history
5. **Research & Robotics** - Academic work and robotics projects
6. **Skills** - Tech categories displayed as "detected" bounding boxes
7. **Contact** - CTA buttons and contact links

### File Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Main page composing all sections
│   └── globals.css        # Tailwind v4 theme and base styles
├── components/
│   ├── sections/          # Hero, About, WorkProducts, WorkExperience, Research, Skills, Contact
│   ├── ui/                # Button, DetectionBox, TechBadge, Section, SectionHeader, ProjectCard, TimelineEntry
│   ├── 3d/                # VisionSystem (React Three Fiber)
│   └── layout/            # Navigation, Footer
├── data/
│   ├── projects.ts        # Project data
│   ├── experience.ts      # Work experience data
│   └── skills.ts          # Skills, research, robotics projects, education
├── hooks/                 # Custom React hooks (empty, for future use)
└── lib/                   # Utilities (empty, for future use)
```

## Key Components

**UI Components (`src/components/ui/`):**
- `Button` - Primary/secondary/ghost variants with scan line effect
- `DetectionBox` - CV-style corner brackets with label and confidence
- `TechBadge` - Pill-shaped tech stack badges
- `ProjectCard` - Project showcase with hover effects
- `TimelineEntry` - Experience timeline with dot connector
- `Section` - Wrapper with background and grid options

**3D Components (`src/components/3d/`):**
- `VisionSystem` - Canvas with ParticleField, Grid, ScanLine, DetectionFrame

## Data Files

All portfolio content is centralized in `src/data/`:
- `projects.ts` - Array of projects with title, description, impact, tech, status
- `experience.ts` - Array of work experiences with company, role, impacts, tech
- `skills.ts` - Skill categories, research projects, robotics projects, education

## CSS Utilities

Custom animations defined in `globals.css`:
- `.animate-draw-box` - Detection box corner drawing animation
- `.animate-scan` - Scan line moving down effect
- `.animate-fade-in-up` - Fade in with upward motion
- `.animate-pulse-glow` - Pulsing cyan glow
- `.bg-grid` - SLAM-style grid background pattern
- `.section-padding` - Responsive section padding

## Performance

- 3D Vision System is lazy-loaded with `next/dynamic`
- Images use Next.js `<Image>` for optimization
- Fonts loaded via `next/font/google` with swap display

## Accessibility

- Skip link to main content
- Keyboard-navigable elements
- Focus-visible outlines
- `prefers-reduced-motion` respected
- ARIA labels on interactive elements
- Semantic HTML structure

## Skills Documentation

Extended design documentation is available in `.claude/skills/portfolio-design/`:
- `SKILL.md` - Quick reference
- `design-system.md` - Complete design tokens
- `components-library.md` - Component specifications
- `animation-patterns.md` - Animation guidelines
- `copy-guidelines.md` - Brand voice and messaging

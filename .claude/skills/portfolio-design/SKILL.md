# Portfolio Design System Skill

## Purpose
This skill contains the complete design system, brand guidelines, and component library for Nicanor Korir's portfolio website. Use this when building, modifying, or extending the portfolio to ensure visual and functional consistency.

## When to Use This Skill
- Building new sections or pages for the portfolio
- Creating new components that match the existing design
- Implementing animations and interactions
- Writing copy that matches brand voice
- Ensuring accessibility compliance
- Making responsive design decisions

## Core Design Philosophy

**Theme: Robotics & Computer Vision Aesthetic**
The portfolio uses a technical, futuristic design language inspired by:
- SLAM mapping visualizations
- Computer vision detection systems
- Robotic wireframe aesthetics
- Technical HUD interfaces
- Point cloud visualizations

**Tone: Bold yet Professional**
- Technical depth without intimidation
- Playful interactions without gimmicks
- Academic rigor with builder energy
- Global ambitions with local impact

---

## Quick Reference

### Color Palette
```
Primary Background: #0A192F (Deep Space)
Secondary Background: #112240 (Navy Depth)
Primary Accent: #64FFDA (Electric Cyan)
Secondary Accent: #00D9FF (Neon Blue)
Warm Accent: #F76C6C (Amber - for Alma branding)
Text Primary: #E6F1FF (Lightest Slate)
Text Secondary: #8892B0 (Slate)
Grid/Borders: #233554
Success/Detection: #00FF88
```

### Typography
```
Headings: Space Grotesk (700, 500)
Body: Inter (400, 500, 600)
Code/Technical: JetBrains Mono
```

### Key Components
1. **VisionSystem3D** - The hero interactive element
2. **ProjectCard** - Work showcase cards with detection boxes
3. **TimelineEntry** - Experience timeline component
4. **DetectionBox** - Reusable CV-style bounding box
5. **ScanEffect** - Scanning animation overlay

### Animation Principles
- Scan lines for section reveals
- Bounding boxes draw in from corners
- Particles respond to scroll
- Smooth GSAP transitions (not Framer Motion jerks)
- Respect `prefers-reduced-motion`

---

## Related Files

**Design Tokens:** See `design-system.md` for complete specifications
**Components:** See `components-library.md` for implementation details
**Animations:** See `animation-patterns.md` for motion guidelines
**Copy:** See `copy-guidelines.md` for voice and messaging

---

## Usage Examples

### Example 1: Adding a New Section
```bash
When adding a new section to the portfolio:

1. Read design-system.md for spacing and layout rules
2. Use components from components-library.md
3. Apply animation patterns from animation-patterns.md
4. Ensure copy follows copy-guidelines.md
5. Test responsive behavior (mobile-first)
6. Verify accessibility (WCAG 2.1 AA)
```

### Example 2: Creating a New Component
```bash
When creating a new component:

1. Check if similar component exists in components-library.md
2. Use design tokens from design-system.md
3. Follow naming conventions: PascalCase, descriptive
4. Include TypeScript types
5. Add accessibility props (aria-label, role, etc.)
6. Document props and usage
```

### Example 3: Implementing Interactions
```bash
When adding interactions:

1. Reference animation-patterns.md for consistent motion
2. Use GSAP for complex animations (not Framer Motion)
3. Ensure 60fps performance target
4. Add reduced-motion fallbacks
5. Test on low-power devices
```

---

## Critical Reminders

**Performance First:**
- 3D elements must lazy load
- Images optimized (WebP, lazy loading)
- Code splitting for heavy libraries
- Target: <3s time to interactive

**Accessibility Non-Negotiable:**
- Keyboard navigation for all interactive elements
- ARIA labels where needed
- Color contrast minimum 4.5:1
- Screen reader tested

**Mobile Experience:**
- Touch targets minimum 44px
- Simplified 3D or fallback to 2D
- Reduced animation complexity
- Test on actual devices

**Brand Consistency:**
- Always use design tokens (no arbitrary values)
- Follow copy guidelines for tone
- CV/robotics theme in all interactions
- Professional + playful balance

---

## Project Context

**Portfolio Owner:** Nicanor Korir
**Role:** CTO & Co-Founder at Alma | AI/Robotics Engineer
**Location:** Berlin, Germany (originally Kenya)
**Focus Areas:**
- AI/ML systems (trauma-informed AI, computer vision)
- Robotics (VLA models, ROS2, SLAM)
- Product building (micro-SaaS, full-stack)
- Impact-driven engineering (Africa + global)

**Portfolio Goals:**
1. Showcase technical depth (research + production)
2. Demonstrate builder credibility (shipped products)
3. Attract opportunities (employment, consulting, partnerships)
4. Establish thought leadership
5. Support Alma fundraising efforts

---

## Tech Stack

**Framework:** Next.js 14 (App Router)
**Styling:** TailwindCSS 3.x + Custom Config
**3D Graphics:** Three.js + React Three Fiber
**Animations:** GSAP (primary), Framer Motion (secondary)
**Deployment:** Vercel
**Analytics:** Vercel Analytics

---

## Contact for Questions

For clarification on design decisions or implementation guidance:
- Reference the main specification document
- Check component examples in components-library.md
- Review animation patterns in animation-patterns.md
- Consult copy guidelines for messaging questions

---

**Remember:** This portfolio is a technical demonstration. Every design decision should showcase engineering excellence while remaining accessible and performant.

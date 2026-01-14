# Nicanor Korir - Portfolio

A modern, robotics/CV-themed portfolio website built with Next.js 16, React Three Fiber, and Tailwind CSS v4.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with custom design tokens
- **3D Graphics**: React Three Fiber + @react-three/drei
- **Animations**: GSAP, CSS animations
- **Icons**: Lucide React
- **Forms**: React Hook Form + EmailJS

## Features

- CV/Robotics-inspired design aesthetic
- Interactive 3D particle system with SLAM-style grid
- Image scanning animation with detection labels
- Responsive layout for all screen sizes
- Accessible (skip links, focus states, reduced motion support)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Tailwind v4 theme & base styles
│   ├── layout.tsx       # Root layout with fonts & metadata
│   └── page.tsx         # Main page composition
├── components/
│   ├── 3d/              # Three.js components
│   │   └── VisionSystem.tsx
│   ├── layout/          # Navigation, Footer
│   ├── sections/        # Hero, About, WorkProducts, etc.
│   └── ui/              # Reusable UI components
└── data/                # Projects, experience, skills data
```

## Design System

### Colors
- Primary: `#0A192F` (deep navy)
- Accent Cyan: `#64FFDA`
- Accent Blue: `#00D9FF`
- Success: `#00FF88`

### Typography
- Headings: Space Grotesk
- Body: Inter
- Code: JetBrains Mono

## Deployment

### GitHub Pages (Automatic)

This project includes a GitHub Actions workflow for automatic deployment:

1. Push your code to the `main` branch
2. Go to your repo **Settings → Pages**
3. Set **Source** to "GitHub Actions"
4. The site will deploy automatically on every push

If deploying to `username.github.io/portfolio`, uncomment and update `basePath` and `assetPrefix` in `next.config.ts`.

### Vercel

Deploy on [Vercel](https://vercel.com) for the best Next.js experience:

```bash
npm run build
```

See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for more options.

## License

MIT

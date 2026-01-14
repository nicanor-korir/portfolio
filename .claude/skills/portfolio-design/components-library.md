# Component Library

Complete specifications for all reusable components in the portfolio.

---

## UI Components

### Button Component

**Variants:** Primary, Secondary, Ghost

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

// Usage
<Button variant="primary" size="lg" href="/contact">
  Get in Touch
</Button>
```

**Visual Specs:**

```css
/* Primary Button */
.button-primary {
  background: transparent;
  border: 2px solid var(--accent-cyan);
  color: var(--accent-cyan);
  padding: 16px 32px;
  font-family: var(--font-body);
  font-weight: 600;
  transition: all 0.3s ease;
}

.button-primary:hover {
  background: var(--accent-cyan);
  color: var(--primary);
  box-shadow: var(--shadow-glow);
}

/* With scan-line animation on hover */
.button-primary:hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--accent-blue);
  animation: scanLine 0.5s ease-out;
}
```

---

### Detection Box Component

**Purpose:** CV-style bounding box that wraps content

```typescript
interface DetectionBoxProps {
  children: React.ReactNode;
  label?: string;
  confidence?: number;
  animate?: boolean;
}

// Usage
<DetectionBox label="Identity" confidence={0.99}>
  <h1>Nicanor Korir</h1>
</DetectionBox>
```

**Visual Specs:**

```css
.detection-box {
  position: relative;
  padding: 16px;
}

/* Corner brackets */
.detection-box::before,
.detection-box::after,
.detection-box .corner-tl,
.detection-box .corner-tr,
.detection-box .corner-bl,
.detection-box .corner-br {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid var(--accent-blue);
}

/* Top-left corner */
.detection-box::before {
  top: 0;
  left: 0;
  border-right: none;
  border-bottom: none;
}

/* Animation: draw in */
@keyframes drawBox {
  from {
    clip-path: inset(0 100% 100% 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

.detection-box.animate {
  animation: drawBox 0.5s ease-out;
}
```

**Label & Confidence:**

```html
<div class="detection-box">
  <div class="detection-label">
    <span class="label-text">Identity</span>
    <span class="confidence">99%</span>
  </div>
  {children}
</div>
```

---

### Project Card Component

```typescript
interface ProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  impact: string;
  tech: string[];
  image: string;
  status: 'Live' | 'In Development' | 'Prototype';
  links?: Array<{
    type: string;
    url: string;
  }>;
}
```

**Layout:**

```html
<article class="project-card">
  <div class="card-image">
    <img src={image} alt={title} />
    <div class="scan-overlay"></div>
  </div>

  <div class="card-content">
    <h3 class="card-title">{title}</h3>
    <p class="card-tagline">{tagline}</p>
    <p class="card-description">{description}</p>

    <div class="card-impact">
      <Icon name="target" />
      <span>{impact}</span>
    </div>

    <div class="card-tech">
      {tech.map(t => <TechBadge key={t}>{t}</TechBadge>)}
    </div>

    <div class="card-actions">
      {links.map(link => (
        <Button variant="ghost" href={link.url}>
          {link.type} →
        </Button>
      ))}
    </div>
  </div>
</article>
```

**Interaction:**

```css
.project-card {
  position: relative;
  background: var(--primary-light);
  border: 1px solid var(--ui-border);
  transition: all 0.3s ease;
}

.project-card:hover {
  border-color: var(--accent-cyan);
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
}

/* Scan effect on hover */
.project-card:hover .scan-overlay {
  animation: scanDown 1s ease-out;
}

@keyframes scanDown {
  from {
    transform: translateY(-100%);
    opacity: 0.8;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
}
```

---

### Timeline Entry Component

```typescript
interface TimelineEntryProps {
  company: string;
  role: string;
  period: string;
  location: string;
  impacts: string[];
  tech: string[];
}
```

**Structure:**

```html
<div class="timeline-entry">
  <div class="timeline-connector">
    <div class="timeline-dot"></div>
    <div class="timeline-line"></div>
  </div>

  <div class="timeline-content">
    <div class="timeline-header">
      <h3>{company}</h3>
      <span class="period">{period}</span>
    </div>

    <p class="role">{role}</p>
    <p class="location">{location}</p>

    <ul class="impacts">
      {impacts.map(impact => (
        <li key={impact}>
          <span class="arrow">→</span> {impact}
        </li>
      ))}
    </ul>

    <div class="tech-stack">
      {tech.map(t => <TechBadge key={t}>{t}</TechBadge>)}
    </div>
  </div>
</div>
```

**Animation:**

```javascript
// Animate timeline line as user scrolls
gsap.to('.timeline-line', {
  scaleY: 1,
  transformOrigin: 'top',
  ease: 'none',
  scrollTrigger: {
    trigger: '.timeline-entry',
    start: 'top center',
    end: 'bottom center',
    scrub: true,
  }
});
```

---

### Tech Badge Component

```typescript
interface TechBadgeProps {
  children: string;
  variant?: 'default' | 'highlighted';
}
```

**Styles:**

```css
.tech-badge {
  display: inline-block;
  padding: 4px 12px;
  border: 1px solid var(--accent-cyan);
  border-radius: var(--radius-full);
  background: transparent;
  color: var(--accent-cyan);
  font-family: var(--font-mono);
  font-size: 14px;
  transition: all 0.2s ease;
}

.tech-badge:hover {
  background: var(--accent-cyan);
  color: var(--primary);
}
```

---

## 3D Components

### Vision System Component

**File:** `components/3d/VisionSystem.tsx`

```typescript
interface VisionSystemProps {
  state: 'mapping' | 'detecting' | 'embodied';
  onStateChange?: (state: string) => void;
}
```

**States:**

1. **Mapping State** (Initial load)
   - 2000 particles forming space
   - Grid overlay at 30% opacity
   - Duration: 3 seconds

2. **Detecting State** (Idle)
   - Bounding boxes around key elements
   - Confidence scores displayed
   - Scan lines moving

3. **Embodied State** (On scroll)
   - Particles coalesce into humanoid
   - Robot performs pointing gesture
   - Transition: 2 seconds

**Implementation Notes:**

```javascript
// Use React Three Fiber
import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

// Particle system with scroll response
const particles = useMemo(() => {
  const temp = [];
  for (let i = 0; i < 2000; i++) {
    temp.push(
      Math.random() * 10 - 5,
      Math.random() * 10 - 5,
      Math.random() * 10 - 5
    );
  }
  return new Float32Array(temp);
}, []);
```

---

### Particle Field Component

**Purpose:** Background particle effect that responds to scroll

```typescript
interface ParticleFieldProps {
  count?: number;
  color?: string;
  size?: number;
  opacity?: number;
}
```

**Behavior:**
- Particles drift slowly
- Respond to scroll position
- Parallax effect on mouse movement
- Performance: 60fps target

---

## Layout Components

### Section Container

```typescript
interface SectionProps {
  id?: string;
  background?: 'primary' | 'secondary' | 'transparent';
  className?: string;
  children: React.ReactNode;
}

// Usage
<Section id="about" background="secondary">
  <AboutContent />
</Section>
```

**Responsive Padding:**

```css
.section {
  padding: 64px 16px; /* mobile */
}

@media (min-width: 768px) {
  .section {
    padding: 96px 32px; /* tablet */
  }
}

@media (min-width: 1024px) {
  .section {
    padding: 128px 48px; /* desktop */
  }
}
```

---

### Container Component

```typescript
interface ContainerProps {
  size?: 'default' | 'narrow' | 'wide';
  children: React.ReactNode;
}
```

**Sizes:**
- Default: 1200px max-width
- Narrow: 800px (for readable text)
- Wide: 1400px (for image galleries)

---

## Form Components

### Input Component

```typescript
interface InputProps {
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
  required?: boolean;
  error?: string;
}
```

**Styles:**

```css
.input {
  width: 100%;
  padding: 16px;
  background: var(--primary-light);
  border: 1px solid var(--ui-border);
  color: var(--text-primary);
  font-family: var(--font-body);
  transition: border-color 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--accent-cyan);
  box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
}

.input.error {
  border-color: var(--accent-amber);
}
```

---

### Contact Form Component

```typescript
interface ContactFormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
  interest: 'consulting' | 'collaboration' | 'coffee' | 'other';
}
```

**Implementation:**

```javascript
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    // Send via EmailJS or API route
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Name"
        {...register('name', { required: true })}
        error={errors.name?.message}
      />
      {/* ... */}
    </form>
  );
};
```

---

## Animation Components

### Scan Effect Component

```typescript
interface ScanEffectProps {
  trigger?: 'viewport' | 'hover' | 'manual';
  duration?: number;
}
```

**Usage:**

```html
<ScanEffect trigger="viewport">
  <ProjectCard {...props} />
</ScanEffect>
```

**Implementation:**

```javascript
const ScanEffect = ({ children, trigger }) => {
  const ref = useRef();

  useEffect(() => {
    if (trigger === 'viewport') {
      gsap.to(ref.current, {
        clipPath: 'inset(0% 0% 0% 0%)',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        }
      });
    }
  }, [trigger]);

  return (
    <div ref={ref} className="scan-container">
      {children}
    </div>
  );
};
```

---

## Utility Components

### Loading Placeholder

```typescript
interface LoadingPlaceholderProps {
  type: 'text' | 'image' | 'card';
}
```

**Skeleton Loader:**

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--primary-light) 25%,
    var(--primary-lighter) 50%,
    var(--primary-light) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
```

---

### Error Boundary

```typescript
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

---

**All components follow:**
- TypeScript for type safety
- Accessibility best practices
- Performance optimization
- Responsive design
- Dark theme by default

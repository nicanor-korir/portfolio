# Animation Patterns & Guidelines

Complete animation system for the portfolio, ensuring consistent motion design.

---

## Animation Principles

### Core Philosophy

1. **Purposeful, not decorative** - Every animation should enhance understanding or guide attention
2. **Performance first** - Target 60fps, optimize for lower-end devices
3. **Respect user preferences** - Honor `prefers-reduced-motion`
4. **Subtle by default** - Bold when intentional, restrained otherwise

---

## Global Animation Rules

### Timing

```javascript
const DURATIONS = {
  instant: 100,    // micro-interactions
  fast: 200,       // hover states
  normal: 300,     // default transitions
  slow: 500,       // complex animations
  slower: 800,     // page transitions
};

const EASING = {
  default: 'cubic-bezier(0.4, 0, 0.2, 1)',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
};
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
    scroll-behavior: auto !important;
  }
}
```

---

## Page Load Sequence

### Hero Section

```javascript
// GSAP Timeline
const heroTl = gsap.timeline();

// 1. Vision System initializes (3D)
heroTl.from('.vision-system', {
  opacity: 0,
  duration: 1,
  ease: 'power2.out'
});

// 2. Text fades in sequentially
heroTl.from('.hero-title', {
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: 'power3.out'
}, '-=0.5');

heroTl.from('.hero-subtitle', {
  y: 30,
  opacity: 0,
  duration: 0.8,
  ease: 'power3.out'
}, '-=0.6');

// 3. Focus items appear with detection boxes
heroTl.from('.focus-item', {
  x: -30,
  opacity: 0,
  duration: 0.6,
  stagger: 0.15,
  ease: 'power2.out'
}, '-=0.4');

// 4. Social icons slide up
heroTl.from('.social-icon', {
  y: 20,
  opacity: 0,
  duration: 0.4,
  stagger: 0.1,
  ease: 'back.out(1.7)'
}, '-=0.3');

// 5. CTA buttons
heroTl.from('.cta-button', {
  scale: 0.9,
  opacity: 0,
  duration: 0.4,
  stagger: 0.1,
  ease: 'back.out(1.7)'
}, '-=0.2');
```

---

## Scroll Animations

### Fade In On Scroll

```javascript
// Using GSAP ScrollTrigger
gsap.utils.toArray('.fade-in-scroll').forEach((element) => {
  gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      end: 'top 60%',
      toggleActions: 'play none none reverse',
    }
  });
});
```

### Scan Line Effect

```javascript
// Scanning effect when section enters viewport
const scanEffect = (element) => {
  const scanLine = document.createElement('div');
  scanLine.className = 'scan-line';
  element.appendChild(scanLine);

  gsap.fromTo(scanLine,
    { y: '-100%' },
    {
      y: '100%',
      duration: 1.2,
      ease: 'power2.inOut',
      onComplete: () => scanLine.remove(),
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        once: true,
      }
    }
  );
};
```

### Detection Box Draw-In

```css
@keyframes drawDetectionBox {
  0% {
    clip-path: polygon(
      0% 0%, 0% 0%, 0% 0%, 0% 0%,
      0% 0%, 0% 0%, 0% 0%, 0% 0%
    );
  }
  25% {
    clip-path: polygon(
      0% 0%, 100% 0%, 100% 0%, 100% 0%,
      0% 0%, 0% 0%, 0% 0%, 0% 0%
    );
  }
  50% {
    clip-path: polygon(
      0% 0%, 100% 0%, 100% 100%, 100% 100%,
      0% 0%, 0% 0%, 0% 0%, 0% 0%
    );
  }
  75% {
    clip-path: polygon(
      0% 0%, 100% 0%, 100% 100%, 0% 100%,
      0% 100%, 0% 100%, 0% 0%, 0% 0%
    );
  }
  100% {
    clip-path: polygon(
      0% 0%, 100% 0%, 100% 100%, 0% 100%,
      0% 100%, 0% 100%, 0% 0%, 0% 0%
    );
  }
}

.detection-box {
  animation: drawDetectionBox 0.8s ease-out;
}
```

---

## Component-Specific Animations

### Project Cards

```javascript
// Hover state
gsap.to('.project-card', {
  y: -8,
  boxShadow: '0 0 30px rgba(100, 255, 218, 0.4)',
  duration: 0.3,
  ease: 'power2.out',
  paused: true,
});

// Scan effect on hover
const cardHover = (card) => {
  const scanOverlay = card.querySelector('.scan-overlay');

  gsap.fromTo(scanOverlay,
    { y: '-100%', opacity: 0.8 },
    {
      y: '100%',
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
    }
  );
};
```

### Timeline Entries

```javascript
// Timeline line draws as user scrolls
gsap.to('.timeline-line', {
  scaleY: 1,
  transformOrigin: 'top center',
  ease: 'none',
  scrollTrigger: {
    trigger: '.timeline-container',
    start: 'top center',
    end: 'bottom center',
    scrub: 1, // smooth scrubbing
  }
});

// Timeline dots pulse when reached
gsap.utils.toArray('.timeline-dot').forEach((dot) => {
  gsap.to(dot, {
    scale: 1.2,
    backgroundColor: 'var(--accent-cyan)',
    duration: 0.3,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: dot,
      start: 'center center',
      once: true,
    }
  });
});
```

### Skills Section (Detection Animation)

```javascript
// Each skill category "detected" sequentially
const detectSkills = () => {
  const categories = gsap.utils.toArray('.skill-category');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.skills-section',
      start: 'top 60%',
    }
  });

  categories.forEach((category, i) => {
    // Scan line appears
    tl.from(category.querySelector('.scan-line'), {
      scaleY: 0,
      duration: 0.3,
      ease: 'power2.in'
    });

    // Bounding box draws in
    tl.from(category, {
      clipPath: 'inset(50% 50% 50% 50%)',
      duration: 0.5,
      ease: 'power3.out'
    }, '-=0.2');

    // Confidence score counts up
    tl.from(category.querySelector('.confidence'), {
      innerHTML: 0,
      duration: 1,
      snap: { innerHTML: 1 },
      ease: 'power2.out'
    }, '-=0.3');

    // Tech badges fade in
    tl.from(category.querySelectorAll('.tech-badge'), {
      opacity: 0,
      y: 10,
      duration: 0.3,
      stagger: 0.05,
      ease: 'power2.out'
    }, '-=0.5');
  });
};
```

---

## Button Animations

### Hover States

```css
.button {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

/* Scan line on hover */
.button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: var(--accent-cyan);
  transition: left 0.5s ease;
}

.button:hover::before {
  left: 100%;
}

/* Corner brackets appear */
.button::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border: 2px solid var(--accent-cyan);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.button:hover::after {
  opacity: 1;
}
```

### Click Ripple Effect

```javascript
const createRipple = (event) => {
  const button = event.currentTarget;
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();

  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.classList.add('ripple');

  button.appendChild(ripple);

  ripple.addEventListener('animationend', () => {
    ripple.remove();
  });
};
```

---

## 3D Animations

### Vision System State Transitions

```javascript
// State: MAPPING → DETECTING
const transitionToDetecting = () => {
  // Fade out grid
  gsap.to(gridRef.current, {
    opacity: 0.1,
    duration: 1,
    ease: 'power2.inOut'
  });

  // Particles slow down
  gsap.to(particleSystemRef.current.material, {
    size: 0.02,
    duration: 1.5,
    ease: 'power2.inOut'
  });

  // Detection boxes appear
  gsap.from('.detection-box', {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'back.out(1.7)'
  });
};

// State: DETECTING → EMBODIED
const transitionToEmbodied = () => {
  // Particles coalesce into humanoid shape
  gsap.to(particles.current, {
    morphTo: humanoidPositions,
    duration: 2,
    ease: 'power3.inOut',
    onUpdate: updateParticlePositions
  });

  // Robot performs gesture
  gsap.to(robotArmRef.current.rotation, {
    x: Math.PI / 4,
    duration: 1,
    ease: 'power2.out',
    delay: 1.5
  });
};
```

### Particle Field Scroll Response

```javascript
// Particles respond to scroll position
useFrame(() => {
  const scrollY = window.scrollY / window.innerHeight;

  particleGroupRef.current.position.y = scrollY * 2;
  particleGroupRef.current.rotation.y = scrollY * 0.5;
});
```

---

## Cursor Animations

### Custom Cursor

```css
body {
  cursor: none; /* hide default */
}

.custom-cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  border: 2px solid var(--accent-cyan);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.15s ease;
}

.custom-cursor.hovering {
  transform: scale(2);
  border-color: var(--accent-blue);
}

/* Crosshair style */
.custom-cursor::before,
.custom-cursor::after {
  content: '';
  position: absolute;
  background: var(--accent-cyan);
}

.custom-cursor::before {
  width: 2px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.custom-cursor::after {
  width: 100%;
  height: 2px;
  top: 50%;
  transform: translateY(-50%);
}
```

```javascript
// Smooth cursor follow
const cursor = document.querySelector('.custom-cursor');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

const animateCursor = () => {
  cursorX += (mouseX - cursorX) * 0.1;
  cursorY += (mouseY - cursorY) * 0.1;

  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

  requestAnimationFrame(animateCursor);
};

animateCursor();
```

---

## Performance Optimization

### Will-Change Property

```css
/* Only on elements that will animate */
.project-card:hover {
  will-change: transform, box-shadow;
}

/* Remove after animation */
.project-card:not(:hover) {
  will-change: auto;
}
```

### GPU Acceleration

```css
/* Use transform and opacity for better performance */
.animated-element {
  transform: translateZ(0); /* force GPU */
  backface-visibility: hidden;
}
```

### Intersection Observer for Animations

```javascript
// Only animate visible elements
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -10% 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in-scroll').forEach(el => {
  observer.observe(el);
});
```

---

## Animation Library Integration

### GSAP Setup

```javascript
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Global defaults
gsap.defaults({
  ease: 'power2.out',
  duration: 0.6
});
```

### Framer Motion (Secondary)

```javascript
import { motion } from 'framer-motion';

// Use for simple UI animations
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={variants}
>
  {content}
</motion.div>
```

---

## Testing Animations

### Performance Checklist

- [ ] 60fps maintained on scroll
- [ ] No layout shifts
- [ ] Smooth on 4x CPU throttle
- [ ] Respects prefers-reduced-motion
- [ ] No jank on mobile devices
- [ ] Animations complete properly
- [ ] No memory leaks (check DevTools)

### Browser Testing

Test animations in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS)
- Chrome Android

---

**Remember: Animation should enhance the experience, not distract from it. When in doubt, go subtle.**

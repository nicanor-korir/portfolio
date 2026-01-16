# Portfolio Specification Document
## Nicanor Korir - Technical Portfolio

**Version:** 1.0  
**Target Completion:** 2-3 development days  
**Domain:** nicanor.me or nicanorkorir.me

---

## 🎯 Project Overview

### Vision Statement
A bold, interactive portfolio that demonstrates Nicanor's unique position at the intersection of **AI research, robotics engineering, and product building**. The site itself is a technical demonstration - showing mastery of computer vision, 3D graphics, and modern web development while telling a compelling story of impact-driven engineering.

### Target Audience
1. **AI/Robotics companies** (future employment)
2. **VCs/investors** (Alma credibility)
3. **Consulting clients** (technical expertise)
4. **Research community** (academic credibility)
5. **African tech ecosystem** (future collaborations)

### Core Message
*"I architect AI systems, build products that scale, and bridge cutting-edge research with real-world impact - from Berlin to Nairobi and beyond."*

---

## 🎨 Design System

### Color Palette
```
Primary Colors:
- Deep Space: #0A192F (backgrounds, main sections)
- Navy Depth: #112240 (cards, elevated surfaces)

Accent Colors:
- Electric Cyan: #64FFDA (primary CTA, highlights, robot accents)
- Neon Blue: #00D9FF (interactive states, detection boxes)
- Warm Amber: #F76C6C (humanizing touch, Alma branding)

Neutral Colors:
- Slate: #8892B0 (body text)
- Light Slate: #CCD6F6 (headings)
- Lightest Slate: #E6F1FF (high emphasis text)

Robotics/CV Specific:
- Grid Lines: #233554 (SLAM map grid, subtle backgrounds)
- Detection Green: #00FF88 (successful "detection" states)
- Warning Yellow: #FFB800 (attention states)
```

### Typography
```
Headings:
- Font: Space Grotesk
- Weights: 700 (bold), 500 (medium)
- Sizes: 
  - H1: 72px (desktop), 48px (mobile)
  - H2: 48px (desktop), 36px (mobile)
  - H3: 32px (desktop), 24px (mobile)

Body Text:
- Font: Inter
- Weights: 400 (regular), 500 (medium), 600 (semi-bold)
- Size: 18px (desktop), 16px (mobile)
- Line height: 1.7

Code/Technical:
- Font: JetBrains Mono
- Use for: stats, technical specs, code snippets
- Size: 16px
- Style: monospace aesthetic for tech credibility
```

### Spacing System
```
Base unit: 8px
Scale: 8, 16, 24, 32, 48, 64, 96, 128px

Section padding: 128px vertical (desktop), 64px (mobile)
Container max-width: 1200px
Content max-width: 800px (for readability)
```

---

## 🤖 The Hero Interactive Element

### Concept: "The Vision System"
A **hybrid approach** combining both your suggestions into one powerful concept:

**Primary Element:** Abstract computer vision system that EVOLVES based on user interaction

**Three States:**

#### State 1: SLAM Mapping (Initial Load)
- Abstract representation of a SLAM system building a 3D map
- Particle points slowly forming the space
- Grid overlay appears gradually
- Mimics real-time spatial mapping
- **Message:** "Mapping the environment..."

#### State 2: Object Detection (Idle/Hover)
- System transitions to object detection mode
- Bounding boxes appear around key elements (name, title, social links)
- Confidence scores float near detected "objects"
- **Message:** "Detecting: Software Engineer | Roboticist | Founder"

#### State 3: Humanoid Robot Emergence (Scroll Interaction)
- As user scrolls down, particles coalesce into a wireframe humanoid robot
- Robot performs gesture toward the content (pointing down/inviting to explore)
- Subtle skeletal tracking visualization (joints, bones)
- **Message:** "Let me show you what I build..."

**Why This Works:**
- Shows progression: Research (SLAM) → Application (Detection) → Embodiment (Robotics)
- Tells your story: from computer vision theory to practical robotics implementation
- Technical flex: demonstrates Three.js mastery, particle systems, state management
- Not gimmicky: each state serves narrative purpose

### Technical Specifications

**Technology Stack:**
- **Three.js** via React Three Fiber
- **@react-three/drei** for camera controls, helpers
- **@react-three/postprocessing** for scan-line effects
- **GSAP** for smooth state transitions

**Performance Requirements:**
- Target: 60fps on modern browsers
- Lazy load 3D assets
- Progressive enhancement (fallback to static image on low-power devices)
- File size budget: <500KB for all 3D assets combined

**Interaction Details:**

```javascript
// State Machine
const visionStates = {
  MAPPING: {
    duration: 3000ms,
    particles: 2000,
    gridOpacity: 0.3,
    animation: "buildMap"
  },
  
  DETECTING: {
    trigger: "onIdle", // after mapping complete
    boundingBoxes: [
      { target: "name", confidence: 0.99, label: "Identity" },
      { target: "title", confidence: 0.97, label: "Role" },
      { target: "currentWork", confidence: 0.95, label: "Focus" }
    ],
    scanLineSpeed: "2s"
  },
  
  EMBODIED: {
    trigger: "onScroll", // user scrolls past fold
    robotModel: "wireframe-humanoid.glb",
    animation: "pointDown",
    particleTransition: 2000ms
  }
}
```

**Visual Style:**
- Wireframe aesthetic (not solid models)
- Cyan glow on active elements
- Scan lines moving across detected objects
- Grid that pulses with interaction
- Corner brackets on bounding boxes (like CV detection)

**Responsive Behavior:**
- Desktop: Full 3D experience
- Tablet: Simplified particle count
- Mobile: 2D representation with CSS animations as fallback

---

## 📐 Site Architecture

### Navigation
**Fixed Header (transparent until scroll)**
```
Logo/Name (left) | About | Work | Research | Contact (right)
                              ↑
                    highlights current section
```

**Mobile:** Hamburger menu with smooth slide-in

---

## 📄 Page Sections (Detailed)

### SECTION 1: Hero / Landing
**Layout:**
```
┌─────────────────────────────────────────┐
│                                         │
│    [3D Vision System - Center]          │
│                                         │
│         Nicanor Korir                   │
│   CTO & Co-Founder at Alma              │
│   AI/Robotics Engineer | Berlin         │
│                                         │
│   🔴 Currently: Building trauma-        │
│      informed AI at Alma                │
│   🤖 Researching: Vision-Language-      │
│      Action models for robotics         │
│   🚀 Shipping: Eneza + micro-SaaS       │
│      experiments                        │
│                                         │
│   [GitHub] [LinkedIn] [Twitter] [Email] │
│                                         │
│   [☕ Grab coffee in Berlin]            │
│   [💼 Available for consulting]         │
│                                         │
│          ↓ Scroll to explore ↓          │
└─────────────────────────────────────────┘
```

**Copy:**
```html
<h1>Nicanor Korir</h1>
<p class="subtitle">CTO & Co-Founder at Alma | AI/Robotics Engineer</p>

<div class="current-focus">
  <div class="focus-item">
    <span class="status-indicator red"></span>
    <strong>Currently:</strong> Building trauma-informed AI at Alma
  </div>
  <div class="focus-item">
    <span class="status-indicator blue"></span>
    <strong>Researching:</strong> Vision-Language-Action models for robotics manipulation
  </div>
  <div class="focus-item">
    <span class="status-indicator green"></span>
    <strong>Shipping:</strong> Eneza + micro-SaaS experiments for creators
  </div>
</div>
```

**Animations:**
- Text fades in after 3D mapping completes
- Each focus item appears with "detection box" animation
- Social icons slide in from bottom
- CTA buttons pulse subtly

**Height:** 100vh (full viewport)

---

### SECTION 2: About / Story
**Background:** Subtle SLAM map grid overlay, animated

**Layout:**
```
┌─────────────────────────────────────────┐
│                                         │
│              About                      │
│        ─────────────                    │
│                                         │
│   [Grid: 2 columns on desktop]         │
│                                         │
│   LEFT: Professional photo              │
│   - Clean, modern frame                 │
│   - Corner detection brackets           │
│   - Subtle glow effect                  │
│                                         │
│   RIGHT: Story text (3 paragraphs)      │
│   - Larger, readable font               │
│   - Key phrases highlighted in cyan     │
│                                         │
│   BELOW: Quick Stats (4 metrics)        │
│   - 7+ years experience                 │
│   - €8-11B impact addressed (Alma)      │
│   - 3 continents worked                 │
│   - 5+ products shipped                 │
│                                         │
└─────────────────────────────────────────┘
```

**Copy:**
```markdown
## About

I architect AI systems that solve real problems ,  from helping survivors of gender-based violence navigate complex support systems in Germany (addressing an €8-11 billion annual productivity loss), to enabling farmers to detect crop diseases through computer vision.

My journey spans Nairobi to Berlin, warehouse robotics to trauma-informed AI, full-stack engineering to cutting-edge research. Seven years building scalable cloud solutions. Currently pursuing my MSc in AI & Robotics while leading technical strategy at Alma, consulting on computer vision systems at Faro, and researching Vision-Language-Action models that bridge perception and manipulation.

I'm driven by a singular question: **How can we deploy AI and robotics to create genuine, measurable impact at scale?** Whether it's saving $1M in infrastructure costs, increasing warehouse throughput by 40%, or giving voice to survivors who've been systematically silenced ,  I build technology that moves the needle on problems that matter.

When I'm not coding or researching, I'm exploring how robotics can transform agriculture in emerging markets, mentoring early-stage founders, and shipping micro-SaaS products that validate ideas fast.
```

**Quick Stats Display:**
```
┌──────────────────────────────────────────────┐
│  7+          €8-11B        3           15+   │
│  Years       Impact        Continents  Tech  │
│  Building    Addressed     Worked     Stack │
└──────────────────────────────────────────────┘
```
*Each stat animates in with a counting effect when section enters viewport*

**Animations:**
- Photo slides in from left with detection box appearing
- Text fades in paragraph by paragraph
- Stats count up when in view
- Background grid slowly shifts

---

### SECTION 3: Work ,  Companies & Products

**Background:** Dark with subtle particle field

**Section Header:**
```
## What I'm Building
Turning research into products people actually use
```

**Layout:** Card grid (2 columns desktop, 1 column mobile)

**Card Structure (Each Project):**
```
┌─────────────────────────────────────────┐
│  [Screenshot/Demo Visual]               │
│  ┌─ Detection Box ─────────────────┐   │
│  │                                  │   │
│  │  Project Name                    │   │
│  │  ─────────────                   │   │
│  │  Description (2-3 lines)         │   │
│  │                                  │   │
│  │  Impact: [key metric]            │   │
│  │                                  │   │
│  │  Tech: [badges]                  │   │
│  │                                  │   │
│  │  [Live Demo] [GitHub]  ───→      │   │
│  └──────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**Projects (in order of prominence):**

#### 1. Alma - AI Assistant for GBV Survivors
```yaml
tagline: "Giving voice to survivors through trauma-informed AI"
description: "Multi-agent AI system providing 24/7 multilingual support, emotional validation, and legal guidance for gender-based violence survivors. Architecting RAG pipelines, LLM orchestration, and GDPR-compliant infrastructure addressing an €8-11 billion annual productivity loss in Germany."
impact: "Addressing €8-11B annual productivity loss | Supporting survivors across 3 languages"
tech: [Python, FastAPI, AWS Lambda, RAG, LLM Orchestration, NLP, GDPR Infrastructure]
status: "In Development"
links: 
  - type: "Website"
    url: "https://alma.example.com"
visual_style: "Warm amber accents, empathetic design"
```

#### 2. Eneza - Social Media Content Creation
```yaml
tagline: "Micro-SaaS for creators who ship fast"
description: "AI-powered content pipeline that transforms ideas into platform-ready social media posts. Built for speed and validation ,  from concept to first paying users in 3 weeks. Evolved from Shoman Nexus into focused, revenue-generating product."
impact: "Launch to revenue in 3 weeks | Validated micro-SaaS model"
tech: [Next.js, OpenAI API, TailwindCSS, Stripe, Vercel]
status: "Live & Growing"
links:
  - type: "Live Demo"
    url: "https://eneza.app"
visual_style: "Electric cyan, modern SaaS aesthetic"
```

#### 3. ShambaMedCare - AgTech for Farmers
```yaml
tagline: "Bringing healthcare to rural farming communities"
description: "Computer vision system enabling farmers to detect crop diseases and access medical support through mobile phones. Bridging the healthcare gap in rural Kenya with scalable AI that works offline-first."
impact: "Serving rural communities | Offline-first architecture"
tech: [TensorFlow, OpenCV, React Native, Edge ML, Python]
status: "Pilot Phase - Kenya"
links:
  - type: "Case Study"
    url: "#"
visual_style: "Green accents, agricultural imagery"
```

#### 4. Expense-Snap - Receipt Scanner
```yaml
tagline: "OCR-powered expense tracking"
description: "Computer vision pipeline that extracts structured data from receipt photos. Automated categorization, duplicate detection, and export to accounting software. Demonstrates production-grade OCR implementation and data extraction."
impact: "Sub-second processing | 95% accuracy on real-world receipts"
tech: [OpenCV, Tesseract, PyTorch, FastAPI, PostgreSQL]
status: "Production"
links:
  - type: "GitHub"
    url: "https://github.com/nicanor"
visual_style: "Clean, utility-focused"
```

#### 5. Store-Snap - Retail Inventory Vision
```yaml
tagline: "Visual inventory management"
description: "Real-time object detection for retail shelf monitoring. Identifies out-of-stock items, planogram compliance, and inventory discrepancies using computer vision. Built for speed and accuracy in production retail environments."
impact: "Real-time detection | 30fps processing on edge devices"
tech: [YOLO, OpenCV, C++, ROS2, EdgeTPU]
status: "Prototype"
links:
  - type: "Demo Video"
    url: "#"
visual_style: "Technical, blue-focused"
```

**Card Animations:**
- Appear with "scanning" effect (scan line moves top to bottom)
- Detection box draws in on hover
- Tech badges fade in sequentially
- Image zooms slightly on hover
- "View Project" button has target-lock animation

---

### SECTION 4: Work ,  Professional Impact

**Section Header:**
```
## Where I've Delivered
Building systems that scale, saving millions, moving metrics
```

**Layout:** Vertical timeline (left-aligned)

**Timeline Entry Structure:**
```
[Year/Date Range] ───────○───────
                         │
                    ┌────┴─────┐
                    │ Company  │
                    │ Position │
                    │──────────│
                    │ Impact 1 │
                    │ Impact 2 │
                    │ Impact 3 │
                    │──────────│
                    │ [Tech]   │
                    └──────────┘
```

**Entries (from resume, enhanced copy):**

#### Faro - AI Product Engineer Strategist
**July 2025 - Dec 2025 | Remote, UK**
```
Transformed warehouse operations through computer vision:

→ Designed custom AI garment categorization engine (type, size, color) integrated directly into Faro's warehouse workflow ,  accelerating sorting throughput and improving cataloging accuracy by 35%

→ Led development of AI-assisted image capture + barcode scanning solution that automatically identifies and classifies garments during intake, supporting faster stock management across retail supply chain

→ Shaped AI product roadmap by translating operational requirements into scalable models tailored to Faro standards, bridging engineering and product teams

Tech: Python, TensorFlow, OpenCV, FastAPI, AWS, Computer Vision Pipelines
```

#### Scrums.com - Senior Full-Stack Engineer
**Feb 2022 - June 2025 | Remote, South Africa**
```
Architected energy and logistics platforms at scale:

→ Led design and implementation of modular energy platform through cross-functional collaboration ,  achieving 20% reduction in client power consumption while streamlining operational efficiency

→ Developed end-to-end cloud-based logistics microservices architecture, reducing infrastructure costs by 15% through efficient resource allocation and containerization

→ Aligned stakeholders via interactive workshops, refining requirements to resolve critical deployment blockers ,  increasing deployment velocity by 20%

Tech: Node.js, React, AWS, Kubernetes, Microservices, Docker, PostgreSQL
```

#### Incentro - Full-Stack Software Engineer
**Aug 2020 - Feb 2022 | Remote**
```
Engineered cloud solutions that drove measurable ROI:

→ Built innovative cloud-based web solutions with Python and React.js yielding 30% increase in operational efficiency ,  directly contributing to $1M annual savings through streamlined processes

→ Led requirements gathering for 180+ features through cross-functional discussions, ensuring development aligned with client demands and company priorities

→ Designed high-performing UI component library leveraging React.js reusable patterns ,  reducing personal coding workload by 8 hours weekly while improving responsiveness across platforms

Tech: Python, Django, React.js, AWS, GCP, REST APIs
```

#### KenSwitch Ltd - Software Engineer
**Jan 2020 - Jun 2020 | Nairobi, Kenya**
```
Drove productivity and sales through innovative solutions:

→ Pioneered system optimizations through analysis of existing infrastructure, resulting in 15% productivity increase

→ Developed high-impact web applications using Django and JavaScript serving 50+ B2B clients ,  driving 40% increase in sales

Tech: Django, JavaScript, PostgreSQL, Payment Systems
```

#### Andela - Software Engineer
**Dec 2018 - Oct 2019 | Nairobi, Kenya (Hybrid)**
```
Built tools that moved metrics:

→ Developed efficient data processing algorithms for interactive maps and analytics solutions ,  30% performance increase, 95% client satisfaction rate

→ Architected internal meal planning tool using Node.js and React, streamlining serving plans and driving 32% increase in employee productivity

Tech: Node.js, React, Data Processing, Algorithm Optimization
```

#### ICT Authority - Junior Applications Developer
**Apr 2018 - Dec 2018 | Nairobi, Kenya**
```
Foundation in government-scale systems:

→ Collaborated with senior developers on successful delivery of eGov projects on time and on budget

→ Delivered clean, functional code achieving 90% code review approval rate

Tech: Government Systems, Code Quality, Cross-functional Collaboration
```

**Visual Treatment:**
- Timeline line glows as you scroll past entries
- Connector circles pulse when in view
- Impact bullets appear with typing effect
- Tech badges slide in from right
- Metrics highlighted in cyan

---

### SECTION 5: Research & Robotics

**This section gets BOLD - it's your differentiator**

**Background:** Animated particle field representing point cloud data

**Section Header:**
```
## Research & Robotics
Where theory meets titanium ,  building the future of intelligent machines
```

**Layout:** Feature-rich cards with technical depth

#### Current Research Focus

**Card 1: Vision-Language-Action (VLA) Models**
```
┌─────────────────────────────────────────────┐
│  Vision-Language-Action Models              │
│  For Robotic Manipulation                   │
│  ────────────────────────────────────────── │
│                                             │
│  Bridging the perception-action gap:        │
│  Researching how VLA models can enable      │
│  robots to understand natural language      │
│  commands and translate them into precise   │
│  physical manipulations.                    │
│                                             │
│  Focus Areas:                               │
│  • End-to-end learning for pick-and-place   │
│  • Multi-modal fusion (vision + language)   │
│  • Sim-to-real transfer for manipulation    │
│  • Real-world deployment challenges         │
│                                             │
│  Tools: PyTorch, ROS2, Gazebo, OpenAI CLIP  │
│                                             │
│  Status: MSc Dissertation (2025-2026)       │
└─────────────────────────────────────────────┘
```

**Card 2: Computer Vision for Trauma-Informed Systems**
```
┌─────────────────────────────────────────────┐
│  CV + ML for Trauma Survivors               │
│  ────────────────────────────────────────── │
│                                             │
│  Exploring ethical applications of          │
│  computer vision in sensitive contexts:     │
│                                             │
│  • Sentiment analysis for crisis detection  │
│  • Privacy-preserving incident reporting    │
│  • Non-intrusive emotional state monitoring │
│  • GDPR-compliant ML pipelines              │
│                                             │
│  Intersection of ethics, privacy, and AI    │
│  deployed in real-world support systems.    │
│                                             │
│  Status: Applied Research (Alma)            │
└─────────────────────────────────────────────┘
```

#### Academic Work

**MSc in AI & Robotics**
```
Berlin School of Business and Innovation
Feb 2025 - Aug 2026 (Anticipated Graduation)

Key Modules:
• Advanced Machine Learning
• Robot Operating Systems (ROS2)
• Computer Vision & Image Processing
• Natural Language Processing
• Human-Robot Interaction
• Autonomous Systems

Dissertation: Vision-Language-Action Models for Robotic Manipulation
```

**BSc in Computer Science**
```
Kisii University, Kenya
Sept 2013 - Dec 2017

Foundation in algorithms, data structures, and software engineering
```

#### Technical Projects (Robotics-Heavy)

**Project Grid (3 columns on desktop):**

1. **SLAM Navigation System**
   ```
   Description: Implemented full SLAM pipeline for autonomous navigation using ROS2, LiDAR sensor fusion, and particle filters
   
   Impact: Real-time mapping in dynamic environments
   
   Tech: ROS2, C++, Python, Gazebo, TF2
   
   [GitHub] [Demo Video]
   ```

2. **Warehouse Robotics Automation**
   ```
   Description: Developed automated picking system using computer vision for object detection, pose estimation, and gripper control
   
   Impact: 40% increase in picking accuracy
   
   Tech: ROS2, OpenCV, MoveIt, YOLOv8
   
   [Case Study]
   ```

3. **Real-Time Object Detection Pipeline**
   ```
   Description: Optimized YOLO for edge deployment on NVIDIA Jetson, achieving 30fps real-time detection for mobile robotics
   
   Impact: Sub-100ms inference on embedded hardware
   
   Tech: PyTorch, TensorRT, CUDA, C++
   
   [GitHub] [Benchmarks]
   ```

4. **Multi-Robot Coordination**
   ```
   Description: Simulated multi-agent system using distributed ROS2 nodes for collaborative task execution and collision avoidance
   
   Tech: ROS2, Gazebo, Python
   
   [Demo]
   ```

5. **Gesture Recognition for HRI**
   ```
   Description: Real-time hand gesture classification using MediaPipe and custom ML model for human-robot interaction
   
   Tech: MediaPipe, TensorFlow, OpenCV
   
   [GitHub]
   ```

**Visual Treatment:**
- Research cards have animated wireframes in background
- Academic section has subtle "scan lines"
- Project cards appear with robotic arm "picking" animation
- Hover reveals technical details in overlay
- Background shows slow-moving point cloud

---

### SECTION 6: Technical Arsenal

**Section Header:**
```
## Technical Arsenal
The tools I use to build intelligent systems
```

**Concept:** "Object Detection" visualization

As user scrolls through this section, different skill categories are "detected" with bounding boxes that draw in, showing:
- Category name
- Confidence score (playful: all 95%+)
- Tech stack items inside the box

**Layout:**
```
┌─────────────────────────────────────────────┐
│                                             │
│  ┌─ DETECTED: AI/ML ─── 98% ────────────┐  │
│  │                                       │  │
│  │  TensorFlow • PyTorch • scikit-learn │  │
│  │  OpenAI APIs • Hugging Face          │  │
│  │  NumPy • Pandas • Jupyter            │  │
│  └───────────────────────────────────────┘  │
│                                             │
│  ┌─ DETECTED: Robotics & CV ── 97% ─────┐  │
│  │                                       │  │
│  │  ROS2 • Gazebo • MoveIt • OpenCV     │  │
│  │  SLAM • Computer Vision • PyTorch    │  │
│  │  YOLO • MediaPipe • TensorRT         │  │
│  └───────────────────────────────────────┘  │
│                                             │
│  ┌─ DETECTED: Full-Stack ─── 99% ───────┐  │
│  │                                       │  │
│  │  React • Next.js • Node.js • Python  │  │
│  │  Django • FastAPI • TypeScript       │  │
│  │  TailwindCSS • GraphQL • REST APIs   │  │
│  └───────────────────────────────────────┘  │
│                                             │
│  ┌─ DETECTED: Cloud & DevOps ── 96% ────┐  │
│  │                                       │  │
│  │  AWS • GCP • Docker • Kubernetes     │  │
│  │  CI/CD • Terraform • Serverless      │  │
│  │  PostgreSQL • MongoDB • Redis        │  │
│  └───────────────────────────────────────┘  │
│                                             │
│  ┌─ DETECTED: Languages ─── 100% ───────┐  │
│  │                                       │  │
│  │  Python • JavaScript • C++ • SQL     │  │
│  │  English (C1) • Swahili (Native)     │  │
│  │  German (A1, learning)               │  │
│  └───────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

**Animation Sequence:**
1. Section enters viewport
2. Scan line sweeps from top to bottom
3. Each category "detected" sequentially
4. Bounding box draws in (corner brackets appear first)
5. Confidence score counts up
6. Tech items fade in one by one
7. Boxes pulse subtly on hover

**Tech Badge Styling:**
- Rounded pills
- Monospace font (JetBrains Mono)
- Cyan border, transparent background
- Hover: filled with cyan, dark text

---

### SECTION 7: Writing & Thought Leadership
*(Optional for V1, but recommended)*

**Section Header:**
```
## Insights & Writing
Sharing what I learn building AI systems and robots
```

**If you have blog posts/articles:**
```
Card Grid (3 columns)
Each card:
- Title
- Excerpt (2 lines)
- Read time
- Date
- [Read More →]
```

**If no content yet:**
```
Coming soon: Insights on VLA models, building in public,
and deploying AI in sensitive contexts.

[Subscribe for updates]
```

---

### SECTION 8: Contact & CTA

**Background:** Clean, minimal

**Layout:**
```
┌─────────────────────────────────────────────┐
│                                             │
│          Let's Build Something              │
│          ──────────────────────             │
│                                             │
│  I'm always open to interesting             │
│  conversations ,  whether it's grabbing      │
│  coffee in Berlin, exploring consulting     │
│  opportunities, or discussing the future    │
│  of AI and robotics.                        │
│                                             │
│  ┌──────────────┐  ┌──────────────────┐    │
│  │ ☕ Grab      │  │ 💼 Consulting    │    │
│  │ Coffee       │  │ Inquiries        │    │
│  │ in Berlin    │  │                  │    │
│  └──────────────┘  └──────────────────┘    │
│                                             │
│  Or reach out directly:                     │
│  → nicanor@email.com                        │
│  → LinkedIn: /in/nicanorkorir               │
│  → GitHub: @nicanorkorir                    │
│  → Twitter: @nicanorkorir                   │
│                                             │
└─────────────────────────────────────────────┘
```

**CTA Buttons:**
- **Coffee:** Links to Calendly or email with subject line
- **Consulting:** Opens contact form or email

**Contact Form (if included):**
```
Fields:
- Name
- Email
- Company/Organization (optional)
- Message
- Interest: [Consulting | Collaboration | Coffee | Other]

[Send Message]
```

---

### FOOTER

**Simple, clean:**
```
┌─────────────────────────────────────────────┐
│                                             │
│  Nicanor Korir © 2026                       │
│  Built with Next.js, Three.js, and way too  │
│  much coffee                                │
│                                             │
│  [Back to top ↑]                            │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 🎭 Animations & Interactions

### Global Animations

**Page Load:**
```
1. 3D Vision System initializes (SLAM mapping)
2. Background grid fades in
3. Hero text fades in sequentially
4. Navigation appears
```

**Scroll Behavior:**
```
- Smooth scroll enabled
- Sections fade in as they enter viewport (Intersection Observer)
- 3D element transitions to humanoid as user scrolls past hero
- Background particles respond to scroll position
- Progress bar at top shows scroll progress
```

**Cursor Effects:**
```
- Custom cursor (crosshair design)
- Cursor becomes "target lock" on interactive elements
- Leaves subtle trail on mouse movement
- Disabled on mobile
```

### Section-Specific Animations

**About Section:**
- Photo slides in from left
- Text paragraphs fade in sequentially (200ms stagger)
- Stats count up when in view

**Work Cards:**
- Scan line effect on enter
- Detection box draws in
- Image subtle zoom on hover
- Tech badges sequential fade-in

**Timeline:**
- Timeline line draws from top to bottom
- Entries fade in as timeline reaches them
- Connector circles pulse

**Skills Section:**
- Bounding boxes draw in sequentially
- Confidence scores count up
- Tech items appear one by one

### Micro-interactions

**Buttons:**
```css
Default: Border with transparent background
Hover: Background fills with cyan, scan line animation
Active: Corner brackets appear, brief pulse
```

**Links:**
```css
Default: Underline on hover
Hover: Cyan color, corner detection brackets appear
```

**Project Cards:**
```css
Default: Subtle border
Hover: Border glows, slight elevation, detection box appears
```

---

## 📱 Responsive Design

### Breakpoints
```
Mobile: 320px - 768px
Tablet: 769px - 1024px
Desktop: 1025px+
Large Desktop: 1440px+
```

### Mobile Adaptations

**Hero:**
- 3D element: Simplified particle count OR static image with CSS animation
- Text size reduced
- Social icons in single row
- CTA buttons stack vertically

**About:**
- Single column layout
- Photo above text
- Stats in 2x2 grid

**Work Cards:**
- Single column
- Reduced padding
- Simplified animations

**Timeline:**
- Simplified visual, focus on content
- Reduced spacing

**Skills:**
- Bounding boxes stack vertically
- Smaller font sizes

**General:**
- Hamburger menu for navigation
- Increased touch targets (min 44px)
- Reduced animation complexity

---

## ⚡ Performance Requirements

### Loading Strategy
```
Priority 1 (Critical):
- Hero section HTML/CSS
- Navigation
- Core fonts (woff2)

Priority 2 (Above fold):
- 3D assets (lazy load)
- Hero images

Priority 3 (Below fold):
- Project images
- Timeline content
- Skills section

Priority 4 (Deferred):
- Analytics
- Contact form scripts
```

### Metrics Targets
```
First Contentful Paint: <1.5s
Largest Contentful Paint: <2.5s
Time to Interactive: <3.5s
Cumulative Layout Shift: <0.1

Lighthouse Score: 90+
```

### Optimization Techniques
- Image optimization (WebP with PNG fallback)
- Lazy loading for images below fold
- Code splitting for 3D libraries
- Font subsetting
- Minified CSS/JS
- CDN for static assets
- Preload critical fonts
- Intersection Observer for animations (don't animate offscreen)

---

## 🛠️ Technical Stack

### Frontend Framework
```
Next.js 14 (App Router)
- Server-side rendering
- Static generation where possible
- API routes for contact form
- Optimized image component
```

### Styling
```
TailwindCSS 3.x
- Custom configuration for design system
- JIT mode for smaller bundle
- Custom plugins for animations
```

### 3D Graphics
```
Three.js + React Three Fiber
@react-three/drei (helpers)
@react-three/postprocessing (effects)
```

### Animation Libraries
```
Framer Motion (UI animations)
GSAP (complex 3D state transitions)
```

### Form Handling
```
React Hook Form (validation)
EmailJS or Resend (email delivery)
```

### Analytics
```
Vercel Analytics (built-in)
Optional: Plausible or Fathom (privacy-friendly)
```

### Deployment
```
Vercel
- Automatic deployments from git
- Edge functions
- Image optimization
- Global CDN
```

---

## 📋 Content Requirements

### Assets Needed from Nicanor

**Images:**
1. Professional headshot (high-res, min 800x800px)
2. Screenshots for each project:
   - Alma: Interface mockup or diagram
   - Eneza: Product screenshot
   - ShambaMedCare: App interface or concept
   - Expense-Snap: Demo of receipt processing
   - Store-Snap: Detection visualization
3. Optional: Project demo videos or GIFs

**Copy:**
- Bio refinement (if needed beyond what's provided)
- Project descriptions confirmation
- Any specific achievements/metrics to highlight
- Contact email preference
- Social media handles:
  - GitHub username
  - LinkedIn URL
  - Twitter/X handle
  - Email address

**Links:**
- Calendly URL (for coffee chats)
- GitHub repositories (public ones)
- Live project URLs (if available)
- Resume/CV PDF (for download link)

**3D Assets:**
- Optional: Custom robot model (if you have a preferred design)
- Otherwise: Will use open-source humanoid wireframe model

---

## 🎯 Success Metrics

### User Engagement
- Average time on site: >2 minutes
- Scroll depth: >60% of visitors reach "Work" section
- Interaction rate: >30% interact with 3D element
- Contact form submissions: Track conversions

### Technical Performance
- Lighthouse score: 90+ across all categories
- Core Web Vitals: All green
- Mobile performance: 85+
- Cross-browser compatibility: Chrome, Firefox, Safari, Edge

### Business Goals
- Portfolio shared in conversations
- Consulting inquiries received
- Positive feedback from target audience
- Serves as living resume for opportunities

---

## 🚀 Development Phases

### Phase 1: Foundation (Day 1)
- ✅ Next.js project setup
- ✅ Design system implementation (Tailwind config)
- ✅ Navigation component
- ✅ Hero section (basic layout, no 3D yet)
- ✅ About section
- ✅ Footer
- ✅ Responsive layouts

### Phase 2: Content (Day 1-2)
- ✅ Work section - Companies & Products
- ✅ Work section - Professional timeline
- ✅ Research & Robotics section
- ✅ Technical Arsenal section
- ✅ Contact section
- ✅ All copywriting implemented

### Phase 3: Interactivity (Day 2-3)
- ✅ 3D Vision System implementation
- ✅ Scroll animations
- ✅ Micro-interactions
- ✅ Cursor effects
- ✅ Contact form functionality
- ✅ Performance optimization

### Phase 4: Polish (Day 3)
- ✅ Cross-browser testing
- ✅ Mobile refinement
- ✅ Accessibility audit
- ✅ SEO optimization
- ✅ Analytics setup
- ✅ Final performance tuning

### Post-Launch:
- Monitor analytics
- Gather feedback
- Iterate on pain points
- Add blog section if content strategy develops

---

## 🎨 Brand Voice & Messaging

### Tone of Voice
**Primary:** Technical yet approachable, confident without arrogance
**Secondary:** Visionary but grounded, ambitious yet realistic

**What we ARE:**
- Bold and innovative
- Research-driven
- Impact-focused
- Technically precise
- Future-oriented

**What we're NOT:**
- Overly academic or dry
- Salesy or promotional
- Vague or buzzword-heavy
- Purely theoretical
- Intimidating or elitist

### Key Messages

**Core Positioning:**
"I bridge cutting-edge AI research with products that solve real problems ,  from trauma-informed systems in Berlin to agricultural robotics in Kenya."

**For Employers/Companies:**
"7+ years building scalable systems, proven track record of driving measurable impact ($1M+ savings, 40% efficiency gains), currently mastering the intersection of AI and robotics."

**For Investors/Partners:**
"Technical co-founder who ships ,  leading Alma's AI strategy, validated micro-SaaS builder, researcher with production-grade engineering skills."

**For Consulting Clients:**
"Computer vision and AI systems architect with deployment experience across warehouses, retail, and sensitive applications. I build production-ready solutions, not prototypes."

**For Research Community:**
"MSc researcher exploring VLA models and ethical AI deployment, contributor to robotics ecosystem, bridging academic rigor with industry pragmatism."

---

## ♿ Accessibility Requirements

### WCAG 2.1 AA Compliance

**Color Contrast:**
- Text contrast ratio: Minimum 4.5:1
- Large text: Minimum 3:1
- Cyan accent on dark: Ensure readable contrast

**Keyboard Navigation:**
- All interactive elements keyboard accessible
- Visible focus states
- Logical tab order
- Skip to content link

**Screen Readers:**
- Semantic HTML
- ARIA labels where needed
- Alt text for all images
- Descriptive link text (no "click here")

**Motion & Animation:**
- Respect prefers-reduced-motion
- Option to disable 3D animation
- No auto-playing videos
- No flashing content

**Forms:**
- Clear labels
- Error messages
- Success feedback
- Keyboard submittable

---

## 🔒 SEO Strategy

### Meta Tags
```html
<title>Nicanor Korir - AI/Robotics Engineer | CTO at Alma</title>
<meta name="description" content="AI and Robotics Engineer bridging research and production. Building trauma-informed AI at Alma, researching VLA models, and creating impact from Berlin to Nairobi.">
<meta name="keywords" content="AI Engineer, Robotics, Computer Vision, ROS2, Machine Learning, Full-Stack Developer, Berlin, Kenya, VLA Models">

<!-- Open Graph -->
<meta property="og:title" content="Nicanor Korir - AI/Robotics Engineer">
<meta property="og:description" content="Building intelligent systems that matter">
<meta property="og:image" content="/og-image.jpg">
<meta property="og:url" content="https://nicanor.me">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:creator" content="@nicanor_korir">
```

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nicanor Korir",
  "jobTitle": "CTO & Co-Founder",
  "worksFor": {
    "@type": "Organization",
    "name": "Alma"
  },
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Berlin School of Business and Innovation"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Kisii University"
    }
  ],
  "knowsAbout": ["Artificial Intelligence", "Robotics", "Computer Vision", "Full-Stack Development"],
  "url": "https://nicanor.me",
  "sameAs": [
    "https://linkedin.com/in/nicanor-korir",
    "https://github.com/nicanor-korir",
    "https://x.com/nicanor_korir"
  ]
}
```

### Sitemap & Robots
- Generate sitemap.xml
- Robots.txt allowing all crawlers
- Submit to Google Search Console

---

## 📄 File Structure

```
portfolio/
├── public/
│   ├── fonts/
│   ├── images/
│   │   ├── headshot.jpg
│   │   ├── projects/
│   │   │   ├── alma.jpg
│   │   │   ├── eneza.jpg
│   │   │   └── ...
│   │   └── og-image.jpg
│   ├── models/
│   │   └── robot-wireframe.glb
│   └── resume.pdf
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── WorkProducts.tsx
│   │   │   ├── WorkExperience.tsx
│   │   │   ├── Research.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── Contact.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── TimelineEntry.tsx
│   │   ├── 3d/
│   │   │   ├── VisionSystem.tsx
│   │   │   ├── ParticleField.tsx
│   │   │   └── RobotModel.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   ├── animations.ts
│   │   └── utils.ts
│   └── data/
│       ├── projects.ts
│       ├── experience.ts
│       └── skills.ts
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## 🎬 Final Notes for Developer

### Must-Haves
1. **Performance first** - 3D is cool, but site must load fast
2. **Mobile experience** - 50%+ traffic will be mobile
3. **Accessibility** - Non-negotiable, build it in from start
4. **SEO** - Proper meta tags, structured data, semantic HTML
5. **Analytics** - Track what's working

### Nice-to-Haves (V2)
- Dark/light mode toggle
- Blog/writing section with CMS
- Case study deep-dives for major projects
- Testimonials/recommendations
- Multi-language support (English, German, Swahili)

### Testing Checklist
- [ ] Desktop: Chrome, Firefox, Safari, Edge
- [ ] Mobile: iOS Safari, Chrome Android
- [ ] Tablet: iPad, Android tablet
- [ ] Lighthouse audit (Performance, Accessibility, Best Practices, SEO)
- [ ] Screen reader test (NVDA or VoiceOver)
- [ ] Keyboard navigation test
- [ ] Slow connection test (3G simulation)
- [ ] Print stylesheet (for PDF resume)

### Handoff Deliverables
1. Complete codebase
2. Deployment configuration
3. Analytics setup documentation
4. Content update guide (for future edits)
5. Asset optimization guidelines
6. Performance benchmarks

---

**This specification is your blueprint. The 3D element is bold, the content is comprehensive, and the structure showcases your unique position at the intersection of research, robotics, and real-world impact.**

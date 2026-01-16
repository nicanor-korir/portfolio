export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  impact: string;
  tech: string[];
  status: "Live" | "In Development" | "Prototype" | "Pilot Phase";
  links?: Array<{ type: string; url: string }>;
  image?: string;
  accentColor?: string;
}

export const projects: Project[] = [
  {
    id: "alma",
    title: "Alma",
    tagline: "Giving voice to survivors through trauma-informed AI",
    description:
      "Multi-agent AI system providing 24/7 multilingual support, emotional validation, and legal guidance for gender-based violence survivors. Architecting RAG pipelines, LLM orchestration, and GDPR-compliant infrastructure addressing an €8-11 billion annual productivity loss in Germany.",
    impact: "Addressing €8-11B annual productivity loss | Supporting survivors across 3 languages",
    tech: ["Python", "FastAPI", "AWS Lambda", "RAG", "LLM Orchestration", "NLP", "GDPR"],
    status: "In Development",
    links: [{ type: "Website", url: "#" }],
    accentColor: "amber",
  },
  {
    id: "eneza",
    title: "Eneza",
    tagline: "Micro-SaaS for creators who ship fast",
    description:
      "AI-powered content pipeline that transforms ideas into platform-ready social media posts. Built for speed and validation ,  from concept to first paying users in 3 weeks. Evolved from Shoman Nexus into focused, revenue-generating product.",
    impact: "Launch to revenue in 3 weeks | Validated micro-SaaS model",
    tech: ["Next.js", "OpenAI API", "TailwindCSS", "Stripe", "Vercel"],
    status: "Live",
    links: [{ type: "Live Demo", url: "#" }],
    accentColor: "cyan",
  },
  {
    id: "shambamedcare",
    title: "ShambaMedCare",
    tagline: "Bringing healthcare to rural farming communities",
    description:
      "Computer vision system enabling farmers to detect crop diseases and access medical support through mobile phones. Bridging the healthcare gap in rural Kenya with scalable AI that works offline-first.",
    impact: "Serving rural communities | Offline-first architecture",
    tech: ["TensorFlow", "OpenCV", "React Native", "Edge ML", "Python"],
    status: "Pilot Phase",
    links: [{ type: "Case Study", url: "#" }],
    accentColor: "success",
  },
  {
    id: "expense-snap",
    title: "Expense-Snap",
    tagline: "OCR-powered expense tracking",
    description:
      "Computer vision pipeline that extracts structured data from receipt photos. Automated categorization, duplicate detection, and export to accounting software. Demonstrates production-grade OCR implementation and data extraction.",
    impact: "Sub-second processing | 95% accuracy on real-world receipts",
    tech: ["OpenCV", "Tesseract", "PyTorch", "FastAPI", "PostgreSQL"],
    status: "Live",
    links: [{ type: "GitHub", url: "#" }],
    accentColor: "cyan",
  },
  {
    id: "store-snap",
    title: "Store-Snap",
    tagline: "Visual inventory management",
    description:
      "Real-time object detection for retail shelf monitoring. Identifies out-of-stock items, planogram compliance, and inventory discrepancies using computer vision. Built for speed and accuracy in production retail environments.",
    impact: "Real-time detection | 30fps processing on edge devices",
    tech: ["YOLO", "OpenCV", "C++", "ROS2", "EdgeTPU"],
    status: "Prototype",
    links: [{ type: "Demo Video", url: "#" }],
    accentColor: "blue",
  },
];

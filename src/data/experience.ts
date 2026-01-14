export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  impacts: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    id: "faro",
    company: "Faro",
    role: "AI Product Engineer Strategist",
    period: "Jul 2025 - Dec 2025",
    location: "Remote, UK",
    impacts: [
      "Designed custom AI garment categorization engine (type, size, color) integrated directly into Faro's warehouse workflow — accelerating sorting throughput and improving cataloging accuracy by 35%",
      "Led development of AI-assisted image capture + barcode scanning solution that automatically identifies and classifies garments during intake, supporting faster stock management across retail supply chain",
      "Shaped AI product roadmap by translating operational requirements into scalable models tailored to Faro standards, bridging engineering and product teams",
    ],
    tech: ["Python", "TensorFlow", "OpenCV", "FastAPI", "AWS", "Computer Vision"],
  },
  {
    id: "scrums",
    company: "Scrums.com",
    role: "Senior Full-Stack Engineer",
    period: "Feb 2022 - Jun 2025",
    location: "Remote, South Africa",
    impacts: [
      "Led design and implementation of modular energy platform through cross-functional collaboration — achieving 20% reduction in client power consumption while streamlining operational efficiency",
      "Developed end-to-end cloud-based logistics microservices architecture, reducing infrastructure costs by 15% through efficient resource allocation and containerization",
      "Aligned stakeholders via interactive workshops, refining requirements to resolve critical deployment blockers — increasing deployment velocity by 20%",
    ],
    tech: ["Node.js", "React", "AWS", "Kubernetes", "Microservices", "Docker", "PostgreSQL"],
  },
  {
    id: "incentro",
    company: "Incentro",
    role: "Full-Stack Software Engineer",
    period: "Aug 2020 - Feb 2022",
    location: "Remote",
    impacts: [
      "Built innovative cloud-based web solutions with Python and React.js yielding 30% increase in operational efficiency — directly contributing to $1M annual savings through streamlined processes",
      "Led requirements gathering for 180+ features through cross-functional discussions, ensuring development aligned with client demands and company priorities",
      "Designed high-performing UI component library leveraging React.js reusable patterns — reducing personal coding workload by 8 hours weekly while improving responsiveness across platforms",
    ],
    tech: ["Python", "Django", "React.js", "AWS", "GCP", "REST APIs"],
  },
  {
    id: "kenswitch",
    company: "KenSwitch Ltd",
    role: "Software Engineer",
    period: "Jan 2020 - Jun 2020",
    location: "Nairobi, Kenya",
    impacts: [
      "Pioneered system optimizations through analysis of existing infrastructure, resulting in 15% productivity increase",
      "Developed high-impact web applications using Django and JavaScript serving 50+ B2B clients — driving 40% increase in sales",
    ],
    tech: ["Django", "JavaScript", "PostgreSQL", "Payment Systems"],
  },
  {
    id: "andela",
    company: "Andela",
    role: "Software Engineer",
    period: "Dec 2018 - Oct 2019",
    location: "Nairobi, Kenya (Hybrid)",
    impacts: [
      "Developed efficient data processing algorithms for interactive maps and analytics solutions — 30% performance increase, 95% client satisfaction rate",
      "Architected internal meal planning tool using Node.js and React, streamlining serving plans and driving 32% increase in employee productivity",
    ],
    tech: ["Node.js", "React", "Data Processing", "Algorithm Optimization"],
  },
  {
    id: "ict-authority",
    company: "ICT Authority",
    role: "Junior Applications Developer",
    period: "Apr 2018 - Dec 2018",
    location: "Nairobi, Kenya",
    impacts: [
      "Collaborated with senior developers on successful delivery of eGov projects on time and on budget",
      "Delivered clean, functional code achieving 90% code review approval rate",
    ],
    tech: ["Government Systems", "Code Quality", "Cross-functional Collaboration"],
  },
];

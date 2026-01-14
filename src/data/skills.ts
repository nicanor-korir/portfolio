export interface SkillCategory {
  id: string;
  label: string;
  confidence: number;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    label: "AI/ML",
    confidence: 98,
    skills: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "OpenAI APIs",
      "Hugging Face",
      "NumPy",
      "Pandas",
      "Jupyter",
    ],
  },
  {
    id: "robotics-cv",
    label: "Robotics & CV",
    confidence: 97,
    skills: [
      "ROS2",
      "Gazebo",
      "MoveIt",
      "OpenCV",
      "SLAM",
      "Computer Vision",
      "PyTorch",
      "YOLO",
      "MediaPipe",
      "TensorRT",
    ],
  },
  {
    id: "full-stack",
    label: "Full-Stack",
    confidence: 99,
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "Django",
      "FastAPI",
      "TypeScript",
      "TailwindCSS",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    id: "cloud-devops",
    label: "Cloud & DevOps",
    confidence: 96,
    skills: [
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Terraform",
      "Serverless",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    id: "languages",
    label: "Languages",
    confidence: 100,
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "C++",
      "SQL",
      "English (C1)",
      "Swahili (Native)",
      "German (A1)",
    ],
  },
];

export const researchProjects = [
  {
    id: "vla-models",
    title: "Vision-Language-Action Models",
    subtitle: "For Robotic Manipulation",
    description:
      "Bridging the perception-action gap: Researching how VLA models can enable robots to understand natural language commands and translate them into precise physical manipulations.",
    focusAreas: [
      "End-to-end learning for pick-and-place",
      "Multi-modal fusion (vision + language)",
      "Sim-to-real transfer for manipulation",
      "Real-world deployment challenges",
    ],
    tools: ["PyTorch", "ROS2", "Gazebo", "OpenAI CLIP"],
    status: "MSc Dissertation (2025-2026)",
  },
  {
    id: "trauma-informed-cv",
    title: "CV + ML for Trauma Survivors",
    subtitle: "Ethical AI Applications",
    description:
      "Exploring ethical applications of computer vision in sensitive contexts: sentiment analysis for crisis detection, privacy-preserving incident reporting, and GDPR-compliant ML pipelines.",
    focusAreas: [
      "Sentiment analysis for crisis detection",
      "Privacy-preserving incident reporting",
      "Non-intrusive emotional state monitoring",
      "GDPR-compliant ML pipelines",
    ],
    tools: ["Python", "NLP", "Privacy-preserving ML"],
    status: "Applied Research (Alma)",
  },
];

export const roboticsProjects = [
  {
    id: "slam-nav",
    title: "SLAM Navigation System",
    description:
      "Implemented full SLAM pipeline for autonomous navigation using ROS2, LiDAR sensor fusion, and particle filters",
    impact: "Real-time mapping in dynamic environments",
    tech: ["ROS2", "C++", "Python", "Gazebo", "TF2"],
  },
  {
    id: "warehouse-robotics",
    title: "Warehouse Robotics Automation",
    description:
      "Developed automated picking system using computer vision for object detection, pose estimation, and gripper control",
    impact: "40% increase in picking accuracy",
    tech: ["ROS2", "OpenCV", "MoveIt", "YOLOv8"],
  },
  {
    id: "realtime-detection",
    title: "Real-Time Object Detection Pipeline",
    description:
      "Optimized YOLO for edge deployment on NVIDIA Jetson, achieving 30fps real-time detection for mobile robotics",
    impact: "Sub-100ms inference on embedded hardware",
    tech: ["PyTorch", "TensorRT", "CUDA", "C++"],
  },
  {
    id: "multi-robot",
    title: "Multi-Robot Coordination",
    description:
      "Simulated multi-agent system using distributed ROS2 nodes for collaborative task execution and collision avoidance",
    impact: "Efficient multi-agent collaboration",
    tech: ["ROS2", "Gazebo", "Python"],
  },
  {
    id: "gesture-hri",
    title: "Gesture Recognition for HRI",
    description:
      "Real-time hand gesture classification using MediaPipe and custom ML model for human-robot interaction",
    impact: "Natural human-robot interfaces",
    tech: ["MediaPipe", "TensorFlow", "OpenCV"],
  },
];

export const education = [
  {
    degree: "MSc in AI & Robotics",
    institution: "Berlin School of Business and Innovation",
    period: "Feb 2025 - Aug 2026 (Anticipated)",
    modules: [
      "Advanced Machine Learning",
      "Robot Operating Systems (ROS2)",
      "Computer Vision & Image Processing",
      "Natural Language Processing",
      "Human-Robot Interaction",
      "Autonomous Systems",
    ],
    dissertation: "Vision-Language-Action Models for Robotic Manipulation",
  },
  {
    degree: "BSc in Computer Science",
    institution: "Kisii University, Kenya",
    period: "Sept 2013 - Dec 2017",
    modules: [],
    dissertation: null,
  },
];

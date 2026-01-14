"use client";

import { Button, DetectionBox } from "@/components/ui";
import { Github, Linkedin, Twitter, Mail, Coffee, Briefcase } from "lucide-react";
import dynamic from "next/dynamic";

// Lazy load the 3D component
const VisionSystem = dynamic(() => import("@/components/3d/VisionSystem"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] flex items-center justify-center">
      <div className="text-[var(--color-accent-cyan)] font-[family-name:var(--font-mono)] text-sm">
        Initializing vision system...
      </div>
    </div>
  ),
});

const socialLinks = [
  { icon: Github, href: "https://github.com/nicanor-korir", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/nicanor-korir", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/nicanor_korir", label: "Twitter" },
  { icon: Mail, href: "mailto:nicanor@example.com", label: "Email" },
];

const focusItems = [
  {
    status: "red",
    label: "Currently",
    text: "Building trauma-informed AI at Alma",
  },
  {
    status: "blue",
    label: "Researching",
    text: "Vision-Language-Action models for robotics",
  },
  {
    status: "green",
    label: "Shipping",
    text: "Eneza + micro-SaaS experiments",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-12 py-20">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto w-full">
        {/* 3D Vision System */}
        <div className="mb-8 lg:mb-12">
          <VisionSystem />
        </div>

        {/* Main content */}
        <div className="text-center lg:text-left">
          <DetectionBox
            label="Identity"
            confidence={99}
            className="inline-block mb-6"
            animate={true}
          >
            <h1 className="text-[var(--color-text-primary)]">Nicanor Korir</h1>
          </DetectionBox>

          <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] mb-8">
            <span className="text-[var(--color-accent-cyan)]">CTO & Co-Founder</span> at Alma |{" "}
            <span className="text-[var(--color-text-primary)]">AI/Robotics Engineer</span>
          </p>

          {/* Focus items */}
          <div className="space-y-3 mb-10">
            {focusItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 justify-center lg:justify-start"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <span
                  className={`
                    w-2 h-2 rounded-full mt-2 shrink-0
                    ${item.status === "red" ? "bg-[var(--color-accent-amber)]" : ""}
                    ${item.status === "blue" ? "bg-[var(--color-accent-blue)]" : ""}
                    ${item.status === "green" ? "bg-[var(--color-ui-success)]" : ""}
                  `}
                />
                <p className="text-[var(--color-text-secondary)]">
                  <span className="text-[var(--color-text-primary)] font-medium">
                    {item.label}:
                  </span>{" "}
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 justify-center lg:justify-start mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="
                  p-2 rounded-lg
                  text-[var(--color-text-tertiary)]
                  hover:text-[var(--color-accent-cyan)]
                  hover:bg-[var(--color-primary-light)]
                  transition-colors duration-200
                "
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Button href="#contact" icon={<Coffee size={18} />}>
              Grab coffee in Berlin
            </Button>
            <Button
              variant="secondary"
              href="#contact"
              icon={<Briefcase size={18} />}
            >
              Available for consulting
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-tertiary)]">
          <span className="text-sm font-[family-name:var(--font-mono)]">
            Scroll to explore
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[var(--color-accent-cyan)] to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}

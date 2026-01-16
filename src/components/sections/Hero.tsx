"use client";

import { useState, useEffect } from "react";
import { Button, DetectionBox } from "@/components/ui";
import { Github, Linkedin, Coffee, Briefcase } from "lucide-react";
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

const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const socialLinks = [
  { icon: Github, href: "https://github.com/nicanor-korir", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/nicanor-korir", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com/nicanor_korir", label: "X" }
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
    text: "Vision-Language-Action models",
  },
  {
    status: "green",
    label: "Shipping",
    text: "Eneza + SaaS experiments",
  },
];

// Scroll indicator messages
const scrollMessages = [
  "Scroll to explore",
  "Who is Nicanor Korir? 🤔",
  "Go forth and explore 🚀",
];

export function Hero() {
  const [scrollState, setScrollState] = useState<"visible" | "scrolling" | "farewell" | "hidden">("visible");
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      // User is at the top of the page (in hero section)
      if (currentScrollY < 50) {
        setScrollState("visible");
        setMessageIndex(0);
      }
      // User started scrolling but still in hero area
      else if (currentScrollY < heroHeight * 0.3) {
        setScrollState("scrolling");
        setMessageIndex(1);
      }
      // User scrolled past 30% of hero
      else if (currentScrollY < heroHeight * 0.6) {
        setScrollState("farewell");
        setMessageIndex(2);
        // Hide after showing farewell message
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          if (window.scrollY >= heroHeight * 0.5) {
            setScrollState("hidden");
          }
        }, 1500);
      }
      // User scrolled past hero
      else {
        setScrollState("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

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
            <span className="text-[var(--color-accent-cyan)]">CTO</span> at Alma |{" "}
            <span className="text-[var(--color-text-primary)]">AI/Robotics Engineer</span>{" "}|{" "}
            <span className="text-[var(--color-text-primary)]">Freelancer</span>
          </p>

          {/* Focus items */}
          <div className="space-y-1.5 sm:space-y-2 mb-8 sm:mb-10 text-left max-w-md mx-auto lg:mx-0">
            {focusItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-3"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <span
                  className={`
                    w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shrink-0
                    ${item.status === "red" ? "bg-[var(--color-accent-amber)]" : ""}
                    ${item.status === "blue" ? "bg-[var(--color-accent-blue)]" : ""}
                    ${item.status === "green" ? "bg-[var(--color-ui-success)]" : ""}
                  `}
                />
                <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-snug">
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

        {/* Scroll indicator - hidden on mobile, changes based on scroll */}
        <div
          className={`
            absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2
            transition-all duration-500 ease-out
            ${scrollState === "hidden" ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"}
            ${scrollState === "farewell" ? "text-[var(--color-accent-cyan)]" : "text-[var(--color-text-tertiary)]"}
          `}
        >
          <span
            className={`
              text-sm font-[family-name:var(--font-mono)]
              transition-all duration-300
              ${scrollState === "farewell" ? "scale-105" : "scale-100"}
            `}
          >
            {scrollMessages[messageIndex]}
          </span>
          <div
            className={`
              w-px h-8 bg-gradient-to-b from-[var(--color-accent-cyan)] to-transparent
              transition-all duration-300
              ${scrollState === "visible" ? "animate-pulse" : ""}
              ${scrollState === "scrolling" ? "h-12 opacity-70" : ""}
              ${scrollState === "farewell" ? "h-4 opacity-50" : ""}
            `}
          />
        </div>
      </div>
    </section>
  );
}

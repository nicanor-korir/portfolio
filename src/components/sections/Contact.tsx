"use client";

import { Section, SectionHeader, Button } from "@/components/ui";
import { Coffee, Video, Mail, Linkedin, Github } from "lucide-react";

const XIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "nicanor@eneza.online",
    href: "mailto:nicanorkorir008@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/nicanor-korir",
    href: "https://linkedin.com/in/nicanor-korir",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@nicanor-korir",
    href: "https://github.com/nicanor-korir",
  },
  {
    icon: XIcon,
    label: "X",
    value: "@nicanor_korir",
    href: "https://x.com/nicanor_korir",
  },
];

export function Contact() {
  return (
    <Section id="contact" background="primary">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeader
          title="Let's Build Something"
          className="text-center"
        />

        <p className="text-lg text-[var(--color-text-secondary)] mb-10">
          I&apos;m always open to interesting conversations ,  whether it&apos;s
          grabbing coffee in Berlin, exploring consulting opportunities, or
          discussing the future of AI and robotics.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            href="mailto:nicanorkorir008@gmail.com?subject=Grab%20virtual%20Coffee%20with%20Nicanor%20%2F%2F"
            icon={<Coffee size={18} />}
          >
            Grab coffee in Berlin
          </Button>
          <Button
            variant="secondary"
            href="https://calendar.app.google/RuRatHMCVPyYLYx2A"
            external
            icon={<Video size={18} />}
          >
            Grab virtual coffee
          </Button>
        </div>

        {/* Direct contact links */}
        <div className="text-left max-w-md mx-auto">
          <p className="text-[var(--color-text-tertiary)] text-sm mb-4">
            Or reach out directly:
          </p>
          <div className="space-y-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] transition-colors group"
              >
                <span className="text-[var(--color-accent-cyan)]">→</span>
                <link.icon
                  size={18}
                  className="text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent-cyan)]"
                />
                <span className="font-[family-name:var(--font-mono)] text-sm">
                  {link.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

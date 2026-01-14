"use client";

import { Section, SectionHeader, Button } from "@/components/ui";
import { Coffee, Briefcase, Mail, Linkedin, Github, Twitter } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "nicanor@example.com",
    href: "mailto:nicanor@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/nicanorkorir",
    href: "https://linkedin.com/in/nicanor-korir",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@nicanorkorir",
    href: "https://github.com/nicanor-korir",
  },
  {
    icon: Twitter,
    label: "Twitter",
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
          I&apos;m always open to interesting conversations — whether it&apos;s
          grabbing coffee in Berlin, exploring consulting opportunities, or
          discussing the future of AI and robotics.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            href="mailto:nicanor@example.com?subject=Coffee%20in%20Berlin"
            icon={<Coffee size={18} />}
          >
            Grab Coffee in Berlin
          </Button>
          <Button
            variant="secondary"
            href="mailto:nicanor@example.com?subject=Consulting%20Inquiry"
            icon={<Briefcase size={18} />}
          >
            Consulting Inquiries
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

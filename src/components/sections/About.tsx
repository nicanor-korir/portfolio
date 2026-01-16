"use client";

import Image from "next/image";
import { Section, SectionHeader, DetectionBox } from "@/components/ui";

const stats = [
  { value: "7+", label: "Years Building" },
  { value: "€8-11B", label: "Impact Addressed" },
  { value: "3", label: "Continents Worked" },
  { value: "15+", label: "Tech Stack" },
];

export function About() {
  return (
    <Section id="about" background="secondary" withGrid>
      <SectionHeader title="About" />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Photo */}
        <div className="flex justify-center lg:justify-start">
          <DetectionBox
            label="Subject Detected"
            confidence={99}
            color="cyan"
            className="w-full max-w-[400px]"
          >
            <div className="aspect-[3/4] bg-[var(--color-primary)] rounded-lg overflow-hidden relative group">
              <Image
                src="/images/headshot.jpg"
                alt="Nicanor Korir"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </DetectionBox>
        </div>

        {/* Text content */}
        <div className="space-y-6">
          <p className="text-lg text-[var(--color-text-secondary)]">
            I architect AI systems that solve real problems ,  from helping
            survivors of gender-based violence navigate complex support systems
            in Germany{" "}
            <span className="text-[var(--color-accent-cyan)]">
              (addressing an €8-11 billion annual productivity loss)
            </span>
            , to enabling farmers to detect crop diseases through computer
            vision.
          </p>

          <p className="text-[var(--color-text-secondary)]">
            My journey spans{" "}
            <span className="text-[var(--color-text-primary)]">
              Nairobi to Berlin
            </span>
            , warehouse robotics to trauma-informed AI, full-stack engineering
            to cutting-edge research. Seven years building scalable cloud
            solutions. Currently pursuing my MSc in AI & Robotics while leading
            technical strategy at Alma, consulting on computer vision systems at
            Faro, and researching Vision-Language-Action models that bridge
            perception and manipulation.
          </p>

          <p className="text-[var(--color-text-secondary)]">
            I&apos;m driven by a singular question:{" "}
            <span className="text-[var(--color-text-primary)] font-medium">
              How can we deploy AI and robotics to create genuine, measurable
              impact at scale?
            </span>{" "}
            Whether it&apos;s saving $1M in infrastructure costs, increasing
            warehouse throughput by 40%, or giving voice to survivors who&apos;ve
            been systematically silenced ,  I build technology that moves the
            needle on problems that matter.
          </p>

          <p className="text-[var(--color-text-tertiary)]">
            When I&apos;m not coding or researching, I&apos;m exploring how
            robotics can transform agriculture in emerging markets, mentoring
            early-stage founders, and shipping micro-SaaS products that validate
            ideas fast.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 bg-[var(--color-primary)] rounded-lg border border-[var(--color-ui-border)]"
          >
            <div className="text-3xl md:text-4xl font-[family-name:var(--font-mono)] text-[var(--color-accent-cyan)] mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-[var(--color-text-tertiary)]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

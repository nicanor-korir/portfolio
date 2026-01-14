"use client";

import { Section, SectionHeader, TechBadge, DetectionBox } from "@/components/ui";
import { researchProjects, roboticsProjects, education } from "@/data/skills";
import { GraduationCap, FlaskConical, Bot } from "lucide-react";

export function Research() {
  return (
    <Section id="research" background="primary" withGrid>
      <SectionHeader
        title="Research & Robotics"
        subtitle="Where theory meets titanium — building the future of intelligent machines"
      />

      {/* Current Research Focus */}
      <div className="mb-16">
        <h3 className="text-xl font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
          <FlaskConical size={24} className="text-[var(--color-accent-cyan)]" />
          Current Research Focus
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {researchProjects.map((project) => (
            <DetectionBox
              key={project.id}
              label={project.status}
              color="blue"
              className="bg-[var(--color-primary-light)] rounded-lg"
            >
              <div className="p-6">
                <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-text-primary)] mb-1">
                  {project.title}
                </h4>
                <p className="text-[var(--color-accent-cyan)] text-sm mb-3">
                  {project.subtitle}
                </p>
                <p className="text-[var(--color-text-tertiary)] text-sm mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-[var(--color-text-secondary)] text-sm font-medium mb-2">
                    Focus Areas:
                  </p>
                  <ul className="space-y-1">
                    {project.focusAreas.map((area, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[var(--color-text-tertiary)] text-sm"
                      >
                        <span className="text-[var(--color-accent-cyan)]">•</span>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <TechBadge key={tool} size="sm">
                      {tool}
                    </TechBadge>
                  ))}
                </div>
              </div>
            </DetectionBox>
          ))}
        </div>
      </div>

      {/* Academic Work */}
      <div className="mb-16">
        <h3 className="text-xl font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
          <GraduationCap size={24} className="text-[var(--color-accent-cyan)]" />
          Academic Work
        </h3>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 bg-[var(--color-primary-light)] rounded-lg border border-[var(--color-ui-border)]"
            >
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-text-primary)]">
                  {edu.degree}
                </h4>
                <span className="text-[var(--color-text-tertiary)] font-[family-name:var(--font-mono)] text-sm">
                  {edu.period}
                </span>
              </div>
              <p className="text-[var(--color-accent-cyan)] mb-3">
                {edu.institution}
              </p>

              {edu.modules.length > 0 && (
                <div className="mb-3">
                  <p className="text-[var(--color-text-secondary)] text-sm mb-2">
                    Key Modules:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.modules.map((module) => (
                      <span
                        key={module}
                        className="text-xs text-[var(--color-text-tertiary)] bg-[var(--color-primary)] px-2 py-1 rounded"
                      >
                        {module}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {edu.dissertation && (
                <p className="text-sm text-[var(--color-text-tertiary)]">
                  <span className="text-[var(--color-text-secondary)]">
                    Dissertation:
                  </span>{" "}
                  {edu.dissertation}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Robotics Projects */}
      <div>
        <h3 className="text-xl font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
          <Bot size={24} className="text-[var(--color-accent-cyan)]" />
          Technical Projects
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roboticsProjects.map((project) => (
            <div
              key={project.id}
              className="p-5 bg-[var(--color-primary-light)] rounded-lg border border-[var(--color-ui-border)] hover:border-[var(--color-accent-cyan)] transition-colors"
            >
              <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--color-text-primary)] mb-2">
                {project.title}
              </h4>
              <p className="text-[var(--color-text-tertiary)] text-sm mb-3">
                {project.description}
              </p>
              <p className="text-[var(--color-ui-success)] text-sm mb-3 flex items-start gap-2">
                <span>→</span>
                <span>{project.impact}</span>
              </p>
              <div className="flex flex-wrap gap-1">
                {project.tech.map((t) => (
                  <TechBadge key={t} size="sm">
                    {t}
                  </TechBadge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

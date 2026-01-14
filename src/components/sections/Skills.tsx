"use client";

import { Section, SectionHeader, TechBadge, DetectionBox } from "@/components/ui";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills" background="secondary">
      <SectionHeader
        title="Technical Arsenal"
        subtitle="The tools I use to build intelligent systems"
      />

      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <DetectionBox
            key={category.id}
            label={`DETECTED: ${category.label}`}
            confidence={category.confidence}
            color={index % 2 === 0 ? "cyan" : "blue"}
            className="bg-[var(--color-primary)] rounded-lg"
          >
            <div className="p-6 pt-8">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <TechBadge key={skill}>{skill}</TechBadge>
                ))}
              </div>
            </div>
          </DetectionBox>
        ))}
      </div>
    </Section>
  );
}

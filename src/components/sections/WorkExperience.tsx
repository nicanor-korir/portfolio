"use client";

import { Section, SectionHeader, TimelineEntry } from "@/components/ui";
import { experiences } from "@/data/experience";

export function WorkExperience() {
  return (
    <Section id="experience" background="secondary">
      <SectionHeader
        title="Where I've Delivered"
        subtitle="Building systems that scale, saving millions, moving metrics"
      />

      <div className="max-w-3xl">
        {experiences.map((experience, index) => (
          <TimelineEntry
            key={experience.id}
            experience={experience}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}

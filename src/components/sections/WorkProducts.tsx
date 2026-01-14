"use client";

import { Section, SectionHeader, ProjectCard } from "@/components/ui";
import { projects } from "@/data/projects";

export function WorkProducts() {
  return (
    <Section id="work" background="primary">
      <SectionHeader
        title="What I'm Building"
        subtitle="Turning research into products people actually use"
      />

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}

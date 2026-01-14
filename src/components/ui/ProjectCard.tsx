"use client";

import { TechBadge } from "./TechBadge";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const statusColors = {
    Live: "bg-[var(--color-ui-success)]/20 text-[var(--color-ui-success)]",
    "In Development":
      "bg-[var(--color-ui-warning)]/20 text-[var(--color-ui-warning)]",
    Prototype: "bg-[var(--color-accent-blue)]/20 text-[var(--color-accent-blue)]",
    "Pilot Phase":
      "bg-[var(--color-accent-amber)]/20 text-[var(--color-accent-amber)]",
  };

  return (
    <article
      className="
        group relative
        bg-[var(--color-primary-light)] border border-[var(--color-ui-border)] rounded-lg
        overflow-hidden
        transition-all duration-300
        hover:border-[var(--color-accent-cyan)] hover:-translate-y-1
        hover:shadow-[var(--shadow-glow)]
      "
    >
      {/* Scan overlay effect */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b from-[var(--color-accent-cyan)]/10 to-transparent
          translate-y-full group-hover:translate-y-0
          transition-transform duration-700 ease-out
          pointer-events-none
        "
      />

      <div className="relative p-6">
        {/* Status badge */}
        <span
          className={`
            inline-block px-2 py-1 mb-3
            text-xs font-[family-name:var(--font-mono)] rounded
            ${statusColors[project.status]}
          `}
        >
          {project.status}
        </span>

        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--color-text-primary)] mb-1">
          {project.title}
        </h3>
        <p className="text-[var(--color-accent-cyan)] font-medium mb-3">
          {project.tagline}
        </p>
        <p className="text-[var(--color-text-tertiary)] text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Impact */}
        <div className="flex items-start gap-2 mb-4 text-sm text-[var(--color-text-secondary)]">
          <span className="text-[var(--color-ui-success)] shrink-0">→</span>
          <span>{project.impact}</span>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 5).map((t) => (
            <TechBadge key={t} size="sm">
              {t}
            </TechBadge>
          ))}
          {project.tech.length > 5 && (
            <span className="text-[var(--color-text-tertiary)] text-xs self-center">
              +{project.tech.length - 5} more
            </span>
          )}
        </div>

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <div className="flex gap-4 pt-2 border-t border-[var(--color-ui-border)]">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className="text-[var(--color-accent-cyan)] hover:text-[var(--color-accent-blue)] text-sm transition-colors"
              >
                {link.type} →
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

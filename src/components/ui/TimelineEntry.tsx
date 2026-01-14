"use client";

import { TechBadge } from "./TechBadge";
import type { Experience } from "@/data/experience";

interface TimelineEntryProps {
  experience: Experience;
  isLast?: boolean;
}

export function TimelineEntry({ experience, isLast = false }: TimelineEntryProps) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline connector */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-[var(--color-accent-cyan)] shrink-0 z-10" />
        {!isLast && (
          <div className="flex-1 w-px bg-[var(--color-ui-border)] min-h-[50px]" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-12 ${isLast ? "pb-0" : ""}`}>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
          <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--color-text-primary)]">
            {experience.company}
          </h3>
          <span className="text-[var(--color-text-tertiary)] font-[family-name:var(--font-mono)] text-sm">
            {experience.period}
          </span>
        </div>

        <p className="text-[var(--color-accent-cyan)] font-medium mb-1">
          {experience.role}
        </p>
        <p className="text-[var(--color-text-tertiary)] text-sm mb-4">
          {experience.location}
        </p>

        <ul className="space-y-2 mb-4">
          {experience.impacts.map((impact, i) => (
            <li
              key={i}
              className="flex gap-2 text-[var(--color-text-secondary)] text-sm"
            >
              <span className="text-[var(--color-accent-cyan)] shrink-0">→</span>
              <span>{impact}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.tech.map((t) => (
            <TechBadge key={t} size="sm">
              {t}
            </TechBadge>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  background?: "primary" | "secondary" | "transparent";
  className?: string;
  children: ReactNode;
  withGrid?: boolean;
}

export function Section({
  id,
  background = "primary",
  className = "",
  children,
  withGrid = false,
}: SectionProps) {
  const bgStyles = {
    primary: "bg-[var(--color-primary)]",
    secondary: "bg-[var(--color-primary-light)]",
    transparent: "bg-transparent",
  };

  return (
    <section
      id={id}
      className={`
        section-padding px-4 md:px-8 lg:px-12
        ${bgStyles[background]}
        ${withGrid ? "bg-grid" : ""}
        ${className}
      `}
    >
      <div className="max-w-[1200px] mx-auto">{children}</div>
    </section>
  );
}

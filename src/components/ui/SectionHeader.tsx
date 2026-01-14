"use client";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <h2 className="text-[var(--color-text-primary)] mb-4">{title}</h2>
      {subtitle && (
        <p className="text-[var(--color-text-tertiary)] text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

"use client";

interface TechBadgeProps {
  children: string;
  variant?: "default" | "highlighted";
  size?: "sm" | "md";
}

export function TechBadge({
  children,
  variant = "default",
  size = "md",
}: TechBadgeProps) {
  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  return (
    <span
      className={`
        inline-block rounded-full
        font-[family-name:var(--font-mono)]
        transition-all duration-200
        ${sizeStyles[size]}
        ${
          variant === "highlighted"
            ? "border border-[var(--color-accent-cyan)] bg-[var(--color-accent-cyan)] text-[var(--color-primary)]"
            : "border border-[var(--color-accent-cyan)] bg-transparent text-[var(--color-accent-cyan)] hover:bg-[var(--color-accent-cyan)] hover:text-[var(--color-primary)]"
        }
      `}
    >
      {children}
    </span>
  );
}

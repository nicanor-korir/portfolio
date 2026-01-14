"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  icon?: ReactNode;
  className?: string;
  external?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  onClick,
  href,
  disabled,
  icon,
  className = "",
  external = false,
}: ButtonProps) {
  const baseStyles = `
    relative inline-flex items-center justify-center gap-2
    font-[family-name:var(--font-body)] font-semibold
    rounded-md transition-all duration-300
    focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-primary)]
    disabled:opacity-50 disabled:cursor-not-allowed
    overflow-hidden
  `;

  const variantStyles = {
    primary: `
      border-2 border-[var(--color-accent-cyan)] text-[var(--color-accent-cyan)] bg-transparent
      hover:bg-[var(--color-accent-cyan)] hover:text-[var(--color-primary)]
      hover:shadow-[var(--shadow-glow)]
    `,
    secondary: `
      border-2 border-[var(--color-text-tertiary)] text-[var(--color-text-secondary)] bg-transparent
      hover:border-[var(--color-accent-cyan)] hover:text-[var(--color-accent-cyan)]
    `,
    ghost: `
      text-[var(--color-accent-cyan)] bg-transparent
      hover:bg-[var(--color-primary-light)]
    `,
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm min-h-[36px]",
    md: "px-6 py-3 text-base min-h-[44px]",
    lg: "px-8 py-4 text-lg min-h-[52px]",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
      {/* Scan line effect */}
      <span className="absolute top-0 left-0 w-full h-[2px] bg-[var(--color-accent-blue)] -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group ${combinedStyles}`}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`group ${combinedStyles}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group ${combinedStyles}`}
    >
      {content}
    </button>
  );
}

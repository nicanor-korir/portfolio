// Sample Component Implementations for Portfolio Design System
// These are reference implementations - adapt as needed

import React from 'react';

// ============================================
// Button Component
// ============================================

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  disabled,
  icon,
  className = '',
}) => {
  const baseStyles = `
    relative inline-flex items-center justify-center
    font-body font-semibold
    transition-all duration-300 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-primary
  `;

  const variantStyles = {
    primary: `
      border-2 border-accent-cyan text-accent-cyan bg-transparent
      hover:bg-accent-cyan hover:text-primary hover:shadow-glow
    `,
    secondary: `
      border-2 border-text-tertiary text-text-secondary bg-transparent
      hover:border-accent-cyan hover:text-accent-cyan
    `,
    ghost: `
      text-accent-cyan bg-transparent
      hover:bg-primary-light
    `,
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={combinedStyles}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

// ============================================
// Detection Box Component
// ============================================

interface DetectionBoxProps {
  children: React.ReactNode;
  label?: string;
  confidence?: number;
  animate?: boolean;
  className?: string;
}

export const DetectionBox: React.FC<DetectionBoxProps> = ({
  children,
  label,
  confidence,
  animate = true,
  className = '',
}) => {
  return (
    <div
      className={`
        relative p-4
        ${animate ? 'animate-draw-box' : ''}
        ${className}
      `}
    >
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-accent-blue" />
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-accent-blue" />
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-accent-blue" />
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-accent-blue" />

      {/* Label and confidence */}
      {(label || confidence !== undefined) && (
        <div className="absolute -top-6 left-0 flex items-center gap-2 font-mono text-sm">
          {label && <span className="text-accent-blue">{label}</span>}
          {confidence !== undefined && (
            <span className="text-ui-success">{Math.round(confidence * 100)}%</span>
          )}
        </div>
      )}

      {children}
    </div>
  );
};

// ============================================
// Tech Badge Component
// ============================================

interface TechBadgeProps {
  children: string;
  variant?: 'default' | 'highlighted';
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  children,
  variant = 'default',
}) => {
  return (
    <span
      className={`
        inline-block px-3 py-1
        border rounded-full
        font-mono text-sm
        transition-all duration-200
        ${
          variant === 'highlighted'
            ? 'border-accent-cyan bg-accent-cyan text-primary'
            : 'border-accent-cyan bg-transparent text-accent-cyan hover:bg-accent-cyan hover:text-primary'
        }
      `}
    >
      {children}
    </span>
  );
};

// ============================================
// Project Card Component
// ============================================

interface ProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  impact: string;
  tech: string[];
  image?: string;
  status: 'Live' | 'In Development' | 'Prototype';
  links?: Array<{ type: string; url: string }>;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  tagline,
  description,
  impact,
  tech,
  image,
  status,
  links = [],
}) => {
  return (
    <article
      className="
        relative group
        bg-primary-light border border-ui-border rounded-lg
        overflow-hidden
        transition-all duration-300
        hover:border-accent-cyan hover:-translate-y-1 hover:shadow-glow
      "
    >
      {/* Image with scan overlay */}
      {image && (
        <div className="relative overflow-hidden">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div
            className="
              absolute inset-0 bg-gradient-to-b from-accent-cyan/20 to-transparent
              translate-y-full group-hover:translate-y-0
              transition-transform duration-700 ease-out
            "
          />
        </div>
      )}

      <div className="p-6">
        {/* Status badge */}
        <span
          className={`
            inline-block px-2 py-1 mb-3
            text-xs font-mono rounded
            ${status === 'Live' ? 'bg-ui-success/20 text-ui-success' : ''}
            ${status === 'In Development' ? 'bg-ui-warning/20 text-ui-warning' : ''}
            ${status === 'Prototype' ? 'bg-accent-blue/20 text-accent-blue' : ''}
          `}
        >
          {status}
        </span>

        <h3 className="text-xl font-heading font-bold text-text-primary mb-1">
          {title}
        </h3>
        <p className="text-accent-cyan font-medium mb-3">{tagline}</p>
        <p className="text-text-tertiary mb-4">{description}</p>

        {/* Impact */}
        <div className="flex items-start gap-2 mb-4 text-sm text-text-secondary">
          <span className="text-ui-success">→</span>
          <span>{impact}</span>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
        </div>

        {/* Links */}
        {links.length > 0 && (
          <div className="flex gap-4">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className="text-accent-cyan hover:text-accent-blue transition-colors"
              >
                {link.type} →
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

// ============================================
// Timeline Entry Component
// ============================================

interface TimelineEntryProps {
  company: string;
  role: string;
  period: string;
  location: string;
  impacts: string[];
  tech: string[];
}

export const TimelineEntry: React.FC<TimelineEntryProps> = ({
  company,
  role,
  period,
  location,
  impacts,
  tech,
}) => {
  return (
    <div className="relative flex gap-6">
      {/* Timeline connector */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-accent-cyan" />
        <div className="flex-1 w-px bg-ui-border" />
      </div>

      {/* Content */}
      <div className="pb-12">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
          <h3 className="text-xl font-heading font-bold text-text-primary">
            {company}
          </h3>
          <span className="text-text-tertiary font-mono text-sm">{period}</span>
        </div>

        <p className="text-accent-cyan font-medium mb-1">{role}</p>
        <p className="text-text-tertiary text-sm mb-4">{location}</p>

        <ul className="space-y-2 mb-4">
          {impacts.map((impact, i) => (
            <li key={i} className="flex gap-2 text-text-secondary">
              <span className="text-accent-cyan shrink-0">→</span>
              <span>{impact}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================
// Section Container Component
// ============================================

interface SectionProps {
  id?: string;
  background?: 'primary' | 'secondary' | 'transparent';
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  background = 'primary',
  className = '',
  children,
}) => {
  const bgStyles = {
    primary: 'bg-primary',
    secondary: 'bg-primary-light',
    transparent: 'bg-transparent',
  };

  return (
    <section
      id={id}
      className={`
        py-16 px-4
        md:py-24 md:px-8
        lg:py-32 lg:px-12
        ${bgStyles[background]}
        ${className}
      `}
    >
      <div className="max-w-[1200px] mx-auto">{children}</div>
    </section>
  );
};

// ============================================
// Container Component
// ============================================

interface ContainerProps {
  size?: 'default' | 'narrow' | 'wide';
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  size = 'default',
  children,
  className = '',
}) => {
  const sizeStyles = {
    default: 'max-w-[1200px]',
    narrow: 'max-w-[800px]',
    wide: 'max-w-[1400px]',
  };

  return (
    <div className={`mx-auto px-4 ${sizeStyles[size]} ${className}`}>
      {children}
    </div>
  );
};

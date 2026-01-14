"use client";

import { ReactNode } from "react";

interface DetectionBoxProps {
  children: ReactNode;
  label?: string;
  confidence?: number;
  animate?: boolean;
  className?: string;
  color?: "cyan" | "blue" | "success" | "amber";
}

export function DetectionBox({
  children,
  label,
  confidence,
  animate = true,
  className = "",
  color = "blue",
}: DetectionBoxProps) {
  const colorMap = {
    cyan: "var(--color-accent-cyan)",
    blue: "var(--color-accent-blue)",
    success: "var(--color-ui-success)",
    amber: "var(--color-accent-amber)",
  };

  const borderColor = colorMap[color];

  return (
    <div
      className={`relative p-4 ${animate ? "animate-draw-box" : ""} ${className}`}
    >
      {/* Corner brackets */}
      <div
        className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2"
        style={{ borderColor }}
      />
      <div
        className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2"
        style={{ borderColor }}
      />
      <div
        className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2"
        style={{ borderColor }}
      />
      <div
        className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2"
        style={{ borderColor }}
      />

      {/* Label and confidence */}
      {(label || confidence !== undefined) && (
        <div className="absolute -top-6 left-0 flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs">
          {label && <span style={{ color: borderColor }}>{label}</span>}
          {confidence !== undefined && (
            <span className="text-[var(--color-ui-success)]">
              {Math.round(confidence)}%
            </span>
          )}
        </div>
      )}

      {children}
    </div>
  );
}

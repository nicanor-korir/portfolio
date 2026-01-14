"use client";

import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--color-primary-light)] border-t border-[var(--color-ui-border)]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-[var(--color-text-tertiary)] text-sm">
              Nicanor Korir © {new Date().getFullYear()}
            </p>
            <p className="text-[var(--color-text-tertiary)] text-xs mt-1">
              Built with Next.js, Three.js, and way too much coffee
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[var(--color-text-tertiary)] hover:text-[var(--color-accent-cyan)] transition-colors text-sm"
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

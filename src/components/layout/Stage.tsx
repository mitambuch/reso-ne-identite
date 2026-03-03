/* ═══════════════════════════════════════════════════════════════
   Stage — main content area for presentation slides
   WHAT: Container with section label, subtle grid background, slide zone
   WHEN: Always visible in the presentation grid (right column)
   CHANGE: Adjust grid lines, border radius, or section label style here
   ═══════════════════════════════════════════════════════════════ */

import { cn } from '@utils/cn';
import type { ReactNode } from 'react';

export interface StageProps {
  children: ReactNode;
  sectionLabel?: string;
  className?: string;
}

export const Stage = ({ children, sectionLabel, className }: StageProps) => {
  return (
    <div
      className={cn(
        'border-border bg-surface/50 relative flex min-h-0 flex-col overflow-hidden rounded-lg border',
        className,
      )}
    >
      {/* Section label bar */}
      {sectionLabel && (
        <div className="border-border/50 shrink-0 border-b px-6 py-2">
          <span className="text-muted font-mono text-[11px] tracking-widest uppercase">
            {sectionLabel}
          </span>
        </div>
      )}

      {/* Subtle 12-column grid lines */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-12" aria-hidden="true">
        {Array.from({ length: 11 }, (_, i) => (
          <div key={i} className="border-r border-black/[0.015]" />
        ))}
      </div>

      {/* Slide layer */}
      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  );
};

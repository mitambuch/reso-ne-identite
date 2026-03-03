/* ═══════════════════════════════════════════════════════════════
   PresentationHeader — top bar with logo, subtitle, slide counter
   WHAT: Fixed header for the Réso.NE presentation
   WHEN: Every slide — always visible
   CHANGE: Update branding or counter format here
   ═══════════════════════════════════════════════════════════════ */

import { cn } from '@utils/cn';

export interface PresentationHeaderProps {
  current: number;
  total: number;
  className?: string;
}

export const PresentationHeader = ({ current, total, className }: PresentationHeaderProps) => {
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <header
      className={cn(
        'border-border bg-bg/80 flex h-14 shrink-0 items-center justify-between border-b px-6 backdrop-blur-md',
        className,
      )}
    >
      {/* Left — logo + subtitle */}
      <div className="flex items-center gap-3">
        <span className="text-accent text-sm font-bold tracking-tight">RÉSO.NE</span>
        <span className="bg-border h-3.5 w-px" />
        <span className="text-muted font-mono text-xs tracking-widest uppercase">
          brief créatif — 2026
        </span>
      </div>

      {/* Right — slide counter pill */}
      <div className="border-border bg-surface inline-flex items-center gap-1 rounded-md border px-2.5 py-1.5">
        <span className="text-fg font-mono text-xs">{pad(current + 1)}</span>
        <span className="text-muted font-mono text-xs">/</span>
        <span className="text-muted font-mono text-xs">{pad(total)}</span>
      </div>
    </header>
  );
};

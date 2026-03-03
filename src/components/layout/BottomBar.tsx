/* ═══════════════════════════════════════════════════════════════
   BottomBar — navigation bar at the bottom of the presentation
   WHAT: Prev/next arrows + keyboard navigation hint
   WHEN: Always visible at the bottom of the presentation
   CHANGE: Adjust button styles, labels, or layout here
   ═══════════════════════════════════════════════════════════════ */

import { Kbd } from '@components/ui/Kbd';
import { cn } from '@utils/cn';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface BottomBarProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}

export const BottomBar = ({ current, total, onPrev, onNext, className }: BottomBarProps) => {
  const isFirst = current === 0;
  const isLast = current === total - 1;

  return (
    <div className={cn('flex shrink-0 items-center justify-between gap-6 px-6 py-2', className)}>
      {/* Left — prev arrow */}
      <button
        type="button"
        onClick={onPrev}
        disabled={isFirst}
        aria-label="Slide précédente"
        className={cn(
          'border-border flex h-10 w-10 items-center justify-center rounded-md border',
          'text-muted hover:border-accent hover:text-accent transition-colors',
          isFirst && 'pointer-events-none opacity-30',
        )}
      >
        <ChevronLeft size={16} strokeWidth={1.5} />
      </button>

      {/* Center — keyboard navigation hint */}
      <div className="border-border/50 flex items-center gap-3 rounded-lg border px-4 py-2">
        <Kbd>&larr;</Kbd>
        <Kbd>&rarr;</Kbd>
        <span className="text-muted/50 mx-1 text-[10px]">ou</span>
        <Kbd className="px-3">Space</Kbd>
        <span className="text-muted ml-2 text-xs">naviguer</span>
      </div>

      {/* Right — next arrow (accent) */}
      <button
        type="button"
        onClick={onNext}
        disabled={isLast}
        aria-label="Slide suivante"
        className={cn(
          'border-accent/30 bg-accent/5 flex h-10 w-10 items-center justify-center rounded-md border',
          'text-accent hover:border-accent hover:bg-accent/10 transition-colors',
          isLast && 'pointer-events-none opacity-30',
        )}
      >
        <ChevronRight size={16} strokeWidth={1.5} />
      </button>
    </div>
  );
};

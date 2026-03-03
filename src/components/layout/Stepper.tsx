/* ═══════════════════════════════════════════════════════════════
   Stepper — horizontal progress dots under the header
   WHAT: Visual progress indicator with clickable dots
   WHEN: Always visible below the PresentationHeader
   CHANGE: Adjust dot sizes, colors, or add labels here
   ═══════════════════════════════════════════════════════════════ */

import { cn } from '@utils/cn';

export interface StepperProps {
  current: number;
  total: number;
  onGo: (index: number) => void;
  className?: string;
}

export const Stepper = ({ current, total, onGo, className }: StepperProps) => {
  const progress = total > 1 ? current / (total - 1) : 0;

  return (
    <div className={cn('relative shrink-0 px-6 py-3', className)}>
      {/* Background line */}
      <div className="absolute inset-x-6 top-1/2 h-px -translate-y-1/2 bg-black/[0.05]" />

      {/* Progress line */}
      <div
        className="bg-accent/30 absolute top-1/2 left-6 h-px -translate-y-1/2 transition-all duration-300"
        style={{ width: `${progress * 100}%` }}
      />

      {/* Dots */}
      <div className="relative flex items-center justify-between">
        {Array.from({ length: total }, (_, i) => {
          const isDone = i < current;
          const isActive = i === current;

          return (
            <button
              key={i}
              type="button"
              onClick={() => onGo(i)}
              aria-label={`Slide ${i + 1}`}
              className={cn(
                'rounded-full border-[1.5px] transition-all',
                isActive &&
                  'border-accent bg-accent h-2.5 w-2.5 shadow-[0_0_8px_rgba(11,122,117,0.25)]',
                isDone && !isActive && 'border-accent bg-accent h-2 w-2',
                !isDone && !isActive && 'h-2 w-2 border-black/[0.06] bg-transparent',
              )}
            />
          );
        })}
      </div>
    </div>
  );
};

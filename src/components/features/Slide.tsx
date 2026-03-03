/* ═══════════════════════════════════════════════════════════════
   Slide — wrapper for each presentation slide
   WHAT: Absolute-positioned container with opacity/translate transition
   WHEN: Used inside Stage, one per slide
   CHANGE: Adjust transition duration or easing here
   ═══════════════════════════════════════════════════════════════ */

import { cn } from '@utils/cn';
import type { ReactNode } from 'react';

export interface SlideProps {
  active: boolean;
  children: ReactNode;
  className?: string;
}

export const Slide = ({ active, children, className }: SlideProps) => {
  return (
    <div
      className={cn(
        'scrollbar-hide absolute inset-0 overflow-y-auto transition-all duration-[450ms]',
        active
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-1.5 opacity-0',
        className,
      )}
    >
      {children}
    </div>
  );
};

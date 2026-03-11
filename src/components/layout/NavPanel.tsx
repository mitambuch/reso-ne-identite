/* ═══════════════════════════════════════════════════════════════
   NavPanel — sidebar navigation grouped by sections
   WHAT: Left sidebar with clickable section groups and slide items
   WHEN: Always visible in the presentation grid
   CHANGE: Update group rendering, active states, or styling here
   ═══════════════════════════════════════════════════════════════ */

import { NAV_GROUPS, SECTIONS } from '@data/sections';
import { cn } from '@utils/cn';

export interface NavPanelProps {
  current: number;
  onGo: (index: number) => void;
  className?: string;
}

export const NavPanel = ({ current, onGo, className }: NavPanelProps) => {
  return (
    <nav
      className={cn(
        'scrollbar-hide border-border overflow-y-auto rounded-lg border bg-white/80 backdrop-blur-2xl',
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-3 pb-1">
        <span className="text-muted font-mono text-[10px] tracking-widest uppercase">Sections</span>
        <span className="text-muted font-mono text-[10px]">{NAV_GROUPS.length}</span>
      </div>

      {/* Groups */}
      <div className="flex flex-col gap-0 px-2 pb-2">
        {NAV_GROUPS.map((group, groupIdx) => {
          const targetSlide = group.chapterIndex ?? group.items[0] ?? 0;

          const allSlides =
            group.chapterIndex !== undefined
              ? [group.chapterIndex, ...group.items]
              : [...group.items];

          const isGroupActive = allSlides.includes(current);

          return (
            <div key={group.label} className="flex flex-col">
              {/* Group header — clickable */}
              <button
                type="button"
                onClick={() => onGo(targetSlide)}
                className={cn(
                  'flex items-center gap-2 rounded-md px-2 pt-2 pb-0.5 text-left transition-colors',
                  'hover:text-accent',
                  isGroupActive ? 'text-accent' : 'text-fg/70',
                )}
              >
                <span className="text-[11px] font-semibold tracking-wider uppercase">
                  {group.label}
                </span>
                <span className="font-mono text-[10px] opacity-40">
                  {String(groupIdx + 1).padStart(2, '0')}
                </span>
              </button>

              {/* Items */}
              {allSlides.map(slideIndex => {
                if (slideIndex === undefined) return null;
                const section = SECTIONS[slideIndex];
                if (!section) return null;

                const isActive = current === slideIndex;
                const isDone = slideIndex < current;

                return (
                  <button
                    key={slideIndex}
                    type="button"
                    onClick={() => onGo(slideIndex)}
                    className={cn(
                      'relative rounded-md px-3 py-1 text-left text-[12px] transition-all',
                      isActive && 'text-fg bg-[var(--accent-lo)] font-medium',
                      isDone && !isActive && 'text-[var(--sub)] opacity-40',
                      !isActive && !isDone && 'text-[var(--sub)]',
                      'hover:bg-[var(--accent-lo)]',
                    )}
                  >
                    {/* Active indicator bar */}
                    {isActive && (
                      <span className="bg-accent absolute top-1.5 bottom-1.5 left-0 w-0.5 rounded-full" />
                    )}
                    {section.title}
                    {section.opti && (
                      <span className="ml-1 inline-flex items-center gap-0.5 rounded-full bg-emerald-100 px-1.5 py-px text-[9px] font-semibold text-emerald-700">
                        <span className="text-[8px]">{'\u{1F44D}'}</span>opti
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

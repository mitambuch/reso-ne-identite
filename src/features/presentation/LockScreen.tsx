/* ═══════════════════════════════════════════════════════════════
   LockScreen — 6-digit code gate for the presentation
   WHAT: Full-screen lock with visual numpad + keyboard support
   WHEN: Shown before the presentation until correct code is entered
   WHY: Client-facing presentation needs basic access control
   ═══════════════════════════════════════════════════════════════ */

import { cn } from '@utils/cn';
import { useCallback, useEffect, useRef, useState } from 'react';

const CODE = '2013';
const CODE_LENGTH = 4;

// WHY: shake duration matches the CSS animation length so we can reset state after it ends
const SHAKE_DURATION_MS = 500;

interface LockScreenProps {
  onUnlock: () => void;
}

export function LockScreen({ onUnlock }: LockScreenProps) {
  const [digits, setDigits] = useState('');
  const [shaking, setShaking] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const appendDigit = useCallback(
    (d: string) => {
      if (shaking) return;

      setDigits(prev => {
        const next = prev + d;
        if (next.length === CODE_LENGTH) {
          if (next === CODE) {
            // WHY: Defer onUnlock to avoid setState-during-render warning
            queueMicrotask(onUnlock);
          } else {
            setShaking(true);
            setTimeout(() => {
              setShaking(false);
              setDigits('');
            }, SHAKE_DURATION_MS);
          }
        }
        return next.length <= CODE_LENGTH ? next : prev;
      });
    },
    [onUnlock, shaking],
  );

  const deleteLast = useCallback(() => {
    if (shaking) return;
    setDigits(prev => prev.slice(0, -1));
  }, [shaking]);

  /* ─── Physical keyboard support ──────────────────────────── */

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key >= '0' && e.key <= '9') {
        appendDigit(e.key);
      } else if (e.key === 'Backspace') {
        deleteLast();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [appendDigit, deleteLast]);

  /* ─── Render ──────────────────────────────────────────────── */

  return (
    <div
      ref={containerRef}
      className="bg-bg text-fg flex h-full flex-col items-center justify-center gap-10"
    >
      {/* Title */}
      <div className="flex flex-col items-center gap-2">
        <img src="/images/Variante_3.svg" alt="réso.ne" className="h-10" />
        <span className="text-muted text-sm">Entrez le code d&apos;accès</span>
      </div>

      {/* Dots indicator */}
      <div
        className={cn('flex gap-3', shaking && 'animate-shake')}
        role="status"
        aria-label={`${digits.length} chiffres sur ${CODE_LENGTH} saisis`}
      >
        {Array.from({ length: CODE_LENGTH }, (_, i) => (
          <div
            key={i}
            className={cn(
              'size-4 rounded-full border-2 transition-colors duration-150',
              i < digits.length
                ? shaking
                  ? 'border-red-500 bg-red-500'
                  : 'border-accent bg-accent'
                : 'border-muted bg-transparent',
            )}
          />
        ))}
      </div>

      {/* Visual numpad */}
      <div className="grid grid-cols-3 gap-3">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '←'].map(key => {
          if (key === '') return <div key="empty" />;

          const isBackspace = key === '←';
          return (
            <button
              key={key}
              type="button"
              onClick={() => (isBackspace ? deleteLast() : appendDigit(key))}
              className={cn(
                'flex size-16 items-center justify-center rounded-full text-xl font-medium transition-colors',
                'border-border hover:bg-accent/10 active:bg-accent/20 border',
                'focus-visible:ring-accent focus-visible:ring-2 focus-visible:outline-none',
              )}
              aria-label={isBackspace ? 'Effacer' : key}
            >
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
}

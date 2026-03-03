/* ═══════════════════════════════════════════════════════════════
   useKeyboard — keyboard navigation for presentations
   WHAT: Binds arrow keys and space to next/prev callbacks
   WHEN: Mount in any slide-based navigation view
   CHANGE: Add more key bindings here (Escape, Home, End…)
   ═══════════════════════════════════════════════════════════════ */

import { useEffect } from 'react';

export interface UseKeyboardOptions {
  onNext: () => void;
  onPrev: () => void;
}

export function useKeyboard({ onNext, onPrev }: UseKeyboardOptions): void {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          e.preventDefault();
          onNext();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          onPrev();
          break;
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev]);
}

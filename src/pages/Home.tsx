/* ═══════════════════════════════════════════════════════════════
   Home — Réso.NE identity presentation orchestrator
   WHAT: Full-screen presentation with sidebar nav, stepper, slides
   WHEN: Landing page at /
   CHANGE: Add slides in SlideContents.tsx, update SECTIONS in sections.ts
   ═══════════════════════════════════════════════════════════════ */

import { Slide } from '@components/features/Slide';
import { BottomBar } from '@components/layout/BottomBar';
import { NavPanel } from '@components/layout/NavPanel';
import { PresentationHeader } from '@components/layout/PresentationHeader';
import { Stage } from '@components/layout/Stage';
import { Stepper } from '@components/layout/Stepper';
import { NAV_GROUPS, SECTIONS, TOTAL_SLIDES } from '@data/sections';
import { LockScreen } from '@features/presentation/LockScreen';
import {
  SlideAnalyse,
  SlideApproche,
  SlideAujourdhui,
  SlideBenchmark,
  SlideChiffres,
  SlideCohabitationOpti,
  SlideConstructionOpti,
  SlideCouleursA,
  SlideCouverture,
  SlideDeclinaisonsA,
  SlideDeclinaisonsCompact,
  SlideDefi,
  SlideDemain,
  SlideExemple1v3,
  SlideExemple2v3,
  SlideExemple3v3,
  SlideExemple4v3,
  SlideExemple5v3,
  SlideExtensibilite,
  SlideLogoOpti,
  SlideMerci,
  SlideMission,
  SlideNomenclature,
  SlideParcours,
  SlidePartiPrisA,
  SlidePositionnement,
  SlidePrincipes,
  SlideRedesign,
  SlideResoNe,
  SlideStrategie,
  SlideTypoA,
  SlideUniversVisuel,
  SlideVarianteA,
} from '@features/presentation/SlideContents';
import { useKeyboard } from '@hooks/useKeyboard';
import type { FC } from 'react';
import { useCallback, useState } from 'react';

/* ─── Slide component map (order matches SECTIONS) ──────────── */

const SLIDE_COMPONENTS: FC[] = [
  /* INTRO */
  SlideCouverture, // 0
  SlideApproche, // 1
  /* CONTEXTE */
  SlideResoNe, // 2
  SlideMission, // 3
  SlidePositionnement, // 4
  /* ANALYSE */
  SlideAnalyse, // 5
  SlideChiffres, // 6
  SlideBenchmark, // 7
  SlideParcours, // 8
  /* NAMING & ARCHITECTURE */
  SlideAujourdhui, // 9
  SlideDemain, // 10
  SlideNomenclature, // 11
  SlideVarianteA, // 12 — Architecture de marque
  SlideExtensibilite, // 13
  /* IDENTITÉ VISUELLE */
  SlideDefi, // 14
  SlideStrategie, // 15
  SlidePrincipes, // 16
  /* IDENTITÉ VISUELLE — Détails */
  SlidePartiPrisA, // 17
  SlideLogoOpti, // 18
  SlideConstructionOpti, // 19
  SlideDeclinaisonsA, // 20
  SlideDeclinaisonsCompact, // 21
  SlideCohabitationOpti, // 22
  SlideTypoA, // 23
  SlideCouleursA, // 24
  /* EXEMPLES */
  SlideExemple1v3, // 25
  SlideExemple2v3, // 26
  SlideExemple3v3, // 27
  SlideExemple4v3, // 28
  SlideExemple5v3, // 29
  SlideRedesign, // 30
  /* PROCHAINES ÉTAPES */
  SlideUniversVisuel, // 31
  SlideMerci, // 32
];

/* ═══════════════════════════════════════════════════════════════ */

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem('presentation-unlocked') === '1',
  );

  const goNext = useCallback(() => {
    setCurrent(prev => Math.min(prev + 1, TOTAL_SLIDES - 1));
  }, []);

  const goPrev = useCallback(() => {
    setCurrent(prev => Math.max(prev - 1, 0));
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useKeyboard({ onNext: goNext, onPrev: goPrev });

  /* ─── LockScreen gate ──────────────────────────────────────── */

  if (!unlocked) {
    return (
      <LockScreen
        onUnlock={() => {
          sessionStorage.setItem('presentation-unlocked', '1');
          setUnlocked(true);
        }}
      />
    );
  }

  /* ─── Compute section label for Stage ─────────────────────── */

  const groupIndex = NAV_GROUPS.findIndex(g => {
    const all = g.chapterIndex !== undefined ? [g.chapterIndex, ...g.items] : [...g.items];
    return all.includes(current);
  });
  const pad = (n: number) => String(n).padStart(2, '0');
  const sectionLabel =
    groupIndex >= 0 ? `${pad(groupIndex + 1)} — ${NAV_GROUPS[groupIndex]?.label ?? ''}` : undefined;

  /* ─── Render ──────────────────────────────────────────────── */

  return (
    <div className="bg-bg text-fg flex h-full flex-col">
      <PresentationHeader current={current} total={TOTAL_SLIDES} />
      <Stepper current={current} total={TOTAL_SLIDES} onGo={goTo} />

      {/* Main grid: sidebar + stage */}
      <div className="grid min-h-0 flex-1 grid-cols-[220px_1fr] gap-6 px-6 py-4">
        <NavPanel current={current} onGo={goTo} />
        <Stage sectionLabel={sectionLabel}>
          {SLIDE_COMPONENTS.map((SlideContent, i) => (
            <Slide key={SECTIONS[i]?.title ?? i} active={current === i}>
              <SlideContent />
            </Slide>
          ))}
        </Stage>
      </div>

      <BottomBar current={current} total={TOTAL_SLIDES} onPrev={goPrev} onNext={goNext} />
    </div>
  );
}

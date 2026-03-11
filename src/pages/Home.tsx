/* ═══════════════════════════════════════════════════════════════
   Home — Réso.NE presentation orchestrator
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
  SlideCohabitationA,
  SlideConstructionA,
  SlideCouleursA,
  SlideCouverture,
  SlideDeclinaisonsA,
  SlideDeclinaisonsCompact,
  SlideDefi,
  SlideDemain,
  SlideEssais,
  SlideEssais2,
  SlideExemple1,
  SlideExemple2,
  SlideExemple3,
  SlideExemple4,
  SlideExemple5,
  SlideExtensibilite,
  SlideLogoA,
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
  SlideLogoA, // 18
  SlideConstructionA, // 19
  SlideDeclinaisonsA, // 20
  SlideDeclinaisonsCompact, // 21
  SlideCohabitationA, // 22
  SlideTypoA, // 23
  SlideCouleursA, // 24
  SlideEssais, // 25
  SlideEssais2, // 26
  /* EXEMPLES */
  SlideExemple1, // 27
  SlideExemple2, // 28
  SlideExemple3, // 29
  SlideExemple4, // 30
  SlideExemple5, // 31
  SlideRedesign, // 32
  /* PROCHAINES ÉTAPES */
  SlideUniversVisuel, // 33
  SlideMerci, // 34
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

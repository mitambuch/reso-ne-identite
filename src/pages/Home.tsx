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
import {
  SlideAnalyse,
  SlideApproche,
  SlideAujourdhui,
  SlideBenchmark,
  SlideChiffres,
  SlideCouleurAlt,
  SlideCouverture,
  SlideDefi,
  SlideDemain,
  SlideExtensibilite,
  SlideLogoA,
  SlideLogoB,
  SlideMission,
  SlideNomenclature,
  SlideParcours,
  SlidePartiPrisA,
  SlidePartiPrisB,
  SlidePhilosophieLogo,
  SlidePositionnement,
  SlidePrincipes,
  SlideResoNe,
  SlideRetours,
  SlideStrategie,
  SlideTypoA,
  SlideTypoB,
  SlideUniversVisuel,
  SlideVarianteA,
  SlideVarianteB,
  SlideVarianteC,
  SlideVolta,
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
  SlideVarianteA, // 12
  SlideVarianteB, // 13
  SlideVarianteC, // 14
  SlideVolta, // 15
  SlideExtensibilite, // 16
  /* IDENTITÉ VISUELLE */
  SlideDefi, // 17
  SlideStrategie, // 18
  SlidePrincipes, // 19
  SlidePhilosophieLogo, // 20
  /* VARIANTE 1 — Cousinage */
  SlidePartiPrisA, // 21
  SlideLogoA, // 22
  SlideTypoA, // 23
  /* VARIANTE 2 — Émancipation */
  SlidePartiPrisB, // 24
  SlideLogoB, // 25
  SlideTypoB, // 26
  SlideCouleurAlt, // 27
  /* PROCHAINES ÉTAPES */
  SlideRetours, // 28
  SlideUniversVisuel, // 29
];

/* ═══════════════════════════════════════════════════════════════ */

export default function Home() {
  const [current, setCurrent] = useState(0);

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

/* ═══════════════════════════════════════════════════════════════
   SECTIONS — slide metadata and navigation groups for the
   Réso.NE presentation.
   ═══════════════════════════════════════════════════════════════ */

export interface Section {
  title: string;
  layout: 'default' | 'chapter';
}

export interface NavGroup {
  label: string;
  items: number[];
  chapterIndex?: number;
}

export const SECTIONS: Section[] = [
  { title: 'Couverture', layout: 'default' }, // 0
  { title: 'Notre approche', layout: 'default' }, // 1
  { title: 'Principes de design', layout: 'chapter' }, // 2
  { title: "Ce qu'est Réso.ne", layout: 'default' }, // 3
  { title: 'La mission', layout: 'default' }, // 4
  { title: 'Le positionnement', layout: 'default' }, // 5
  { title: 'Introduction', layout: 'chapter' }, // 6
  { title: 'Benchmark', layout: 'default' }, // 7
  { title: "En un coup d'oeil", layout: 'default' }, // 8
  { title: 'Le parcours patient', layout: 'chapter' }, // 9
  { title: 'Contexte stratégique', layout: 'default' }, // 10
  { title: 'Le triple défi', layout: 'default' }, // 11
  { title: 'Nomenclature', layout: 'default' }, // 12
  { title: 'Architecture de marque', layout: 'default' }, // 13
  { title: 'Direction A — Cousinage', layout: 'chapter' }, // 14
  { title: 'Direction B — Émancipation', layout: 'default' }, // 15
  { title: 'Typographie & Logo', layout: 'chapter' }, // 16
  { title: 'Prochaines étapes', layout: 'default' }, // 17
];

export const TOTAL_SLIDES = SECTIONS.length;

export const NAV_GROUPS: NavGroup[] = [
  { label: 'Introduction', items: [0, 1] },
  { label: 'Principes', items: [], chapterIndex: 2 },
  { label: 'Contexte', items: [3, 4, 5] },
  { label: 'Analyse', items: [7, 8], chapterIndex: 6 },
  { label: 'Stratégie', items: [10, 11, 12, 13], chapterIndex: 9 },
  { label: 'Directions', items: [15], chapterIndex: 14 },
  { label: 'Identité & suite', items: [17], chapterIndex: 16 },
];

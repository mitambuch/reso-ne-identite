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
  /* ── INTRO ──────────────────────────────────────────────── */
  { title: 'Couverture', layout: 'default' }, // 0
  { title: 'Notre approche', layout: 'default' }, // 1

  /* ── CONTEXTE ───────────────────────────────────────────── */
  { title: "Ce qu'est Réso.ne", layout: 'default' }, // 2
  { title: 'La mission', layout: 'default' }, // 3
  { title: 'Le positionnement', layout: 'default' }, // 4

  /* ── ANALYSE ────────────────────────────────────────────── */
  { title: 'Introduction', layout: 'default' }, // 5
  { title: "En un coup d'œil", layout: 'default' }, // 6
  { title: 'Benchmark', layout: 'default' }, // 7
  { title: 'Le parcours patient', layout: 'default' }, // 8

  /* ── NAMING & ARCHITECTURE ──────────────────────────────── */
  { title: "Aujourd'hui", layout: 'default' }, // 9
  { title: 'Demain', layout: 'default' }, // 10
  { title: 'Nomenclature', layout: 'default' }, // 11
  { title: 'Architecture de marque', layout: 'default' }, // 12
  { title: 'Extensibilité', layout: 'default' }, // 13

  /* ── IDENTITÉ VISUELLE ──────────────────────────────────── */
  { title: 'Le triple défi', layout: 'default' }, // 14
  { title: 'Stratégie', layout: 'default' }, // 15
  { title: 'Principes de design', layout: 'default' }, // 16

  /* ── IDENTITÉ VISUELLE — Détails ────────────────────────── */
  { title: 'Le parti pris', layout: 'default' }, // 17
  { title: 'Le logo', layout: 'default' }, // 18
  { title: 'Construction', layout: 'default' }, // 19
  { title: 'Déclinaisons', layout: 'default' }, // 20
  { title: 'Déclinaisons compact', layout: 'default' }, // 21
  { title: 'Cohabitation RHNe', layout: 'default' }, // 22
  { title: 'La typographie', layout: 'default' }, // 23
  { title: 'Les couleurs', layout: 'default' }, // 24
  { title: 'Variantes couleur', layout: 'default' }, // 25

  /* ── EXEMPLES ─────────────────────────────────────────────── */
  { title: 'Panneau', layout: 'default' }, // 26
  { title: 'Enseigne', layout: 'default' }, // 27
  { title: 'Vitrine', layout: 'default' }, // 28
  { title: 'Papeterie', layout: 'default' }, // 29
  { title: 'Carte de visite', layout: 'default' }, // 30
  { title: 'Redesign site', layout: 'default' }, // 31

  /* ── PROCHAINES ÉTAPES ──────────────────────────────────── */
  { title: 'La suite', layout: 'default' }, // 32
  { title: 'Merci', layout: 'default' }, // 33
];

export const TOTAL_SLIDES = SECTIONS.length;

export const NAV_GROUPS: NavGroup[] = [
  { label: 'Intro', items: [0, 1] },
  { label: 'Contexte', items: [2, 3, 4] },
  { label: 'Analyse', items: [5, 6, 7, 8] },
  { label: 'Naming & Architecture', items: [9, 10, 11, 12, 13] },
  { label: 'Stratégie visuelle', items: [14, 15, 16] },
  { label: 'Identité visuelle', items: [17, 18, 19, 20, 21, 22, 23, 24, 25] },
  { label: 'Exemples', items: [26, 27, 28, 29, 30, 31] },
  { label: 'Prochaines étapes', items: [32, 33] },
];

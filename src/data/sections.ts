/* ═══════════════════════════════════════════════════════════════
   SECTIONS — slide metadata and navigation groups for the
   Réso.NE presentation.
   ═══════════════════════════════════════════════════════════════ */

export interface Section {
  title: string;
  layout: 'default' | 'chapter';
  opti?: boolean;
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
  { title: 'Le logo', layout: 'default', opti: true }, // 19
  { title: 'Construction', layout: 'default' }, // 20
  { title: 'Construction', layout: 'default', opti: true }, // 21
  { title: 'Déclinaisons', layout: 'default' }, // 22
  { title: 'Déclinaisons compact', layout: 'default' }, // 23
  { title: 'Cohabitation RHNe', layout: 'default' }, // 24
  { title: 'Cohabitation RHNe', layout: 'default', opti: true }, // 25
  { title: 'La typographie', layout: 'default' }, // 26
  { title: 'Les couleurs', layout: 'default' }, // 27
  { title: 'Variantes couleur', layout: 'default' }, // 28
  { title: 'Variantes couleur 2', layout: 'default' }, // 29

  /* ── EXEMPLES ─────────────────────────────────────────────── */
  { title: 'Panneau', layout: 'default' }, // 30
  { title: 'Panneau v2', layout: 'default' }, // 31
  { title: 'Panneau', layout: 'default', opti: true }, // 32
  { title: 'Enseigne', layout: 'default' }, // 33
  { title: 'Enseigne v2', layout: 'default' }, // 34
  { title: 'Enseigne', layout: 'default', opti: true }, // 35
  { title: 'Vitrine', layout: 'default' }, // 36
  { title: 'Vitrine v2', layout: 'default' }, // 37
  { title: 'Vitrine', layout: 'default', opti: true }, // 38
  { title: 'Papeterie', layout: 'default' }, // 39
  { title: 'Papeterie v2', layout: 'default' }, // 40
  { title: 'Papeterie', layout: 'default', opti: true }, // 41
  { title: 'Carte de visite', layout: 'default' }, // 42
  { title: 'Carte de visite v2', layout: 'default' }, // 43
  { title: 'Carte de visite', layout: 'default', opti: true }, // 44
  { title: 'Redesign site', layout: 'default' }, // 45

  /* ── PROCHAINES ÉTAPES ──────────────────────────────────── */
  { title: 'La suite', layout: 'default' }, // 46
  { title: 'Merci', layout: 'default' }, // 47
];

export const TOTAL_SLIDES = SECTIONS.length;

export const NAV_GROUPS: NavGroup[] = [
  { label: 'Intro', items: [0, 1] },
  { label: 'Contexte', items: [2, 3, 4] },
  { label: 'Analyse', items: [5, 6, 7, 8] },
  { label: 'Naming & Architecture', items: [9, 10, 11, 12, 13] },
  { label: 'Stratégie visuelle', items: [14, 15, 16] },
  { label: 'Identité visuelle', items: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29] },
  { label: 'Exemples', items: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45] },
  { label: 'Prochaines étapes', items: [46, 47] },
];

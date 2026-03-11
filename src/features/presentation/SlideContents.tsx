/* ═══════════════════════════════════════════════════════════════
   SlideContents — all 16 slide components for the Réso.NE brief
   WHAT: Named exports for each slide (content placeholder)
   WHEN: Rendered inside <Slide> wrappers by the Home orchestrator
   CHANGE: Fill in actual content per slide here
   ═══════════════════════════════════════════════════════════════ */

import { Badge } from '@components/ui/Badge';
import { Card } from '@components/ui/Card';
import { cn } from '@utils/cn';
import type { ReactNode } from 'react';

/* ─── Shared typographic primitives ─────────────────────────── */

const Label = ({ children }: { children: ReactNode }) => (
  <div className="text-muted mb-2 font-mono text-[11px] tracking-[0.1em] uppercase">{children}</div>
);

const H1 = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div
    className={cn('mb-3 leading-[1.1] font-medium tracking-tight', className)}
    style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
  >
    {children}
  </div>
);

const P = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn('max-w-2xl text-lg leading-[1.7] text-(--sub)', className)}>{children}</div>
);

const ResoLogo = ({ h = 'h-7' }: { h?: string }) => (
  <img src="/images/Variante_3.svg" alt="réso.ne" className={`${h} inline-block align-baseline`} />
);

/* ─── 0. Couverture ─────────────────────────────────────────── */

export const SlideCouverture = () => (
  <div className="relative flex h-full flex-col justify-between p-10">
    {/* Top — surtitre + sous-titre */}
    <div className="flex flex-col gap-1">
      <Label>Brief créatif — 2026</Label>
      <span className="text-lg tracking-tight text-(--sub)">
        Stratégie &amp; identité de marque
      </span>
    </div>

    {/* Middle — titre accroche, aligné à gauche, prend de la place */}
    <div className="max-w-3xl">
      <div
        className="text-fg leading-[1.05] font-medium tracking-tight"
        style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
      >
        Pour que le bon réflexe
        <br />
        ne soit plus les urgences
      </div>
    </div>

    {/* Bottom — identité + méta */}
    <div className="flex items-end justify-between">
      <div className="flex flex-col items-start gap-1">
        <img src="/images/Variante_3.svg" alt="réso.ne" className="h-10" />
        <span className="mt-1 text-base text-(--sub)">
          Réseau de soins ambulatoires de proximité — Canton de Neuchâtel
        </span>
      </div>
      <div className="text-muted flex flex-col items-end gap-0.5 text-sm">
        <span>10 mars 2026</span>
        <span className="italic">Document confidentiel</span>
      </div>
    </div>
  </div>
);

/* ─── 1. Notre approche ────────────────────────────────────── */

export const SlideApproche = () => (
  <div className="flex h-full flex-col justify-between p-10">
    {/* Top — titre */}
    <div>
      <H1>Notre approche</H1>
    </div>

    {/* Middle — deux colonnes : texte courant + citation */}
    <div className="grid grid-cols-[1fr_auto] items-end gap-20">
      <div className="flex flex-col gap-6">
        <P className="max-w-none">
          Ce projet n&apos;est pas un exercice de décoration. L&apos;identité de réso.ne doit
          résoudre un problème concret&nbsp;:{' '}
          <strong className="text-accent">
            quand un patient neuchâtelois a besoin de soins, il doit penser à réso.ne avant de
            penser aux urgences de l&apos;hôpital.
          </strong>
        </P>
        <P className="max-w-none">
          Chaque choix sera passé au crible d&apos;un test simple&nbsp;: une personne de 65 ans à La
          Chaux-de-Fonds qui a mal au dos un mardi matin comprend-elle en 3 secondes que c&apos;est
          un endroit où elle peut aller se faire soigner&nbsp;? Si la réponse est non, on
          recommence.
        </P>
      </div>

      {/* Citation — colonne droite */}
      <blockquote className="border-accent w-64 border-l-[3px] pl-6">
        <span
          className="text-fg leading-[1.3] font-medium tracking-tight"
          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}
        >
          Un logo n&apos;est pas fait pour plaire.
          <br />
          Il est fait pour être compris en une seconde.
        </span>
      </blockquote>
    </div>

    {/* Bottom spacer */}
    <div />
  </div>
);

/* ─── 2. Principes de design (chapter) ─────────────────────── */

const PRINCIPES = [
  {
    keyword: 'Clarté',
    suffix: '> Esthétique',
    text: 'Un patient de 65 ans doit comprendre ce qu\u2019il a devant lui en 3 secondes. Le logo doit être lisible à 2 cm sur une carte de visite comme à 2 mètres sur une façade. Pas de détails fins, pas d\u2019effets qui ne survivent pas au changement d\u2019échelle.',
  },
  {
    keyword: 'Déclinabilité',
    suffix: '> Originalité',
    text: 'Un logo génial qui ne fonctionne qu\u2019en grand format ou en couleur est un mauvais logo. Chaque proposition est testée en monochrome, en petit, en négatif, et dans le système de déclinaison. Si ça ne marche pas sur un tampon, ça ne marche pas.',
  },
  {
    keyword: 'Cohérence',
    suffix: '> Coup de cœur',
    text: 'Le client doit comprendre le logo, pas l\u2019aimer au premier regard. Un coup de cœur s\u2019essouffle, un système cohérent dure. Le logo, la palette, la typo et le naming forment un tout\u00a0— pas une collection de pièces isolées.',
  },
  {
    keyword: 'Longévité',
    suffix: '> Tendance',
    text: 'Les tendances passent, un réseau de santé reste. Pas de dégradés à la mode, pas de flat design qui sera daté dans 3 ans. Les choix graphiques doivent tenir 10 ans minimum sans paraître datés.',
  },
] as const;

export const SlidePrincipes = () => (
  <div className="flex h-full flex-col justify-between p-10">
    <div className="flex items-baseline gap-4">
      <H1>Principes de design</H1>
      <Badge variant="default" size="sm">
        4 règles
      </Badge>
    </div>

    <P className="max-w-none">Quatre règles guident chaque décision créative dans ce projet.</P>

    <div className="grid grid-cols-2 gap-4">
      {PRINCIPES.map(p => (
        <Card key={p.keyword} padding="md" className="flex flex-col gap-2">
          <div className="flex items-baseline gap-2">
            <span className="text-accent text-lg font-bold">{p.keyword}</span>
            <span className="text-muted text-sm">{p.suffix}</span>
          </div>
          <p className="text-base leading-relaxed text-(--sub)">{p.text}</p>
        </Card>
      ))}
    </div>

    <div />
  </div>
);

/* ─── En un coup d'œil — données clés ─────────────────────── */

const CHIFFRES = [
  {
    value: '370\u2019805',
    text: 'Passages ambulatoires au RHNe en 2024. Record historique. L\u2019ambulatoire croît pendant que l\u2019hospitalisation baisse. Le virage est en cours, réso.ne doit en devenir le visage.',
    source: 'RTN, 19.05.2025',
    url: 'https://www.rtn.ch/rtn/Actualite/Region/20250519-RHNe-un-deficit-deux-fois-plus-important-qu-imagine.html',
  },
  {
    value: '430',
    text: 'Patients hospitalisés en janvier 2025, contre 340-360 en temps normal. Urgences saturées, le canton demande publiquement aux gens de ne pas venir aux urgences pour les cas non vitaux. C\u2019est exactement le rôle de réso.ne.',
    source: 'RTS, 08.01.2025',
    url: 'https://www.rts.ch/info/regions/neuchatel/2025/article/urgences-rhne-saturees-alternatives-pour-les-cas-non-vitaux-a-neuchatel-28748676.html',
  },
  {
    value: '29,5 M',
    text: 'Déficit du RHNe en 2024. Le double du budget prévu. Les lits bloqués par les patients en attente de placement EMS paralysent le système. L\u2019ambulatoire hors murs n\u2019est plus une option, c\u2019est une nécessité économique.',
    source: 'RTS, 20.05.2025',
    url: 'https://www.rts.ch/info/regions/neuchatel/2025/article/deficit-record-de-29-5-millions-pour-l-hopital-neuchatelois-rhne-en-2024-28888761.html',
  },
  {
    value: '2 / 4',
    text: 'Deux identités visuelles pour quatre centres. Le logo Volta (3 sites) et le logo Cadolles (1 site). Aucun ne dit \u201créseau\u201d. Aucun ne dit \u201créso.ne\u201d. Le patient ne sait pas que ces centres sont liés entre eux ni au RHNe.',
    source: 'Audit interne',
  },
] as const;

export const SlideChiffres = () => (
  <div className="flex h-full flex-col justify-between p-10">
    <div>
      <H1>En un coup d&apos;œil</H1>
    </div>

    <div className="grid grid-cols-2 gap-4">
      {CHIFFRES.map(c => (
        <Card key={c.value} padding="md" className="flex flex-col gap-2">
          <span
            className="text-accent leading-none font-bold tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            {c.value}
          </span>
          <p className="flex-1 text-base leading-relaxed text-(--sub)">{c.text}</p>
          {'url' in c && c.url ? (
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent text-[11px] hover:underline"
            >
              {c.source}
            </a>
          ) : (
            <span className="text-muted text-[11px]">{c.source}</span>
          )}
        </Card>
      ))}
    </div>

    <div />
  </div>
);

/* ─── 4. Ce qu'est réso.ne ──────────────────────────────────── */

const ACTIVITES = [
  {
    num: '01',
    title: 'Permanences médicales',
    text: 'Médecine de cabinet sans rendez-vous, petite traumatologie, adultes. La Chaux-de-Fonds et Neuchâtel.',
  },
  {
    num: '02',
    title: 'Médecine de premier recours',
    text: 'Généraliste, pédiatrie, gynécologie. La première entrée dans le parcours de soins.',
  },
  {
    num: '03',
    title: 'Spécialistes en soutien',
    text: 'Neurologie et autres spécialités qui viennent consulter dans les centres en appui à la médecine de premier recours.',
  },
] as const;

export const SlideResoNe = () => (
  <div className="flex h-full flex-col justify-between p-10">
    <div>
      <H1>Ce qu&apos;est réso.ne</H1>
      <P className="mt-2 max-w-none">
        réso.ne est une SA née du rachat du Groupe Santé Volta par le RHNe fin 2025. Quatre centres,
        trois types d&apos;activités, un réseau.
      </P>
    </div>

    <div className="grid grid-cols-3 gap-6">
      {ACTIVITES.map(a => (
        <Card key={a.num} padding="lg" className="flex flex-col gap-3">
          <span className="text-accent font-mono text-2xl font-bold">{a.num}</span>
          <span className="text-fg text-lg font-medium">{a.title}</span>
          <p className="text-base leading-relaxed text-(--sub)">{a.text}</p>
        </Card>
      ))}
    </div>

    <div />
  </div>
);

/* ─── 5. La mission ─────────────────────────────────────────── */

const PARCOURS = [
  'Le RHNe sort de ses murs',
  'Les médecins hospitaliers consultent dans les centres réso.ne',
  'Le patient qui a besoin de l\u2019hôpital est orienté vers le RHNe',
  'Continuum de soins',
] as const;

export const SlideMission = () => (
  <div className="flex h-full flex-col justify-between p-10">
    <div>
      <H1>La mission</H1>
    </div>

    {/* Two columns: parcours left + citation right */}
    <div className="grid grid-cols-[1fr_auto] items-end gap-16">
      <div className="flex flex-col items-start gap-2">
        {PARCOURS.map((step, i) => (
          <div key={step} className="flex flex-col items-start gap-2">
            <Card padding="md" className="w-full">
              <p className="text-fg text-base leading-relaxed font-medium">{step}</p>
            </Card>
            {i < PARCOURS.length - 1 && (
              <span className="text-accent pl-4 text-xl font-bold">&darr;</span>
            )}
          </div>
        ))}
      </div>

      <blockquote className="border-accent w-72 border-l-[3px] pl-6">
        <span
          className="text-fg leading-[1.15] font-medium tracking-tight"
          style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}
        >
          Développer la médecine de proximité dans le canton de Neuchâtel
        </span>
      </blockquote>
    </div>

    <p className="text-muted text-sm">
      Ce projet s&apos;inscrit dans le programme du Conseil d&apos;État et dans le plan de
      développement 2026-2030 du RHNe.
    </p>
  </div>
);

/* ─── 6. Le positionnement ──────────────────────────────────── */

const POSITIONS = [
  {
    keyword: 'Juridiquement séparé',
    text: 'réso.ne est une SA indépendante, pas une entité étatique.',
  },
  {
    keyword: 'Administrativement indépendant',
    text: 'Gestion propre, décisions propres, identité propre.',
  },
  {
    keyword: 'Fonctionnellement complémentaire',
    text: 'Les médecins du RHNe consultent dans les centres réso.ne. Le patient circule entre les deux sans rupture.',
  },
] as const;

export const SlidePositionnement = () => (
  <div className="flex h-full flex-col justify-between p-10">
    <div>
      <H1>Le positionnement</H1>
    </div>

    <div className="grid grid-cols-3 gap-6">
      {POSITIONS.map(p => (
        <Card key={p.keyword} padding="lg" className="flex flex-col gap-3">
          <span className="text-accent text-xl font-bold">{p.keyword}</span>
          <p className="text-base leading-relaxed text-(--sub)">{p.text}</p>
        </Card>
      ))}
    </div>

    <P className="text-muted max-w-none text-base italic">
      L&apos;identité doit pouvoir s&apos;apparenter au RHNe tout en étant clairement séparée. Pas
      de confusion avec le logo RHNe, pas de ressemblance avec l&apos;ancien Volta. Un nouveau
      départ.
    </P>
  </div>
);

/* ─── 7. Introduction — Analyse (chapter) ─────────────────── */

export const SlideAnalyse = () => (
  <div className="flex h-full flex-col justify-between p-10">
    <div>
      <H1>Introduction</H1>
    </div>

    <div className="flex flex-col gap-6">
      <P className="max-w-none">
        Avant de dessiner quoi que ce soit, on a analysé le paysage dans lequel réso.ne va évoluer.
        Qui sont les acteurs de la santé ambulatoire en Suisse romande, comment ils se présentent,
        ce qui fonctionne et ce qui ne fonctionne pas.
      </P>
      <P className="max-w-none">
        Cette analyse couvre quatre références&nbsp;: Medbase, le plus grand réseau ambulatoire de
        Suisse et la référence en matière de système de naming unifié. L&apos;Ensemble Hospitalier
        de la Côte (EHC), qui gère plus de 30 établissements sous une identité distinctive et
        chaleureuse. Vidymed à Lausanne, le benchmark en expérience digitale patient. Et Unisanté,
        l&apos;ancien bras ambulatoire du CHUV devenu autonome en 2019&nbsp;— le précédent
        structurel le plus directement comparable à ce que réso.ne doit devenir.
      </P>
    </div>

    <span
      className="text-accent leading-[1.2] font-medium tracking-tight"
      style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}
    >
      Rien dans ce document n&apos;est arbitraire. Chaque décision est alimentée par cette
      recherche.
    </span>
  </div>
);

/* ─── Benchmark — grille 2×2 ──────────────────────────────── */

const BENCHMARKS = [
  {
    name: 'Medbase',
    stats: '150+ sites · Propriété de Migros · 4\u2019400 employés',
    text: 'Le plus grand réseau ambulatoire de Suisse. Centres médicaux, pharmacies, dentistes, physiothérapie, médecine du sport. Un seul système de naming partout\u00a0: \u201cMedbase + Ville\u201d. Ce n\u2019est pas un concurrent direct de réso.ne\u00a0— ni la même échelle, ni le même modèle économique\u00a0— mais c\u2019est la référence en matière de naming ambulatoire unifié en Suisse.',
    url: 'https://www.medbase.ch',
  },
  {
    name: 'EHC · Ensemble Hospitalier de la Côte',
    stats: '30+ établissements · 2\u2019050 employés · District de la Côte (VD)',
    text: 'Hôpital de soins aigus, centres de réadaptation, 25+ centres médicaux, 3 permanences, 3 EMS. Palette corail qui rompt avec le bleu hospitalier. Tout est sous la même identité visuelle. La preuve qu\u2019on peut être un réseau de santé public et avoir une identité chaleureuse et distinctive.',
    url: 'https://www.ehc-vd.ch',
  },
  {
    name: 'Vidymed',
    stats: '3 centres + 4 urgences · Lausanne',
    text: 'Le benchmark digital. Site mobile-first, sélecteur de centre intelligent, annuaire de 40+ spécialités. Design minimaliste et confiant. Le modèle à suivre pour l\u2019expérience patient en ligne\u00a0: clair, rapide, sans friction. L\u2019échelle est comparable à réso.ne.',
    url: 'https://www.vidymed.ch',
  },
  {
    name: 'Unisanté',
    stats: '~1\u2019000 employés · Lausanne · Autonome depuis 2019',
    text: 'L\u2019ancien bras ambulatoire du CHUV devenu un établissement autonome de droit public. Identité visuelle totalement indépendante du CHUV. Siège au Biopôle depuis octobre 2025. C\u2019est le modèle abouti de ce que réso.ne peut devenir\u00a0: une entité ambulatoire qui existe par elle-même, sans être confondue avec l\u2019hôpital parent.',
    url: 'https://www.unisante.ch',
  },
] as const;

export const SlideBenchmark = () => (
  <div className="flex h-full flex-col justify-between p-10">
    <div>
      <H1>Benchmark</H1>
    </div>

    <div className="grid grid-cols-2 gap-4">
      {BENCHMARKS.map(b => (
        <Card key={b.name} padding="md" className="flex flex-col gap-3">
          <span className="text-fg text-lg font-bold">{b.name}</span>
          <span className="text-accent font-mono text-xs">{b.stats}</span>
          <p className="flex-1 text-base leading-relaxed text-(--sub)">{b.text}</p>
          <a
            href={b.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent text-sm font-medium hover:underline"
          >
            Voir le site &rarr;
          </a>
        </Card>
      ))}
    </div>

    <div />
  </div>
);

/* ─── Le parcours patient — flowchart pleine page ────────── */

export const SlideParcours = () => (
  <div className="flex h-full flex-col p-8">
    <p className="text-xl text-(--sub)">
      Quand un patient a un problème de santé, où va-t-il&nbsp;?
    </p>

    <div className="mt-4 grid flex-1 grid-cols-[2.5rem_1fr] content-evenly items-center gap-x-3">
      {/* Row 1 — Start */}
      <div />
      <div className="border-fg/20 bg-surface/80 text-fg rounded-md border-2 px-5 py-3 text-base font-bold">
        J&apos;ai un problème de santé
      </div>

      {/* Row 2 — ↓ Decision 1: urgence */}
      <span className="text-accent text-center text-2xl leading-none">&darr;</span>
      <div className="flex items-center gap-3">
        <div className="border-border text-fg rounded-md border border-dashed px-4 py-2 text-base">
          Est-ce une urgence vitale&nbsp;?
        </div>
        <span className="text-accent shrink-0 text-sm font-bold">OUI &rarr;</span>
        <div className="border-danger/30 bg-danger/10 rounded-md border px-4 py-2 text-sm">
          144 &rarr; <strong className="text-danger">RHNe Urgences</strong>{' '}
          <span className="text-muted">(24h/24)</span>
        </div>
      </div>

      {/* Row 3 — ↓ NON → Decision 2: médecin traitant */}
      <div className="flex flex-col items-center">
        <span className="text-accent text-2xl leading-none">&darr;</span>
        <span className="text-muted text-xs">NON</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="border-border text-fg rounded-md border border-dashed px-4 py-2 text-base">
          Ai-je un médecin traitant&nbsp;?
        </div>
        <span className="text-accent shrink-0 text-sm font-bold">OUI &rarr;</span>
        <div className="border-border text-fg rounded-md border px-4 py-2 text-sm">
          Médecin traitant
        </div>
      </div>

      {/* Row 4 — ↓ NON → réso.ne Permanence */}
      <div className="flex flex-col items-center">
        <span className="text-accent text-2xl leading-none">&darr;</span>
        <span className="text-muted text-xs">NON</span>
      </div>
      <div className="border-accent/40 bg-accent/10 rounded-md border px-5 py-3">
        <div className="text-accent text-base font-bold">réso.ne &mdash; Permanence médicale</div>
        <div className="text-sm text-(--sub)">
          Sans rendez-vous &middot; adultes &middot; petite traumatologie
        </div>
      </div>

      {/* Row 5 — ↓ Decision 3: suivi */}
      <span className="text-accent text-center text-2xl leading-none">&darr;</span>
      <div className="flex items-center gap-3">
        <div className="border-border text-fg rounded-md border border-dashed px-4 py-2 text-base">
          Besoin d&apos;un suivi régulier&nbsp;?
        </div>
        <span className="text-accent shrink-0 text-sm font-bold">OUI &rarr;</span>
        <div className="border-accent/40 bg-accent/10 rounded-md border px-4 py-2 text-sm">
          <strong className="text-accent">réso.ne</strong> &mdash; 1er recours
        </div>
        <span className="text-muted text-sm">&rarr;</span>
        <div className="border-accent/40 bg-accent/10 rounded-md border px-4 py-2 text-sm">
          <strong className="text-accent">réso.ne</strong> &mdash; Spécialistes
        </div>
      </div>

      {/* Row 6 — ↓ Decision 4: hospitalisation */}
      <span className="text-accent text-center text-2xl leading-none">&darr;</span>
      <div className="flex items-center gap-3">
        <div className="border-border text-fg rounded-md border border-dashed px-4 py-2 text-base">
          Besoin d&apos;hospitalisation&nbsp;?
        </div>
        <span className="text-accent shrink-0 text-sm font-bold">OUI &rarr;</span>
        <div className="border-info/30 bg-info/10 rounded-md border px-4 py-2 text-sm">
          <strong className="text-info">RHNe</strong> &mdash; Continuité du dossier
        </div>
      </div>

      {/* Row 7 — ↓ NON → End */}
      <div className="flex flex-col items-center">
        <span className="text-accent text-2xl leading-none">&darr;</span>
        <span className="text-muted text-xs">NON</span>
      </div>
      <div className="border-accent/40 bg-accent/10 text-fg rounded-md border px-5 py-3 text-base">
        Le patient reste dans le réseau <strong className="text-accent">réso.ne</strong>
      </div>
    </div>

    <p className="text-muted mt-4 text-base italic">
      réso.ne est la porte d&apos;entrée. Le RHNe est le filet de sécurité. Le patient circule entre
      les deux sans rupture.
    </p>
  </div>
);

/* ─── 10. Aujourd'hui ────────────────────────────────────── */

const CENTRES = [
  {
    name: 'Permanence Volta',
    lieu: 'La Chaux-de-Fonds',
    detail: 'Permanence + consultations gynécologie',
    note: 'Bâtiment Volta (PPE, autres médecins présents non liés à réso.ne)',
  },
  {
    name: 'Permanence Volta Fleurier',
    lieu: 'Val-de-Travers',
    detail: 'Consultations gynécologie',
  },
  {
    name: 'Volta Val-de-Ruz',
    lieu: 'Val-de-Ruz',
    detail: 'Consultations uniquement',
  },
  {
    name: 'Centre médical des Cadolles',
    lieu: 'Neuchâtel',
    detail: 'Permanence + premier recours + pédiatrie',
    note: 'Logo différent de Volta',
  },
] as const;

/* Offsets to scatter blocks deliberately — no alignment, no system */
const SCATTER = [
  'col-start-1 row-start-1 rotate-[-1deg]',
  'col-start-2 row-start-1 translate-y-8 rotate-[0.5deg]',
  'col-start-1 row-start-2 -translate-y-2 translate-x-4 rotate-[1deg]',
  'col-start-2 row-start-2 translate-y-6 -translate-x-2 rotate-[-0.8deg]',
] as const;

export const SlideAujourdhui = () => (
  <div className="flex h-full flex-col justify-between p-10">
    <div>
      <H1>Aujourd&apos;hui</H1>
    </div>

    {/* Scattered blocks — deliberately unaligned */}
    <div className="grid flex-1 grid-cols-2 grid-rows-2 gap-6 py-4">
      {CENTRES.map((c, i) => (
        <div
          key={c.lieu}
          className={cn(
            'border-border bg-surface/60 flex flex-col gap-2 rounded-lg border p-5',
            SCATTER[i],
          )}
        >
          <span className="text-fg text-lg font-bold">{c.name}</span>
          <span className="text-accent font-mono text-sm font-medium">{c.lieu}</span>
          <p className="text-base leading-relaxed text-(--sub)">{c.detail}</p>
          {'note' in c && c.note && <p className="text-muted mt-1 text-xs italic">{c.note}</p>}
        </div>
      ))}
    </div>

    <p className="text-muted text-base italic">
      Quatre centres. Deux identités. Aucun lien visible entre eux, ni avec le RHNe. Le patient ne
      sait pas qu&apos;il est dans un réseau.
    </p>
  </div>
);

/* ─── 12. Demain ─────────────────────────────────────────── */

const CENTRES_DEMAIN = [
  'réso.ne\nCentre médical\nde Neuchâtel',
  'réso.ne\nCentre médical\nde La Chaux-de-Fonds',
  'réso.ne\nCentre médical\ndu Val-de-Travers',
  'réso.ne\nCentre médical\ndu Val-de-Ruz',
] as const;

export const SlideDemain = () => (
  <div className="flex h-full flex-col p-8">
    <H1>Demain</H1>

    {/* Structured hierarchy — fills entire remaining space */}
    <div className="flex flex-1 flex-col items-center justify-evenly">
      {/* RHNe — endorsement discret */}
      <div className="flex flex-col items-center gap-1">
        <div className="border-border rounded-lg border border-dashed px-8 py-4 text-center">
          <span className="text-muted text-lg font-medium">RHNe</span>
        </div>
        <p className="text-muted text-center text-xs italic">
          Endorsement discret — une mention, pas un logo, pas de co-signature
        </p>
      </div>

      {/* Dotted connector */}
      <div className="border-border/60 flex-1 border-l border-dashed" />

      {/* réso.ne — bloc principal dominant */}
      <div className="border-accent/40 bg-accent/10 w-full max-w-lg rounded-xl border-2 px-12 py-8 text-center">
        <img src="/images/Variante_3.svg" alt="réso.ne" className="mx-auto h-12" />
        <p className="mt-2 text-lg text-(--sub)">Marque réseau</p>
      </div>

      {/* Connector to centres */}
      <div className="border-accent/30 flex-1 border-l-2" />

      {/* Horizontal bar — full width */}
      <div className="bg-accent/30 h-0.5 w-full" />

      {/* 4 vertical connectors */}
      <div className="grid w-full grid-cols-4">
        {CENTRES_DEMAIN.map(c => (
          <div key={c} className="flex flex-col items-center">
            <div className="border-accent/30 h-6 border-l-2" />
          </div>
        ))}
      </div>

      {/* 4 centres — aligned, identical */}
      <div className="grid w-full grid-cols-4 gap-4">
        {CENTRES_DEMAIN.map(c => (
          <div
            key={c}
            className="border-accent/30 bg-accent/5 rounded-lg border px-4 py-5 text-center"
          >
            <p className="text-fg text-sm leading-tight font-semibold whitespace-pre-line">{c}</p>
          </div>
        ))}
      </div>

      {/* Spacer before future connector */}
      <div className="flex-1" />

      {/* Connector to future */}
      <div className="bg-accent/30 h-0.5 w-full" />
      <div className="border-accent/30 h-6 border-l-2" />

      {/* Futurs sites — dashed, full width */}
      <div className="border-border w-full rounded-lg border border-dashed px-6 py-4 text-center">
        <span className="text-muted text-base italic">Futurs sites</span>
      </div>
    </div>
  </div>
);

/* ─── Stratégie ──────────────────────────────────────────────── */

export const SlideStrategie = () => (
  <div className="flex h-full flex-col justify-between p-10">
    <H1>La direction retenue</H1>

    {/* Middle — deux colonnes : texte courant + citation */}
    <div className="grid grid-cols-[1fr_auto] items-end gap-20">
      <div className="flex flex-col gap-5">
        <p className="text-lg leading-relaxed text-(--sub)">
          L&apos;identité de réso.ne doit être assez proche du RHNe pour rassurer, assez différente
          pour ne pas être confondue avec l&apos;hôpital, et assez modulaire pour grandir.
        </p>

        <p className="text-lg leading-relaxed text-(--sub)">
          Notre conviction&nbsp;: le lien avec le RHNe est un atout, pas un handicap. Le RHNe
          c&apos;est le plus grand employeur de santé du canton, des centaines de médecins, une
          infrastructure que tout le monde connaît. Même si l&apos;image de l&apos;hôpital peut être
          discutée par certains, la portée et la crédibilité du réseau hospitalier restent un levier
          puissant pour un nouveau réseau ambulatoire. réso.ne a tout intérêt à s&apos;appuyer
          dessus plutôt qu&apos;à s&apos;en cacher.
        </p>

        <p className="text-lg leading-relaxed text-(--sub)">
          La direction retenue maintient une parenté visuelle avec le RHNe&nbsp;: même typographie,
          même famille de couleurs, même logique de forme. Le RHNe reste un endorsement discret.
          L&apos;identité de réso.ne est propre, mais le lien de famille est lisible.
        </p>
      </div>

      {/* Citation — colonne droite */}
      <blockquote className="border-accent w-64 border-l-[3px] pl-6">
        <span
          className="text-fg leading-[1.3] font-medium tracking-tight"
          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}
        >
          On est dans la même famille, pas dans le même bâtiment.
        </span>
      </blockquote>
    </div>

    {/* Bottom spacer */}
    <div />
  </div>
);

/* ─── 9. Le triple défi ────────────────────────────────────── */

const DEFIS = [
  {
    num: 1,
    title: 'Rassurer les convaincus',
    text: 'Les patients qui font confiance au RHNe doivent sentir que réso.ne est fiable et rattaché au réseau hospitalier. Pour eux, le lien avec l\u2019hôpital est un gage de qualité.',
  },
  {
    num: 2,
    title: 'Séduire les méfiants',
    text: 'Les patients méfiants envers les hôpitaux — une réalité à La Chaux-de-Fonds comme à Neuchâtel — doivent percevoir réso.ne comme leur centre médical de proximité, pas une annexe hospitalière.',
  },
  {
    num: 3,
    title: 'Anticiper la croissance',
    text: 'L\u2019identité doit être extensible. Demain, un cabinet d\u2019ophtalmologie ou de dermatologie pourrait rejoindre le réseau. Le système doit absorber de nouvelles spécialités et de nouveaux lieux sans casser.',
  },
] as const;

export const SlideDefi = () => (
  <div className="flex h-full flex-col justify-between p-10">
    <H1>Trois contraintes à gérer simultanément</H1>

    <div className="flex flex-col">
      {DEFIS.map((d, i) => (
        <div key={d.num}>
          {i > 0 && <div className="bg-border my-6 h-px w-full" />}
          <div className="grid grid-cols-[1fr_1.6fr] items-baseline gap-10">
            <div className="flex items-center gap-4">
              <span className="bg-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold text-white">
                {d.num}
              </span>
              <P className="mb-0! max-w-none">{d.title}</P>
            </div>
            <p className="text-lg leading-relaxed text-(--sub)">{d.text}</p>
          </div>
        </div>
      ))}
    </div>

    <div />
  </div>
);

/* ─── 15. Nomenclature — Trois niveaux de lecture ─────────── */

const NIVEAUX = [
  {
    logo: true,
    logoH: 'h-10',
    suffix: '',
    displayStyle: 'text-accent font-bold tracking-tight',
    tag: 'Niveau 1',
    label: 'La marque réseau',
    text: 'Identifie le réseau. Présent partout. C\u2019est le lien entre tous les centres.',
  },
  {
    logo: false,
    logoH: '',
    suffix: 'Centre médical de [lieu]',
    displayStyle: 'text-fg font-medium tracking-tight',
    fontSize: 'clamp(1.4rem, 2.8vw, 2rem)',
    tag: 'Niveau 2',
    label: 'Le nom d\u2019usage',
    text: 'Ce que le patient dit, ce qu\u2019il cherche sur Google, ce qu\u2019il lit en arrivant. C\u2019est le nom du quotidien.',
  },
  {
    logo: true,
    logoH: 'h-7',
    suffix: ' — Centre médical de [lieu]',
    displayStyle: 'text-fg font-medium tracking-tight',
    fontSize: 'clamp(1.2rem, 2.4vw, 1.7rem)',
    tag: 'Niveau 3',
    label: 'Le nom complet',
    text: 'La version officielle. Documents, signalétique complète, site web, correspondance.',
  },
] as const;

export const SlideNomenclature = () => (
  <div className="flex h-full flex-col p-10">
    <H1>Trois niveaux de lecture</H1>

    <div className="flex flex-1 flex-col justify-evenly">
      {NIVEAUX.map((n, i) => (
        <div key={n.tag} className="grid grid-cols-[1fr_1fr] items-center gap-12">
          {/* Left — display name */}
          <div
            className={cn(
              'border-border rounded-lg border px-8 py-6',
              i === 0 && 'border-accent/30 bg-accent/5',
            )}
          >
            <span
              className={n.displayStyle}
              style={{ fontSize: 'fontSize' in n ? n.fontSize : undefined }}
            >
              {n.logo && <ResoLogo h={n.logoH} />}
              {n.suffix}
            </span>
          </div>

          {/* Right — explanation */}
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline gap-3">
              <Badge variant="default" size="sm">
                {n.tag}
              </Badge>
              <span className="text-fg text-lg font-medium">{n.label}</span>
            </div>
            <p className="text-base leading-relaxed text-(--sub)">{n.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ─── 16. Variante A — Nom de ville ──────────────────────── */

const VARIANTE_A = [
  { marque: 'réso.ne', descripteur: 'Centre médical', lieu: 'de Neuchâtel' },
  { marque: 'réso.ne', descripteur: 'Centre médical', lieu: 'de La Chaux-de-Fonds' },
  { marque: 'réso.ne', descripteur: 'Centre médical', lieu: 'du Val-de-Travers' },
  { marque: 'réso.ne', descripteur: 'Centre médical', lieu: 'du Val-de-Ruz' },
] as const;

export const SlideVarianteA = () => (
  <div className="flex h-full flex-col p-10">
    <H1>Nouvelle nomenclature</H1>

    <div className="mt-2 flex flex-1 flex-col justify-evenly">
      {VARIANTE_A.map((c, i) => (
        <div key={c.lieu} className="flex flex-col gap-1">
          <span className="text-muted font-mono text-[10px] tracking-widest uppercase">
            Centre {i + 1}
          </span>
          <div className="flex items-center gap-2">
            <div className="border-accent/30 bg-accent/5 rounded-md border px-4 py-3">
              <span className="text-accent text-lg font-bold">{c.marque}</span>
            </div>
            <div className="border-border rounded-md border px-4 py-3">
              <span className="text-fg text-lg font-medium">{c.descripteur}</span>
            </div>
            <div className="border-border rounded-md border px-4 py-3">
              <span className="text-fg text-lg font-medium">{c.lieu}</span>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-4 flex flex-col gap-3">
      <p className="text-base leading-relaxed text-(--sub)">
        Le patient cherche un médecin près de chez lui. Il cherche par ville, pas par quartier.
        &laquo;&nbsp;Centre médical de Neuchâtel&nbsp;&raquo; est immédiatement compris par tout le
        monde&nbsp;— un enfant de 10&nbsp;ans, une personne de 80&nbsp;ans, un nouveau résident du
        canton.
      </p>
      <p className="text-base leading-relaxed text-(--sub)">
        C&apos;est le modèle qui fonctionne à grande échelle&nbsp;: Medbase Lausanne, Medbase
        Fribourg. Le principe &laquo;&nbsp;marque + ville&nbsp;&raquo; a fait ses preuves. Le nom de
        quartier (Cadolles, Volta) disparaît de la marque mais reste dans l&apos;adresse physique.
      </p>
    </div>
  </div>
);

/* ─── Extensibilité ────────────────────────────────────────── */

const EXTENSIBILITE = [
  {
    label: 'Un centre d\u2019ophtalmologie ouvre à Milvignes',
    marque: 'réso.ne',
    descripteur: 'Centre d\u2019ophtalmologie',
    lieu: 'de Milvignes',
  },
  {
    label: 'Un cabinet de gynécologie ouvre au Landeron',
    marque: 'réso.ne',
    descripteur: 'Cabinet de gynécologie',
    lieu: 'du Landeron',
  },
  {
    label: 'Un cabinet de médecine générale ouvre au Locle',
    marque: 'réso.ne',
    descripteur: 'Cabinet médical',
    lieu: 'du Locle',
  },
] as const;

export const SlideExtensibilite = () => (
  <div className="flex h-full flex-col p-10">
    <H1>Le système est extensible</H1>

    <div className="mt-2 flex flex-1 flex-col justify-evenly">
      {EXTENSIBILITE.map((c, i) => (
        <div key={c.lieu} className="flex flex-col gap-1">
          <P className="max-w-none">
            Exemple {i + 1} — {c.label}
          </P>
          <div className="flex items-center gap-2">
            <div className="border-accent/30 bg-accent/5 rounded-md border px-4 py-3">
              <span className="text-accent text-lg font-bold">{c.marque}</span>
            </div>
            <div className="border-border rounded-md border px-4 py-3">
              <span className="text-fg text-lg font-medium">{c.descripteur}</span>
            </div>
            <div className="border-border rounded-md border px-4 py-3">
              <span className="text-fg text-lg font-medium">{c.lieu}</span>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-4">
      <p className="text-base leading-relaxed text-(--sub)">
        Le descripteur s&apos;adapte à l&apos;activité. Le lieu s&apos;adapte à la géographie.
        réso.ne reste constant. Quel que soit le type de structure ou la localisation dans le
        canton, le nom se construit tout seul. Pas besoin de réinventer le système à chaque
        ouverture.
      </p>
    </div>
  </div>
);

/* ─── Variante 1 — Le parti pris ─────────────────────────── */

export const SlidePartiPrisA = () => (
  <div className="flex h-full flex-col justify-between p-10">
    <H1>Votre nouveau logo</H1>

    <div className="grid grid-cols-[1fr_auto] items-end gap-20">
      <div className="flex flex-col gap-5">
        <p className="text-lg leading-relaxed text-(--sub)">
          Ce logo maintient un lien visuel direct avec le RHNe. Même typographie, Proxima Nova. Même
          palette teal. Même logique de forme carrée pour le symbole. Un patient qui connaît
          l&apos;hôpital sentira immédiatement quelque chose de familier.
        </p>

        <p className="text-lg leading-relaxed text-(--sub)">
          Le symbole ne montre pas tout. Il suggère un fragment de réseau&nbsp;: des lignes qui se
          croisent, des points qui se connectent. Pas besoin de tout voir pour comprendre que
          c&apos;est un système. Deux points, deux rôles. L&apos;un est plein, le patient, présent,
          ancré. L&apos;autre est vide, c&apos;est le point du .ne, la destination vers laquelle le
          réseau le guide.
        </p>

        <p className="text-lg leading-relaxed text-(--sub)">
          Les intersections entre les lignes sont les connexions entre les centres, entre les
          médecins, entre l&apos;ambulatoire et l&apos;hôpital. Le carré cadre ce réseau comme une
          fenêtre&nbsp;: on voit un morceau, on comprend qu&apos;il y a un ensemble derrière.
        </p>
      </div>

      <blockquote className="border-accent w-64 border-l-[3px] pl-6">
        <span
          className="text-fg leading-[1.3] font-medium tracking-tight"
          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}
        >
          Un fragment suffit à comprendre le tout.
        </span>
      </blockquote>
    </div>

    <div />
  </div>
);

/* ─── Variante 1 — Le logo ───────────────────────────────── */

export const SlideLogoA = () => (
  <div className="flex h-full items-center justify-center p-10">
    <img
      src="/images/Variante_1.svg"
      alt="réso.ne — Variante Cousinage"
      className="animate-logo-reveal max-h-[45vh] max-w-[45vw] object-contain"
    />

    <style>{`
      @keyframes logo-reveal {
        0%   { opacity: 0; filter: blur(12px); transform: scale(0.92); }
        60%  { opacity: 1; filter: blur(0);    transform: scale(1.01); }
        100% { opacity: 1; filter: blur(0);    transform: scale(1);   }
      }
      .animate-logo-reveal {
        animation: logo-reveal 5s cubic-bezier(0.16, 1, 0.3, 1) both;
      }
    `}</style>
  </div>
);

/* ─── Variante 1 — Le logo (opti) ───────────────────────── */

export const SlideLogoOpti = () => (
  <div className="flex h-full items-center justify-center p-10">
    <img
      src="/images/variante_couleur-opti.svg"
      alt="réso.ne — Logo optimisé"
      className="max-h-[45vh] max-w-[45vw] object-contain"
    />
  </div>
);

/* ─── Variante 1 — Construction du logo ─────────────────── */

export const SlideConstructionA = () => (
  <div className="flex h-full flex-col p-10">
    <H1>Construction</H1>

    {/* Image centrée, grande */}
    <div className="flex flex-1 items-center justify-center">
      <img
        src="/images/construction.svg"
        alt="Grille de construction du logo réso.ne"
        className="max-h-[65vh] max-w-[70vw] object-contain"
      />
    </div>

    {/* Texte en bas */}
    <div className="max-w-3xl">
      <p className="text-base leading-relaxed text-(--sub)">
        Le logo est construit sur une grille stricte, en réutilisant les proportions de la
        typographie Proxima Nova. Les éléments intérieurs suivent une logique en tiers&nbsp;: le
        point plein sur le tiers gauche, l&apos;intersection des lignes sur le tiers droit, et le
        point du réseau &mdash; celui du .ne &mdash; centré dans le troisième tiers du carré.
      </p>
    </div>
  </div>
);

/* ─── Variante 1 — Construction du logo (opti) ─────────── */

export const SlideConstructionOpti = () => (
  <div className="flex h-full flex-col p-10">
    <H1>Construction</H1>

    <div className="flex flex-1 items-center justify-center">
      <img
        src="/images/construction-opti.svg"
        alt="Grille de construction du logo réso.ne — optimisé"
        className="max-h-[65vh] max-w-[70vw] object-contain"
      />
    </div>

    <div className="max-w-3xl">
      <p className="text-base leading-relaxed text-(--sub)">
        Le logo est construit sur une grille stricte, en réutilisant les proportions de la
        typographie Proxima Nova. Les éléments intérieurs suivent une logique en tiers&nbsp;: le
        point plein sur le tiers gauche, l&apos;intersection des lignes sur le tiers droit, et le
        point du réseau &mdash; celui du .ne &mdash; centré dans le troisième tiers du carré.
      </p>
    </div>
  </div>
);

/* ─── Variante 1 — Déclinaisons ──────────────────────────── */

export const SlideDeclinaisonsA = () => (
  <div className="grid h-full grid-cols-2 grid-rows-2">
    {/* Haut gauche — Variante 3 sur blanc */}
    <div className="flex items-center justify-center bg-white">
      <img
        src="/images/Variante_3.svg"
        alt="Logo variante couleur"
        className="max-h-[60%] max-w-[60%] object-contain"
      />
    </div>

    {/* Haut droite — Blanc sur anthracite */}
    <div className="flex items-center justify-center" style={{ backgroundColor: '#2D2D2D' }}>
      <img
        src="/images/Variante_white.svg"
        alt="Logo blanc sur fond sombre"
        className="max-h-[60%] max-w-[60%] object-contain"
      />
    </div>

    {/* Bas gauche — Blanc sur teal Réso.ne */}
    <div className="flex items-center justify-center" style={{ backgroundColor: '#59BFBD' }}>
      <img
        src="/images/Variante_white.svg"
        alt="Logo blanc sur fond teal"
        className="max-h-[60%] max-w-[60%] object-contain"
      />
    </div>

    {/* Bas droite — Noir sur blanc teal */}
    <div className="flex items-center justify-center" style={{ backgroundColor: '#F5FAFA' }}>
      <img
        src="/images/Variante_black.svg"
        alt="Logo noir sur fond clair"
        className="max-h-[60%] max-w-[60%] object-contain"
      />
    </div>
  </div>
);

/* ─── Déclinaisons compact ───────────────────────────────── */

export const SlideDeclinaisonsCompact = () => (
  <div className="grid h-full grid-cols-2 grid-rows-2">
    {/* Haut gauche — Compact couleur sur blanc */}
    <div className="flex items-center justify-center bg-white">
      <img
        src="/images/Variante_compact.svg"
        alt="Logo compact couleur"
        className="max-h-[60%] max-w-[60%] object-contain"
      />
    </div>

    {/* Haut droite — Compact blanc sur anthracite */}
    <div className="flex items-center justify-center" style={{ backgroundColor: '#2D2D2D' }}>
      <img
        src="/images/Variante_compact_white.svg"
        alt="Logo compact blanc sur fond sombre"
        className="max-h-[60%] max-w-[60%] object-contain"
      />
    </div>

    {/* Bas gauche — Compact blanc sur teal Réso.ne */}
    <div className="flex items-center justify-center" style={{ backgroundColor: '#59BFBD' }}>
      <img
        src="/images/Variante_compact_white.svg"
        alt="Logo compact blanc sur fond teal"
        className="max-h-[60%] max-w-[60%] object-contain"
      />
    </div>

    {/* Bas droite — Compact noir sur blanc teal */}
    <div className="flex items-center justify-center" style={{ backgroundColor: '#F5FAFA' }}>
      <img
        src="/images/Variante_compact_black.svg"
        alt="Logo compact noir sur fond clair"
        className="max-h-[60%] max-w-[60%] object-contain"
      />
    </div>
  </div>
);

/* ─── Variante 1 — Cohabitation RHNe ─────────────────────── */

export const SlideCohabitationA = () => (
  <div className="flex h-full items-center justify-center p-10">
    <img
      src="/images/cohabitation.svg"
      alt="Cohabitation réso.ne et RHNe"
      className="max-h-[45vh] max-w-[55vw] object-contain"
    />
  </div>
);

/* ─── Variante 1 — Cohabitation RHNe (opti) ─────────────── */

export const SlideCohabitationOpti = () => (
  <div className="flex h-full items-center justify-center p-10">
    <img
      src="/images/cohabitation-opti.svg"
      alt="Cohabitation réso.ne et RHNe — optimisé"
      className="max-h-[45vh] max-w-[55vw] object-contain"
    />
  </div>
);

/* ─── Variante 1 — La typographie ────────────────────────── */

export const SlideTypoA = () => (
  <div className="flex h-full flex-col justify-between p-10">
    <div className="flex items-baseline gap-4">
      <H1>Proxima Nova</H1>
      <p className="text-sm text-(--sub)">
        Police libre de droits, disponible sur{' '}
        <a
          href="https://fonts.google.com/specimen/Proxima+Nova"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-medium underline"
        >
          Google Fonts
        </a>{' '}
        &mdash; utilisable sans licence sur tous les supports.
      </p>
    </div>

    <div className="flex flex-col gap-6">
      {/* Specimen — une phrase, deux graisses */}
      <div className="flex flex-col items-start">
        <p
          className="text-fg leading-[1.1] font-normal tracking-tight"
          style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
        >
          Votre santé,
        </p>
        <p
          className="text-fg leading-[1.1] font-bold tracking-tight"
          style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
        >
          notre réseau.
        </p>
        <div className="mt-3 flex gap-6">
          <span className="text-muted font-mono text-[10px] tracking-widest uppercase">
            Regular &uarr;
          </span>
          <span className="text-muted font-mono text-[10px] tracking-widest uppercase">
            Bold &uarr;
          </span>
        </div>
      </div>

      <div className="flex max-w-[75%] flex-col gap-4">
        <p className="text-lg leading-relaxed text-(--sub)">
          C&apos;est la même typographie que le RHNe. Le cousinage commence là. Le patient qui lit
          un document du RHNe et un document de réso.ne ressent une continuité sans pouvoir
          l&apos;expliquer. C&apos;est subtil, mais c&apos;est le premier lien entre les deux
          marques.
        </p>
        <p className="text-lg leading-relaxed text-(--sub)">
          Proxima Nova est une sans-serif géométrique, lisible à toutes les tailles, neutre et
          professionnelle. Elle fonctionne aussi bien sur une façade qu&apos;en corps 9 sur un
          formulaire médical.
        </p>
        <p className="text-sm text-(--muted) italic">
          Pour les documents internes et la bureautique, Arial est utilisé comme police de
          substitution.
        </p>
      </div>
    </div>

    <div />
  </div>
);

/* ─── Les couleurs ───────────────────────────────────────── */

interface ColorDef {
  name: string;
  hex: string;
  text: 'white' | 'black';
  desc: string;
}

interface GradientDef {
  name: string;
  from: string;
  to: string;
  desc: string;
}

const COULEURS_RHNE: ColorDef[] = [
  {
    name: 'Teal RHNe',
    hex: '#009B8D',
    text: 'white',
    desc: 'Couleur principale du RHNe. Utilisée pour le symbole du logo et les accents forts.',
  },
  {
    name: 'Teal clair RHNe',
    hex: '#99D9D9',
    text: 'black',
    desc: 'Couleur secondaire du RHNe. Présente dans l\u2019identité hospitalière.',
  },
];

const COULEURS_RESONE: ColorDef[] = [
  {
    name: 'Teal Réso.ne',
    hex: '#59BFBD',
    text: 'white',
    desc: 'Couleur principale du logo Réso.ne. À mi-chemin entre le teal RHNe et le teal clair. C\u2019est la couleur identitaire.',
  },
  {
    name: 'Teal doux',
    hex: '#7CC5BF',
    text: 'white',
    desc: 'Couleur d\u2019accompagnement. Éléments secondaires, fonds légers, hovers.',
  },
  {
    name: 'Teal sombre',
    hex: '#2D6B6A',
    text: 'white',
    desc: 'Remplace le noir dans le logo. Texte du wordmark "réso.ne". Profond mais dans la famille teal.',
  },
];

const COULEURS_NEUTRES: ColorDef[] = [
  {
    name: 'Blanc teal',
    hex: '#F5FAFA',
    text: 'black',
    desc: 'Fond principal écran. Blanc légèrement teinté vert pour la cohérence.',
  },
  {
    name: 'Blanc pur',
    hex: '#FFFFFF',
    text: 'black',
    desc: 'Réservé au print et aux zones de contraste maximal.',
  },
  {
    name: 'Anthracite',
    hex: '#2D2D2D',
    text: 'white',
    desc: 'Texte courant. Lisibilité maximale sans la dureté du noir pur.',
  },
];

const COULEURS_SECONDAIRES: ColorDef[] = [
  {
    name: 'Teal nuit (CTA)',
    hex: '#1A5C5A',
    text: 'white',
    desc: 'Boutons et appels à l\u2019action. Suffisamment sombre pour trancher, toujours dans la famille teal.',
  },
  {
    name: 'Fond section',
    hex: '#EDF5F4',
    text: 'black',
    desc: 'Fonds de sections alternées. Doux, aéré.',
  },
  { name: 'Bordures', hex: '#C4DEDD', text: 'black', desc: 'Séparations et contours de cartes.' },
  {
    name: 'Texte secondaire',
    hex: '#4A6B6A',
    text: 'white',
    desc: 'Paragraphes secondaires, descriptions.',
  },
  {
    name: 'Texte tertiaire',
    hex: '#7A9B9A',
    text: 'white',
    desc: 'Labels, métadonnées, informations de moindre importance.',
  },
  {
    name: 'Urgences',
    hex: '#D94040',
    text: 'white',
    desc: 'Bouton urgences et alertes. Seule couleur hors famille teal.',
  },
];

const GRADIENTS: GradientDef[] = [
  {
    name: 'Gradient principal',
    from: '#009B8D',
    to: '#59BFBD',
    desc: 'Fonds de hero, bannières, éléments de communication.',
  },
  {
    name: 'Gradient doux',
    from: '#59BFBD',
    to: '#7CC5BF',
    desc: 'Fonds de cartes, éléments subtils.',
  },
  { name: 'Gradient sombre', from: '#2D6B6A', to: '#009B8D', desc: 'Footer, éléments dark mode.' },
];

const ColorSwatchLg = ({ c }: { c: ColorDef }) => (
  <div className="flex items-start gap-3">
    <div
      className="flex h-14 w-32 shrink-0 items-end rounded-lg border border-gray-200 px-2 py-1.5"
      style={{ backgroundColor: c.hex }}
    >
      <span
        className="font-mono text-[9px] leading-none font-medium"
        style={{ color: c.text === 'white' ? '#fff' : '#000' }}
      >
        {c.hex}
      </span>
    </div>
    <div className="min-w-0">
      <span className="text-fg text-sm font-semibold">{c.name}</span>
      <p className="text-xs leading-snug text-(--sub)">{c.desc}</p>
    </div>
  </div>
);

const ColorSwatchSm = ({ c }: { c: ColorDef }) => (
  <div className="flex items-center gap-3">
    <div
      className="flex h-10 w-28 shrink-0 items-end rounded-lg border border-gray-200 px-2 py-1"
      style={{ backgroundColor: c.hex }}
    >
      <span
        className="font-mono text-[10px] leading-none font-medium"
        style={{ color: c.text === 'white' ? '#fff' : '#000' }}
      >
        {c.hex}
      </span>
    </div>
    <div className="min-w-0">
      <span className="text-fg text-sm font-semibold">{c.name}</span>
      <span className="ml-1.5 text-xs text-(--sub)">{c.desc}</span>
    </div>
  </div>
);

const ColorSection = ({
  title,
  subtitle,
  children,
}: {
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}) => (
  <div className="flex flex-col gap-2">
    <div>
      <span className="text-fg text-sm font-semibold">{title}</span>
      {subtitle && <span className="text-muted ml-2 text-xs">{subtitle}</span>}
    </div>
    {children}
  </div>
);

export const SlideCouleursA = () => (
  <div className="flex h-full flex-col gap-4 p-8">
    <H1>Les couleurs</H1>

    {/* Réso.ne & RHNe — large swatches */}
    <div className="grid grid-cols-2 gap-x-10 gap-y-4">
      <ColorSection title="Couleurs Réso.ne" subtitle="Identité du réseau ambulatoire">
        <div className="flex flex-col gap-3">
          {COULEURS_RESONE.map(c => (
            <ColorSwatchLg key={c.hex} c={c} />
          ))}
        </div>
      </ColorSection>

      <ColorSection title="Couleurs RHNe" subtitle="Héritées du RHNe">
        <div className="flex flex-col gap-3">
          {COULEURS_RHNE.map(c => (
            <ColorSwatchLg key={c.hex} c={c} />
          ))}
        </div>
      </ColorSection>
    </div>

    {/* Neutres & Secondaires — compact horizontal */}
    <div className="grid grid-cols-2 gap-x-10 gap-y-2">
      <ColorSection title="Couleurs neutres">
        <div className="flex flex-col gap-1">
          {COULEURS_NEUTRES.map(c => (
            <ColorSwatchSm key={c.hex} c={c} />
          ))}
        </div>
      </ColorSection>

      <ColorSection title="Couleurs secondaires">
        <div className="flex flex-col gap-1">
          {COULEURS_SECONDAIRES.map(c => (
            <ColorSwatchSm key={c.hex} c={c} />
          ))}
        </div>
      </ColorSection>
    </div>

    {/* Gradients */}
    <ColorSection title="Gradients">
      <div className="grid grid-cols-3 gap-4">
        {GRADIENTS.map(g => (
          <div key={g.name} className="flex flex-col gap-0.5">
            <div
              className="h-7 w-full rounded-lg"
              style={{ background: `linear-gradient(to right, ${g.from}, ${g.to})` }}
            />
            <span className="text-fg text-[11px] font-semibold">{g.name}</span>
            <span className="text-[10px] text-(--sub)">{g.desc}</span>
          </div>
        ))}
      </div>
    </ColorSection>
  </div>
);

/* ─── Essais typographiques ──────────────────────────────── */

const VARIANTES_COULEUR = [
  '/images/variante_couleur_1.svg',
  '/images/variante_couleur_2.svg',
  '/images/variante_couleur_3.svg',
  '/images/variante_couleur_4.svg',
];

export const SlideEssais = () => (
  <div className="grid h-full grid-cols-2 grid-rows-2" style={{ backgroundColor: '#F5FAFA' }}>
    {VARIANTES_COULEUR.map((src, i) => (
      <div key={src} className="relative flex items-center justify-center">
        <span className="bg-accent absolute top-4 left-4 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white">
          {i + 1}
        </span>
        <img
          src={src}
          alt={`Variante couleur ${i + 1}`}
          className="max-h-[60%] max-w-[60%] object-contain"
        />
      </div>
    ))}
  </div>
);

const VARIANTES_COULEUR_2 = [
  '/images/variante_couleur_5.svg',
  '/images/variante_couleur_6.svg',
  '/images/variante_couleur_7.svg',
  '/images/variante_couleur_8.svg',
];

export const SlideEssais2 = () => (
  <div className="grid h-full grid-cols-2 grid-rows-2" style={{ backgroundColor: '#F5FAFA' }}>
    {VARIANTES_COULEUR_2.map((src, i) => (
      <div key={src} className="relative flex items-center justify-center">
        <span className="bg-accent absolute top-4 left-4 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white">
          {i + 5}
        </span>
        <img
          src={src}
          alt={`Variante couleur ${i + 5}`}
          className="max-h-[60%] max-w-[60%] object-contain"
        />
      </div>
    ))}
  </div>
);

/* ─── Exemples ──────────────────────────────────────────── */

export const SlideExemple1 = () => (
  <div className="h-full w-full">
    <img
      src="/images/1-panneau.png"
      alt="Exemple — Panneau"
      className="h-full w-full object-cover"
    />
  </div>
);

export const SlideExemple1v2 = () => (
  <div className="h-full w-full">
    <img
      src="/images/1-panneau-v2.png"
      alt="Exemple — Panneau v2"
      className="h-full w-full object-cover"
    />
  </div>
);

export const SlideExemple2 = () => (
  <div className="h-full w-full">
    <img
      src="/images/2-enseigne.png"
      alt="Exemple — Enseigne"
      className="h-full w-full object-cover"
    />
  </div>
);

export const SlideExemple2v2 = () => (
  <div className="h-full w-full">
    <img
      src="/images/2-enseigne-v2.png"
      alt="Exemple — Enseigne v2"
      className="h-full w-full object-cover"
    />
  </div>
);

export const SlideExemple3 = () => (
  <div className="h-full w-full">
    <img
      src="/images/3-vitrine.png"
      alt="Exemple — Vitrine"
      className="h-full w-full object-cover"
    />
  </div>
);

export const SlideExemple3v2 = () => (
  <div className="h-full w-full">
    <img
      src="/images/3-vitrine-v2.png"
      alt="Exemple — Vitrine v2"
      className="h-full w-full object-cover"
    />
  </div>
);

export const SlideExemple4 = () => (
  <div className="flex h-full items-center justify-center bg-gray-100 p-3">
    <img
      src="/images/4-papeterie.png"
      alt="Exemple — Papeterie"
      className="max-h-[97%] max-w-[97%] object-contain"
    />
  </div>
);

export const SlideExemple4v2 = () => (
  <div className="flex h-full items-center justify-center bg-gray-100 p-3">
    <img
      src="/images/4-papeterie-v2.png"
      alt="Exemple — Papeterie v2"
      className="max-h-[97%] max-w-[97%] object-contain"
    />
  </div>
);

export const SlideExemple5 = () => (
  <div className="flex h-full items-center justify-center bg-gray-100 p-3">
    <img
      src="/images/5-carte-visite.png"
      alt="Exemple — Carte de visite"
      className="max-h-[97%] max-w-[97%] object-contain"
    />
  </div>
);

export const SlideExemple5v2 = () => (
  <div className="flex h-full items-center justify-center bg-gray-100 p-3">
    <img
      src="/images/5-carte-visite-v2.png"
      alt="Exemple — Carte de visite v2"
      className="max-h-[97%] max-w-[97%] object-contain"
    />
  </div>
);

/* ─── Exemples v3 (opti) ─────────────────────────────────── */

export const SlideExemple1v3 = () => (
  <div className="h-full w-full">
    <img
      src="/images/1-panneau-v3.png"
      alt="Exemple — Panneau v3"
      className="h-full w-full object-cover"
    />
  </div>
);

export const SlideExemple2v3 = () => (
  <div className="h-full w-full">
    <img
      src="/images/2-enseigne-v3.png"
      alt="Exemple — Enseigne v3"
      className="h-full w-full object-cover"
    />
  </div>
);

export const SlideExemple3v3 = () => (
  <div className="h-full w-full">
    <img
      src="/images/3-vitrine-v3.png"
      alt="Exemple — Vitrine v3"
      className="h-full w-full object-cover"
    />
  </div>
);

export const SlideExemple4v3 = () => (
  <div className="flex h-full items-center justify-center bg-gray-100 p-3">
    <img
      src="/images/4-papeterie-v3.png"
      alt="Exemple — Papeterie v3"
      className="max-h-[97%] max-w-[97%] object-contain"
    />
  </div>
);

export const SlideExemple5v3 = () => (
  <div className="flex h-full items-center justify-center bg-gray-100 p-3">
    <img
      src="/images/5-carte-visite-v3.png"
      alt="Exemple — Carte de visite v3"
      className="max-h-[97%] max-w-[97%] object-contain"
    />
  </div>
);

/* ─── Redesign site ──────────────────────────────────────── */

export const SlideRedesign = () => (
  <iframe
    src="/images/reso_ne_redesign.html"
    title="Maquette — Redesign site Réso.NE"
    className="h-full w-full border-0"
  />
);

/* ─── La suite ───────────────────────────────────────────── */

const ETAPES = [
  {
    num: 1,
    title: 'Validation du logo',
    text: 'Retours et ajustements finaux sur le logo, le symbole et la typographie pour aboutir à une version définitive.',
  },
  {
    num: 2,
    title: 'Charte graphique',
    text: 'Construction de la charte graphique complète\u00a0: couleurs, typographie, usages, règles de déclinaison sur tous les supports.',
  },
  {
    num: 3,
    title: 'Livraison & finalisation',
    text: 'Envoi des packs logo dans tous les formats nécessaires et finalisation du projet.',
  },
];

export const SlideUniversVisuel = () => (
  <div className="flex h-full flex-col justify-between p-10">
    <H1>La suite</H1>

    <div className="grid grid-cols-3 gap-6">
      {ETAPES.map(e => (
        <Card key={e.num} padding="lg" className="flex flex-col gap-3">
          <span className="text-accent font-mono text-2xl font-bold">{e.num}</span>
          <span className="text-fg text-lg font-medium">{e.title}</span>
          <p className="text-base leading-relaxed text-(--sub)">{e.text}</p>
        </Card>
      ))}
    </div>

    <div />
  </div>
);

/* ─── Merci ──────────────────────────────────────────────── */

export const SlideMerci = () => (
  <div className="flex h-full flex-col justify-between p-10">
    <H1>Merci pour votre confiance.</H1>

    <div className="flex flex-col gap-6">
      <P>
        Je reste à votre entière disposition pour tout ajustement, question ou évolution du projet.
        N&apos;hésitez pas à me contacter à tout moment.
      </P>

      <div className="grid grid-cols-3 gap-4">
        <Card padding="lg" className="flex flex-col gap-1">
          <Label>Nom</Label>
          <span className="text-fg text-lg font-medium">Mirco Tamburini</span>
        </Card>
        <Card padding="lg" className="flex flex-col gap-1">
          <Label>Email</Label>
          <span className="text-fg text-lg font-medium">mirco@costaud.ch</span>
        </Card>
        <Card padding="lg" className="flex flex-col gap-1">
          <Label>Téléphone</Label>
          <span className="text-fg text-lg font-medium">079 626 95 32</span>
        </Card>
      </div>
    </div>

    <div className="text-muted text-sm">costaud.ch</div>
  </div>
);

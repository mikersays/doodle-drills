// Tier metadata. Order matters — drives prev/next, locks, dashboards.

export const tiers = [
  {
    slug: '1-foundations',
    number: 1,
    title: 'Foundations',
    subtitle: 'The Confident Line',
    description: 'Train the hand and eye to produce intentional, controlled marks. Before shapes, before objects, the line itself must obey you.',
    outcomes: [
      'Draw straight-ish lines, smooth curves, and consistent shapes without the beginner wobble',
      'Build muscle memory in the shoulder, not the fingers',
      'Stop fearing the blank page',
    ],
    hours: 6,
    drills: ['ghost-lines', 'line-library', 'three-mothers', 'pressure-ladder', 'ellipse-field'],
    accent: 'terracotta',
    rationale: 'You can’t build a house on a foundation that won’t hold a straight line. Mechanical line drills bypass the judging mind and install motor confidence first.',
  },
  {
    slug: '2-forms-and-volume',
    number: 2,
    title: 'Forms & Volume',
    subtitle: 'From Flat to Solid',
    description: 'Convert 2D shapes into 3D forms. The leap from a child’s drawing to drawing with weight.',
    outcomes: [
      'Draw cubes, cylinders, spheres, and cones that look solid',
      'Combine primitives into recognizable everyday objects',
      'Show light direction with simple hatching and cast shadows',
    ],
    hours: 7,
    drills: ['cube-tour', 'cylinder-stack', 'hatching-for-form', 'object-deconstruction', 'cast-shadows'],
    accent: 'teal',
    rationale: 'Tier 1 gave you marks and outlines. Objects in the world are volumes. Every doodle from a coffee cup to a human head is built from the four basic forms.',
  },
  {
    slug: '3-visual-alphabet',
    number: 3,
    title: 'The Visual Alphabet',
    subtitle: 'The Doodler’s Vocabulary',
    description: 'Build a personal library of 100+ icons and symbols you can draw without thinking. The doodler’s keyboard.',
    outcomes: [
      'Reliably draw 100+ icons on demand',
      'Pictionary fluency: sketch any noun a meeting throws at you',
      'Draw both objects and abstract concepts',
    ],
    hours: 10,
    drills: ['five-element-alphabet', 'hundred-icon-sprint', 'containers-and-connectors', 'concept-translator', 'iconize-your-day'],
    accent: 'terracotta',
    rationale: 'Now that lines and forms are reliable, we recombine them into meaning. Sketchnoting is fluency, and fluency comes from a memorized vocabulary.',
  },
  {
    slug: '4-faces-and-figures',
    number: 4,
    title: 'Faces & Figures',
    subtitle: 'People With Pulse',
    description: 'Draw people. Specifically, doodled people that feel alive, communicate emotion, and don’t all look the same.',
    outcomes: [
      'A range of expressions readable to a stranger',
      'Posed figures and gesture lines that don’t look stiff',
      'Crowds that read as groups, not stick clones',
    ],
    hours: 8,
    drills: ['emotion-wheel', 'distinguishing-features', 'star-person', 'gesture-in-10-seconds', 'speech-and-thought', 'crowd-sheet'],
    accent: 'teal',
    rationale: 'Faces and figures are emotional anchors. Eyes go to them first. We delay them until now because they require everything from prior tiers, plus their own construction logic.',
  },
  {
    slug: '5-lettering',
    number: 5,
    title: 'Lettering & Hierarchy',
    subtitle: 'Words That Pop',
    description: 'Hand-lettering is half of any sketchnote. Train print, emphasis styles, banners, and the hierarchy that turns notes from a wall of text into a map.',
    outcomes: [
      'Three lettering hands you can switch between mid-page',
      'Banners, drop shadows, and 3D extruded titles',
      'Confident numerals and bullet markers',
    ],
    hours: 5,
    drills: ['three-hands', 'banners-and-ribbons', 'drop-shadows', 'numbers-and-bullets'],
    accent: 'terracotta',
    rationale: 'Lettering is its own skill, but it’s only useful once you have icons to combine it with. You can integrate immediately now, instead of practicing in isolation.',
  },
  {
    slug: '6-composition',
    number: 6,
    title: 'Composition & The Sketchnote',
    subtitle: 'Whole-Page Sketchnotes',
    description: 'Combine everything into full-page visual notes. The curriculum becomes applied: capture real talks, articles, and conversations.',
    outcomes: [
      'Pick a layout in under 30 seconds',
      'Sketchnote a podcast or talk in real time',
      'Compose pages that read in the right order and feel balanced',
    ],
    hours: 10,
    drills: ['seven-layouts', 'five-minute-article', 'podcast-sketchnote', 'hierarchy-pass', 'scene-building', 'two-point-perspective'],
    accent: 'teal',
    rationale: 'All previous tiers were vocabulary. This tier is grammar and writing. Mike Rohde’s insight: vocabulary precedes layout.',
  },
  {
    slug: '7-mastery',
    number: 7,
    title: 'Personal Style & Mastery',
    subtitle: 'Personal Style',
    description: 'Develop a recognizable voice. You know the language. Now you find your accent.',
    outcomes: [
      'Articulate your style in 3–5 bullets',
      'A daily practice habit that won’t break',
      'Live event sketchnoting with stakes',
    ],
    hours: null,
    hoursLabel: 'Open-ended',
    drills: ['five-artists', 'style-audit', 'daily-diary', 'constraint-sprints', 'teach-to-cement', 'live-capture'],
    accent: 'terracotta',
    rationale: 'Style cannot be taught up front. It can only emerge from a foundation of competence. Forcing style early just produces affectation.',
  },
];

export function getTier(slug) {
  return tiers.find((t) => t.slug === slug);
}

export function getTierByNumber(n) {
  return tiers[n - 1];
}

export function totalDrillCount() {
  return tiers.reduce((acc, t) => acc + t.drills.length, 0);
}

export function getDrillKey(tierSlug, drillSlug) {
  return `${tierSlug}/${drillSlug}`;
}

export function getNeighbors(tierSlug, drillSlug) {
  const tier = getTier(tierSlug);
  if (!tier) return { prev: null, next: null };
  const idx = tier.drills.indexOf(drillSlug);
  if (idx === -1) return { prev: null, next: null };

  let prev = null;
  let next = null;
  if (idx > 0) {
    prev = { tier: tierSlug, drill: tier.drills[idx - 1] };
  } else {
    const tierIdx = tiers.indexOf(tier);
    if (tierIdx > 0) {
      const prevTier = tiers[tierIdx - 1];
      prev = { tier: prevTier.slug, drill: prevTier.drills[prevTier.drills.length - 1] };
    }
  }
  if (idx < tier.drills.length - 1) {
    next = { tier: tierSlug, drill: tier.drills[idx + 1] };
  } else {
    const tierIdx = tiers.indexOf(tier);
    if (tierIdx < tiers.length - 1) {
      const nextTier = tiers[tierIdx + 1];
      next = { tier: nextTier.slug, drill: nextTier.drills[0] };
    }
  }
  return { prev, next };
}

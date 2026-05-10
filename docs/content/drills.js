// Drill content. Each drill page is a thin shell that reads its key
// from a meta tag and asks drill.js to render this content.
//
// Reference SVGs are 200×140, stroke="currentColor", fill="none" by default
// so they pick up the page's ink color in both light and dark themes.
// Accent color is var(--terracotta) where used.

const svg = (body) =>
  `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" aria-hidden="true">${body}</svg>`;

export const drills = {
  // ============================================================
  // TIER 1 — FOUNDATIONS
  // ============================================================

  '1-foundations/ghost-lines': {
    title: 'Ghost Lines',
    oneLineGoal: 'Draw from the shoulder, not the wrist.',
    suggestedMinutes: 5,
    steps: [
      'Place two dots about 10 cm apart on the page.',
      'Hover your pen above the start dot. Move your arm — not your fingers — along the imaginary line to the end dot. Twice. Without touching the paper. This is the ghost.',
      'On the third pass, touch down and draw the line in one confident motion. Don’t slow down near the end.',
      'Repeat across the whole page. Then do diagonals. Then verticals.',
    ],
    successCriteria: [
      { key: 'connects', text: 'Lines connect both dots without dramatic curve' },
      { key: 'no-tremor', text: 'No obvious tremor in the line' },
      { key: 'fast', text: 'Each line drawn in under one second' },
    ],
    commonMistakes: [
      'Drawing slowly to be careful — slowness causes wobble.',
      'Drawing from the wrist — locks you into 3 cm strokes forever.',
    ],
    sourceCitation: 'Inspired by Betty Edwards, Drawing on the Right Side of the Brain.',
    referenceSVG: svg(`
      <circle cx="30" cy="70" r="2.5" fill="currentColor" stroke="none"/>
      <circle cx="170" cy="70" r="2.5" fill="currentColor" stroke="none"/>
      <line x1="35" y1="70" x2="165" y2="70" stroke-dasharray="3 6" stroke-width="1.5" opacity="0.45"/>
      <path d="M 32 71 Q 100 67 168 70" stroke="var(--terracotta)" stroke-width="2.5"/>
      <text x="100" y="40" text-anchor="middle" font-family="Caveat, cursive" font-size="14" fill="var(--ink-soft)" stroke="none">ghost · ghost · land</text>
    `),
  },

  '1-foundations/line-library': {
    title: 'The Line Library',
    oneLineGoal: 'Build a vocabulary of mark types. Train consistency under repetition.',
    suggestedMinutes: 10,
    steps: [
      'Divide a page into a 3×3 grid of nine boxes.',
      'Fill each box with one mark type, repeated until full: straight parallels, wavy lines, zigzags, loops or coils, dots, dashes, cross-hatching, scribble fill, tight spirals.',
      'Try to keep each mark consistent across the box — same spacing, same amplitude.',
    ],
    successCriteria: [
      { key: 'uniform', text: 'Each box reads as a uniform texture from arm’s length' },
      { key: 'consistent-scale', text: 'No drift in scale halfway through a box' },
      { key: 'all-nine', text: 'All nine boxes filled' },
    ],
    commonMistakes: [
      'Letting your hand drift in scale halfway through a box.',
      'Rushing — this drill is about control, not speed.',
    ],
    referenceSVG: svg(`
      <g stroke-width="1.4">
      <rect x="10" y="10" width="58" height="36"/>
      <rect x="72" y="10" width="58" height="36"/>
      <rect x="134" y="10" width="56" height="36"/>
      <rect x="10" y="50" width="58" height="36"/>
      <rect x="72" y="50" width="58" height="36"/>
      <rect x="134" y="50" width="56" height="36"/>
      <rect x="10" y="90" width="58" height="36"/>
      <rect x="72" y="90" width="58" height="36"/>
      <rect x="134" y="90" width="56" height="36"/>
      </g>
      <g stroke-width="1.1">
      <line x1="14" y1="16" x2="64" y2="16"/><line x1="14" y1="22" x2="64" y2="22"/><line x1="14" y1="28" x2="64" y2="28"/><line x1="14" y1="34" x2="64" y2="34"/><line x1="14" y1="40" x2="64" y2="40"/>
      <path d="M 76 18 q 5 -6 10 0 t 10 0 t 10 0 t 10 0 t 10 0"/>
      <path d="M 76 30 q 5 -6 10 0 t 10 0 t 10 0 t 10 0 t 10 0"/>
      <path d="M 138 16 l 6 8 l 6 -8 l 6 8 l 6 -8 l 6 8 l 6 -8 l 6 8"/>
      <circle cx="20" cy="60" r="4"/><circle cx="34" cy="60" r="4"/><circle cx="48" cy="60" r="4"/><circle cx="20" cy="74" r="4"/><circle cx="48" cy="74" r="4"/>
      <circle cx="80" cy="60" r="1.4" fill="currentColor"/><circle cx="92" cy="60" r="1.4" fill="currentColor"/><circle cx="104" cy="60" r="1.4" fill="currentColor"/><circle cx="116" cy="60" r="1.4" fill="currentColor"/><circle cx="80" cy="72" r="1.4" fill="currentColor"/><circle cx="92" cy="72" r="1.4" fill="currentColor"/><circle cx="104" cy="72" r="1.4" fill="currentColor"/><circle cx="116" cy="72" r="1.4" fill="currentColor"/>
      <line x1="138" y1="60" x2="142" y2="60"/><line x1="146" y1="60" x2="150" y2="60"/><line x1="154" y1="60" x2="158" y2="60"/><line x1="162" y1="60" x2="166" y2="60"/><line x1="170" y1="60" x2="174" y2="60"/><line x1="138" y1="70" x2="142" y2="70"/><line x1="146" y1="70" x2="150" y2="70"/><line x1="154" y1="70" x2="158" y2="70"/>
      <line x1="14" y1="96" x2="64" y2="124"/><line x1="14" y1="104" x2="64" y2="124"/><line x1="14" y1="112" x2="64" y2="124"/><line x1="14" y1="124" x2="64" y2="96"/><line x1="14" y1="124" x2="64" y2="108"/>
      <path d="M 78 102 q 6 6 12 0 q 6 -6 12 0 q 6 6 12 0 q 6 -6 12 0 q 6 6 12 0"/>
      <path d="M 78 116 q 6 6 12 0 q 6 -6 12 0 q 6 6 12 0 q 6 -6 12 0 q 6 6 12 0"/>
      <path d="M 152 96 m 0 12 a 8 8 0 1 1 0.001 0 a 12 12 0 1 1 -0.001 -0.001"/>
      <path d="M 172 100 m 0 8 a 6 6 0 1 1 0.001 0 a 10 10 0 1 1 -0.001 -0.001"/>
      </g>
    `),
  },

  '1-foundations/three-mothers': {
    title: 'The Three Mothers',
    oneLineGoal: 'Circle, square, triangle. Every doodled object reduces to these three.',
    suggestedMinutes: 10,
    steps: [
      'Fill a row with circles roughly 2 cm wide. Don’t lift the pen mid-circle. Aim for closed loops, not perfect ones.',
      'Below it, a row of squares — straight edges, sharp corners, closed.',
      'Below that, a row of triangles — three confident strokes, corners meeting.',
      'Now do a row of each at 1 cm. Then 4 cm. Then 0.5 cm. Vary the scale.',
    ],
    successCriteria: [
      { key: 'closed-circles', text: 'Roughly round circles in one stroke, no visible join scar' },
      { key: 'right-angles', text: 'Squares with right-ish angles' },
      { key: 'closed-triangles', text: 'Triangles that close at every corner' },
    ],
    commonMistakes: [
      'Sketching with feathered multiple strokes — one stroke per side.',
      'Obsessing over perfection — wonky-but-confident beats wobbly-but-symmetric.',
    ],
    sourceCitation: 'Dan Roam, The Back of the Napkin.',
    referenceSVG: svg(`
      <circle cx="48" cy="70" r="32" stroke="var(--terracotta)" stroke-width="2.5"/>
      <rect x="80" y="38" width="60" height="60" stroke-width="2.5"/>
      <path d="M 175 100 L 145 100 L 160 50 Z" stroke-width="2.5"/>
      <text x="48" y="125" text-anchor="middle" font-family="Caveat, cursive" font-size="13" fill="var(--ink-soft)" stroke="none">circle</text>
      <text x="110" y="125" text-anchor="middle" font-family="Caveat, cursive" font-size="13" fill="var(--ink-soft)" stroke="none">square</text>
      <text x="160" y="125" text-anchor="middle" font-family="Caveat, cursive" font-size="13" fill="var(--ink-soft)" stroke="none">triangle</text>
    `),
  },

  '1-foundations/pressure-ladder': {
    title: 'Pressure Ladder',
    oneLineGoal: 'Line weight variation — the single biggest professional-looking lever you have.',
    suggestedMinutes: 10,
    steps: [
      'With a brush pen (Fudenosuke or similar), draw 10 horizontal lines stacked.',
      'Top line: barely touch the paper — thinnest possible.',
      'Each subsequent line: press a tiny bit harder.',
      'Bottom line: full-pressure thick stroke.',
      'Repeat as a ladder several times. Then try a single stroke that goes thin → thick → thin.',
    ],
    successCriteria: [
      { key: 'five-weights', text: 'Five or more visibly distinct line weights' },
      { key: 'transition', text: 'Smooth transition within a single stroke' },
    ],
    commonMistakes: [
      'Mashing the brush tip flat (kills the pen).',
      'Holding your breath — relax the grip.',
    ],
    referenceSVG: svg(`
      <line x1="30" y1="20" x2="170" y2="20" stroke-width="0.8"/>
      <line x1="30" y1="32" x2="170" y2="32" stroke-width="1.2"/>
      <line x1="30" y1="46" x2="170" y2="46" stroke-width="1.8"/>
      <line x1="30" y1="62" x2="170" y2="62" stroke-width="2.6"/>
      <line x1="30" y1="80" x2="170" y2="80" stroke-width="3.6"/>
      <line x1="30" y1="100" x2="170" y2="100" stroke-width="5"/>
      <path d="M 30 122 Q 100 122 170 122" stroke="var(--terracotta)" fill="none" stroke-width="1"/>
      <path d="M 32 122 Q 100 130 168 122" stroke="var(--terracotta)" fill="none" stroke-width="3.5"/>
    `),
  },

  '1-foundations/ellipse-field': {
    title: 'The Ellipse Field',
    oneLineGoal: 'Foreshortened circles. Critical for cups, wheels, and any object with depth.',
    suggestedMinutes: 10,
    steps: [
      'Draw a horizontal axis line. Cross it with a shorter vertical axis.',
      'Around those axes, draw an ellipse in one stroke — going around twice (the second pass refines the first).',
      'Repeat across the page, varying the ratio: nearly circular, medium-flat, very flat.',
    ],
    successCriteria: [
      { key: 'symmetric', text: 'Symmetrical ellipses, no egg or lemon shape' },
      { key: 'perpendicular', text: 'Axes are truly perpendicular' },
    ],
    commonMistakes: [
      'Drawing two arcs that meet — always one continuous loop.',
      'Tilting the ellipse axis accidentally.',
    ],
    referenceSVG: svg(`
      <line x1="20" y1="50" x2="80" y2="50" stroke-width="0.8" opacity="0.6"/>
      <line x1="50" y1="30" x2="50" y2="70" stroke-width="0.8" opacity="0.6"/>
      <ellipse cx="50" cy="50" rx="30" ry="18"/>
      <line x1="90" y1="50" x2="150" y2="50" stroke-width="0.8" opacity="0.6"/>
      <line x1="120" y1="36" x2="120" y2="64" stroke-width="0.8" opacity="0.6"/>
      <ellipse cx="120" cy="50" rx="30" ry="10"/>
      <line x1="60" y1="100" x2="120" y2="100" stroke-width="0.8" opacity="0.6"/>
      <line x1="90" y1="92" x2="90" y2="108" stroke-width="0.8" opacity="0.6"/>
      <ellipse cx="90" cy="100" rx="30" ry="4" stroke="var(--terracotta)" stroke-width="2.5"/>
    `),
  },

  // ============================================================
  // TIER 2 — FORMS & VOLUME
  // ============================================================

  '2-forms-and-volume/cube-tour': {
    title: 'The Cube Tour',
    oneLineGoal: 'Box construction — the basis of every hard-edged object.',
    suggestedMinutes: 10,
    steps: [
      'Draw a square. From its top-right corner, draw a short diagonal up-and-right (about 30°).',
      'From the top-left corner, draw a parallel diagonal of the same length.',
      'Connect the two new endpoints with a horizontal line. You now have the top face.',
      'Drop a vertical to complete the cube’s right face.',
      'Fill a page with cubes — small, large, tilted, stacked.',
    ],
    successCriteria: [
      { key: 'parallel', text: 'Parallel edges stay parallel' },
      { key: 'reads-3d', text: 'The cube reads as 3D from across the room' },
    ],
    commonMistakes: [
      'Diverging back lines — warps the cube.',
      'Inconsistent perspective angle from cube to cube. Pick one and commit.',
    ],
    referenceSVG: svg(`
      <rect x="40" y="50" width="70" height="70" stroke="var(--terracotta)" stroke-width="2.5"/>
      <line x1="40" y1="50" x2="70" y2="20"/>
      <line x1="110" y1="50" x2="140" y2="20"/>
      <line x1="110" y1="120" x2="140" y2="90"/>
      <line x1="70" y1="20" x2="140" y2="20"/>
      <line x1="140" y1="20" x2="140" y2="90"/>
      <line x1="70" y1="20" x2="70" y2="50" stroke-dasharray="2 4" opacity="0.5"/>
      <line x1="70" y1="50" x2="140" y2="50" stroke-dasharray="2 4" opacity="0.5"/>
      <line x1="70" y1="50" x2="70" y2="120" stroke-dasharray="2 4" opacity="0.5"/>
    `),
  },

  '2-forms-and-volume/cylinder-stack': {
    title: 'The Cylinder Stack',
    oneLineGoal: 'Combine ellipses with straight lines for cups, cans, arms, and tree trunks.',
    suggestedMinutes: 10,
    steps: [
      'Draw an ellipse near the top of the page.',
      'Drop two vertical lines from the ellipse’s left and right edges.',
      'Close the bottom with a slightly more open ellipse — further from eye level means more circular.',
      'Stack five cylinders of different proportions. Then try a tilted one — the ellipse’s minor axis tilts with it.',
    ],
    successCriteria: [
      { key: 'looks-solid', text: 'The cylinder looks like you could pick it up' },
      { key: 'shared-axis', text: 'Top and bottom ellipses share the same minor axis' },
    ],
    commonMistakes: [
      'Drawing the bottom as a flat line — kills the 3D illusion.',
      'Equal-curvature ellipses top and bottom.',
    ],
    referenceSVG: svg(`
      <ellipse cx="50" cy="22" rx="22" ry="6"/>
      <line x1="28" y1="22" x2="28" y2="80"/>
      <line x1="72" y1="22" x2="72" y2="80"/>
      <ellipse cx="50" cy="80" rx="22" ry="9"/>
      <ellipse cx="135" cy="38" rx="30" ry="7" stroke="var(--terracotta)" stroke-width="2.5"/>
      <line x1="105" y1="38" x2="105" y2="110"/>
      <line x1="165" y1="38" x2="165" y2="110"/>
      <ellipse cx="135" cy="110" rx="30" ry="11" stroke="var(--terracotta)" stroke-width="2.5"/>
    `),
  },

  '2-forms-and-volume/hatching-for-form': {
    title: 'Hatching for Form',
    oneLineGoal: 'Indicate volume with directional line work — no tone, just lines.',
    suggestedMinutes: 15,
    steps: [
      'Pick a light direction. Commit to upper-left throughout the curriculum — consistency builds intuition.',
      'Draw a sphere. On the opposite side from the light, add curved hatching that follows the surface — short parallel arcs.',
      'Add a second layer of denser hatching in the deepest shadow.',
      'Repeat for a cube (flat hatching on shadowed faces) and a cylinder (vertical hatching on the shadow side).',
    ],
    successCriteria: [
      { key: 'reads-3d', text: 'Forms read as 3D without any tone, just from line direction' },
      { key: 'consistent-light', text: 'Light direction is consistent across all forms' },
    ],
    commonMistakes: [
      'Hatching in random directions.',
      'Outlining the shadow then filling it — let the lines themselves be the shadow.',
    ],
    referenceSVG: svg(`
      <circle cx="60" cy="65" r="32"/>
      <path d="M 65 45 a 30 30 0 0 1 26 38" stroke-width="1"/>
      <path d="M 70 50 a 26 26 0 0 1 22 34" stroke-width="1"/>
      <path d="M 75 56 a 22 22 0 0 1 18 30" stroke-width="1"/>
      <path d="M 81 64 a 17 17 0 0 1 13 24" stroke-width="1"/>
      <path d="M 88 72 a 12 12 0 0 1 8 18" stroke-width="1"/>
      <circle cx="50" cy="55" r="6" fill="var(--paper)" stroke="none"/>
      <line x1="120" y1="90" x2="135" y2="105"/>
      <line x1="125" y1="90" x2="140" y2="105"/>
      <line x1="130" y1="90" x2="145" y2="105"/>
      <line x1="135" y1="90" x2="150" y2="105"/>
      <line x1="140" y1="90" x2="155" y2="105"/>
      <text x="155" y="35" text-anchor="end" font-family="Caveat, cursive" font-size="13" fill="var(--terracotta)" stroke="none">light from here ↗</text>
    `),
  },

  '2-forms-and-volume/object-deconstruction': {
    title: 'Object Deconstruction',
    oneLineGoal: 'See real objects as primitive forms. The most important skill in this tier.',
    suggestedMinutes: 15,
    steps: [
      'Pick a real object on your desk — mug, water bottle, stapler, headphones.',
      'Before drawing the object, draw the primitive forms it’s made of. A mug is a cylinder + a smaller torus for the handle.',
      'Then re-draw the object as a single line drawing on top of, or beside, those forms.',
      'Do five different objects per session.',
    ],
    successCriteria: [
      { key: 'name-primitives', text: 'You can describe an object as a recipe of 2–5 primitives in under 10 seconds' },
      { key: 'five-objects', text: 'At least five different objects this session' },
    ],
    commonMistakes: [
      'Skipping the primitive step and going straight to outlines.',
      'Choosing only easy objects. Pick one weird one.',
    ],
    referenceSVG: svg(`
      <ellipse cx="40" cy="30" rx="20" ry="6" opacity="0.5" stroke-dasharray="3 3"/>
      <line x1="20" y1="30" x2="20" y2="80" opacity="0.5" stroke-dasharray="3 3"/>
      <line x1="60" y1="30" x2="60" y2="80" opacity="0.5" stroke-dasharray="3 3"/>
      <ellipse cx="40" cy="80" rx="20" ry="9" opacity="0.5" stroke-dasharray="3 3"/>
      <circle cx="76" cy="55" r="9" opacity="0.5" stroke-dasharray="3 3"/>
      <text x="40" y="105" text-anchor="middle" font-family="Caveat, cursive" font-size="14" fill="var(--ink-soft)" stroke="none">primitives</text>
      <path d="M 110 30 Q 120 22 145 22 Q 170 22 180 30" stroke="var(--terracotta)" stroke-width="2.5"/>
      <line x1="110" y1="30" x2="110" y2="78" stroke="var(--terracotta)" stroke-width="2.5"/>
      <line x1="180" y1="30" x2="180" y2="78" stroke="var(--terracotta)" stroke-width="2.5"/>
      <path d="M 110 78 Q 145 92 180 78" stroke="var(--terracotta)" stroke-width="2.5"/>
      <path d="M 180 38 Q 196 38 196 55 Q 196 70 180 70" stroke="var(--terracotta)" stroke-width="2.5"/>
      <text x="145" y="105" text-anchor="middle" font-family="Caveat, cursive" font-size="14" fill="var(--terracotta)" stroke="none">mug</text>
    `),
  },

  '2-forms-and-volume/cast-shadows': {
    title: 'Cast Shadows',
    oneLineGoal: 'Ground objects in space. Floating objects look amateurish.',
    suggestedMinutes: 10,
    steps: [
      'Draw any object — cube, mug, ball.',
      'Decide on light direction. From the base of the object, draw an ellipse-or-blob shadow stretching opposite the light.',
      'Fill the shadow with dense hatching or a solid gray marker pass.',
      'Practice with multiple objects on one ground plane — all shadows must point the same direction.',
    ],
    successCriteria: [
      { key: 'rooted', text: 'Objects feel rooted to the page surface' },
      { key: 'consistent', text: 'All shadows point the same direction' },
    ],
    commonMistakes: [
      'Inconsistent light direction across a page.',
      'Shadows the exact size of the object — they distort with perspective.',
    ],
    referenceSVG: svg(`
      <line x1="10" y1="100" x2="190" y2="100" stroke-width="0.8" opacity="0.5"/>
      <circle cx="60" cy="80" r="20"/>
      <ellipse cx="90" cy="105" rx="32" ry="6" fill="currentColor" opacity="0.35" stroke="none"/>
      <rect x="130" y="60" width="34" height="40"/>
      <path d="M 164 100 L 195 105 L 195 110 L 164 110 Z" fill="currentColor" opacity="0.35" stroke="none"/>
      <text x="20" y="35" font-family="Caveat, cursive" font-size="13" fill="var(--terracotta)" stroke="none">↖ light</text>
    `),
  },

  // ============================================================
  // TIER 3 — VISUAL ALPHABET
  // ============================================================

  '3-visual-alphabet/five-element-alphabet': {
    title: 'The Five-Element Alphabet',
    oneLineGoal: 'Every icon decomposes into five elements: dot, line, angle, curve, loop.',
    suggestedMinutes: 15,
    steps: [
      'Title a page “Visual Alphabet.”',
      'In a row at the top: draw a dot, a line, an angle (V or L), a curve (C or arc), a closed loop (circle).',
      'Below, build 10 simple icons using only combinations of those five — a tree (loop + line), a sun (dot + lines), a house (angle + lines), a cloud (loops), an arrow (line + angle).',
      'Annotate each with which elements you used.',
    ],
    successCriteria: [
      { key: 'ten-icons', text: 'Built ten icons from the five elements' },
      { key: 'four-strokes', text: 'Each icon ~four strokes max' },
    ],
    commonMistakes: [
      'Adding details — keep icons to four strokes max.',
      'Copying realism — these are symbols, not portraits.',
    ],
    sourceCitation: 'Mike Rohde, The Sketchnote Handbook.',
    referenceSVG: svg(`
      <circle cx="22" cy="40" r="3" fill="currentColor"/>
      <line x1="50" y1="40" x2="80" y2="40" stroke-width="2.5"/>
      <path d="M 100 50 L 110 30 L 120 50"/>
      <path d="M 145 30 q -10 10 0 20"/>
      <circle cx="180" cy="40" r="10"/>
      <text x="100" y="78" text-anchor="middle" font-family="Caveat, cursive" font-size="12" fill="var(--terracotta)" stroke="none">↓ build icons from these</text>
      <g stroke-width="2">
      <circle cx="30" cy="105" r="9"/><line x1="30" y1="114" x2="30" y2="125"/>
      <circle cx="70" cy="108" r="3"/><line x1="70" y1="98" x2="70" y2="92"/><line x1="60" y1="108" x2="55" y2="108"/><line x1="80" y1="108" x2="85" y2="108"/><line x1="63" y1="100" x2="59" y2="96"/><line x1="77" y1="100" x2="81" y2="96"/>
      <path d="M 105 115 L 105 105 L 115 95 L 125 105 L 125 115 Z"/>
      <path d="M 150 110 q 4 -8 12 -6 q 4 -8 14 -2 q 6 -2 8 6 z"/>
      </g>
    `),
  },

  '3-visual-alphabet/hundred-icon-sprint': {
    title: 'The Hundred-Icon Sprint',
    oneLineGoal: 'Vocabulary breadth. Brute-force vocabulary builder.',
    suggestedMinutes: 20,
    steps: [
      'Make a list of 100 common nouns: coffee, phone, book, lightbulb, key, clock, brain, heart, gear, cloud, fire, tree, pencil, computer, dollar sign, etc.',
      'Draw each in a 2 cm × 2 cm box on a grid. Spend no more than 30 seconds per icon.',
      'If an icon fails, redraw it once, then move on.',
      'After hitting 100, circle the 10 worst. Tomorrow, redo just those 10 first.',
    ],
    successCriteria: [
      { key: 'hundred', text: '100 icons drawn' },
      { key: 'fast', text: 'Recognizable icon in under 15 seconds on demand' },
    ],
    commonMistakes: [
      'Looking up reference for every single one — try from memory first.',
      'Spending 5 min on one icon — speed is the point.',
    ],
    referenceSVG: svg(`
      <g stroke-width="1.4">
      <rect x="14" y="14" width="40" height="28"/>
      <rect x="58" y="14" width="40" height="28"/>
      <rect x="102" y="14" width="40" height="28"/>
      <rect x="146" y="14" width="40" height="28"/>
      <rect x="14" y="46" width="40" height="28"/>
      <rect x="58" y="46" width="40" height="28"/>
      <rect x="102" y="46" width="40" height="28"/>
      <rect x="146" y="46" width="40" height="28"/>
      <rect x="14" y="78" width="40" height="28"/>
      <rect x="58" y="78" width="40" height="28"/>
      <rect x="102" y="78" width="40" height="28"/>
      <rect x="146" y="78" width="40" height="28"/>
      </g>
      <g stroke-width="1.6">
      <path d="M 24 34 Q 27 22 34 22 Q 41 22 44 32 L 44 36 L 26 36 Z"/><path d="M 44 28 q 4 0 4 4 q 0 4 -4 4"/>
      <rect x="68" y="20" width="22" height="18" rx="3"/><circle cx="79" cy="34" r="1" fill="currentColor"/>
      <circle cx="122" cy="28" r="6"/><line x1="122" y1="22" x2="122" y2="18"/><line x1="122" y1="34" x2="122" y2="38"/><line x1="116" y1="28" x2="112" y2="28"/><line x1="128" y1="28" x2="132" y2="28"/>
      <path d="M 156 38 L 158 30 Q 158 22 168 22 Q 178 22 178 32 L 180 38 Z"/>
      <path d="M 28 56 c -8 6 0 14 6 8 c 6 6 14 -2 6 -8 c 0 -6 -12 -6 -12 0 z"/>
      <path d="M 64 70 L 76 56 L 88 70 L 84 70 L 84 60 L 76 65 L 68 60 L 68 70 Z"/>
      <circle cx="122" cy="62" r="8"/><line x1="122" y1="62" x2="126" y2="58"/><line x1="122" y1="62" x2="122" y2="56"/>
      <path d="M 168 56 L 156 70 L 168 66 L 162 78"/>
      <circle cx="34" cy="92" r="8"/><circle cx="34" cy="92" r="3"/><line x1="32" y1="84" x2="32" y2="80"/><line x1="36" y1="84" x2="36" y2="80"/>
      <circle cx="78" cy="92" r="8"/><line x1="86" y1="92" x2="92" y2="92"/><line x1="78" y1="98" x2="78" y2="92"/>
      <path d="M 110 100 L 134 100 L 130 86 L 114 86 Z"/>
      <text x="166" y="98" font-family="Fraunces, serif" font-size="14" font-weight="700" fill="var(--terracotta)" stroke="none">$</text>
      </g>
    `),
  },

  '3-visual-alphabet/containers-and-connectors': {
    title: 'Containers & Connectors',
    oneLineGoal: 'The grammar of sketchnoting — boxes, banners, arrows, dividers.',
    suggestedMinutes: 15,
    steps: [
      'Fill a page with 10 different container types: simple rectangle, rounded rectangle, cloud, scroll banner, speech bubble, thought bubble, starburst, polaroid frame, ribbon banner, hand-drawn brackets.',
      'Below, fill another page with 10 connector types: straight arrow, curved arrow, dashed line, zigzag, hand-with-pointing-finger, plus, equals, “approximately equals” squiggle, branching tree-arrow, double-headed arrow.',
      'Now combine: write “idea,” “team,” “result” in three different containers and connect them with three different arrows.',
    ],
    successCriteria: [
      { key: 'ten-containers', text: 'Ten distinct containers' },
      { key: 'ten-connectors', text: 'Ten distinct connectors' },
      { key: 'combined', text: 'A combined three-word diagram' },
    ],
    commonMistakes: [
      'Overworking arrows with elaborate flourishes — clarity beats decoration.',
    ],
    referenceSVG: svg(`
      <rect x="14" y="40" width="46" height="26" rx="4"/>
      <text x="37" y="58" text-anchor="middle" font-family="Caveat, cursive" font-size="14" fill="currentColor" stroke="none">idea</text>
      <path d="M 64 53 Q 78 40 92 53 Q 100 60 92 53" stroke="var(--terracotta)" stroke-width="2.5"/>
      <path d="M 92 53 L 86 49 M 92 53 L 86 57" stroke="var(--terracotta)" stroke-width="2.5"/>
      <path d="M 96 38 q 2 -4 8 -4 q 8 -10 16 -2 q 8 -2 10 6 q 8 4 -2 12 q -8 4 -16 -2 q -10 4 -16 -10 z"/>
      <text x="115" y="56" text-anchor="middle" font-family="Caveat, cursive" font-size="14" fill="currentColor" stroke="none">team</text>
      <path d="M 138 53 q 12 -10 24 0 q 8 6 14 0" stroke-dasharray="3 4"/>
      <path d="M 176 53 L 170 49 M 176 53 L 170 57"/>
      <path d="M 145 80 L 195 80 L 195 105 L 145 105 Z"/>
      <text x="170" y="98" text-anchor="middle" font-family="Caveat, cursive" font-size="14" fill="var(--terracotta)" stroke="none">result</text>
    `),
  },

  '3-visual-alphabet/concept-translator': {
    title: 'The Concept Translator',
    oneLineGoal: 'Drawing abstractions — the hardest part of sketchnoting.',
    suggestedMinutes: 20,
    steps: [
      'List 20 abstract concepts: growth, time, love, deadline, strategy, problem, decision, energy, doubt, success, failure, communication, scale, risk, balance, innovation, focus, distraction, learning, freedom.',
      'For each, draw 3 different metaphors. Example for growth: a sprouting plant, a bar chart going up, a person climbing stairs.',
      'Circle the strongest of the three for each.',
      'The next day, redraw the strongest 20 from memory only.',
    ],
    successCriteria: [
      { key: 'twenty', text: 'All 20 concepts drawn' },
      { key: 'three-each', text: 'Three metaphors for each, not just one' },
    ],
    commonMistakes: [
      'Defaulting to clichés (literal lightbulb for “idea”) without trying alternatives.',
    ],
    referenceSVG: svg(`
      <text x="100" y="22" text-anchor="middle" font-family="Caveat, cursive" font-size="16" fill="var(--terracotta)" stroke="none">growth</text>
      <path d="M 28 100 q 8 -30 16 -50" stroke-width="2"/>
      <path d="M 38 70 q 6 -4 10 -8 q -10 0 -10 8" stroke-width="2"/>
      <path d="M 32 80 q -6 -2 -10 -8 q 6 -2 10 6" stroke-width="2"/>
      <line x1="20" y1="100" x2="50" y2="100"/>
      <text x="36" y="120" text-anchor="middle" font-family="Caveat, cursive" font-size="11" fill="var(--ink-soft)" stroke="none">sprout</text>
      <line x1="78" y1="100" x2="118" y2="100"/>
      <line x1="80" y1="100" x2="80" y2="35"/>
      <rect x="84" y="80" width="8" height="20"/>
      <rect x="94" y="65" width="8" height="35"/>
      <rect x="104" y="50" width="8" height="50"/>
      <text x="98" y="120" text-anchor="middle" font-family="Caveat, cursive" font-size="11" fill="var(--ink-soft)" stroke="none">chart</text>
      <line x1="140" y1="100" x2="190" y2="100"/>
      <path d="M 142 100 L 142 90 L 152 90 L 152 80 L 162 80 L 162 70 L 172 70 L 172 60 L 182 60"/>
      <circle cx="186" cy="48" r="4"/>
      <line x1="186" y1="52" x2="186" y2="62"/>
      <text x="166" y="120" text-anchor="middle" font-family="Caveat, cursive" font-size="11" fill="var(--ink-soft)" stroke="none">stairs</text>
    `),
  },

  '3-visual-alphabet/iconize-your-day': {
    title: 'Iconize Your Day',
    oneLineGoal: 'Spontaneous icon generation under real-world conditions.',
    suggestedMinutes: 5,
    steps: [
      'At end of day, list 8 things you did: meeting, lunch, walk, email, etc.',
      'Draw an icon for each in a horizontal strip. No words yet.',
      'Hand it to someone — or look the next morning. Can they guess the day from the icons?',
    ],
    successCriteria: [
      { key: 'eight', text: 'Eight icons in a strip' },
      { key: 'no-words', text: 'No words used' },
      { key: 'readable', text: 'A fresh viewer can interpret it' },
    ],
    commonMistakes: [
      'Repeating the same icon vocabulary — push for variety.',
    ],
    referenceSVG: svg(`
      <circle cx="20" cy="70" r="9"/><line x1="20" y1="61" x2="20" y2="55"/><line x1="20" y1="79" x2="20" y2="85"/><line x1="11" y1="70" x2="5" y2="70"/><line x1="29" y1="70" x2="35" y2="70"/>
      <path d="M 50 60 q 6 -8 18 0 q 6 -8 14 0 l 0 18 l -32 0 z"/>
      <rect x="92" y="58" width="22" height="20" rx="2"/><line x1="103" y1="62" x2="103" y2="74"/><line x1="100" y1="68" x2="106" y2="68"/>
      <rect x="124" y="60" width="20" height="14" rx="2"/><path d="M 124 64 L 134 70 L 144 64"/>
      <rect x="154" y="58" width="14" height="22" rx="2"/><line x1="158" y1="64" x2="164" y2="64"/><line x1="158" y1="68" x2="164" y2="68"/><line x1="158" y1="72" x2="162" y2="72"/>
      <text x="190" y="74" text-anchor="end" font-family="Caveat, cursive" font-size="13" fill="var(--terracotta)" stroke="none">+ 3 more →</text>
      <line x1="10" y1="100" x2="190" y2="100" stroke="var(--ink-faint)" stroke-width="1" opacity="0.5"/>
      <text x="100" y="118" text-anchor="middle" font-family="Caveat, cursive" font-size="13" fill="var(--ink-soft)" stroke="none">a day, in pictures</text>
    `),
  },

  // ============================================================
  // TIER 4 — FACES & FIGURES
  // ============================================================

  '4-faces-and-figures/emotion-wheel': {
    title: 'The Emotion Wheel',
    oneLineGoal: 'Faces are 90% eyes and mouth. Everything else is decoration.',
    suggestedMinutes: 15,
    steps: [
      'Draw a 4×4 grid of identical circles — just heads.',
      'In each, draw the same nose-dot. Then add ONLY eyes and mouth to convey: happy, sad, angry, surprised, bored, confused, scared, smug, sleepy, excited, skeptical, in-love, embarrassed, smirking, crying, laughing.',
      'Eyes can be: dots, U-shapes, X’s, ovals, half-moons, lines. Mouths: smile-curve, frown, straight, open-O, zigzag, squiggle.',
    ],
    successCriteria: [
      { key: 'sixteen', text: 'Sixteen distinct emotions on one page' },
      { key: 'recognizable', text: 'A stranger can identify at least fourteen' },
    ],
    commonMistakes: [
      'Using ears, hair, eyebrows as crutches. Eyes and mouth carry the emotion.',
    ],
    referenceSVG: svg(`
      <g stroke-width="2">
      <circle cx="35" cy="35" r="22"/><circle cx="29" cy="32" r="1.4" fill="currentColor"/><circle cx="41" cy="32" r="1.4" fill="currentColor"/><path d="M 27 42 q 8 6 16 0"/>
      <circle cx="105" cy="35" r="22"/><line x1="98" y1="32" x2="92" y2="28"/><line x1="98" y1="32" x2="92" y2="36"/><line x1="112" y1="32" x2="118" y2="28"/><line x1="112" y1="32" x2="118" y2="36"/><path d="M 97 44 q 8 -6 16 0"/>
      <circle cx="35" cy="105" r="22"/><circle cx="29" cy="100" r="2.5"/><circle cx="41" cy="100" r="2.5"/><circle cx="35" cy="115" r="3"/>
      <circle cx="105" cy="105" r="22"/><line x1="27" y1="100" x2="33" y2="100"/><line x1="98" y1="100" x2="104" y2="100"/><line x1="111" y1="100" x2="117" y2="100"/><path d="M 96 114 q 5 -3 10 0 q 5 3 10 0"/>
      <circle cx="170" cy="68" r="22" stroke="var(--terracotta)" stroke-width="2.5"/><path d="M 162 64 q 4 -4 8 0"/><path d="M 174 64 q 4 -4 8 0"/><path d="M 162 78 q 8 -8 16 0"/>
      </g>
    `),
  },

  '4-faces-and-figures/distinguishing-features': {
    title: 'Distinguishing Features',
    oneLineGoal: 'Differentiate characters with the smallest possible marks.',
    suggestedMinutes: 15,
    steps: [
      'Draw the same neutral face 12 times.',
      'On each, add ONE distinguishing feature: ponytail, crew cut, glasses, beard, mustache, headphones, beanie, bow, freckles, bald + earring, side-part, afro.',
      'Now draw 6 faces, each combining 2–3 features, all distinct from each other.',
    ],
    successCriteria: [
      { key: 'twelve', text: 'Twelve faces, twelve distinct features' },
      { key: 'six-combined', text: 'Six combined-feature faces, all readable' },
    ],
    commonMistakes: [
      'Stereotyping. Vary features without leaning on caricature.',
    ],
    referenceSVG: svg(`
      <circle cx="40" cy="60" r="22"/>
      <path d="M 24 50 q 4 -16 16 -16 q 12 0 16 16"/>
      <circle cx="34" cy="58" r="1.5" fill="currentColor"/><circle cx="46" cy="58" r="1.5" fill="currentColor"/><path d="M 32 70 q 8 4 16 0"/>
      <circle cx="105" cy="60" r="22"/>
      <circle cx="98" cy="56" r="6"/><circle cx="112" cy="56" r="6"/><line x1="104" y1="56" x2="106" y2="56"/>
      <path d="M 92 70 q 13 4 26 0"/>
      <circle cx="170" cy="60" r="22"/>
      <circle cx="164" cy="58" r="1.5" fill="currentColor"/><circle cx="176" cy="58" r="1.5" fill="currentColor"/>
      <path d="M 152 60 q 18 30 36 0" stroke="var(--terracotta)" stroke-width="2.5"/>
      <text x="40" y="105" text-anchor="middle" font-family="Caveat, cursive" font-size="12" fill="var(--ink-soft)" stroke="none">crew cut</text>
      <text x="105" y="105" text-anchor="middle" font-family="Caveat, cursive" font-size="12" fill="var(--ink-soft)" stroke="none">glasses</text>
      <text x="170" y="105" text-anchor="middle" font-family="Caveat, cursive" font-size="12" fill="var(--terracotta)" stroke="none">beard</text>
    `),
  },

  '4-faces-and-figures/star-person': {
    title: 'The Star Person',
    oneLineGoal: 'A 5-line full-body figure that’s faster than a stick figure and infinitely more expressive.',
    suggestedMinutes: 10,
    steps: [
      'Draw a circle (head).',
      'Draw a five-pointed star shape below it, but the top point is hidden behind the head. The two upper points become arms; the two lower points become legs; the center is the torso.',
      'Practice 20 of these in a row, neutral posture.',
      'Now bend the limbs: arms reaching up, one knee raised, leaning forward.',
    ],
    successCriteria: [
      { key: 'twenty', text: 'Twenty star people' },
      { key: 'has-body', text: 'Each has a sense of body, not just sticks' },
      { key: 'fast', text: 'Five seconds per figure' },
    ],
    commonMistakes: [
      'Making the head huge — keep it proportional.',
    ],
    sourceCitation: 'Mike Rohde, The Sketchnote Handbook.',
    referenceSVG: svg(`
      <circle cx="60" cy="35" r="11"/>
      <path d="M 60 46 L 30 70 M 60 46 L 90 70 M 60 50 L 48 105 M 60 50 L 72 105 M 60 50 L 60 80" stroke-width="2.5"/>
      <circle cx="140" cy="35" r="11" stroke="var(--terracotta)" stroke-width="2.5"/>
      <path d="M 140 46 L 116 30 M 140 46 L 164 30 M 140 50 L 124 105 M 140 50 L 158 105 M 140 50 L 140 80" stroke="var(--terracotta)" stroke-width="2.5"/>
      <text x="60" y="125" text-anchor="middle" font-family="Caveat, cursive" font-size="12" fill="var(--ink-soft)" stroke="none">neutral</text>
      <text x="140" y="125" text-anchor="middle" font-family="Caveat, cursive" font-size="12" fill="var(--terracotta)" stroke="none">arms up</text>
    `),
  },

  '4-faces-and-figures/gesture-in-10-seconds': {
    title: 'Gesture in 10 Seconds',
    oneLineGoal: 'Capture pose and motion. Borrowed from life-drawing tradition.',
    suggestedMinutes: 10,
    steps: [
      'Find reference: photos of people in motion (sports, dance, walking) — or watch people in a café.',
      'Set a 10-second timer. Draw one figure as a star person, or a single flowing line, capturing the action — not the details.',
      'Repeat 30 times in a session. Most will be ugly. That’s fine.',
    ],
    successCriteria: [
      { key: 'thirty', text: 'Thirty gestures in one session' },
      { key: 'ten-seconds', text: 'Ten seconds or less per figure' },
    ],
    commonMistakes: [
      'Adding faces, clothes, or fingers — gesture is about the spine and limb arc only.',
    ],
    referenceSVG: svg(`
      <g stroke-width="2">
      <path d="M 30 25 q -2 18 -8 35 q 0 10 -8 28" stroke="var(--terracotta)"/>
      <circle cx="30" cy="22" r="5" stroke="var(--terracotta)"/>
      <path d="M 22 50 q 4 -2 12 0"/>
      <path d="M 22 88 l -8 22 M 22 88 l 4 22"/>
      <path d="M 80 35 q 0 22 8 40 q 4 8 12 22"/>
      <circle cx="80" cy="30" r="5"/>
      <path d="M 80 50 l 18 -10 M 80 50 l 14 6"/>
      <path d="M 100 97 l 8 18 M 100 97 l -8 22"/>
      <path d="M 158 22 q 8 12 8 28 q 0 12 -10 30"/>
      <circle cx="158" cy="20" r="5"/>
      <path d="M 162 38 l 14 8 M 158 38 l -8 14"/>
      <path d="M 150 80 l -10 25 M 150 80 l 18 28"/>
      </g>
    `),
  },

  '4-faces-and-figures/speech-and-thought': {
    title: 'Speech & Thought',
    oneLineGoal: 'Integrate people with dialogue. Essential for capturing talks.',
    suggestedMinutes: 10,
    steps: [
      'Draw 6 star people across a page. Give each a speech bubble or thought bubble.',
      'Inside each bubble: a single icon — a dollar sign, a question mark, a gear, a heart, a bomb, a lightbulb.',
      'Vary bubble shape: rectangular, cloud, jagged for shouting.',
    ],
    successCriteria: [
      { key: 'six', text: 'Six figures, six bubbles, six icons' },
      { key: 'tails', text: 'Bubble tails clearly point at the speaker' },
    ],
    commonMistakes: [
      'Bubble tails pointing nowhere.',
    ],
    referenceSVG: svg(`
      <circle cx="40" cy="80" r="9"/>
      <path d="M 40 89 L 22 110 M 40 89 L 58 110 M 40 92 L 32 130 M 40 92 L 48 130"/>
      <path d="M 70 50 q 0 -15 22 -15 l 60 0 q 22 0 22 15 q 0 15 -22 15 l -50 0 l -10 14 l -2 -14 q -20 0 -20 -15 z" stroke="var(--terracotta)" stroke-width="2"/>
      <text x="125" y="58" text-anchor="middle" font-family="Fraunces, serif" font-size="22" font-weight="700" fill="var(--terracotta)" stroke="none">?</text>
    `),
  },

  '4-faces-and-figures/crowd-sheet': {
    title: 'The Crowd Sheet',
    oneLineGoal: 'Draw groups efficiently — the audience, the team.',
    suggestedMinutes: 15,
    steps: [
      'Draw a horizontal line — the ground.',
      'Draw 12 figures along it, varying height slightly. Overlap them.',
      'Vary: 3 with arms up, 3 looking left, 3 sitting, 3 walking.',
      'The crowd should read as a group, not 12 isolated icons.',
    ],
    successCriteria: [
      { key: 'twelve', text: 'Twelve figures, varied heights' },
      { key: 'reads-as-group', text: 'Reads as a group, not isolated icons' },
    ],
    commonMistakes: [
      'Making every figure the same height — varied heights = depth.',
    ],
    referenceSVG: svg(`
      <line x1="10" y1="115" x2="190" y2="115"/>
      <g stroke-width="1.6">
      <circle cx="22" cy="80" r="5"/><line x1="22" y1="85" x2="22" y2="105"/><line x1="22" y1="92" x2="14" y2="86"/><line x1="22" y1="92" x2="30" y2="86"/><line x1="22" y1="105" x2="16" y2="115"/><line x1="22" y1="105" x2="28" y2="115"/>
      <circle cx="42" cy="86" r="5"/><line x1="42" y1="91" x2="42" y2="108"/><line x1="42" y1="96" x2="35" y2="100"/><line x1="42" y1="96" x2="49" y2="100"/><line x1="42" y1="108" x2="36" y2="115"/><line x1="42" y1="108" x2="48" y2="115"/>
      <circle cx="62" cy="78" r="5"/><line x1="62" y1="83" x2="62" y2="105"/><line x1="62" y1="88" x2="55" y2="78"/><line x1="62" y1="88" x2="69" y2="78"/><line x1="62" y1="105" x2="56" y2="115"/><line x1="62" y1="105" x2="68" y2="115"/>
      <circle cx="82" cy="84" r="5"/><line x1="82" y1="89" x2="82" y2="105"/><line x1="82" y1="93" x2="75" y2="92"/><line x1="82" y1="93" x2="89" y2="98"/><line x1="82" y1="105" x2="76" y2="115"/><line x1="82" y1="105" x2="88" y2="115"/>
      <circle cx="102" cy="80" r="5"/><line x1="102" y1="85" x2="102" y2="103"/><line x1="102" y1="92" x2="94" y2="98"/><line x1="102" y1="92" x2="110" y2="86"/><line x1="102" y1="103" x2="96" y2="115"/><line x1="102" y1="103" x2="108" y2="115"/>
      <circle cx="122" cy="76" r="5" stroke="var(--terracotta)" stroke-width="2"/><line x1="122" y1="81" x2="122" y2="105" stroke="var(--terracotta)" stroke-width="2"/><line x1="122" y1="88" x2="114" y2="80" stroke="var(--terracotta)" stroke-width="2"/><line x1="122" y1="88" x2="130" y2="80" stroke="var(--terracotta)" stroke-width="2"/><line x1="122" y1="105" x2="116" y2="115" stroke="var(--terracotta)" stroke-width="2"/><line x1="122" y1="105" x2="128" y2="115" stroke="var(--terracotta)" stroke-width="2"/>
      <circle cx="142" cy="82" r="5"/><line x1="142" y1="87" x2="142" y2="105"/><line x1="142" y1="93" x2="135" y2="92"/><line x1="142" y1="93" x2="150" y2="92"/><line x1="142" y1="105" x2="136" y2="115"/><line x1="142" y1="105" x2="148" y2="115"/>
      <circle cx="162" cy="78" r="5"/><line x1="162" y1="83" x2="162" y2="105"/><line x1="162" y1="89" x2="155" y2="79"/><line x1="162" y1="89" x2="169" y2="79"/><line x1="162" y1="105" x2="156" y2="115"/><line x1="162" y1="105" x2="168" y2="115"/>
      <circle cx="180" cy="84" r="5"/><line x1="180" y1="89" x2="180" y2="105"/><line x1="180" y1="94" x2="174" y2="92"/><line x1="180" y1="94" x2="186" y2="92"/><line x1="180" y1="105" x2="174" y2="115"/><line x1="180" y1="105" x2="186" y2="115"/>
      </g>
    `),
  },

  // ============================================================
  // TIER 5 — LETTERING
  // ============================================================

  '5-lettering/three-hands': {
    title: 'The Three Hands',
    oneLineGoal: 'Body, emphasis, and title — three lettering styles that give a page hierarchy.',
    suggestedMinutes: 15,
    steps: [
      'Write the alphabet (A–Z, a–z) three times, each in a different style.',
      'Body: plain print, all caps, ~5 mm tall, single-stroke.',
      'Emphasis: same letters but bold (drawn outline, filled solid). Slower, blockier.',
      'Title: tall, narrow, decorative — add serifs, drop shadows, or 3D extrusions.',
      'Then write the same sentence (“The quick brown fox”) three times, once in each style.',
    ],
    successCriteria: [
      { key: 'three-rows', text: 'Three full alphabet rows in three styles' },
      { key: 'distinct', text: 'Each style is visibly distinct' },
    ],
    commonMistakes: [
      'Cursive — almost always less legible than print in sketchnotes.',
    ],
    referenceSVG: svg(`
      <text x="20" y="40" font-family="Fraunces, serif" font-size="22" font-weight="400" fill="currentColor" stroke="none">Body — plain</text>
      <text x="20" y="78" font-family="Fraunces, serif" font-size="24" font-weight="900" fill="currentColor" stroke="none">EMPHASIS</text>
      <text x="20" y="118" font-family="Fraunces, serif" font-size="30" font-weight="700" font-variation-settings="'opsz' 144" fill="var(--terracotta)" stroke="none">TITLE.</text>
    `),
  },

  '5-lettering/banners-and-ribbons': {
    title: 'Banners & Ribbons',
    oneLineGoal: 'Curl-and-fold banners that make titles look intentional.',
    suggestedMinutes: 10,
    steps: [
      'Draw a horizontal rectangle. At each end, add a small triangle notch (forked ends).',
      'Variant 2: at one end, “fold” the banner — draw a small parallelogram behind, with hatching on the underside.',
      'Variant 3: wavy ribbon — top and bottom edges curve in tandem.',
      'Practice five of each. Then write a word inside each.',
    ],
    successCriteria: [
      { key: 'three-variants', text: 'Five of each variant on the page' },
      { key: 'words-inside', text: 'Each banner has a word inside' },
    ],
    commonMistakes: [
      'Banners so ornate the title is unreadable.',
    ],
    referenceSVG: svg(`
      <path d="M 20 30 L 30 22 L 165 22 L 175 30 L 165 38 L 30 38 Z" stroke-width="2"/>
      <text x="97" y="35" text-anchor="middle" font-family="Caveat, cursive" font-size="18" fill="currentColor" stroke="none">forked</text>
      <path d="M 30 70 L 30 60 L 165 60 L 175 68 L 165 76 L 30 76 Z" stroke-width="2"/>
      <path d="M 30 60 L 22 64 L 22 72 L 30 76" stroke-width="2"/>
      <line x1="24" y1="66" x2="28" y2="66"/><line x1="24" y1="70" x2="28" y2="70"/>
      <text x="97" y="73" text-anchor="middle" font-family="Caveat, cursive" font-size="18" fill="currentColor" stroke="none">folded</text>
      <path d="M 20 110 q 20 -8 40 0 q 20 8 40 0 q 20 -8 40 0 q 20 8 40 0 l 0 14 q -20 8 -40 0 q -20 -8 -40 0 q -20 8 -40 0 q -20 -8 -40 0 z" stroke="var(--terracotta)" stroke-width="2"/>
      <text x="100" y="120" text-anchor="middle" font-family="Caveat, cursive" font-size="16" fill="var(--terracotta)" stroke="none">wavy ribbon</text>
    `),
  },

  '5-lettering/drop-shadows': {
    title: 'Drop Shadows',
    oneLineGoal: 'Add depth to lettering with one extra stroke.',
    suggestedMinutes: 10,
    steps: [
      'Write a word in bold block letters.',
      'Pick a light direction. Commit again to upper-left.',
      'On the lower-right edge of every letter, add a parallel offset line.',
      'Connect the originals to the offsets — letters now have 3D extrusion.',
      'Try a flat drop shadow variant: just a solid black offset behind, no connecting lines.',
    ],
    successCriteria: [
      { key: 'extruded', text: 'Letters extruded in one consistent direction' },
      { key: 'flat-variant', text: 'Tried the flat drop-shadow variant' },
    ],
    commonMistakes: [
      'Inconsistent shadow direction across letters.',
    ],
    referenceSVG: svg(`
      <text x="22" y="86" font-family="Fraunces, serif" font-size="68" font-weight="800" font-variation-settings="'opsz' 144" fill="currentColor" stroke="none">BIG.</text>
      <text x="28" y="92" font-family="Fraunces, serif" font-size="68" font-weight="800" font-variation-settings="'opsz' 144" fill="var(--terracotta)" opacity="0.4" stroke="none">BIG.</text>
    `),
  },

  '5-lettering/numbers-and-bullets': {
    title: 'Numbers & Bullets',
    oneLineGoal: 'The unsexy but heavily used elements: numbered lists, bullets, checkboxes.',
    suggestedMinutes: 10,
    steps: [
      'Practice numbers 0–9 in your title style.',
      'Make a list of 5 bullet styles: filled circle, hollow circle, square, star, arrow.',
      'Make a list of 5 checkbox styles: square, rounded square, circle-tick, X-marked.',
      'Write a 5-item to-do list using a chosen bullet, then again using a chosen checkbox.',
    ],
    successCriteria: [
      { key: 'numerals', text: 'Confident 0–9 in title style' },
      { key: 'bullet-styles', text: 'Five bullet styles' },
      { key: 'checkbox-styles', text: 'Five checkbox styles' },
    ],
    commonMistakes: [
      'Overdesigning bullets — they should be tiny anchors, not artwork.',
    ],
    referenceSVG: svg(`
      <text x="14" y="42" font-family="Fraunces, serif" font-size="32" font-weight="700" fill="currentColor" stroke="none">0 1 2 3 4 5 6 7 8 9</text>
      <circle cx="22" cy="80" r="4" fill="currentColor"/>
      <circle cx="50" cy="80" r="4"/>
      <rect x="74" y="76" width="8" height="8"/>
      <path d="M 102 74 L 104 80 L 110 80 L 105 84 L 107 90 L 102 86 L 97 90 L 99 84 L 94 80 L 100 80 Z" stroke="var(--terracotta)" fill="var(--terracotta)" stroke-width="1"/>
      <path d="M 130 80 L 144 80 M 138 74 L 144 80 L 138 86" stroke-width="2"/>
      <rect x="14" y="106" width="14" height="14"/>
      <rect x="40" y="106" width="14" height="14" rx="3"/>
      <circle cx="74" cy="113" r="7"/><path d="M 70 113 L 73 116 L 78 110" stroke="var(--terracotta)" stroke-width="2"/>
      <rect x="98" y="106" width="14" height="14"/><line x1="98" y1="106" x2="112" y2="120" stroke="var(--terracotta)" stroke-width="2"/><line x1="112" y1="106" x2="98" y2="120" stroke="var(--terracotta)" stroke-width="2"/>
    `),
  },

  // ============================================================
  // TIER 6 — COMPOSITION
  // ============================================================

  '6-composition/seven-layouts': {
    title: 'The Seven Layouts',
    oneLineGoal: 'Standard sketchnote layouts. Removes the “where do I start?” paralysis.',
    suggestedMinutes: 20,
    steps: [
      'On 7 pages or 7 boxes on one page, sketch empty templates for: Linear (top-to-bottom), Vertical columns, Modular (grid of boxes), Path (winding road), Radial (central topic with spokes), Skyscraper (ground-up vertical), Popcorn (free-form clusters).',
      'Draw each as a wireframe with placeholder boxes/lines, no real content.',
      'For each, make a tiny note about when to use it.',
    ],
    successCriteria: [
      { key: 'seven', text: 'All seven layouts wireframed' },
      { key: 'use-notes', text: 'A note on when to use each' },
    ],
    commonMistakes: [
      'Defaulting to Popcorn because it requires least planning — it’s actually the hardest to make readable.',
    ],
    referenceSVG: svg(`
      <g stroke-width="1.5">
      <rect x="10" y="14" width="36" height="48"/><line x1="14" y1="22" x2="42" y2="22"/><line x1="14" y1="30" x2="42" y2="30"/><line x1="14" y1="38" x2="42" y2="38"/><line x1="14" y1="46" x2="42" y2="46"/><line x1="14" y1="54" x2="42" y2="54"/>
      <rect x="56" y="14" width="36" height="48"/><line x1="62" y1="20" x2="62" y2="58"/><line x1="74" y1="20" x2="74" y2="58"/><line x1="86" y1="20" x2="86" y2="58"/>
      <rect x="102" y="14" width="36" height="48"/><line x1="102" y1="38" x2="138" y2="38"/><line x1="120" y1="14" x2="120" y2="62"/>
      <rect x="148" y="14" width="40" height="48"/><path d="M 152 20 q 12 8 22 0 q 12 -8 24 0 q -8 12 4 22 q -22 4 -28 16" stroke="var(--terracotta)" stroke-width="1.5"/>
      <rect x="10" y="76" width="36" height="48"/><circle cx="28" cy="100" r="6"/><line x1="28" y1="94" x2="28" y2="80"/><line x1="28" y1="106" x2="28" y2="120"/><line x1="22" y1="100" x2="14" y2="100"/><line x1="34" y1="100" x2="42" y2="100"/>
      <rect x="56" y="76" width="36" height="48"/><line x1="56" y1="120" x2="92" y2="120"/><rect x="62" y="106" width="22" height="14"/><rect x="64" y="92" width="18" height="14"/><rect x="66" y="78" width="14" height="14"/>
      <rect x="102" y="76" width="36" height="48"/><circle cx="112" cy="86" r="3"/><circle cx="124" cy="92" r="2"/><circle cx="118" cy="104" r="4"/><circle cx="132" cy="112" r="3"/><circle cx="108" cy="118" r="2"/>
      </g>
    `),
  },

  '6-composition/five-minute-article': {
    title: 'The Five-Minute Article Sketchnote',
    oneLineGoal: 'Real sketchnoting under time pressure with a forgiving source.',
    suggestedMinutes: 20,
    steps: [
      'Pick a short article or blog post (~500 words).',
      'Read once, no drawing.',
      'Set a 15-minute timer. On a fresh page: title at top, then capture 5–7 key ideas using icons + short text + one chosen layout.',
      'Use at least 2 containers, 2 arrows, and 1 person/face.',
    ],
    successCriteria: [
      { key: 'within-time', text: 'Finished within 15 minutes' },
      { key: 'readable', text: 'A reader understands the article from your sketchnote' },
      { key: 'mixed-elements', text: 'At least 2 containers, 2 arrows, 1 person' },
    ],
    commonMistakes: [
      'Trying to capture everything — sketchnoting is editorial, not transcription.',
    ],
    referenceSVG: svg(`
      <rect x="6" y="6" width="188" height="128" stroke-width="1.5"/>
      <path d="M 18 22 L 100 22" stroke="var(--terracotta)" stroke-width="3"/>
      <text x="18" y="20" font-family="Fraunces, serif" font-size="16" font-weight="700" fill="var(--terracotta)" stroke="none">title</text>
      <circle cx="30" cy="50" r="8"/><line x1="30" y1="58" x2="30" y2="76"/><line x1="30" y1="65" x2="22" y2="70"/><line x1="30" y1="65" x2="38" y2="70"/><line x1="30" y1="76" x2="24" y2="86"/><line x1="30" y1="76" x2="36" y2="86"/>
      <rect x="50" y="40" width="44" height="22" rx="3"/><line x1="55" y1="50" x2="89" y2="50"/><line x1="55" y1="56" x2="80" y2="56"/>
      <path d="M 96 50 L 110 50 M 106 46 L 110 50 L 106 54" stroke="var(--terracotta)" stroke-width="2"/>
      <path d="M 116 38 q 4 -8 16 -6 q 12 -2 14 8 q 6 6 -2 12 q -10 4 -16 -2 q -10 4 -12 -12 z"/>
      <text x="131" y="55" text-anchor="middle" font-family="Caveat, cursive" font-size="13" fill="currentColor" stroke="none">idea</text>
      <line x1="160" y1="50" x2="180" y2="80" stroke-dasharray="3 3"/>
      <rect x="20" y="92" width="58" height="32"/><line x1="26" y1="102" x2="72" y2="102"/><line x1="26" y1="110" x2="62" y2="110"/><line x1="26" y1="118" x2="56" y2="118"/>
      <rect x="92" y="92" width="44" height="32"/><circle cx="114" cy="108" r="9"/><line x1="114" y1="100" x2="114" y2="116"/><line x1="106" y1="108" x2="122" y2="108"/>
      <rect x="148" y="80" width="40" height="44"/><line x1="148" y1="92" x2="188" y2="92"/><line x1="156" y1="105" x2="180" y2="105"/><line x1="156" y1="113" x2="172" y2="113"/>
    `),
  },

  '6-composition/podcast-sketchnote': {
    title: 'The Podcast Sketchnote',
    oneLineGoal: 'Capture live spoken content in real time. The hardest test.',
    suggestedMinutes: 30,
    steps: [
      'Pick a 10–15 minute podcast clip or TED talk.',
      'Pre-draw a title block at the top of your page.',
      'Press play. Sketchnote in real time. You will fall behind. Pause if you must, but try not to.',
      'Don’t rewatch — accept what you got.',
    ],
    successCriteria: [
      { key: 'finished-on-time', text: 'Finished within a minute of the audio ending' },
      { key: 'no-empty-zones', text: 'No big empty zones on the page' },
    ],
    commonMistakes: [
      'Lettering tiny details you can fix later — capture structure first.',
    ],
    referenceSVG: svg(`
      <path d="M 60 30 a 30 30 0 0 1 60 0" stroke-width="2.5"/>
      <rect x="50" y="28" width="20" height="22" rx="6"/>
      <rect x="110" y="28" width="20" height="22" rx="6"/>
      <line x1="62" y1="50" x2="62" y2="60"/>
      <line x1="120" y1="50" x2="120" y2="60"/>
      <rect x="20" y="76" width="160" height="42" stroke-width="1.4"/>
      <line x1="28" y1="84" x2="172" y2="84" stroke-width="1"/>
      <line x1="28" y1="92" x2="172" y2="92" stroke-width="1"/>
      <line x1="28" y1="100" x2="158" y2="100" stroke-width="1"/>
      <line x1="28" y1="108" x2="172" y2="108" stroke-width="1"/>
      <text x="100" y="135" text-anchor="middle" font-family="Caveat, cursive" font-size="14" fill="var(--terracotta)" stroke="none">capture, don’t transcribe</text>
    `),
  },

  '6-composition/hierarchy-pass': {
    title: 'The Hierarchy Pass',
    oneLineGoal: 'A 5-minute polish that triples readability.',
    suggestedMinutes: 10,
    steps: [
      'Take a completed sketchnote.',
      'With a brush pen, thicken the outlines of titles and the 3 most important elements only.',
      'With a gray marker, add cast shadows to icons and a subtle gray fill to one or two containers.',
      'Add 1 spot of color (highlighter or a single colored marker) to the single most important element.',
    ],
    successCriteria: [
      { key: 'thickened', text: 'Three most important elements thickened' },
      { key: 'shadows', text: 'Shadows added to icons' },
      { key: 'one-color', text: 'One spot of color, exactly one' },
    ],
    commonMistakes: [
      'Adding color or weight everywhere — emphasis requires contrast.',
    ],
    referenceSVG: svg(`
      <rect x="10" y="10" width="180" height="120" stroke-width="1"/>
      <rect x="20" y="22" width="60" height="22" stroke-width="1.4"/>
      <rect x="86" y="22" width="40" height="22" stroke-width="3" stroke="currentColor"/>
      <rect x="132" y="22" width="50" height="22" stroke-width="1.4"/>
      <rect x="20" y="56" width="80" height="20" stroke-width="1.4"/>
      <rect x="106" y="56" width="76" height="20" stroke-width="1.4" fill="var(--highlight)" opacity="0.5"/>
      <circle cx="40" cy="100" r="14" stroke-width="3"/>
      <circle cx="44" cy="104" r="14" fill="currentColor" opacity="0.18" stroke="none"/>
      <rect x="76" y="86" width="40" height="28" stroke-width="1.4"/>
      <rect x="124" y="86" width="58" height="28" stroke-width="1.4"/>
      <text x="106" y="74" font-family="Caveat, cursive" font-size="13" fill="var(--terracotta)" stroke="none">★</text>
    `),
  },

  '6-composition/scene-building': {
    title: 'Scene Building',
    oneLineGoal: 'Combine icons, people, perspective, and environment into a single illustrated scene.',
    suggestedMinutes: 25,
    steps: [
      'Pick a setting: office meeting, coffee shop, park.',
      'Lightly sketch a horizon line in 2B pencil. Place 3 figures at different depths — overlapping where appropriate.',
      'Add 5+ environment objects — chairs, tables, plants, windows — each constructed from primitives.',
      'Ink the whole thing. Add cast shadows. Vary line weight: thicker in foreground, thinner in background.',
    ],
    successCriteria: [
      { key: 'three-figures', text: 'Three figures at different depths' },
      { key: 'five-objects', text: 'Five+ environment objects' },
      { key: 'depth-line-weight', text: 'Foreground lines thicker than background' },
    ],
    commonMistakes: [
      'Equal line weight throughout — kills depth.',
    ],
    referenceSVG: svg(`
      <line x1="0" y1="80" x2="200" y2="80" stroke-width="0.8" opacity="0.5"/>
      <rect x="14" y="60" width="40" height="20" stroke-width="1"/>
      <rect x="60" y="68" width="50" height="14" stroke-width="1"/>
      <circle cx="170" cy="55" r="14" stroke-width="1"/>
      <circle cx="40" cy="95" r="6" stroke-width="2.5"/><line x1="40" y1="101" x2="40" y2="120" stroke-width="2.5"/><line x1="40" y1="108" x2="32" y2="115" stroke-width="2.5"/><line x1="40" y1="108" x2="48" y2="115" stroke-width="2.5"/>
      <circle cx="100" cy="90" r="5" stroke-width="2"/><line x1="100" y1="95" x2="100" y2="113" stroke-width="2"/><line x1="100" y1="100" x2="93" y2="106" stroke-width="2"/><line x1="100" y1="100" x2="107" y2="106" stroke-width="2"/>
      <circle cx="160" cy="84" r="4" stroke-width="1.4"/><line x1="160" y1="88" x2="160" y2="103" stroke-width="1.4"/><line x1="160" y1="92" x2="155" y2="98" stroke-width="1.4"/><line x1="160" y1="92" x2="165" y2="98" stroke-width="1.4"/>
      <ellipse cx="46" cy="122" rx="14" ry="3" fill="currentColor" opacity="0.3" stroke="none"/>
    `),
  },

  '6-composition/two-point-perspective': {
    title: 'Two-Point Perspective Boxes',
    oneLineGoal: 'Just enough perspective for believable scenes.',
    suggestedMinutes: 15,
    steps: [
      'Draw a horizon line across the page.',
      'Mark two vanishing points, one at each edge of the horizon.',
      'Draw a vertical line in the middle — the front edge of a box.',
      'From its top and bottom, draw faint guidelines to each vanishing point.',
      'Draw two more verticals for the box’s other front edges, between the original and the vanishing points.',
      'Repeat with cylinders and rooms (negative-space boxes).',
    ],
    successCriteria: [
      { key: 'horizon', text: 'Horizon line and two VPs visible' },
      { key: 'box-anchored', text: 'Box looks anchored in space' },
    ],
    commonMistakes: [
      'Forcing every doodle into perspective — most icons should remain flat.',
    ],
    referenceSVG: svg(`
      <line x1="0" y1="60" x2="200" y2="60" stroke="var(--ink-faint)" stroke-width="1"/>
      <circle cx="6" cy="60" r="3" fill="var(--terracotta)" stroke="none"/>
      <circle cx="194" cy="60" r="3" fill="var(--terracotta)" stroke="none"/>
      <line x1="100" y1="30" x2="100" y2="100" stroke-width="2.5"/>
      <line x1="100" y1="30" x2="6" y2="60" stroke-dasharray="2 4" opacity="0.5"/>
      <line x1="100" y1="100" x2="6" y2="60" stroke-dasharray="2 4" opacity="0.5"/>
      <line x1="100" y1="30" x2="194" y2="60" stroke-dasharray="2 4" opacity="0.5"/>
      <line x1="100" y1="100" x2="194" y2="60" stroke-dasharray="2 4" opacity="0.5"/>
      <line x1="60" y1="42" x2="60" y2="84" stroke-width="2"/>
      <line x1="140" y1="42" x2="140" y2="84" stroke-width="2"/>
      <line x1="100" y1="30" x2="60" y2="42" stroke-width="2"/>
      <line x1="100" y1="30" x2="140" y2="42" stroke-width="2"/>
      <line x1="100" y1="100" x2="60" y2="84" stroke-width="2"/>
      <line x1="100" y1="100" x2="140" y2="84" stroke-width="2"/>
      <text x="6" y="78" font-family="Caveat, cursive" font-size="12" fill="var(--terracotta)" stroke="none">VP</text>
      <text x="178" y="78" font-family="Caveat, cursive" font-size="12" fill="var(--terracotta)" stroke="none">VP</text>
    `),
  },

  // ============================================================
  // TIER 7 — MASTERY
  // ============================================================

  '7-mastery/five-artists': {
    title: 'Five Artists, Five Pages',
    oneLineGoal: 'Style by deliberate imitation. Stealing-as-learning.',
    suggestedMinutes: 30,
    steps: [
      'Pick 5 doodlers or sketchnoters whose work you admire — Mike Rohde, Eva-Lotta Lamm, Sunni Brown, Dan Roam, Doug Neill, Makayla Lewis, etc.',
      'Sketchnote the same short article 5 times, each in a different artist’s style. Mimic their lettering, line weight, color palette, layout preferences.',
      'Note what felt natural and what felt forced.',
    ],
    successCriteria: [
      { key: 'five-styles', text: 'Five distinct style attempts' },
      { key: 'noted', text: 'Notes on what felt natural and what felt forced' },
    ],
    commonMistakes: [
      'Plagiarism in published work — this is a private learning exercise.',
    ],
    sourceCitation: 'Lynda Barry, Syllabus.',
    referenceSVG: svg(`
      <g stroke-width="1.4">
      <rect x="10" y="20" width="34" height="50"/><line x1="14" y1="28" x2="40" y2="28"/><line x1="14" y1="34" x2="40" y2="34"/><line x1="14" y1="40" x2="40" y2="40"/><circle cx="27" cy="56" r="6"/>
      <rect x="50" y="20" width="34" height="50"/><circle cx="67" cy="35" r="8"/><line x1="55" y1="50" x2="79" y2="50"/><line x1="55" y1="60" x2="79" y2="60"/>
      <rect x="90" y="20" width="34" height="50"/><path d="M 95 30 q 14 -6 24 0 q 4 6 0 16 q -14 6 -24 0 z"/><circle cx="107" cy="55" r="6"/>
      <rect x="130" y="20" width="34" height="50"/><line x1="135" y1="30" x2="159" y2="30"/><line x1="135" y1="36" x2="159" y2="36"/><line x1="135" y1="42" x2="155" y2="42"/><line x1="135" y1="50" x2="159" y2="50"/><line x1="135" y1="56" x2="155" y2="56"/><line x1="135" y1="62" x2="159" y2="62"/>
      <rect x="170" y="20" width="20" height="50" stroke="var(--terracotta)" stroke-width="2"/><circle cx="180" cy="35" r="6" stroke="var(--terracotta)" stroke-width="2"/><line x1="174" y1="48" x2="186" y2="48" stroke="var(--terracotta)" stroke-width="2"/><line x1="174" y1="54" x2="186" y2="54" stroke="var(--terracotta)" stroke-width="2"/><line x1="174" y1="60" x2="186" y2="60" stroke="var(--terracotta)" stroke-width="2"/>
      </g>
      <text x="100" y="100" text-anchor="middle" font-family="Caveat, cursive" font-size="14" fill="var(--ink-soft)" stroke="none">five voices, one article</text>
    `),
  },

  '7-mastery/style-audit': {
    title: 'The Style Audit',
    oneLineGoal: 'Make your style decisions intentional.',
    suggestedMinutes: 60,
    steps: [
      'Lay out 10 of your recent sketchnotes.',
      'Document recurring choices: dominant line weight, lettering style, container preferences, color use, person style, density.',
      'Pick 3 elements you like and want to amplify. Pick 1 you want to drop.',
      'Write your “style spec” on one card. Tape it inside your notebook cover.',
    ],
    successCriteria: [
      { key: 'documented', text: 'Documented recurring style choices' },
      { key: 'spec-card', text: 'A style-spec card written and placed' },
    ],
    commonMistakes: [
      'Locking style too rigidly — leave room for evolution.',
    ],
    referenceSVG: svg(`
      <rect x="20" y="14" width="160" height="112" rx="6" stroke-width="2"/>
      <text x="100" y="34" text-anchor="middle" font-family="Caveat, cursive" font-size="18" fill="var(--terracotta)" stroke="none">style spec</text>
      <line x1="32" y1="42" x2="168" y2="42" stroke-width="0.6"/>
      <text x="32" y="58" font-family="Fraunces, serif" font-size="13" font-weight="500" fill="currentColor" stroke="none">+ thick brush titles</text>
      <text x="32" y="76" font-family="Fraunces, serif" font-size="13" font-weight="500" fill="currentColor" stroke="none">+ rounded containers</text>
      <text x="32" y="94" font-family="Fraunces, serif" font-size="13" font-weight="500" fill="currentColor" stroke="none">+ one accent color</text>
      <text x="32" y="112" font-family="Fraunces, serif" font-size="13" font-weight="500" fill="var(--terracotta)" stroke="none">– drop ornate arrows</text>
    `),
  },

  '7-mastery/daily-diary': {
    title: 'The Daily Diary',
    oneLineGoal: 'Volume and habit. The unbroken chain.',
    suggestedMinutes: 15,
    steps: [
      'Each day, fill one page with: 4 things you saw, 4 things you heard, 4 things you did, plus one full doodle of a moment from the day.',
      'No quality bar. The point is the daily contact.',
    ],
    successCriteria: [
      { key: 'one-page', text: 'One page completed today' },
      { key: 'four-of-each', text: 'Four saw, four heard, four did' },
    ],
    commonMistakes: [
      'Skipping. The diary’s value is in the unbroken chain.',
    ],
    sourceCitation: 'Lynda Barry, Syllabus.',
    referenceSVG: svg(`
      <rect x="10" y="10" width="180" height="120" rx="3" stroke-width="1.4"/>
      <line x1="100" y1="10" x2="100" y2="130" stroke-width="0.8"/>
      <line x1="10" y1="70" x2="190" y2="70" stroke-width="0.8"/>
      <text x="55" y="32" text-anchor="middle" font-family="Caveat, cursive" font-size="14" fill="var(--terracotta)" stroke="none">saw</text>
      <text x="145" y="32" text-anchor="middle" font-family="Caveat, cursive" font-size="14" fill="var(--terracotta)" stroke="none">heard</text>
      <text x="55" y="92" text-anchor="middle" font-family="Caveat, cursive" font-size="14" fill="var(--terracotta)" stroke="none">did</text>
      <text x="145" y="92" text-anchor="middle" font-family="Caveat, cursive" font-size="14" fill="var(--terracotta)" stroke="none">moment</text>
      <line x1="20" y1="42" x2="92" y2="42" stroke-width="0.6"/><line x1="20" y1="50" x2="92" y2="50" stroke-width="0.6"/><line x1="20" y1="58" x2="78" y2="58" stroke-width="0.6"/>
      <line x1="108" y1="42" x2="180" y2="42" stroke-width="0.6"/><line x1="108" y1="50" x2="180" y2="50" stroke-width="0.6"/><line x1="108" y1="58" x2="166" y2="58" stroke-width="0.6"/>
      <line x1="20" y1="102" x2="92" y2="102" stroke-width="0.6"/><line x1="20" y1="110" x2="92" y2="110" stroke-width="0.6"/><line x1="20" y1="118" x2="78" y2="118" stroke-width="0.6"/>
      <circle cx="145" cy="115" r="10"/>
    `),
  },

  '7-mastery/constraint-sprints': {
    title: 'Constraint Sprints',
    oneLineGoal: 'Creativity through constraint. Forces non-default solutions.',
    suggestedMinutes: 25,
    steps: [
      'Run a 25-minute sprint on a single sketchnote with one of these constraints: only circles (no straight lines); one-stroke icons only; black + one color; negative space only (white drawings on a fully-inked black background); non-dominant hand.',
      'Try a different constraint each session.',
    ],
    successCriteria: [
      { key: 'one-constraint', text: 'One constraint chosen and held' },
      { key: 'finished-sketchnote', text: 'A finished sketchnote produced' },
    ],
    commonMistakes: [
      'Picking only easy constraints.',
    ],
    referenceSVG: svg(`
      <circle cx="100" cy="70" r="55" stroke="var(--terracotta)" stroke-width="3"/>
      <text x="100" y="62" text-anchor="middle" font-family="Caveat, cursive" font-size="18" fill="var(--terracotta)" stroke="none">circles</text>
      <text x="100" y="82" text-anchor="middle" font-family="Caveat, cursive" font-size="18" fill="var(--terracotta)" stroke="none">only</text>
      <circle cx="40" cy="40" r="6"/>
      <circle cx="160" cy="40" r="9"/>
      <circle cx="40" cy="100" r="11"/>
      <circle cx="160" cy="100" r="6"/>
      <circle cx="22" cy="70" r="3"/>
      <circle cx="180" cy="70" r="4"/>
    `),
  },

  '7-mastery/teach-to-cement': {
    title: 'Teach to Cement',
    oneLineGoal: 'Mastery through teaching. The ultimate test.',
    suggestedMinutes: 60,
    steps: [
      'Pick one earlier drill that gave you trouble.',
      'Make a 1-page sketchnote teaching that drill to a hypothetical beginner.',
      'Share it with one real beginner and watch them try to follow it.',
      'Iterate the teaching sketchnote based on what confused them.',
    ],
    successCriteria: [
      { key: 'one-page', text: 'A teaching sketchnote, one page' },
      { key: 'tested-on-beginner', text: 'Tested on at least one real beginner' },
      { key: 'iterated', text: 'Iterated based on their feedback' },
    ],
    commonMistakes: [
      'Ego-driven teaching — focus on clarity for the learner.',
    ],
    referenceSVG: svg(`
      <rect x="14" y="20" width="70" height="100" stroke-width="1.5"/>
      <text x="49" y="40" text-anchor="middle" font-family="Caveat, cursive" font-size="14" fill="var(--terracotta)" stroke="none">your sheet</text>
      <line x1="20" y1="50" x2="78" y2="50" stroke-width="1"/>
      <line x1="20" y1="60" x2="78" y2="60" stroke-width="1"/>
      <line x1="20" y1="70" x2="68" y2="70" stroke-width="1"/>
      <circle cx="34" cy="92" r="10" stroke-width="1.4"/>
      <rect x="50" y="84" width="22" height="16" stroke-width="1.4"/>
      <path d="M 92 72 L 132 72 M 126 66 L 132 72 L 126 78" stroke="var(--terracotta)" stroke-width="2.5"/>
      <circle cx="160" cy="58" r="11"/>
      <line x1="160" y1="69" x2="160" y2="92"/>
      <line x1="160" y1="76" x2="148" y2="84"/>
      <line x1="160" y1="76" x2="172" y2="84"/>
      <line x1="160" y1="92" x2="152" y2="108"/>
      <line x1="160" y1="92" x2="168" y2="108"/>
      <text x="160" y="128" text-anchor="middle" font-family="Caveat, cursive" font-size="13" fill="var(--ink-soft)" stroke="none">a real beginner</text>
    `),
  },

  '7-mastery/live-capture': {
    title: 'Live Capture',
    oneLineGoal: 'The professional skill. Sketchnote in front of people, in real time, with stakes.',
    suggestedMinutes: 60,
    steps: [
      'Volunteer to sketchnote a meeting at work, a friend’s lecture, or a meetup.',
      'Show up with two pens, the right paper, and your style spec card.',
      'Capture in real time. At end, photograph and share.',
      'Collect feedback: what was clear, what was confusing.',
    ],
    successCriteria: [
      { key: 'volunteered', text: 'Volunteered for a real event' },
      { key: 'shared', text: 'Photographed and shared the result' },
      { key: 'feedback', text: 'Collected feedback' },
    ],
    commonMistakes: [
      'Refusing because “I’m not ready.” At this tier, you are.',
    ],
    referenceSVG: svg(`
      <line x1="20" y1="118" x2="180" y2="118"/>
      <line x1="40" y1="118" x2="35" y2="40"/>
      <line x1="80" y1="118" x2="85" y2="40"/>
      <line x1="40" y1="40" x2="80" y2="40"/>
      <rect x="36" y="44" width="50" height="60" stroke="var(--terracotta)" stroke-width="2"/>
      <line x1="42" y1="56" x2="80" y2="56" stroke="var(--terracotta)" stroke-width="1"/>
      <line x1="42" y1="64" x2="76" y2="64" stroke="var(--terracotta)" stroke-width="1"/>
      <circle cx="55" cy="80" r="6" stroke="var(--terracotta)" stroke-width="1"/>
      <rect x="64" y="74" width="14" height="12" stroke="var(--terracotta)" stroke-width="1"/>
      <circle cx="138" cy="55" r="9"/>
      <line x1="138" y1="64" x2="138" y2="100"/>
      <line x1="138" y1="74" x2="125" y2="68"/>
      <line x1="138" y1="74" x2="151" y2="80"/>
      <line x1="138" y1="100" x2="130" y2="118"/>
      <line x1="138" y1="100" x2="146" y2="118"/>
      <text x="158" y="118" font-family="Caveat, cursive" font-size="13" fill="var(--terracotta)" stroke="none">live →</text>
    `),
  },
};

export function getDrill(tierSlug, drillSlug) {
  return drills[`${tierSlug}/${drillSlug}`];
}

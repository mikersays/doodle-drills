// Curriculum overview — render full tier list with progress.
import { tiers, totalDrillCount } from '../../content/tiers.js';
import { getCompletedCount, getTierCompletedCount, getStreak, getSettings } from './progress.js';
import { drills as drillData } from '../../content/drills.js';

function tally(done, total) {
  const marks = [];
  for (let i = 0; i < total; i++) {
    marks.push(`<span class="tally__mark${i < done ? ' is-done' : ''}"></span>`);
  }
  return `<span class="tally">${marks.join('')}<span class="tally__count">${done}/${total}</span></span>`;
}

function init() {
  const completed = getCompletedCount();
  const total = totalDrillCount();
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  const num = document.querySelector('[data-overall-num]');
  if (num) num.textContent = pct + '%';
  const sub = document.querySelector('[data-overall-sub]');
  if (sub) sub.textContent = `${completed} of ${total} drills`;

  const settings = getSettings();
  const streak = getStreak();
  const streakEl = document.querySelector('[data-streak]');
  if (streakEl) {
    if (settings.showStreak !== false && streak >= 2) {
      streakEl.textContent = `${streak}-day streak — nice.`;
      streakEl.style.display = 'block';
    } else {
      streakEl.style.display = 'none';
    }
  }

  const list = document.querySelector('[data-tier-list]');
  if (!list) return;
  const completedByTier = {};
  for (const t of tiers) completedByTier[t.slug] = getTierCompletedCount(t.slug, t.drills);

  list.innerHTML = tiers.map((t, i) => {
    const done = completedByTier[t.slug];
    const locked = i > 0 && (completedByTier[tiers[i - 1].slug] / tiers[i - 1].drills.length) < 0.8;
    return `
      <article class="tier-row" data-locked="${locked}">
        <div>
          <span class="tier-row__num">Tier ${t.number}</span>
          <span class="tier-row__sub">${t.subtitle}</span>
          ${locked ? `<span class="tier-row__locked-note">${Math.ceil((tiers[i-1].drills.length * 0.8) - completedByTier[tiers[i-1].slug])} more in Tier ${i} unlocks this</span>` : ''}
        </div>
        <div>
          <h3 class="tier-row__title"><a href="../tiers/${t.slug}/">${t.title}</a></h3>
          <p class="tier-row__desc">${t.description}</p>
          <div class="tier-row__progress">
            ${tally(done, t.drills.length)}
            <span class="text-faint" style="font-size:0.85rem;">${t.hours ? `~${t.hours} hours` : t.hoursLabel || ''}</span>
          </div>
          <details style="margin-top: 1rem;">
            <summary class="text-soft" style="cursor:pointer;font-size:0.9rem;font-family:var(--font-hand);font-size:1.1rem;">drills in this tier ↓</summary>
            <ol style="padding:0; margin:0.5rem 0 0; list-style:none; display:grid; gap:0.4rem;">
              ${t.drills.map((d, idx) => {
                const drill = drillData[`${t.slug}/${d}`];
                const drillDone = completedByTier[t.slug] > 0; // placeholder
                return `<li style="font-size:0.95rem;">
                  <a href="../tiers/${t.slug}/${d}/" style="color:var(--ink-soft);">
                    <span style="font-family:var(--font-hand);color:var(--terracotta);">${t.number}.${idx+1}</span>
                    ${drill ? drill.title : d}
                  </a>
                </li>`;
              }).join('')}
            </ol>
          </details>
        </div>
      </article>
    `;
  }).join('');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

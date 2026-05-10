// Home — populate tier cards, resume strip, and progress on load.
import { tiers, totalDrillCount } from '../../content/tiers.js';
import { getResume, getCompletedCount, getTierCompletedCount, getState } from './progress.js';

function tallyMarks(done, total) {
  // Compact tally: 1 mark per drill, terracotta if done
  const marks = [];
  for (let i = 0; i < total; i++) {
    marks.push(`<span class="tally__mark${i < done ? ' is-done' : ''}"></span>`);
  }
  return `<span class="tally">${marks.join('')}<span class="tally__count">${done}/${total}</span></span>`;
}

function isLocked(tierIndex, completedByTier) {
  if (tierIndex === 0) return false;
  const prev = tiers[tierIndex - 1];
  const prevDone = completedByTier[prev.slug] || 0;
  return prevDone / prev.drills.length < 0.8;
}

function init() {
  const state = getState();
  const completed = getCompletedCount();
  const total = totalDrillCount();

  // Resume strip
  const resume = getResume();
  if (resume && completed > 0) {
    const tier = tiers.find((t) => t.slug === resume.tier);
    if (tier) {
      const strip = document.querySelector('[data-resume]');
      if (strip) {
        strip.querySelector('[data-resume-link]').href = `tiers/${resume.tier}/${resume.drill}/`;
        strip.querySelector('[data-resume-where]').textContent = tier.title;
        strip.setAttribute('data-show', 'true');
      }
    }
  }

  // Tier strip
  const stripList = document.querySelector('[data-tier-strip]');
  if (stripList) {
    const completedByTier = {};
    for (const t of tiers) completedByTier[t.slug] = getTierCompletedCount(t.slug, t.drills);

    stripList.innerHTML = tiers.map((t, i) => {
      const done = completedByTier[t.slug];
      const locked = isLocked(i, completedByTier);
      return `
        <a class="tier-card reveal reveal--${Math.min(i, 4)}"
           href="tiers/${t.slug}/"
           data-locked="${locked}">
          <span class="tier-card__num">Tier ${t.number}</span>
          <h3>${t.title}</h3>
          <span class="tier-card__sub">${t.subtitle}</span>
          <p style="margin:0;color:var(--ink-soft);font-size:0.95rem;">${t.description}</p>
          <div class="tier-card__progress">
            ${tallyMarks(done, t.drills.length)}
          </div>
        </a>
      `;
    }).join('');
  }

  // Overall percent (small headline near the resume strip if present)
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
  document.querySelectorAll('[data-overall-pct]').forEach((el) => {
    el.textContent = `${pct}%`;
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

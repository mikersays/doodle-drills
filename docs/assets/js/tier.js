// Tier overview — read meta[name='tier-slug'], render tier intro + drill list.
import { getTier, tiers } from '../../content/tiers.js';
import { drills as drillData } from '../../content/drills.js';
import { isDrillComplete, getTierCompletedCount, getResume } from './progress.js';

function escape(s) { return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

function init() {
  const meta = document.querySelector('meta[name="tier-slug"]');
  if (!meta) return;
  const tier = getTier(meta.content);
  if (!tier) return;

  document.title = `Tier ${tier.number}: ${tier.title} — Doodle Drills`;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.content = tier.description;

  // crumbs
  const crumbs = document.querySelector('[data-crumbs]');
  if (crumbs) {
    crumbs.innerHTML = `
      <a href="../../curriculum/">Curriculum</a>
      <span class="sep">/</span>
      <span aria-current="page">Tier ${tier.number}: ${escape(tier.title)}</span>
    `;
  }

  // hero
  document.querySelector('[data-tier-num]').textContent = `Tier ${tier.number}`;
  document.querySelector('[data-tier-title]').textContent = tier.title;
  document.querySelector('[data-tier-sub]').textContent = tier.subtitle;
  document.querySelector('[data-tier-desc]').textContent = tier.description;
  document.querySelector('[data-tier-rationale]').textContent = tier.rationale;
  document.querySelector('[data-tier-hours]').textContent = tier.hours ? `~${tier.hours} hours total` : tier.hoursLabel || 'Open-ended';

  // outcomes
  const outc = document.querySelector('[data-outcomes]');
  outc.innerHTML = tier.outcomes.map((o) => `<li>${escape(o)}</li>`).join('');

  // resume continue link
  const resume = getResume();
  const continueEl = document.querySelector('[data-continue]');
  if (continueEl) {
    const myDrills = tier.drills.filter((d) => isDrillComplete(tier.slug, d));
    if (resume && resume.tier === tier.slug) {
      const drill = drillData[`${tier.slug}/${resume.drill}`];
      continueEl.innerHTML = `<a class="btn btn-primary" href="${resume.drill}/">Continue → ${escape(drill?.title || resume.drill)}</a>`;
    } else if (myDrills.length === 0) {
      continueEl.innerHTML = `<a class="btn btn-primary" href="${tier.drills[0]}/">Start Tier ${tier.number} → ${escape(drillData[`${tier.slug}/${tier.drills[0]}`].title)}</a>`;
    } else {
      const next = tier.drills.find((d) => !isDrillComplete(tier.slug, d));
      if (next) {
        continueEl.innerHTML = `<a class="btn btn-primary" href="${next}/">Next drill → ${escape(drillData[`${tier.slug}/${next}`].title)}</a>`;
      } else {
        continueEl.innerHTML = `<span class="handwritten" style="font-size:1.4rem;">Tier ${tier.number} complete. Nice.</span>`;
      }
    }
  }

  // tally
  const done = getTierCompletedCount(tier.slug, tier.drills);
  const tallyEl = document.querySelector('[data-tally]');
  if (tallyEl) {
    let html = '';
    for (let i = 0; i < tier.drills.length; i++) html += `<span class="tally__mark${i < done ? ' is-done' : ''}"></span>`;
    html += `<span class="tally__count">${done}/${tier.drills.length}</span>`;
    tallyEl.innerHTML = html;
  }

  // drill list
  const list = document.querySelector('[data-drills]');
  list.innerHTML = tier.drills.map((slug, i) => {
    const drill = drillData[`${tier.slug}/${slug}`];
    if (!drill) return '';
    const done = isDrillComplete(tier.slug, slug);
    return `
      <li class="drill-list__item" data-done="${done}">
        <a href="${slug}/">
          <span class="drill-list__num">${tier.number}.${i + 1}</span>
          <span>
            <span class="drill-list__title">${escape(drill.title)}</span>
            <span class="drill-list__goal">${escape(drill.oneLineGoal)}</span>
          </span>
          <span class="drill-list__minutes">~${drill.suggestedMinutes} min</span>
          <svg class="drill-list__check" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-label="completed"><path d="M 3 11 q 4 6 8 1 q 4 -10 8 -5"/></svg>
        </a>
      </li>
    `;
  }).join('');

  // What unlocks next
  const next = tiers[tier.number] || null;
  const endEl = document.querySelector('[data-tier-end]');
  if (endEl && next) {
    endEl.innerHTML = `
      <h3>When you finish this tier</h3>
      <p>You unlock <a href="../${next.slug}/" style="font-weight:500;">Tier ${next.number}: ${escape(next.title)}</a>. Don’t rush — the muscles you build here are the ones that hold up the next tier.</p>
    `;
  } else if (endEl) {
    endEl.innerHTML = `
      <h3>This is the last tier</h3>
      <p>After this, the drills are about deliberate practice rather than checking boxes. Live capture is the test.</p>
    `;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

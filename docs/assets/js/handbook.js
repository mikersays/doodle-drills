// Handbook — render every drill on a single page, in order.
import { tiers, totalDrillCount } from '../../content/tiers.js';
import { drills as drillData } from '../../content/drills.js';
import { isDrillComplete, getCompletedCount } from './progress.js';

function escape(s) { return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

function tallyMarks(done, total) {
  const marks = [];
  for (let i = 0; i < total; i++) {
    marks.push(`<span class="tally__mark${i < done ? ' is-done' : ''}"></span>`);
  }
  return `<span class="tally">${marks.join('')}<span class="tally__count">${done}/${total}</span></span>`;
}

function renderDrill(tier, drillSlug, idx) {
  const drill = drillData[`${tier.slug}/${drillSlug}`];
  if (!drill) return '';
  const id = `${tier.number}.${idx + 1}`;
  const drillId = `${tier.slug}-${drillSlug}`;
  return `
    <article class="hb-drill" id="${escape(drillId)}">
      <div class="hb-drill__head">
        <div>
          <span class="hb-drill__id">Drill ${id}</span>
          <h3 class="hb-drill__title"><a href="../tiers/${tier.slug}/${drillSlug}/">${escape(drill.title)}</a></h3>
          <span class="hb-drill__goal">${escape(drill.oneLineGoal)}</span>
          <div class="hb-drill__minutes">~${drill.suggestedMinutes} minutes per session</div>
        </div>
        <div class="hb-drill__ref" aria-hidden="true">
          ${drill.referenceSVG || ''}
        </div>
      </div>
      <div class="hb-drill__body">
        <div class="hb-drill__steps-wrap">
          <h4 class="hb-drill__section-h">How to do it</h4>
          <ol class="hb-drill__steps">
            ${drill.steps.map((s) => `<li>${escape(s)}</li>`).join('')}
          </ol>
        </div>
        <div>
          <h4 class="hb-drill__section-h">What to look for</h4>
          <ul class="hb-drill__criteria">
            ${drill.successCriteria.map((c) => `<li>${escape(c.text)}</li>`).join('')}
          </ul>
        </div>
        <div>
          <h4 class="hb-drill__section-h">Common mistakes</h4>
          <ul class="hb-drill__mistakes">
            ${drill.commonMistakes.map((m) => `<li>${escape(m)}</li>`).join('')}
          </ul>
          ${drill.sourceCitation ? `<p class="hb-drill__cite">${escape(drill.sourceCitation)}</p>` : ''}
        </div>
      </div>
      <a class="hb-drill__open" href="../tiers/${tier.slug}/${drillSlug}/">Open the focused drill page</a>
    </article>
  `;
}

function renderTier(tier) {
  const drillsHtml = tier.drills.map((slug, i) => renderDrill(tier, slug, i)).join('');
  return `
    <section class="hb-tier" id="tier-${escape(tier.slug)}">
      <header>
        <span class="hb-tier__num">Tier ${tier.number}</span>
        <h2><a href="../tiers/${tier.slug}/" style="color:inherit;text-decoration:none;">${escape(tier.title)}</a></h2>
        <span class="hb-tier__sub">${escape(tier.subtitle)}</span>
        <p class="hb-tier__intro">${escape(tier.description)}</p>
        <span class="hb-tier__hours">${tier.hours ? `~${tier.hours} hours total` : tier.hoursLabel || 'Open-ended'}</span>
      </header>
      ${drillsHtml}
      <a href="#top" class="hb-toc-top">↑ back to top</a>
    </section>
  `;
}

function init() {
  const total = totalDrillCount();
  const done = getCompletedCount();

  // Top meta
  document.querySelector('[data-hb-total]').textContent = total;
  document.querySelector('[data-hb-tally]').innerHTML = tallyMarks(done, total);

  // Jump nav
  const jump = document.querySelector('[data-hb-jump]');
  if (jump) {
    jump.innerHTML = `
      <span class="hb-jump__label">jump to:</span>
      ${tiers.map((t) => `<a href="#tier-${t.slug}">T${t.number} · ${escape(t.title)}</a>`).join('')}
    `;
  }

  // Body
  const body = document.querySelector('[data-hb-body]');
  if (body) body.innerHTML = tiers.map(renderTier).join('');

  // Print button
  document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

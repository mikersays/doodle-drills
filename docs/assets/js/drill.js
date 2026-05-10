// Drill page renderer. Each drill page has a thin shell with:
//   <meta name="drill-key" content="<tier>/<drill>">
// We populate body content from content/drills.js.

import { getDrill } from '../../content/drills.js';
import { getTier, getNeighbors, tiers } from '../../content/tiers.js';
import {
  isDrillComplete, getDrillState,
  setCriterion, markDrillComplete, getTierCompletedCount, setTierFirstComplete,
} from './progress.js';

function $(sel, root = document) { return root.querySelector(sel); }
function escape(s) { return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

function renderDrill() {
  const meta = document.querySelector('meta[name="drill-key"]');
  if (!meta) return;
  const key = meta.content;
  const [tierSlug, drillSlug] = key.split('/');
  const drill = getDrill(tierSlug, drillSlug);
  const tier = getTier(tierSlug);
  if (!drill || !tier) {
    document.getElementById('main').innerHTML = '<p class="container">Drill not found.</p>';
    return;
  }

  const drillIdx = tier.drills.indexOf(drillSlug);
  const drillNum = drillIdx + 1;
  const totalInTier = tier.drills.length;

  document.title = `${drill.title} — Tier ${tier.number} · Doodle Drills`;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.content = drill.oneLineGoal;

  // breadcrumbs
  const crumbs = $('[data-crumbs]');
  if (crumbs) {
    crumbs.innerHTML = `
      <a href="../../../curriculum/">Curriculum</a>
      <span class="sep">/</span>
      <a href="../">Tier ${tier.number}: ${escape(tier.title)}</a>
      <span class="sep">/</span>
      <span aria-current="page">${escape(drill.title)}</span>
    `;
  }

  // pill
  const pill = $('[data-where-pill]');
  if (pill) {
    pill.href = '../';
    pill.innerHTML = `T${tier.number} · ${drillNum}/${totalInTier} <span style="font-family:var(--font-hand);color:var(--terracotta);">${escape(tier.title)}</span>`;
  }

  // header
  $('[data-title]').textContent = drill.title;
  $('[data-goal]').textContent = drill.oneLineGoal;

  // reference
  $('[data-ref]').innerHTML = drill.referenceSVG || '';

  // steps
  const stepsEl = $('[data-steps]');
  stepsEl.innerHTML = drill.steps.map((s) => `<li>${escape(s)}</li>`).join('');

  // criteria
  const drillState = getDrillState(tierSlug, drillSlug) || {};
  const savedCriteria = drillState.criteria || {};
  const critEl = $('[data-criteria]');
  critEl.innerHTML = drill.successCriteria.map((c) => `
    <li>
      <input type="checkbox" id="crit-${escape(c.key)}" data-criterion="${escape(c.key)}" ${savedCriteria[c.key] ? 'checked' : ''}/>
      <label for="crit-${escape(c.key)}">${escape(c.text)}</label>
    </li>
  `).join('');

  // mistakes
  const mistEl = $('[data-mistakes]');
  mistEl.innerHTML = drill.commonMistakes.map((m) => `<li>${escape(m)}</li>`).join('');

  // suggested minutes
  $('[data-minutes]').textContent = `Suggested ${drill.suggestedMinutes} minutes.`;

  // citation
  if (drill.sourceCitation) {
    $('[data-citation]').textContent = drill.sourceCitation;
    $('[data-citation]').style.display = 'block';
  }

  // complete button state
  const completeBlock = $('[data-complete]');
  const completeBtn = $('[data-complete-btn]');
  if (isDrillComplete(tierSlug, drillSlug)) {
    completeBlock.setAttribute('data-completed', 'true');
    completeBlock.setAttribute('data-ready', 'true');
    completeBtn.textContent = 'Mark again — practiced once more';
  }

  function updateReady() {
    const any = critEl.querySelectorAll('input:checked').length > 0;
    completeBlock.setAttribute('data-ready', any || isDrillComplete(tierSlug, drillSlug) ? 'true' : 'false');
  }
  updateReady();

  critEl.addEventListener('change', (e) => {
    const cb = e.target.closest('input[type="checkbox"]');
    if (!cb) return;
    setCriterion(tierSlug, drillSlug, cb.dataset.criterion, cb.checked);
    updateReady();
  });

  completeBtn.addEventListener('click', () => {
    const criteria = {};
    critEl.querySelectorAll('input[data-criterion]').forEach((cb) => {
      criteria[cb.dataset.criterion] = cb.checked;
    });
    markDrillComplete(tierSlug, drillSlug, criteria);
    completeBlock.setAttribute('data-completed', 'true');
    completeBlock.setAttribute('data-ready', 'true');
    completeBtn.textContent = 'Marked. Practiced again — bump count.';
    showToast('Marked complete. Date the page, move on.');

    // Tier-first-complete bookkeeping
    if (getTierCompletedCount(tierSlug, tier.drills) === tier.drills.length) {
      setTierFirstComplete(tierSlug);
    }
  });

  // prev / next strip
  const { prev, next } = getNeighbors(tierSlug, drillSlug);
  const pn = $('[data-pn]');
  pn.innerHTML = '';

  if (prev) {
    const pdrill = getDrill(prev.tier, prev.drill);
    pn.insertAdjacentHTML('beforeend', `
      <a class="pn-strip__prev" href="${prev.tier === tierSlug ? '../' + prev.drill + '/' : '../../' + prev.tier + '/' + prev.drill + '/'}">
        <span class="pn-strip__label">← Previous</span>
        <span class="pn-strip__title">${escape(pdrill?.title || prev.drill)}</span>
      </a>
    `);
  } else {
    pn.insertAdjacentHTML('beforeend', `<div class="pn-strip__none">Day one. No drill before this.</div>`);
  }

  if (next) {
    const ndrill = getDrill(next.tier, next.drill);
    pn.insertAdjacentHTML('beforeend', `
      <a class="pn-strip__next" href="${next.tier === tierSlug ? '../' + next.drill + '/' : '../../' + next.tier + '/' + next.drill + '/'}">
        <span class="pn-strip__label">Next →</span>
        <span class="pn-strip__title">${escape(ndrill?.title || next.drill)}</span>
      </a>
    `);
  } else {
    pn.insertAdjacentHTML('beforeend', `<div class="pn-strip__none">End of the line. You did it.</div>`);
  }

  // compare-to-reference photo overlay
  const photoInput = $('[data-photo-input]');
  const photoStage = $('[data-photo-stage]');
  const photoOpacity = $('[data-photo-opacity]');
  const photoClear = $('[data-photo-clear]');
  let currentObjectURL = null;

  photoInput?.addEventListener('change', (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (currentObjectURL) URL.revokeObjectURL(currentObjectURL);
    currentObjectURL = URL.createObjectURL(f);
    let img = photoStage.querySelector('img.compare__photo');
    if (!img) {
      img = document.createElement('img');
      img.className = 'compare__photo';
      photoStage.appendChild(img);
    }
    img.src = currentObjectURL;
  });

  photoOpacity?.addEventListener('input', (e) => {
    photoStage.style.setProperty('--photo-opacity', e.target.value);
  });

  photoClear?.addEventListener('click', () => {
    if (currentObjectURL) { URL.revokeObjectURL(currentObjectURL); currentObjectURL = null; }
    const img = photoStage.querySelector('img.compare__photo');
    if (img) img.remove();
    if (photoInput) photoInput.value = '';
  });

  window.addEventListener('beforeunload', () => {
    if (currentObjectURL) URL.revokeObjectURL(currentObjectURL);
  });

  // timer
  const timerEl = $('[data-timer]');
  const timerDisplay = $('[data-timer-display]');
  const timerStart = $('[data-timer-start]');
  const timerReset = $('[data-timer-reset]');
  let remaining = (drill.suggestedMinutes || 5) * 60;
  let interval = null;

  function fmtTime(s) {
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${m}:${String(r).padStart(2, '0')}`;
  }
  timerDisplay.textContent = fmtTime(remaining);

  function chime() {
    try {
      const A = window.AudioContext || window.webkitAudioContext;
      if (!A) return;
      const ctx = new A();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.frequency.value = 660;
      o.type = 'sine';
      g.gain.value = 0;
      o.connect(g).connect(ctx.destination);
      const now = ctx.currentTime;
      g.gain.linearRampToValueAtTime(0.18, now + 0.01);
      g.gain.exponentialRampToValueAtTime(0.001, now + 1.4);
      o.start(now);
      o.stop(now + 1.5);
      setTimeout(() => ctx.close(), 1700);
    } catch {}
  }

  timerStart?.addEventListener('click', () => {
    if (interval) {
      clearInterval(interval);
      interval = null;
      timerStart.textContent = 'Resume';
      return;
    }
    timerStart.textContent = 'Pause';
    interval = setInterval(() => {
      remaining -= 1;
      timerDisplay.textContent = fmtTime(Math.max(0, remaining));
      if (remaining <= 0) {
        clearInterval(interval);
        interval = null;
        timerEl.classList.add('is-finished');
        timerStart.textContent = 'Done';
        chime();
      }
    }, 1000);
  });
  timerReset?.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    remaining = (drill.suggestedMinutes || 5) * 60;
    timerDisplay.textContent = fmtTime(remaining);
    timerEl.classList.remove('is-finished');
    timerStart.textContent = 'Start';
  });
}

function showToast(text) {
  let t = document.querySelector('.toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = text;
  t.classList.add('is-visible');
  clearTimeout(t._hide);
  t._hide = setTimeout(() => t.classList.remove('is-visible'), 2500);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderDrill);
} else {
  renderDrill();
}

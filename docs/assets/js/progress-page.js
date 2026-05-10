// Progress dashboard — render percentage, streak, per-tier bars,
// recently completed list, and settings.
import { tiers, totalDrillCount } from '../../content/tiers.js';
import { drills as drillData } from '../../content/drills.js';
import {
  getState, getCompletedCount, getTierCompletedCount, getStreak,
  getSettings, setSetting, resetState, exportState, importState,
  onStateChange,
} from './progress.js';

function tally(done, total) {
  const marks = [];
  for (let i = 0; i < total; i++) {
    marks.push(`<span class="tally__mark${i < done ? ' is-done' : ''}"></span>`);
  }
  return `<span class="tally">${marks.join('')}<span class="tally__count">${done}/${total}</span></span>`;
}

function fmtDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  const today = new Date();
  const days = Math.round((today - d) / 86400000);
  if (days <= 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 7) return `${days} days ago`;
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

function renderRecent() {
  const s = getState();
  const recent = Object.entries(s.drills)
    .filter(([, v]) => v.completedAt)
    .sort((a, b) => new Date(b[1].completedAt) - new Date(a[1].completedAt))
    .slice(0, 5);

  const el = document.querySelector('[data-recent]');
  if (!el) return;
  if (recent.length === 0) {
    el.innerHTML = `<p class="dash-empty">Nothing here yet — go finish your first drill, I’ll wait.</p>`;
    return;
  }
  el.innerHTML = `
    <h3>Recently completed</h3>
    <ol>
      ${recent.map(([key, v]) => {
        const [tier, drill] = key.split('/');
        const d = drillData[key];
        return `<li>
          <span class="dash-recent__date">${fmtDate(v.completedAt)}</span>
          <a href="../tiers/${tier}/${drill}/">${d ? d.title : drill}</a>
        </li>`;
      }).join('')}
    </ol>
  `;
}

function renderSummary() {
  const completed = getCompletedCount();
  const total = totalDrillCount();
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
  document.querySelector('[data-overall-num]').textContent = pct + '%';
  document.querySelector('[data-overall-sub]').textContent = `${completed} of ${total} drills`;

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

  const tierList = document.querySelector('[data-tier-bars]');
  if (tierList) {
    tierList.innerHTML = tiers.map((t) => {
      const done = getTierCompletedCount(t.slug, t.drills);
      return `
        <div class="tier-row" style="padding-block: 1rem; border-bottom: 1px dashed var(--rule);">
          <div>
            <span class="tier-row__num">Tier ${t.number}</span>
            <h3 class="tier-row__title" style="font-size:1.15rem;"><a href="../tiers/${t.slug}/">${t.title}</a></h3>
          </div>
          <div>
            <div class="tier-row__progress">
              ${tally(done, t.drills.length)}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
}

function renderSettings() {
  const settings = getSettings();
  const themeSel = document.querySelector('[name="theme"]');
  const handSel = document.querySelector('[name="hand"]');
  const streakChk = document.querySelector('[name="showStreak"]');
  if (themeSel) themeSel.value = settings.theme || 'auto';
  if (handSel) handSel.value = settings.hand || 'right';
  if (streakChk) streakChk.checked = settings.showStreak !== false;
}

function bindActions() {
  document.querySelector('[name="theme"]')?.addEventListener('change', (e) => {
    setSetting('theme', e.target.value);
    if (e.target.value === 'auto') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', e.target.value);
  });
  document.querySelector('[name="hand"]')?.addEventListener('change', (e) => {
    setSetting('hand', e.target.value);
  });
  document.querySelector('[name="showStreak"]')?.addEventListener('change', (e) => {
    setSetting('showStreak', e.target.checked);
    renderSummary();
  });

  document.querySelector('[data-export]')?.addEventListener('click', () => {
    const json = exportState();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `doodle-drills-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });

  document.querySelector('[data-import]')?.addEventListener('click', () => {
    document.querySelector('[data-import-input]').click();
  });
  document.querySelector('[data-import-input]')?.addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    if (importState(text)) {
      window.location.reload();
    } else {
      alert('That file did not parse as a valid progress export.');
    }
  });

  document.querySelector('[data-reset]')?.addEventListener('click', () => {
    const word = prompt('Type "reset" to wipe all progress on this device. This cannot be undone.');
    if (word === 'reset') {
      resetState();
      window.location.reload();
    }
  });
}

function init() {
  renderSummary();
  renderRecent();
  renderSettings();
  bindActions();
  onStateChange(() => { renderSummary(); renderRecent(); });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Progress state. Single localStorage key. Versioned. Multi-tab safe.

const KEY = 'doodle-drills:state:v1';
const LISTENERS = new Set();

const todayISO = () => new Date().toISOString().slice(0, 10);
const nowISO = () => new Date().toISOString();

const empty = () => ({
  version: 1,
  createdAt: nowISO(),
  lastSeenAt: nowISO(),
  settings: { theme: 'auto', hand: 'right', showStreak: true },
  drills: {},
  tiers: {},
  activity: [],
});

function read() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty();
    const parsed = JSON.parse(raw);
    if (parsed.version !== 1) return empty();
    return { ...empty(), ...parsed };
  } catch {
    return empty();
  }
}

function write(state) {
  state.lastSeenAt = nowISO();
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('progress: write failed', e);
  }
  notify(state);
}

function notify(state) {
  for (const cb of LISTENERS) {
    try { cb(state); } catch (e) { console.warn(e); }
  }
}

export function getState() {
  return read();
}

export function onStateChange(cb) {
  LISTENERS.add(cb);
  return () => LISTENERS.delete(cb);
}

if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => {
    if (e.key === KEY) notify(read());
  });
}

export function isDrillComplete(tierSlug, drillSlug) {
  const s = read();
  return Boolean(s.drills[`${tierSlug}/${drillSlug}`]?.completedAt);
}

export function getDrillState(tierSlug, drillSlug) {
  const s = read();
  return s.drills[`${tierSlug}/${drillSlug}`] || null;
}

export function setCriterion(tierSlug, drillSlug, key, value) {
  const s = read();
  const k = `${tierSlug}/${drillSlug}`;
  if (!s.drills[k]) s.drills[k] = { criteria: {}, timesPracticed: 0 };
  if (!s.drills[k].criteria) s.drills[k].criteria = {};
  s.drills[k].criteria[key] = !!value;
  write(s);
}

export function markDrillComplete(tierSlug, drillSlug, criteria) {
  const s = read();
  const k = `${tierSlug}/${drillSlug}`;
  const wasComplete = Boolean(s.drills[k]?.completedAt);
  if (!s.drills[k]) s.drills[k] = { criteria: {}, timesPracticed: 0 };
  s.drills[k].criteria = { ...s.drills[k].criteria, ...(criteria || {}) };
  s.drills[k].completedAt = s.drills[k].completedAt || nowISO();
  s.drills[k].lastCompletedAt = nowISO();
  s.drills[k].timesPracticed = (s.drills[k].timesPracticed || 0) + 1;

  if (!wasComplete) {
    const today = todayISO();
    const last = s.activity[s.activity.length - 1];
    if (last && last.date === today) {
      last.completed = (last.completed || 0) + 1;
    } else {
      s.activity.push({ date: today, completed: 1 });
      if (s.activity.length > 60) s.activity = s.activity.slice(-60);
    }
  }
  write(s);
}

export function unmarkDrill(tierSlug, drillSlug) {
  const s = read();
  const k = `${tierSlug}/${drillSlug}`;
  if (s.drills[k]) {
    delete s.drills[k].completedAt;
  }
  write(s);
}

export function setTierFirstComplete(tierSlug) {
  const s = read();
  if (!s.tiers[tierSlug]) {
    s.tiers[tierSlug] = { firstCompletedAt: nowISO() };
    write(s);
  }
}

export function setSetting(key, value) {
  const s = read();
  s.settings = { ...s.settings, [key]: value };
  write(s);
}

export function getSettings() {
  return read().settings;
}

export function resetState() {
  try { localStorage.removeItem(KEY); } catch {}
  notify(empty());
}

export function exportState() {
  return JSON.stringify(read(), null, 2);
}

export function importState(json) {
  try {
    const parsed = JSON.parse(json);
    if (parsed.version !== 1) throw new Error('Unknown version');
    write({ ...empty(), ...parsed });
    return true;
  } catch (e) {
    console.warn('import failed', e);
    return false;
  }
}

export function getStreak() {
  const s = read();
  if (!s.activity || s.activity.length === 0) return 0;
  const dates = new Set(s.activity.filter((a) => (a.completed || 0) > 0).map((a) => a.date));
  if (dates.size === 0) return 0;
  let streak = 0;
  const d = new Date();
  // Allow a one-day gap if today not done yet
  if (!dates.has(d.toISOString().slice(0, 10))) {
    d.setDate(d.getDate() - 1);
  }
  while (dates.has(d.toISOString().slice(0, 10))) {
    streak += 1;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}

export function getCompletedCount() {
  const s = read();
  return Object.values(s.drills).filter((d) => d.completedAt).length;
}

export function getTierCompletedCount(tierSlug, tierDrills) {
  const s = read();
  return tierDrills.filter((slug) => s.drills[`${tierSlug}/${slug}`]?.completedAt).length;
}

// returns most recent location: { tier, drill } or null
export function getResume() {
  const s = read();
  const entries = Object.entries(s.drills)
    .filter(([, v]) => v.lastCompletedAt || v.completedAt)
    .sort((a, b) => {
      const ad = a[1].lastCompletedAt || a[1].completedAt;
      const bd = b[1].lastCompletedAt || b[1].completedAt;
      return new Date(bd) - new Date(ad);
    });
  if (entries.length === 0) return null;
  const [k] = entries[0];
  const [tier, drill] = k.split('/');
  return { tier, drill };
}

// Global header: theme toggle, mobile nav, depth-aware injection.
// Each page has <div id="site-header" data-depth="N"></div> and we render the
// header into it. Depth is the number of "../" segments needed to reach the
// site root (0 for /, 1 for /curriculum/, 2 for /tiers/<slug>/, 3 for drills).
import { getSettings, setSetting } from './progress.js';

const root = document.documentElement;

function applyTheme(theme) {
  if (theme === 'auto') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', theme);
}

function nextTheme(current) {
  return current === 'auto' ? 'light' : current === 'light' ? 'dark' : 'auto';
}

function relPrefix(depth) {
  return depth > 0 ? '../'.repeat(depth) : '';
}

function navLinks(depth, current) {
  const r = relPrefix(depth);
  const items = [
    { id: 'curriculum', href: `${r}curriculum/`, label: 'Curriculum' },
    { id: 'handbook',   href: `${r}handbook/`,   label: 'Handbook' },
    { id: 'progress',   href: `${r}progress/`,   label: 'Progress' },
    { id: 'pad',        href: `${r}practice-pad/`, label: 'Practice pad' },
    { id: 'about',      href: `${r}about/`,      label: 'About' },
  ];
  return items.map((it) => {
    const isCurrent = current === it.id;
    return `<a href="${it.href}"${isCurrent ? ' aria-current="page"' : ''}>${it.label}</a>`;
  }).join('');
}

const sun = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21M5.6 5.6l1 1M17.4 17.4l1 1M5.6 18.4l1-1M17.4 6.6l1-1"/></svg>`;
const burger = `<svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="3" y1="6" x2="17" y2="6"/><line x1="3" y1="14" x2="17" y2="14"/></svg>`;
const close = `<svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="5" y1="5" x2="15" y2="15"/><line x1="15" y1="5" x2="5" y2="15"/></svg>`;

function renderHeader(depth, current) {
  const r = relPrefix(depth);
  return `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="site-header__inner">
        <a class="wordmark" href="${r || './'}" aria-label="Doodle Drills home">
          doodle drills<span class="wordmark__dot">.</span>
        </a>
        <nav class="nav" aria-label="Main">
          ${navLinks(depth, current)}
        </nav>
        <button class="theme-toggle" data-theme-toggle aria-label="Toggle theme" type="button">
          ${sun}<span class="sr-only">Toggle theme</span>
        </button>
        <button class="nav-toggle" data-nav-toggle aria-label="Open menu" type="button">
          ${burger}
        </button>
      </div>
    </header>
    <aside class="mobile-nav" data-mobile-nav data-open="false">
      <button class="close" data-mobile-nav-close aria-label="Close menu" type="button">${close}</button>
      <nav>${navLinks(depth, current)}</nav>
    </aside>
  `;
}

function renderFooter(depth) {
  const r = relPrefix(depth);
  return `
    <div class="site-footer__inner">
      <span class="text-soft">Doodle Drills · a public-domain practice curriculum.</span>
      <span><a href="${r}about/">About</a> · <a href="https://github.com" rel="noopener">Source</a></span>
    </div>
  `;
}

function init() {
  const slot = document.getElementById('site-header');
  const depth = slot ? parseInt(slot.dataset.depth || '0', 10) : 0;
  const current = slot?.dataset.current || '';

  if (slot) slot.outerHTML = renderHeader(depth, current);

  const footerSlot = document.getElementById('site-footer');
  if (footerSlot) {
    footerSlot.classList.add('site-footer');
    footerSlot.innerHTML = renderFooter(depth);
  }

  const settings = getSettings();
  applyTheme(settings.theme || 'auto');

  const toggle = document.querySelector('[data-theme-toggle]');
  toggle?.addEventListener('click', () => {
    const current = getSettings().theme || 'auto';
    const t = nextTheme(current);
    setSetting('theme', t);
    applyTheme(t);
    toggle.setAttribute('aria-label', `Theme: ${t}`);
  });

  const navToggle = document.querySelector('[data-nav-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  const closeBtn = document.querySelector('[data-mobile-nav-close]');
  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', () => {
      mobileNav.setAttribute('data-open', 'true');
      mobileNav.querySelector('a, button')?.focus();
    });
    closeBtn?.addEventListener('click', () => {
      mobileNav.setAttribute('data-open', 'false');
      navToggle.focus();
    });
    mobileNav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') mobileNav.setAttribute('data-open', 'false');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.getAttribute('data-open') === 'true') {
        mobileNav.setAttribute('data-open', 'false');
        navToggle.focus();
      }
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

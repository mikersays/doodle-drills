// Practice pad — pointer-event-based drawing, ink + 4 swatches, eraser, save PNG.

const SWATCHES = [
  { name: 'ink',        color: '#1F1B16' },
  { name: 'terracotta', color: '#C8553D' },
  { name: 'teal',       color: '#3A7D7B' },
  { name: 'graphite',   color: '#7A7160' },
];

function init() {
  const canvas = document.getElementById('pad-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { willReadFrequently: false });
  let dpr = Math.max(1, window.devicePixelRatio || 1);

  let tool = 'pen';
  let color = SWATCHES[0].color;
  let width = 2.5;
  let drawing = false;
  let last = null;

  function resize() {
    const wrap = canvas.parentElement;
    const rect = wrap.getBoundingClientRect();
    // preserve drawing
    const saved = ctx.getImageData(0, 0, canvas.width, canvas.height);
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.scale(dpr, dpr);
    ctx.putImageData(saved, 0, 0);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }

  resize();
  window.addEventListener('resize', () => requestAnimationFrame(resize));

  function pos(e) {
    const r = canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  function start(e) {
    e.preventDefault();
    drawing = true;
    canvas.setPointerCapture?.(e.pointerId);
    last = pos(e);
  }

  function move(e) {
    if (!drawing) return;
    e.preventDefault();
    const p = pos(e);
    ctx.globalCompositeOperation = tool === 'eraser' ? 'destination-out' : 'source-over';
    ctx.strokeStyle = color;
    ctx.lineWidth = tool === 'eraser' ? width * 4 : width;
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    // quadratic smoothing using midpoint
    const mid = { x: (last.x + p.x) / 2, y: (last.y + p.y) / 2 };
    ctx.quadraticCurveTo(last.x, last.y, mid.x, mid.y);
    ctx.stroke();
    last = p;
  }

  function end(e) {
    drawing = false;
    last = null;
    canvas.releasePointerCapture?.(e.pointerId);
  }

  canvas.addEventListener('pointerdown', start);
  canvas.addEventListener('pointermove', move);
  canvas.addEventListener('pointerup', end);
  canvas.addEventListener('pointercancel', end);
  canvas.addEventListener('pointerleave', end);

  // toolbar
  const toolButtons = document.querySelectorAll('[data-tool]');
  toolButtons.forEach((b) => {
    b.addEventListener('click', () => {
      tool = b.dataset.tool;
      toolButtons.forEach((bb) => bb.setAttribute('aria-pressed', bb === b ? 'true' : 'false'));
    });
  });

  // swatches
  const sw = document.querySelector('[data-swatches]');
  if (sw) {
    sw.innerHTML = SWATCHES.map((s, i) =>
      `<button class="pad__swatch" data-swatch="${s.color}" aria-label="${s.name}" aria-pressed="${i === 0}" style="background:${s.color};"></button>`
    ).join('');
    sw.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-swatch]');
      if (!btn) return;
      color = btn.dataset.swatch;
      tool = 'pen';
      sw.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
      toolButtons.forEach((b) => b.setAttribute('aria-pressed', b.dataset.tool === 'pen' ? 'true' : 'false'));
    });
  }

  document.querySelector('[data-width]')?.addEventListener('input', (e) => {
    width = parseFloat(e.target.value);
  });

  document.querySelector('[data-clear]')?.addEventListener('click', () => {
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  });

  document.querySelector('[data-save]')?.addEventListener('click', () => {
    // Composite onto a paper-colored background for export
    const out = document.createElement('canvas');
    out.width = canvas.width;
    out.height = canvas.height;
    const octx = out.getContext('2d');
    octx.fillStyle = '#FBF7F0';
    octx.fillRect(0, 0, out.width, out.height);
    octx.drawImage(canvas, 0, 0);
    out.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `practice-pad-${new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-')}.png`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }, 'image/png');
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

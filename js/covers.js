// Cover art for the work list. Projects with a screenshot use it; Horde Carnage has
// none yet, so its cover is drawn here: the Matriarch winding up her Hair Ring, with
// the gap in the ring off to one side of the hunter, lit by the hunter's torch.
const NS = 'http://www.w3.org/2000/svg';

function svgEl(tag, attrs) {
  const node = document.createElementNS(NS, tag);
  for (const [key, value] of Object.entries(attrs)) node.setAttribute(key, value);
  return node;
}

// Small deterministic generator so the drawing is identical on every visit.
function seeded(seed) {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function drawHorde(wide) {
  const random = seeded(2026);
  const svg = svgEl('svg', { viewBox: wide ? '-200 10 800 500' : '0 0 400 500', preserveAspectRatio: 'xMidYMid slice', role: 'img', 'aria-label': 'Drawing of the Matriarch, a giant hairball, spitting a ring of hair at a hunter in a dark crypt' });

  svg.append(svgEl('rect', { x: -200, width: 800, height: 520, fill: '#100e0b' }));

  // Torchlight: flat tone steps around the hunter
  const hunter = { x: 214, y: 404 };
  [[250, '#16130f'], [170, '#1c1814'], [100, '#231e18'], [52, '#2b251d']].forEach(([r, fill]) => {
    svg.append(svgEl('circle', { cx: hunter.x, cy: hunter.y, r, fill }));
  });

  // The Hair Ring: 42 strands with a gap off to one side of the hunter
  const boss = { x: 196, y: 196 };
  const toHunter = Math.atan2(hunter.y - boss.y, hunter.x - boss.x);
  const gapCentre = toHunter + 0.62;
  const ring = svgEl('g', { stroke: '#a39b8a', 'stroke-width': 3, 'stroke-linecap': 'round', fill: 'none' });
  for (let i = 0; i < 48; i++) {
    const angle = (i / 48) * Math.PI * 2;
    const offset = Math.atan2(Math.sin(angle - gapCentre), Math.cos(angle - gapCentre));
    if (Math.abs(offset) < 0.4) continue;
    const r1 = 128 + random() * 26;
    const r2 = r1 + 16 + random() * 10;
    const bend = (random() - 0.5) * 0.12;
    const x1 = boss.x + Math.cos(angle) * r1;
    const y1 = boss.y + Math.sin(angle) * r1;
    const x2 = boss.x + Math.cos(angle + bend) * r2;
    const y2 = boss.y + Math.sin(angle + bend) * r2;
    ring.append(svgEl('path', { d: `M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}` }));
  }
  svg.append(ring);

  // The Matriarch: a matted mass of hair
  const points = [];
  const tufts = 64;
  for (let i = 0; i < tufts; i++) {
    const angle = (i / tufts) * Math.PI * 2;
    const r = (i % 2 === 0 ? 104 : 88) + random() * 14;
    points.push([boss.x + Math.cos(angle) * r, boss.y + Math.sin(angle) * r * 0.92]);
  }
  const body = points.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join('') + 'Z';
  svg.append(svgEl('path', { d: body, fill: '#060504' }));

  // Glowing slit eyes
  svg.append(svgEl('path', { d: 'M156 190q16-9 30 1q-15 6-30-1z', fill: '#c0392b' }));
  svg.append(svgEl('path', { d: 'M208 191q14-10 30-1q-15 7-30 1z', fill: '#c0392b' }));

  // The hunter: tricorn, cape and the gun, from above
  const h = svgEl('g', { transform: `translate(${hunter.x} ${hunter.y}) rotate(${((toHunter + Math.PI) * 180) / Math.PI - 90})` });
  h.append(svgEl('path', { d: 'M-15 6q15 18 30 0l-4-14h-22z', fill: '#3a332a' }));
  h.append(svgEl('path', { d: 'M-12 -2l12-12 12 12-12 5z', fill: '#e6e0d2' }));
  h.append(svgEl('rect', { x: -2, y: 8, width: 4, height: 16, fill: '#c9a35a' }));
  svg.append(h);

  return svg;
}

// `wide` frames the drawing for a 16:10 slot instead of the 4:5 preview frame.
export function cover(project, { wide = false } = {}) {
  const box = document.createElement('div');
  box.className = 'cover';
  if (project.cover.type === 'image') {
    const img = document.createElement('img');
    img.src = project.cover.src;
    img.alt = project.cover.alt;
    img.width = 1280;
    img.height = 720;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.style.setProperty('--zoom', project.cover.zoom ?? 1);
    img.style.setProperty('--origin', project.cover.origin ?? '50% 50%');
    box.append(img);
  } else {
    box.append(drawHorde(wide));
  }
  return box;
}

import { projects } from './data/projects.js';
import { career } from './data/career.js';
import { skills } from './data/skills.js';
import { cover } from './covers.js';
import { initModal, openProject } from './modal.js';
import { initReveal } from './reveal.js';
import { initSecrets, omen } from './secrets.js';

const $ = (selector) => document.querySelector(selector);
const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
};
const icon = (id) => {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('class', 'icon');
  svg.setAttribute('aria-hidden', 'true');
  const use = document.createElementNS(ns, 'use');
  use.setAttribute('href', `#${id}`);
  svg.append(use);
  return svg;
};

// Card buttons, in reading order. Only the links a project actually has are shown.
const cardLinks = [
  ['play', 'Play', 'i-play'],
  ['demo', 'Live demo', 'i-external'],
  ['store', 'Chrome Web Store', 'i-store'],
  ['site', 'Website', 'i-external'],
  ['itch', 'Itch.io', 'i-gamepad'],
  ['youtube', 'Video', 'i-youtube'],
  ['roadmap', 'Roadmap', 'i-board'],
  ['github', 'Code', 'i-github'],
];

const TRACKS = ['games', 'software'];

function renderTrack(panel, list) {
  const host = panel.querySelector('.work__list');
  const frame = panel.querySelector('.work__frame');
  host.replaceChildren();
  frame.replaceChildren();

  const setActive = (index) => {
    host.querySelectorAll('.work__item').forEach((item, i) => item.classList.toggle('is-active', i === index));
    frame.querySelectorAll(':scope > *').forEach((item, i) => item.classList.toggle('is-active', i === index));
  };

  list.forEach((project, index) => {
    const item = el('li', 'work__item r');
    item.dataset.project = project.id;
    if (project.pending) item.classList.add('is-pending');
    item.style.setProperty('--i', index + 1);

    const media = el('div', 'work__media');
    media.append(cover(project));

    const open = el('button', 'work__open');
    open.type = 'button';
    open.setAttribute('aria-haspopup', 'dialog');

    const row = el('span', 'work__row');
    const meta = [project.role, project.context, project.year].filter(Boolean).join(' · ');
    row.append(el('span', 'work__name', project.title), el('span', 'work__meta', meta));

    open.append(row);
    if (project.quote) open.append(el('span', 'work__quote', project.quote));
    // The card wants one or two lines; a longer lede stays in the dialog
    const blurb = project.blurb ?? project.lede;
    if (blurb) open.append(el('span', 'work__lede', blurb));
    open.addEventListener('click', () => openProject(project, open));
    open.addEventListener('pointerenter', () => setActive(index));
    open.addEventListener('focus', () => setActive(index));

    // The whole card opens the project; its own links and buttons keep doing their job
    item.addEventListener('click', (event) => {
      if (event.target.closest('a, button')) return;
      open.click();
    });
    item.addEventListener('pointerenter', () => setActive(index));

    item.append(media, open);

    if (project.stack?.length) {
      const stack = el('ul', 'work__stack');
      stack.setAttribute('aria-label', 'Stack');
      for (const tag of project.stack) stack.append(el('li', null, tag));
      item.append(stack);
    }

    const actions = el('div', 'work__actions');
    const more = el('button', 'work__link work__link--more');
    more.type = 'button';
    more.setAttribute('aria-haspopup', 'dialog');
    more.append(icon('i-plus'), document.createTextNode('Project details'));
    more.addEventListener('click', () => openProject(project, more));
    more.addEventListener('focus', () => setActive(index));
    actions.append(more);
    for (const [key, label, iconId] of cardLinks) {
      const href = project.links?.[key];
      if (!href) continue;
      const link = el('a', 'work__link');
      link.href = href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', `${label}: ${project.title} (opens in a new tab)`);
      link.append(icon(iconId), document.createTextNode(label));
      link.addEventListener('focus', () => setActive(index));
      actions.append(link);
    }
    // Projects split across several repositories get one code button each
    for (const repo of project.links?.repos ?? []) {
      const link = el('a', 'work__link');
      link.href = repo.href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', `${repo.label}: ${project.title} (opens in a new tab)`);
      link.append(icon('i-github'), document.createTextNode(repo.label));
      link.addEventListener('focus', () => setActive(index));
      actions.append(link);
    }
    item.append(actions);

    host.append(item);
    frame.append(cover(project));
  });

  setActive(0);
}

function renderWork() {
  for (const track of TRACKS) {
    const panel = document.getElementById(track);
    const list = projects.filter((project) => project.track === track);
    renderTrack(panel, list);
    const count = document.querySelector(`#tab-${track} .tabs__count`);
    if (count) count.textContent = String(list.length);
  }
}

// Tabs: one list at a time, swapped in place. The address remembers the tab, so
// #games and #software can be linked to directly.
function initTabs() {
  const tablist = $('.tabs');
  const tabs = [...document.querySelectorAll('.tabs__tab')];
  const panels = TRACKS.map((track) => document.getElementById(track));
  const work = $('#work');
  const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  tablist.hidden = false;

  const select = (track, { focus = false, animate = true } = {}) => {
    if (!TRACKS.includes(track)) track = TRACKS[0];
    tabs.forEach((tab) => {
      const on = tab.dataset.track === track;
      tab.setAttribute('aria-selected', String(on));
      tab.tabIndex = on ? 0 : -1;
      if (on && focus) tab.focus();
    });
    panels.forEach((panel) => {
      const on = panel.dataset.track === track;
      const wasHidden = panel.hidden;
      panel.hidden = !on;
      if (on && wasHidden && animate) {
        panel.classList.remove('is-entering');
        panel.offsetWidth; // restart the entrance
        panel.classList.add('is-entering');
      }
    });
    work.dataset.track = track;
  };

  const go = (track, { scroll = false, focus = false } = {}) => {
    select(track, { focus });
    history.replaceState(null, '', `#${track}`);
    if (scroll) work.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' });
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => go(tab.dataset.track));
    tab.addEventListener('keydown', (event) => {
      const index = tabs.indexOf(tab);
      let next = null;
      if (event.key === 'ArrowRight') next = tabs[(index + 1) % tabs.length];
      if (event.key === 'ArrowLeft') next = tabs[(index - 1 + tabs.length) % tabs.length];
      if (event.key === 'Home') next = tabs[0];
      if (event.key === 'End') next = tabs[tabs.length - 1];
      if (!next) return;
      event.preventDefault();
      go(next.dataset.track, { focus: true });
    });
  });

  // Nav links and the "Next" link at the end of each list switch the tab and bring the section up
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[data-track]');
    if (!link) return;
    event.preventDefault();
    go(link.dataset.track, { scroll: true });
  });

  const fromHash = () => location.hash.slice(1);
  window.addEventListener('hashchange', () => {
    if (TRACKS.includes(fromHash())) go(fromHash(), { scroll: true });
  });

  const initial = fromHash();
  select(initial, { animate: false });
  if (TRACKS.includes(initial)) requestAnimationFrame(() => work.scrollIntoView({ block: 'start' }));
}

function renderCareer() {
  const body = $('#path-rows');
  body.replaceChildren();
  for (const entry of career) {
    const row = el('tr');
    row.append(
      el('td', null, entry.institution),
      el('td', null, entry.credential),
      el('td', null, entry.field),
      el('td', null, `${entry.start} to ${entry.end}`),
    );
    body.append(row);
  }
}

function renderSkills() {
  const host = $('#skill-groups');
  host.replaceChildren();
  for (const { group, items } of skills) {
    const section = el('div', 'skill-group');
    section.dataset.reveal = '';
    const title = el('h3', 'r', group);
    const list = el('ul');
    items.forEach(([name, value], index) => {
      const row = el('li', 'skill');
      row.style.setProperty('--i', index);
      const meter = el('div', 'meter');
      meter.setAttribute('role', 'meter');
      meter.setAttribute('aria-label', name);
      meter.setAttribute('aria-valuemin', '0');
      meter.setAttribute('aria-valuemax', '100');
      meter.setAttribute('aria-valuenow', String(value));
      meter.setAttribute('aria-valuetext', `${value} percent`);
      const fill = el('div', 'meter__fill');
      fill.style.setProperty('--v', value / 100);
      meter.append(fill);
      row.append(el('span', 'skill__name', name), el('span', 'skill__value', `${value}%`), meter);
      list.append(row);
    });
    section.append(title, list);
    host.append(section);
  }
}

try {
  renderWork();
  initTabs();
  renderCareer();
  renderSkills();
  initModal();
  initReveal();
  initSecrets();
} catch (error) {
  console.error(error);
  omen('YOU DIED', 'Part of this page failed to load. Reload to try again.', { tone: 'death', hold: true });
}

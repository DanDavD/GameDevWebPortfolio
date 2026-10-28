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

function renderWork() {
  const list = $('#work-list');
  const frame = $('#work-frame');
  list.replaceChildren();
  frame.replaceChildren();

  const setActive = (index) => {
    list.querySelectorAll('.work__item').forEach((item, i) => item.classList.toggle('is-active', i === index));
    frame.querySelectorAll(':scope > *').forEach((item, i) => item.classList.toggle('is-active', i === index));
  };

  projects.forEach((project, index) => {
    const item = el('li', 'work__item r');
    item.style.setProperty('--i', index + 1);

    const media = el('div', 'work__media');
    media.append(cover(project, { wide: true }));

    const open = el('button', 'work__open');
    open.type = 'button';
    open.setAttribute('aria-haspopup', 'dialog');

    const row = el('span', 'work__row');
    row.append(el('span', 'work__name', project.title), el('span', 'work__meta', `${project.role} · ${project.year}`));

    const more = el('span', 'work__more');
    more.append(icon('i-plus'), document.createTextNode('Project details'));

    open.append(row, el('span', 'work__quote', project.quote), el('span', 'work__lede', project.lede), more);
    open.addEventListener('click', () => openProject(project, open));
    open.addEventListener('pointerenter', () => setActive(index));
    open.addEventListener('focus', () => setActive(index));

    // On phones the picture sits above the name; let it open the project too
    media.addEventListener('click', () => open.click());

    item.append(media, open);
    list.append(item);
    frame.append(cover(project));
  });

  setActive(0);
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
  renderCareer();
  renderSkills();
  initModal();
  initReveal();
  initSecrets();
} catch (error) {
  console.error(error);
  omen('YOU DIED', 'Part of this page failed to load. Reload to try again.', { tone: 'death', hold: true });
}

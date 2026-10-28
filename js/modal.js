// The project dialog: a native <dialog>, so focus, Escape and the top layer come for free.
let dialog;
let content;

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
const button = (href, label, iconId, variant = 'solid') => {
  const link = el(href ? 'a' : 'span', `button button--${variant}`);
  if (href) link.href = href;
  else link.setAttribute('aria-disabled', 'true');
  link.append(icon(iconId), document.createTextNode(label));
  return link;
};

function render(project) {
  const close = el('button', 'modal__close');
  close.type = 'button';
  close.setAttribute('aria-label', 'Close');
  close.append(icon('i-close'));
  close.addEventListener('click', () => dialog.close());

  const title = el('h2', 'modal__title', project.title);
  title.id = 'modal-title';
  title.tabIndex = -1;
  title.autofocus = true;
  const quote = el('p', 'modal__quote', project.quote);

  // Left: the item's stats and where to get it
  const stats = el('dl', 'stats');
  for (const [term, value] of project.stats) {
    const pair = el('div');
    pair.append(el('dt', null, term), el('dd', null, value));
    stats.append(pair);
  }
  const actions = el('div', 'actions');
  actions.append(button(project.links.github, 'View on GitHub', 'i-github', 'solid'));
  actions.append(button(project.links.itch, project.links.itch ? 'Play on Itch.io' : 'Itch.io page coming soon', 'i-gamepad', 'quiet'));
  const note = el('p', 'actions__note');
  if (project.links.release) {
    const link = el('a', null, 'download the Windows build (v0.1.0)');
    link.href = project.links.release;
    note.append(document.createTextNode('Until then, '), link, document.createTextNode('.'));
  }
  const left = el('div');
  left.append(stats, actions, note);

  // Right: what it is and what I built
  const summary = el('ul', 'summary');
  for (const line of project.summary) summary.append(el('li', null, line));
  const right = el('div');
  right.append(el('p', 'modal__lede', project.lede), el('h3', null, 'What I built'), summary);

  const grid = el('div', 'modal__grid');
  grid.append(left, right);

  // Gameplay preview and video
  const media = el('div', 'media');
  const preview = el('div', 'slot');
  if (project.links.preview) {
    preview.classList.add('slot--filled');
    const isVideo = /\.(webm|mp4)$/i.test(project.links.preview);
    const node = isVideo ? el('video') : el('img');
    node.src = project.links.preview;
    if (isVideo) Object.assign(node, { muted: true, loop: true, autoplay: true, playsInline: true });
    else node.alt = `${project.title} gameplay`;
    preview.append(node);
  } else {
    preview.append(icon('i-gamepad'), el('span', null, 'Gameplay preview coming soon'));
  }
  const video = el(project.links.youtube ? 'a' : 'div', 'slot slot--video');
  if (project.links.youtube) video.href = project.links.youtube;
  video.append(icon('i-play'), el('strong', null, 'Video showcase'), el('span', null, project.links.youtube ? 'Watch on YouTube' : 'Coming soon to YouTube'));
  media.append(preview, video);

  const parts = [close, title, quote, grid, el('h3', null, 'Gameplay'), media];

  if (project.gallery.length) {
    const gallery = el('div', 'gallery');
    for (const shot of project.gallery) {
      const figure = el('figure');
      const img = el('img');
      Object.assign(img, { src: shot.src, alt: shot.alt, width: 1280, height: 720, loading: 'lazy', decoding: 'async' });
      figure.append(img, el('figcaption', null, shot.caption));
      gallery.append(figure);
    }
    parts.push(el('h3', null, 'Screenshots'), gallery);
  }

  content.replaceChildren(...parts);
}

export function openProject(project) {
  render(project);
  dialog.showModal();
  dialog.scrollTop = 0;
  content.parentElement.scrollTop = 0;
}

export function initModal() {
  dialog = document.getElementById('project-modal');
  content = document.getElementById('modal-content');
  // A click on the backdrop lands on the dialog element itself
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
}

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
  if (href) {
    link.href = href;
    if (/^https?:\/\//i.test(href)) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  } else {
    link.setAttribute('aria-disabled', 'true');
  }
  link.append(icon(iconId), document.createTextNode(label));
  return link;
};

const getYouTubeId = (url) => {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/i);
  return match ? match[1] : null;
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
  const left = el('div');
  left.append(stats, actions);

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

  const ytId = getYouTubeId(project.links.youtube);
  let video;

  if (ytId) {
    video = el('div', 'slot slot--video slot--player');
    video.setAttribute('role', 'region');
    video.setAttribute('aria-label', `${project.title} video showcase`);

    const thumb = el('img', 'slot__thumb');
    thumb.src = `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`;
    thumb.alt = `${project.title} gameplay showcase thumbnail`;
    thumb.loading = 'lazy';
    thumb.decoding = 'async';
    thumb.addEventListener('error', () => {
      thumb.src = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
    }, { once: true });

    const overlay = el('div', 'slot__overlay');

    const extLink = el('a', 'slot__external');
    extLink.href = project.links.youtube;
    extLink.target = '_blank';
    extLink.rel = 'noopener noreferrer';
    extLink.setAttribute('aria-label', `Watch ${project.title} gameplay showcase on YouTube (opens in new tab)`);
    extLink.append(icon('i-youtube'), document.createTextNode('Watch on YouTube'));
    extLink.addEventListener('click', (e) => e.stopPropagation());

    const playBtn = el('button', 'slot__play');
    playBtn.type = 'button';
    playBtn.setAttribute('aria-label', `Play ${project.title} gameplay showcase`);
    playBtn.append(icon('i-play'));

    const meta = el('div', 'slot__meta');
    meta.append(el('strong', null, 'Video showcase'), el('span', null, 'Play inline · Watch on YouTube'));

    const playVideo = () => {
      if (video.classList.contains('is-playing')) return;
      video.classList.add('is-playing');
      const iframe = document.createElement('iframe');
      iframe.className = 'slot__iframe';
      iframe.src = `https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0`;
      iframe.title = `${project.title} gameplay showcase`;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      video.replaceChildren(iframe);
      iframe.focus();
    };

    playBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      playVideo();
    });

    video.addEventListener('click', (e) => {
      if (e.target.closest('.slot__external')) return;
      playVideo();
    });

    video.addEventListener('keydown', (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('.slot__external')) {
        e.preventDefault();
        playVideo();
      }
    });

    video.tabIndex = 0;
    video.append(thumb, overlay, extLink, playBtn, meta);
  } else {
    video = el('div', 'slot slot--video');
    video.append(icon('i-play'), el('strong', null, 'Video showcase'), el('span', null, 'Coming soon to YouTube'));
  }

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
  dialog.addEventListener('close', () => {
    content.replaceChildren();
  });
}

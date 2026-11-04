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

  // Each project wears its own game: its key art behind the title, and its colour through the page
  dialog.dataset.project = project.id;
  const bar = el('div', 'modal__bar');
  bar.append(close);
  const banner = el('header', 'modal__banner');
  if (!project.banner) banner.classList.add('modal__banner--plain');
  if (project.banner) {
    const art = el('img', 'modal__art');
    Object.assign(art, { src: project.banner.src, alt: '', width: 1920, height: 1080, decoding: 'async' });
    art.style.objectPosition = project.banner.position ?? '50% 50%';
    art.style.setProperty('--zoom', project.banner.zoom ?? 1);
    art.style.setProperty('--origin', project.banner.origin ?? '50% 50%');
    // Busy screenshots (text, UI) can be dimmed so the title stays readable
    if (project.banner.dim) art.style.filter = `brightness(${project.banner.dim}) blur(2px)`;
    banner.append(art);
  }
  const heading = el('div', 'modal__heading');
  if (project.kicker) heading.append(el('p', 'modal__kicker', project.kicker));
  heading.append(title);
  if (project.quote) heading.append(el('p', 'modal__quote', project.quote));
  banner.append(heading);

  // Left: the item's stats and where to get it
  const stats = el('dl', 'stats');
  const rows = [
    ['Role', project.role],
    ['Context', project.context],
    ...(project.stats ?? []),
  ].filter(([, value]) => value);
  for (const [term, value] of rows) {
    const pair = el('div');
    pair.append(el('dt', null, term), el('dd', null, value));
    stats.append(pair);
  }
  // The first link a project has is the solid one; the rest are quiet
  const links = project.links ?? {};
  const wanted = [
    [links.play, 'Play in the browser', 'i-play'],
    [links.demo, 'Live demo', 'i-external'],
    [links.store, 'Get it on the Chrome Web Store', 'i-store'],
    [links.github, 'View on GitHub', 'i-github'],
    ...(links.repos ?? []).map((repo) => [repo.href, repo.label, 'i-github']),
    [links.site, 'Website', 'i-external'],
    [links.itch, 'Play on Itch.io', 'i-gamepad'],
    [links.release, links.release ? `Release ${links.release.split('/').pop()}` : '', 'i-download'],
    [links.roadmap, /trello\.com/i.test(links.roadmap ?? '') ? 'Roadmap on Trello' : 'Roadmap', 'i-board'],
  ].filter(([href]) => href);
  const left = el('div');
  left.append(stats);
  if (wanted.length) {
    const actions = el('div', 'actions');
    wanted.forEach(([href, label, iconId], i) => actions.append(button(href, label, iconId, i === 0 ? 'solid' : 'quiet')));
    left.append(actions);
  }
  if (project.note) left.append(el('p', 'actions__note', project.note));

  // Demo credentials, for apps behind a login
  if (project.credentials) {
    const box = el('div', 'credentials');
    const head = el('p', 'credentials__title');
    head.append(icon('i-key'), document.createTextNode('Demo credentials'));
    const list = el('dl');
    for (const [term, value] of Object.entries(project.credentials)) {
      const pair = el('div');
      pair.append(el('dt', null, term), el('dd', null, value));
      list.append(pair);
    }
    box.append(head, list);
    left.append(box);
  }

  // Right: what it is and what I built
  const right = el('div');
  if (project.lede) right.append(el('p', 'modal__lede', project.lede));
  if (project.summary?.length) {
    const summary = el('ul', 'summary');
    for (const line of project.summary) summary.append(el('li', null, line));
    right.append(el('h3', null, 'What I built'), summary);
  }

  const grid = el('div', 'modal__grid');
  grid.append(left, right);

  // Gameplay video
  const media = el('div', 'media');
  const isGame = project.track !== 'software';
  const ytId = getYouTubeId(links.youtube);
  let video;

  if (ytId) {
    video = el('div', 'slot slot--video slot--player');
    video.setAttribute('role', 'region');
    video.setAttribute('aria-label', `${project.title} video showcase`);

    const thumb = el('img', 'slot__thumb');
    // A project can show its own still instead of the video's YouTube thumbnail
    thumb.src = project.links.poster ?? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`;
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
    meta.append(el('strong', null, isGame ? 'Video showcase' : 'Video demo'), el('span', null, 'Play inline · Watch on YouTube'));

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
  } else if (project.videoSoon) {
    video = el('div', 'slot slot--video');
    video.append(icon('i-play'), el('strong', null, isGame ? 'Video showcase' : 'Video demo'), el('span', null, 'Coming soon to YouTube'));
  } else if (project.pending) {
    video = el('div', 'slot slot--video');
    video.append(icon('i-play'), el('strong', null, isGame ? 'Video showcase' : 'Video demo'), el('span', null, 'Pending: video link'));
  } else if (isGame) {
    video = el('div', 'slot slot--video');
    video.append(icon('i-play'), el('strong', null, 'Video showcase'), el('span', null, 'Coming soon to YouTube'));
  }

  const parts = [bar, banner, grid];
  if (video) {
    media.append(video);
    parts.push(el('h3', null, isGame ? 'Gameplay' : 'Demo'), media);
  }

  if (project.gallery?.length) {
    const gallery = el('div', 'gallery');
    for (const shot of project.gallery) {
      const figure = el('figure');
      const img = el('img');
      Object.assign(img, { src: shot.src, alt: shot.alt, width: shot.width ?? 1280, height: shot.height ?? 720, loading: 'lazy', decoding: 'async' });
      // Small or tall shots keep their own size instead of being stretched to the dialog's width
      if (shot.width) {
        figure.classList.add('gallery__natural');
        img.style.width = `${shot.width}px`;
      }
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
    delete dialog.dataset.project;
  });
}

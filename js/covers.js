// Cover art for the work list: each project's key frame, zoomed and framed from its data.
// A cover can be a picture or a short muted loop; with no cover, a visible "pending" frame.
const isVideo = (src) => /\.(mp4|webm)$/i.test(src);

export function cover(project) {
  const box = document.createElement('div');
  box.className = 'cover';

  if (!project.cover?.src) {
    box.classList.add('cover--pending');
    const note = document.createElement('span');
    note.textContent = 'Screenshot pending';
    box.append(note);
    return box;
  }

  let media;
  if (isVideo(project.cover.src)) {
    media = document.createElement('video');
    Object.assign(media, { src: project.cover.src, muted: true, loop: true, autoplay: true, playsInline: true });
    media.setAttribute('aria-label', project.cover.alt ?? '');
    media.preload = 'metadata';
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) media.autoplay = false;
  } else {
    media = document.createElement('img');
    media.src = project.cover.src;
    media.alt = project.cover.alt ?? '';
    media.width = 1280;
    media.height = 720;
    media.loading = 'lazy';
    media.decoding = 'async';
  }
  media.style.setProperty('--zoom', project.cover.zoom ?? 1);
  media.style.setProperty('--origin', project.cover.origin ?? '50% 50%');
  box.append(media);
  return box;
}

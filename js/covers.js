// Cover art for the work list: each project's key frame, zoomed and framed from its data.
export function cover(project) {
  const box = document.createElement('div');
  box.className = 'cover';
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
  return box;
}

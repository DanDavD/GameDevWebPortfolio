// Section entrances. Content stays visible unless this script runs, so a failed
// script never hides the page.
export function initReveal() {
  const sections = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) return;

  sections.forEach((section) => {
    section.querySelectorAll(':scope .r').forEach((node, index) => {
      if (!node.style.getPropertyValue('--i')) node.style.setProperty('--i', index);
    });
  });

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-in');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.05 });

  // Anything already on screen enters without waiting for a scroll
  sections.forEach((section) => observer.observe(section));
  document.documentElement.classList.add('reveal-ready');
}

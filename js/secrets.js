// Two concealed things, both silent:
//  - the Konami code lights a bonfire
//  - clicking the big name in the hero five times in a row... well. You'll see.
const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let timer;

export function omen(word, note, { tone = 'death', hold = false, onDone } = {}) {
  const root = document.getElementById('omen');
  if (!root) return;
  clearTimeout(timer);
  document.getElementById('omen-word').textContent = word;
  document.getElementById('omen-note').textContent = note;
  root.classList.toggle('omen--bonfire', tone === 'bonfire');
  root.classList.remove('is-shown');
  root.hidden = false;
  root.offsetWidth; // start the transition from the hidden state
  root.classList.add('is-shown');
  if (hold) {
    root.style.pointerEvents = 'auto';
    return;
  }
  timer = setTimeout(() => {
    root.classList.remove('is-shown');
    timer = setTimeout(() => {
      root.hidden = true;
      onDone?.();
    }, 700);
  }, reduceMotion() ? 2200 : 3400);
}

export function initSecrets() {
  let progress = 0;
  window.addEventListener('keydown', (event) => {
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    progress = key === KONAMI[progress] ? progress + 1 : key === KONAMI[0] ? 1 : 0;
    if (progress === KONAMI.length) {
      progress = 0;
      omen('BONFIRE LIT', 'Progress saved. Thanks for looking this closely.', { tone: 'bonfire' });
    }
  });

  const mark = document.getElementById('wordmark');
  let clicks = 0;
  let last = 0;
  mark?.addEventListener('click', () => {
    const now = performance.now();
    clicks = now - last < 600 ? clicks + 1 : 1;
    last = now;
    if (clicks >= 5) {
      clicks = 0;
      omen('YOU DIED', 'Returning to the last bonfire.', {
        tone: 'death',
        onDone: () => window.scrollTo({ top: 0, behavior: reduceMotion() ? 'auto' : 'smooth' }),
      });
      return;
    }
  });
}

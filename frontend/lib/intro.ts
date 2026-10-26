// Tiny signal so hero animations start when the intro loader lifts (or right away if it's skipped).
let done = false;
const subs = new Set<() => void>();
export function markIntroDone() { done = true; subs.forEach((f) => f()); subs.clear(); }
export function onIntroDone(f: () => void) {
  if (done) { f(); return () => {}; }
  subs.add(f);
  // Never wait forever.
  const t = setTimeout(() => { if (subs.delete(f)) f(); }, 3500);
  return () => { subs.delete(f); clearTimeout(t); };
}

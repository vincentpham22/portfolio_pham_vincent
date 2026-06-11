'use client';

import { useEffect } from 'react';

/**
 * useScrollReveal
 * ---------------
 * Mounts a SINGLE shared IntersectionObserver that watches every `.reveal`
 * element on the page and adds `.is-in` when it scrolls into view (revealing
 * it once, then unobserving). No scroll listeners — one observer for all
 * reveals, per the brief's performance contract.
 *
 * Because content is streamed/hydrated and sections mount after layout, this
 * also runs a MutationObserver to pick up any `.reveal` nodes added later.
 * Each <Reveal> component additionally self-observes as a safety net, but this
 * is the primary, cheapest path.
 *
 * Call ONCE near the root (via <ScrollRevealProvider/> in layout.tsx).
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Reduced motion: reveal everything immediately, skip observation.
    if (prefersReduced) {
      document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
        el.classList.add('is-in');
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            (entry.target as HTMLElement).style.willChange = 'auto';
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );

    const observeAll = () => {
      document
        .querySelectorAll<HTMLElement>('.reveal:not(.is-in)')
        .forEach((el) => io.observe(el));
    };

    observeAll();

    // Pick up reveal nodes added after initial mount (streamed sections, etc.).
    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}

/**
 * Thin client wrapper so a server component (layout.tsx) can mount the hook.
 * Renders nothing.
 */
export default function ScrollRevealProvider() {
  useScrollReveal();
  return null;
}

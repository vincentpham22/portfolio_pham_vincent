'use client';

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from 'react';

export type RevealDirection = 'up' | 'left' | 'right' | 'scale' | 'none';

type RevealProps = {
  children: ReactNode;
  /** Stagger step index (multiplied by --au-stagger = 90ms). Defaults to 0. */
  delay?: number;
  /** Entrance direction / style. Defaults to 'up'. */
  direction?: RevealDirection;
  /** When true, renders children with no reveal behaviour (already visible). */
  disabled?: boolean;
  /** The host element to render. Defaults to 'div'. e.g. 'span', 'section'. */
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
};

const VARIANT_CLASS: Record<RevealDirection, string> = {
  up: '',
  left: 'reveal--left',
  right: 'reveal--right',
  scale: 'reveal--scale',
  none: 'reveal--none',
};

/**
 * Reveal
 * ------
 * Scroll-reveal wrapper. Adds the `.reveal` class (hidden state defined in
 * globals.css) and lets a SINGLE shared IntersectionObserver (see
 * useScrollReveal, mounted once in layout.tsx) add `.is-in` when it scrolls
 * into view. Reveals once, then is unobserved.
 *
 * - `delay` sets `--reveal-delay` for staggered entrances (delay * 90ms).
 *   For grids/timelines pass `index % 6` (cards) or the item index (timelines).
 * - `direction` picks the entrance: 'up' (default), 'left'/'right' (converging
 *   timeline streams), 'scale' (hero photo focuses in), 'none' (fade only).
 * - `disabled` opts an element out entirely (renders plain, always visible).
 * - `as` controls the host tag so it won't break layout — default 'div'.
 *   When wrapping a single block this is transparent; when it must BE a MUI
 *   Grid/Timeline child, prefer passing the reveal class to that child via the
 *   exported `revealClass`/`revealStyle` helpers instead of nesting a div.
 *
 * Respects prefers-reduced-motion via the global media query (forces visible).
 * Also includes a belt-and-suspenders fallback: if the observer hasn't been
 * mounted (e.g. SSR hydration race), elements still get observed by their own
 * effect as a safety net and revealed.
 */
export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  disabled = false,
  as,
  className,
  style,
}: RevealProps) {
  const Tag = (as ?? 'div') as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (disabled) return;
    const el = ref.current;
    if (!el) return;
    // If the element is already revealed (shared observer fired first), bail.
    if (el.classList.contains('is-in')) return;

    // Honour reduced motion: reveal immediately, no observer.
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.classList.add('is-in');
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            // Free compositor memory once settled.
            (entry.target as HTMLElement).style.willChange = 'auto';
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [disabled]);

  if (disabled) {
    return (
      <Tag ref={ref} className={className} style={style}>
        {children}
      </Tag>
    );
  }

  const classes = ['reveal', VARIANT_CLASS[direction], className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      ref={ref}
      className={classes}
      style={{ ['--reveal-delay' as string]: delay, ...style }}
    >
      {children}
    </Tag>
  );
}

/**
 * Helpers for cases where you must NOT introduce a wrapper element (e.g. you
 * want a MUI <Grid> item or <Box> to itself be the revealed node). Spread these
 * onto the MUI component's `className` and `style`; the shared observer in
 * layout.tsx will pick it up just like a <Reveal>.
 *
 *   <Grid {...revealProps(index % 6, 'up')} size={{ xs: 12, md: 6 }}>…</Grid>
 */
export function revealClass(direction: RevealDirection = 'up'): string {
  return ['reveal', VARIANT_CLASS[direction]].filter(Boolean).join(' ');
}

export function revealStyle(delay = 0): CSSProperties {
  return { ['--reveal-delay' as string]: delay } as CSSProperties;
}

export function revealProps(delay = 0, direction: RevealDirection = 'up') {
  return { className: revealClass(direction), style: revealStyle(delay) };
}

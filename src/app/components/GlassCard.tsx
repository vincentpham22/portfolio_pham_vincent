import { Box, type BoxProps } from '@mui/material';

type GlassVariant = 'base' | 'raised' | 'nav' | 'pill';

type GlassCardProps = BoxProps & {
  /** Glass surface variant. Defaults to 'base'. */
  variant?: GlassVariant;
  /** Adds .glow-hover (lift + azure ignite on hover). */
  interactive?: boolean;
  /** Adds the one-shot sheen sweep on hover (project cards). Implies interactive. */
  sheen?: boolean;
};

const VARIANT_CLASS: Record<GlassVariant, string> = {
  base: 'glass',
  raised: 'glass glass--raised',
  nav: 'glass glass--nav',
  pill: 'glass glass--pill',
};

/**
 * GlassCard
 * ---------
 * The canonical frosted-glass surface as a component. Wraps MUI <Box> so it
 * accepts `sx`, `component`, refs, and all Box props. Server-safe (no hooks).
 *
 * - variant: 'base' (default) | 'raised' (project cards, height:100%) |
 *   'nav' (fixed bar) | 'pill' (round icon-button surface).
 * - interactive: adds `.glow-hover` (translateY(-6px), hairline → azure,
 *   azure bloom shadow).
 * - sheen: adds the one-shot diagonal azure sheen sweep (project cards);
 *   implies interactive.
 *
 * Usage:
 *   <GlassCard variant="raised" interactive sheen sx={{ p: 3 }}>…</GlassCard>
 *   <GlassCard sx={{ p: 2 }}>…</GlassCard>
 *
 * Note: Projects use MUI <Card> (already glass-styled via the theme override),
 * so prefer this for the timeline content boxes and any ad-hoc glass panel.
 */
export default function GlassCard({
  variant = 'base',
  interactive = false,
  sheen = false,
  className,
  children,
  ...rest
}: GlassCardProps) {
  const useGlow = interactive || sheen;
  const classes = [
    VARIANT_CLASS[variant],
    useGlow ? 'glow-hover' : null,
    sheen ? 'glow-hover--sheen' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Box className={classes} {...rest}>
      {children}
    </Box>
  );
}

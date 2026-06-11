'use client';

import { Box, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import Reveal from './Reveal';

type SectionTitleProps = {
  /** The title text, e.g. <SectionTitle>Projets</SectionTitle>. */
  children: ReactNode;
  /** Optional azure eyebrow micro-label rendered above the title. */
  eyebrow?: string;
  /** Optional subtitle rendered below the rule (capped at 720px). */
  subtitle?: ReactNode;
  /** Optional id (rarely needed — section anchors usually live on the Container). */
  id?: string;
  /** Text alignment. Defaults to 'center' to match the existing layout. */
  align?: 'center' | 'left';
};

/**
 * SectionTitle
 * ------------
 * Drop-in replacement for the repeated "<Typography variant='h3'> + white
 * divider Box" pattern (Projects / Formations / Experiences). Composite of:
 *   eyebrow (optional, azure mono micro-label)
 *   → gradient title (.au-title-gradient)
 *   → glowing accent underline (.au-title-rule) that GROWS on scroll-reveal
 *   → optional subtitle (capped 720px)
 *
 * The whole header is wrapped in a <Reveal> so the rule animates from 0 → 56px
 * when it enters the viewport. Renders an <h2> heading by default for correct
 * document hierarchy (page hero owns the single <h1>).
 *
 * Usage:
 *   <SectionTitle>Projets</SectionTitle>
 *   <SectionTitle eyebrow="01 — TRAVAUX" subtitle="…">Projets</SectionTitle>
 */
export default function SectionTitle({
  children,
  eyebrow,
  subtitle,
  id,
  align = 'center',
}: SectionTitleProps) {
  const alignItems = align === 'center' ? 'center' : 'flex-start';
  const textAlign = align === 'center' ? 'center' : 'left';

  return (
    <Reveal>
      <Box
        id={id}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems,
          textAlign,
          mb: { xs: 5, md: 8 },
        }}
      >
        {eyebrow && (
          <Box
            component="span"
            className="au-eyebrow"
            sx={{ mb: 1.5, display: 'block' }}
          >
            {eyebrow}
          </Box>
        )}

        <Typography
          variant="h3"
          component="h2"
          className="au-title-gradient"
          sx={{ m: 0 }}
        >
          {children}
        </Typography>

        {/* Glowing underline — grows to 56px when the Reveal gains .is-in. */}
        <Box className="au-title-rule" sx={{ mt: 2 }} />

        {subtitle && (
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              maxWidth: 720,
              color: 'var(--au-text-dim)',
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </Reveal>
  );
}

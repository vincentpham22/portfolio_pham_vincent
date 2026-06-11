import { Typography, type TypographyProps } from '@mui/material';

type GradientTextProps = TypographyProps & {
  component?: React.ElementType;
};

/**
 * GradientText
 * ------------
 * Applies the canonical Aurora title gradient (.au-title-gradient:
 * light → blue → azure, lit from the top-left) to any Typography. Use for the
 * hero <h1> name and the nav brand. Server-safe (no hooks).
 *
 * Usage:
 *   <GradientText variant="h1" component="h1">Vincent Pham</GradientText>
 *   <GradientText variant="h6" component="div">Vincent Pham</GradientText>
 *
 * Forwards every TypographyProps (variant, component, sx, etc.). Any extra
 * className is merged after .au-title-gradient.
 */
export default function GradientText({
  className,
  children,
  ...rest
}: GradientTextProps) {
  const merged = ['au-title-gradient', className].filter(Boolean).join(' ');
  return (
    <Typography className={merged} {...rest}>
      {children}
    </Typography>
  );
}

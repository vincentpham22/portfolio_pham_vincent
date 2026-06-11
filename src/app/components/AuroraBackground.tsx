/**
 * AuroraBackground
 * ----------------
 * The single fixed, full-viewport atmosphere layer that sits behind all
 * content. Renders the radial base wash + 3 drifting blurred halos, a grain
 * overlay (kills banding on near-black) and an edge vignette.
 *
 * Pure CSS — no hooks/state/effects — so it stays a server component and adds
 * zero JS. All animation/blur/colour lives in globals.css under .aurora-* and
 * .au-halo--*. position:fixed, inset:0, z-index:-1, pointer-events:none, so it
 * never scrolls and never intercepts clicks. GPU-friendly: halos animate only
 * transform (translate3d + scale).
 *
 * Mount ONCE, just inside <body> before {children} (see layout.tsx).
 * With it present, every section background should be transparent.
 */
export default function AuroraBackground() {
  return (
    <>
      <div className="aurora-field" aria-hidden>
        <div className="au-halo au-halo--a" />
        <div className="au-halo au-halo--b" />
        <div className="au-halo au-halo--c" />
      </div>
      <div className="aurora-grain" aria-hidden />
      <div className="aurora-vignette" aria-hidden />
    </>
  );
}

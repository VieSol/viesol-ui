# LedgerBase Liquid Glass extraction audit

## Canonical source

The LedgerBase landing page established the reusable material through its
four-orb fixed backdrop, translucent sticky header/footer, feature and code
cards, elevated demo panel, request-access panel, pill controls, and shared
focus/pressed/disabled states. Those visuals—not a third-party design
system—are the reference for this package.

## Normalized values

The source repeated white surfaces at roughly 30–70% opacity, 10–24px blur,
135–180% saturation, 12–28px radii, white inset edge highlights, neutral or
green depth shadows, and 150–250ms transitions. They are now named `--vui-*`
runtime tokens rather than component-local magic values.

## Preserved abstractions

LedgerBase keeps its page templates, content hierarchy, API examples, ticker
demo, request-access behavior, routing, analytics, and motion coordinators.
The library preserves native DOM semantics and uses CSS for visual interaction,
so components remain SSR-safe and do not become client components by default.

## Boundary

`src/index.ts` is the only supported component entrypoint and
`@viesol/liquid-glass/styles.css` is the style entrypoint. Internals contain no
LedgerBase imports or business terms. Consumers compose application-specific
features above the surfaces, controls, layout, and feedback primitives.

## Deferred

Modal, popover, menu, table, and chart primitives were not present as reusable
landing-page needs and remain deferred. Publishing automation, a registry, and
Figma integration are separate milestones.

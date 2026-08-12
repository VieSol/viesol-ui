# VieSol UI

Reusable React interface foundations maintained by VieSol. The first package is
`@viesol/liquid-glass`, extracted from the approved LedgerBase landing-page
visual language.

## Local development

```bash
pnpm install
pnpm dev
```

The demo is a developer reference for tokens, component variants, interaction
states, and composition patterns.

## Package use

```tsx
import { GlassButton, GlassCard } from "@viesol/liquid-glass";
import "@viesol/liquid-glass/styles.css";

export function Example() {
  return (
    <GlassCard variant="elevated" padding="lg">
      <h3>Reusable by composition</h3>
      <GlassButton variant="primary">Continue</GlassButton>
    </GlassCard>
  );
}
```

Consumers provide React 19 or later. The stylesheet defines namespaced
`--vui-*` custom properties and usable translucent fallbacks before applying
`backdrop-filter`. Set `data-vui-theme="dark"` on an ancestor to opt into the
included dark token set.

## Extending the library

Before adding a component, decide whether the need is a new visual primitive,
a deliberate variant of an existing primitive, or an application-specific
composition. Keep business data, routing, analytics, and product copy in the
application. Prefer `className`, children, and small composed parts over
mega-components with many flags.

To publish this package independently later, add release automation and package
provenance; the source, peer dependency, exports, generated declarations, and
CSS boundary are already standalone.

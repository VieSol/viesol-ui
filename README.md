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

## Installation

```bash
pnpm add @viesol/liquid-glass@0.1.0
```

Import the package stylesheet once at the application root. It contains every
token and component style required at runtime; consumers do not need CSS from
LedgerBase or this source repository.

```tsx
import "@viesol/liquid-glass/styles.css";
```

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

## Versioning

The package uses semantic versioning. Releases remain on `0.x` while the public
component API is evolving, so applications should pin a deliberate version and
review release changes before upgrading.

## Extending the library

Before adding a component, decide whether the need is a new visual primitive,
a deliberate variant of an existing primitive, or an application-specific
composition. Keep business data, routing, analytics, and product copy in the
application. Prefer `className`, children, and small composed parts over
mega-components with many flags.

The preferred extension path is:

```text
primitive → deliberate variant → application composition
```

Do not copy component CSS into an application. Add broadly reusable visual
behavior to this package and keep product-specific composition with the
consumer.

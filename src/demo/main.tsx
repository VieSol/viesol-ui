import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  CodePanel,
  ContentContainer,
  FeatureCard,
  FloatingPanel,
  GlassBackdrop,
  GlassBadge,
  GlassButton,
  GlassButtonLink,
  GlassCallout,
  GlassCard,
  GlassDivider,
  GlassIconButton,
  GlassInput,
  GlassNavigation,
  GlassPanel,
  GlassSelect,
  GlassSurface,
  GlassTextarea,
  GlassToolbar,
  MetricDisplay,
  StatusIndicator,
} from "../index";
import "./demo.css";

const usage = `import { GlassButton, GlassCard } from "@viesol/liquid-glass";
import "@viesol/liquid-glass/styles.css";

export function Example() {
  return (
    <GlassCard variant="elevated" padding="lg">
      <h3>API access</h3>
      <GlassButton variant="primary">Continue</GlassButton>
    </GlassCard>
  );
}`;

function Demo() {
  const [dark, setDark] = useState(false);
  return (
    <div className="demo" data-vui-theme={dark ? "dark" : "light"}>
      <GlassBackdrop />
      <ContentContainer>
        <GlassNavigation aria-label="Demo navigation">
          <strong>VieSol / Liquid Glass</strong>
          <GlassToolbar aria-label="Theme controls">
            <GlassButton size="sm" variant="subtle" onClick={() => setDark((value) => !value)}>
              {dark ? "Use light theme" : "Use dark theme"}
            </GlassButton>
          </GlassToolbar>
        </GlassNavigation>

        <main>
          <section className="demo-hero">
            <GlassBadge tone="accent">Reusable React foundation</GlassBadge>
            <h1>LedgerBase Liquid Glass, normalized for other products.</h1>
            <p>Tokens and composable UI primitives carry the material. Business data, routing, and product copy stay in each application.</p>
            <CodePanel label="Import from the public package boundary" code={usage} />
          </section>

          <section>
            <h2>Design tokens</h2>
            <p className="demo-lead">Runtime CSS properties cover surface opacity, blur, saturation, borders, highlights, depth, geometry, spacing, typography, motion, status, and focus.</p>
            <div className="token-grid">
              {["background", "surface", "accent", "foreground"].map((token) => <GlassCard key={token} padding="sm"><span className={`token-swatch token-swatch--${token}`} /><code>--vui-color-{token}</code></GlassCard>)}
              <GlassCard padding="sm"><strong>22px</strong><code>--vui-radius-card</code></GlassCard>
              <GlassCard padding="sm"><strong>16px / 180%</strong><code>blur / saturation</code></GlassCard>
              <GlassCard padding="sm"><strong>0 12px 36px</strong><code>--vui-shadow-md</code></GlassCard>
              <GlassCard padding="sm"><strong>220ms</strong><code>--vui-motion-normal</code></GlassCard>
            </div>
          </section>

          <GlassDivider />

          <section>
            <h2>Surfaces and controls</h2>
            <div className="surface-grid">
              <GlassSurface variant="subtle">Subtle surface</GlassSurface>
              <GlassCard>Default card</GlassCard>
              <GlassPanel variant="elevated">Elevated panel</GlassPanel>
              <FloatingPanel>Floating panel</FloatingPanel>
              <GlassSurface variant="solid">Solid fallback surface</GlassSurface>
            </div>
            <div className="demo-row">
              <GlassButton>Secondary</GlassButton>
              <GlassButton variant="primary">Primary</GlassButton>
              <GlassButton variant="subtle" size="sm">Small subtle</GlassButton>
              <GlassButton variant="secondary" size="lg">Large secondary</GlassButton>
              <GlassButton variant="danger">Danger</GlassButton>
              <GlassButton disabled>Disabled</GlassButton>
              <GlassIconButton aria-label="Add item">+</GlassIconButton>
              <GlassButtonLink href="#form-composition" variant="primary">Button link</GlassButtonLink>
            </div>
            <div className="demo-row">
              <GlassBadge>Neutral</GlassBadge><GlassBadge tone="accent">Accent</GlassBadge><GlassBadge tone="warning">Warning</GlassBadge><GlassBadge tone="danger">Danger</GlassBadge>
              <StatusIndicator>Available</StatusIndicator>
            </div>
          </section>

          <section id="form-composition">
            <h2>Form composition</h2>
            <GlassPanel className="demo-form" variant="elevated">
              <label htmlFor="demo-email">Email</label><GlassInput id="demo-email" type="email" placeholder="you@company.com" />
              <label htmlFor="demo-role">Role</label><GlassSelect id="demo-role" defaultValue="developer"><option value="developer">Developer</option><option value="designer">Designer</option></GlassSelect>
              <label htmlFor="demo-notes">Notes</label><GlassTextarea id="demo-notes" placeholder="What are you building?" />
              <GlassButton type="submit" variant="primary">Submit</GlassButton>
            </GlassPanel>
          </section>

          <section>
            <h2>Data and feedback</h2>
            <div className="metric-grid">
              <GlassCard><MetricDisplay label="Requests" value="18.4k" detail="Last 30 days" /></GlassCard>
              <GlassCard><MetricDisplay label="Coverage" value="94%" detail="Explicitly reported" /></GlassCard>
              <FeatureCard title="Source-traced" description="Compose domain content on a reusable surface." icon="↗" />
            </div>
            <GlassCallout title="Composition boundary" tone="info">This callout knows how to present feedback, not what LedgerBase data means.</GlassCallout>
          </section>
        </main>
      </ContentContainer>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<StrictMode><Demo /></StrictMode>);

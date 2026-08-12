import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "../lib/classes";
import { GlassPanel, type GlassSurfaceProps } from "./surfaces";

export interface CodePanelProps extends GlassSurfaceProps {
  label?: ReactNode;
  code: string;
}

export const CodePanel = forwardRef<HTMLElement, CodePanelProps>(
  ({ label, code, className, ...props }, ref) => (
    <GlassPanel ref={ref} className={cx("vui-code-panel", className)} padding="none" {...props}>
      {label ? <div className="vui-code-panel__bar">{label}</div> : null}
      <pre><code>{code}</code></pre>
    </GlassPanel>
  ),
);
CodePanel.displayName = "CodePanel";

export interface GlassCalloutProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: ReactNode;
  tone?: "info" | "success" | "warning" | "danger";
}

export const GlassCallout = forwardRef<HTMLElement, GlassCalloutProps>(
  ({ title, tone = "info", className, children, ...props }, ref) => (
    <aside ref={ref} className={cx("vui-callout", className)} data-vui-tone={tone} {...props}>
      {title ? <strong>{title}</strong> : null}
      <div>{children}</div>
    </aside>
  ),
);
GlassCallout.displayName = "GlassCallout";

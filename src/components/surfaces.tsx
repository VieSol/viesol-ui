import { forwardRef, type HTMLAttributes } from "react";
import { cx } from "../lib/classes";

export type GlassSurfaceVariant = "subtle" | "default" | "elevated" | "solid";
export type GlassPadding = "none" | "sm" | "md" | "lg";

export interface GlassSurfaceProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "article" | "section" | "aside";
  variant?: GlassSurfaceVariant;
  padding?: GlassPadding;
}

export const GlassSurface = forwardRef<HTMLElement, GlassSurfaceProps>(
  ({ as: Component = "div", variant = "default", padding = "md", className, ...props }, ref) => (
    <Component
      ref={ref as never}
      className={cx("vui-surface", className)}
      data-vui-surface={variant}
      data-vui-padding={padding}
      {...props}
    />
  ),
);
GlassSurface.displayName = "GlassSurface";

export const GlassPanel = forwardRef<HTMLElement, GlassSurfaceProps>(
  ({ className, ...props }, ref) => (
    <GlassSurface ref={ref} className={cx("vui-panel", className)} {...props} />
  ),
);
GlassPanel.displayName = "GlassPanel";

export const GlassCard = forwardRef<HTMLElement, GlassSurfaceProps>(
  ({ className, ...props }, ref) => (
    <GlassSurface ref={ref} className={cx("vui-card", className)} {...props} />
  ),
);
GlassCard.displayName = "GlassCard";

export const FloatingPanel = forwardRef<HTMLElement, GlassSurfaceProps>(
  ({ variant = "elevated", className, ...props }, ref) => (
    <GlassSurface
      ref={ref}
      variant={variant}
      className={cx("vui-floating-panel", className)}
      {...props}
    />
  ),
);
FloatingPanel.displayName = "FloatingPanel";

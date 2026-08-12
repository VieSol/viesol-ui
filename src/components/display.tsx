import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "../lib/classes";
import { GlassCard, type GlassSurfaceProps } from "./surfaces";

export type GlassTone = "neutral" | "accent" | "success" | "warning" | "danger";

export interface GlassBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: GlassTone;
}

export const GlassBadge = forwardRef<HTMLSpanElement, GlassBadgeProps>(
  ({ tone = "neutral", className, ...props }, ref) => (
    <span ref={ref} className={cx("vui-badge", className)} data-vui-tone={tone} {...props} />
  ),
);
GlassBadge.displayName = "GlassBadge";

export const StatusIndicator = forwardRef<HTMLSpanElement, GlassBadgeProps>(
  ({ tone = "success", className, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cx("vui-status", className)}
      data-vui-tone={tone}
      {...props}
    >
      <span className="vui-status__dot" aria-hidden="true" />
      {children}
    </span>
  ),
);
StatusIndicator.displayName = "StatusIndicator";

export interface MetricDisplayProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  value: ReactNode;
  detail?: ReactNode;
}

export const MetricDisplay = forwardRef<HTMLDivElement, MetricDisplayProps>(
  ({ label, value, detail, className, ...props }, ref) => (
    <div ref={ref} className={cx("vui-metric", className)} {...props}>
      <span className="vui-metric__label">{label}</span>
      <strong className="vui-metric__value">{value}</strong>
      {detail ? <span className="vui-metric__detail">{detail}</span> : null}
    </div>
  ),
);
MetricDisplay.displayName = "MetricDisplay";

export interface FeatureCardProps extends Omit<GlassSurfaceProps, "title"> {
  icon?: ReactNode;
  title: ReactNode;
  description: ReactNode;
}

export const FeatureCard = forwardRef<HTMLElement, FeatureCardProps>(
  ({ icon, title, description, className, ...props }, ref) => (
    <GlassCard ref={ref} as="article" className={cx("vui-feature-card", className)} {...props}>
      {icon ? <span className="vui-feature-card__icon">{icon}</span> : null}
      <h3>{title}</h3>
      <p>{description}</p>
    </GlassCard>
  ),
);
FeatureCard.displayName = "FeatureCard";

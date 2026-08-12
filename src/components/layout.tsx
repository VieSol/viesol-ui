import { forwardRef, type HTMLAttributes } from "react";
import { cx } from "../lib/classes";

export const GlassDivider = forwardRef<HTMLHRElement, HTMLAttributes<HTMLHRElement>>(
  ({ className, ...props }, ref) => (
    <hr ref={ref} className={cx("vui-divider", className)} {...props} />
  ),
);
GlassDivider.displayName = "GlassDivider";

export const ContentContainer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cx("vui-container", className)} {...props} />
  ),
);
ContentContainer.displayName = "ContentContainer";

export const GlassToolbar = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cx("vui-toolbar", className)} role="toolbar" {...props} />
  ),
);
GlassToolbar.displayName = "GlassToolbar";

export const GlassNavigation = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <nav ref={ref} className={cx("vui-navigation", className)} {...props} />
  ),
);
GlassNavigation.displayName = "GlassNavigation";

export const GlassBackdrop = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cx("vui-backdrop", className)} aria-hidden="true" {...props}>
      <span className="vui-backdrop__orb vui-backdrop__orb--green" />
      <span className="vui-backdrop__orb vui-backdrop__orb--light" />
      <span className="vui-backdrop__orb vui-backdrop__orb--amber" />
      <span className="vui-backdrop__orb vui-backdrop__orb--light-bottom" />
    </div>
  ),
);
GlassBackdrop.displayName = "GlassBackdrop";

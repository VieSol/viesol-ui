import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type InputHTMLAttributes,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import { cx } from "../lib/classes";

export type GlassControlVariant = "primary" | "secondary" | "subtle" | "danger";
export type GlassControlSize = "sm" | "md" | "lg";

export interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: GlassControlVariant;
  size?: GlassControlSize;
}

export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ variant = "secondary", size = "md", type = "button", className, ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cx("vui-button", className)}
      data-vui-variant={variant}
      data-vui-size={size}
      {...props}
    />
  ),
);
GlassButton.displayName = "GlassButton";

export interface GlassButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: GlassControlVariant;
  size?: GlassControlSize;
}

export const GlassButtonLink = forwardRef<HTMLAnchorElement, GlassButtonLinkProps>(
  ({ variant = "secondary", size = "md", className, ...props }, ref) => (
    <a
      ref={ref}
      className={cx("vui-button", className)}
      data-vui-variant={variant}
      data-vui-size={size}
      {...props}
    />
  ),
);
GlassButtonLink.displayName = "GlassButtonLink";

export const GlassIconButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, "aria-label": ariaLabel, ...props }, ref) => (
    <GlassButton
      ref={ref}
      className={cx("vui-icon-button", className)}
      aria-label={ariaLabel}
      {...props}
    />
  ),
);
GlassIconButton.displayName = "GlassIconButton";

export const GlassInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cx("vui-field", className)} {...props} />
  ),
);
GlassInput.displayName = "GlassInput";

export const GlassTextarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cx("vui-field", "vui-textarea", className)} {...props} />
));
GlassTextarea.displayName = "GlassTextarea";

export const GlassSelect = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, ...props }, ref) => (
    <select ref={ref} className={cx("vui-field", "vui-select", className)} {...props} />
  ),
);
GlassSelect.displayName = "GlassSelect";

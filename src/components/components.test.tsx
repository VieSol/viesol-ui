import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { GlassButton, GlassButtonLink, GlassInput, GlassNavigation, GlassSurface, StatusIndicator } from "../index";

describe("Liquid Glass public components", () => {
  it("forwards DOM props, extension classes, variants, and refs", () => {
    const ref = createRef<HTMLElement>();
    render(<GlassSurface ref={ref} variant="elevated" padding="lg" className="consumer-class" data-testid="surface" />);
    const surface = screen.getByTestId("surface");
    expect(surface).toHaveClass("vui-surface", "consumer-class");
    expect(surface).toHaveAttribute("data-vui-surface", "elevated");
    expect(surface).toHaveAttribute("data-vui-padding", "lg");
    expect(ref.current).toBe(surface);
  });

  it("preserves native interactive semantics and disabled state", () => {
    render(<><GlassButton disabled>Unavailable</GlassButton><GlassButtonLink href="#usage">Usage</GlassButtonLink><GlassInput aria-label="Email" required /></>);
    expect(screen.getByRole("button", { name: "Unavailable" })).toBeDisabled();
    expect(screen.getByRole("link", { name: "Usage" })).toHaveAttribute("href", "#usage");
    expect(screen.getByRole("textbox", { name: "Email" })).toBeRequired();
  });

  it("renders semantic navigation and status content", () => {
    render(<GlassNavigation aria-label="Primary"><StatusIndicator>Available</StatusIndicator></GlassNavigation>);
    expect(screen.getByRole("navigation", { name: "Primary" })).toBeInTheDocument();
    expect(screen.getByText("Available")).toBeInTheDocument();
  });
});
